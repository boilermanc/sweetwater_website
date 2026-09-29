import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUp, Bot, Loader2 } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };
type Stage = 'project' | 'name' | 'email' | 'recap' | 'mailing_list' | 'chat';
type Contact = { name: string; email: string };
type Consent = { recapEmail: boolean | null; mailingList: boolean | null };
type Request = { messages: Message[]; contact: Contact; consent: Consent; event: 'lead_captured' | 'preferences_complete' | 'chat' };
const CHAT_URL = 'https://n8n.sproutify.app/webhook/sage-card-chat';
const OPENER = 'Hi, I’m Sage, Sweetwater Technology’s AI assistant. What ag tech project do you have in mind?';
const prompts: Record<Stage, string> = {
  project: 'Tell Sage about your project', name: 'Your name', email: 'Your email address',
  recap: 'Email recap preference', mailing_list: 'Mailing list preference', chat: 'Message Sage',
};

export function SageChat() {
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', content: OPENER }]);
  const [stage, setStage] = useState<Stage>('project');
  const [contact, setContact] = useState<Contact>({ name: '', email: '' });
  const [consent, setConsent] = useState<Consent>({ recapEmail: null, mailingList: null });
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [pending, setPending] = useState<Request | null>(null);
  const [error, setError] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const session = useRef('');
  const busy = useRef(false);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => {
    // Scroll only the transcript, never the visitor's page position.
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'instant' });
  }, [messages, sending, error]);

  const request = async (payload: Request) => {
    if (busy.current) return;
    busy.current = true;
    setSending(true);
    setError('');
    setPending(payload);
    const abort = new AbortController();
    controller.current = abort;
    const timeout = window.setTimeout(() => abort.abort(), 30000);
    try {
      if (!session.current) {
        const key = 'sweetwater-sage-urban-farms-session';
        try {
          session.current = sessionStorage.getItem(key) || crypto.randomUUID();
          sessionStorage.setItem(key, session.current);
        } catch { session.current = crypto.randomUUID(); }
      }
      const response = await fetch(CHAT_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: abort.signal,
        body: JSON.stringify({ ...payload, sessionId: session.current, source: 'sweetwater-urban-farms',
          batch: null, segment: 'agtech', interest: 'custom-app',
          testMode: new URLSearchParams(window.location.search).get('test') === '1',
          sendRecap: payload.event === 'preferences_complete' && payload.consent.recapEmail === true,
          sendWelcome: payload.event === 'preferences_complete' && payload.consent.mailingList === true,
        }),
      });
      if (!response.ok) throw new Error('Request failed');
      const data = await response.json();
      if (typeof data.reply !== 'string' || !data.reply.trim()) throw new Error('Missing reply');
      if (payload.event === 'lead_captured') {
        setMessages([...payload.messages, { role: 'assistant', content: 'Thanks — your project and contact details have been received. Would you like an email recap of this conversation?' }]);
        setStage('recap');
      } else if (payload.event === 'preferences_complete') {
        setMessages([...payload.messages, { role: 'assistant', content: 'Thanks — your email preferences have been received. What else would you like to share about your project?' }]);
        setStage('chat');
      } else {
        setMessages([...payload.messages, { role: 'assistant', content: data.reply }]);
      }
      setPending(null);
    } catch {
      setError('Sage couldn’t confirm that request. Retry, or email Clint directly.');
    } finally {
      window.clearTimeout(timeout);
      busy.current = false;
      setSending(false);
    }
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const clean = input.trim();
    if (!clean || busy.current || pending) return;
    const next: Message[] = [...messages, { role: 'user', content: clean }];
    setInput('');
    if (stage === 'project') {
      setMessages([...next, { role: 'assistant', content: 'Thanks for sharing. What should I call you?' }]);
      setStage('name');
    } else if (stage === 'name') {
      setContact({ ...contact, name: clean });
      setMessages([...next, { role: 'assistant', content: `Nice to meet you, ${clean.split(/\s+/)[0]}. What’s the best email for Sweetwater Technology to follow up about your project?` }]);
      setStage('email');
    } else {
      const nextContact = stage === 'email' ? { ...contact, email: clean } : contact;
      setContact(nextContact);
      setMessages(next);
      void request({ messages: next, contact: nextContact, consent, event: stage === 'email' ? 'lead_captured' : 'chat' });
    }
  };

  const choose = (yes: boolean) => {
    if (busy.current || pending) return;
    const recap = stage === 'recap';
    const nextConsent = { ...consent, [recap ? 'recapEmail' : 'mailingList']: yes };
    const next: Message[] = [...messages, { role: 'user', content: recap
      ? (yes ? 'Yes, I’d like an email recap.' : 'No email recap, thanks.')
      : (yes ? 'Yes, I’d like Sweetwater Technology updates.' : 'No updates, thanks.') }];
    setConsent(nextConsent);
    if (recap) {
      setMessages([...next, { role: 'assistant', content: 'Would you also like occasional Sweetwater Technology updates and new posts? You can unsubscribe anytime.' }]);
      setStage('mailing_list');
    } else {
      setMessages(next);
      void request({ messages: next, contact, consent: nextConsent, event: 'preferences_complete' });
    }
  };

  return (
    <div className="min-w-0">
      <div className="overflow-hidden rounded-[1.75rem] border border-[#34466e] bg-[#101a30] shadow-2xl shadow-black/20">
        <div className="flex items-center gap-3 border-b border-[#34466e] px-6 py-5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2e5ce6]"><Bot size={23} aria-hidden="true" /></span>
          <div><h3 className="font-bold text-white">Talk with Sage</h3><p className="mt-1 text-xs text-[#aebfe8]">Sweetwater Technology’s AI assistant</p></div>
        </div>
        <div ref={listRef} role="log" aria-label="Conversation with Sage" aria-live="polite" aria-relevant="additions text" tabIndex={0} className="h-80 space-y-4 overflow-y-auto overscroll-contain p-5 sm:h-96 sm:p-6">
          {messages.map((message, i) => <div key={i} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}><p className={`max-w-[92%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'bg-[#2e5ce6] text-white' : 'bg-[#1c2a46] text-[#e1e9fc]'}`}><span className="sr-only">{message.role === 'user' ? 'You' : 'Sage'}: </span>{message.content}</p></div>)}
          {sending && <p role="status" className="flex items-center gap-2 text-sm text-[#aebfe8]"><Loader2 className="animate-spin motion-reduce:animate-none" size={16} aria-hidden="true" />Sage is working…</p>}
        </div>
        <div className="border-t border-[#34466e] p-5 sm:p-6">
          {error && <div role="alert" className="mb-4 text-sm leading-6 text-[#ffccba]"><p>{error}</p><button type="button" disabled={sending} onClick={() => pending && void request(pending)} className="mt-2 rounded-lg border border-[#526a9d] px-4 py-2 font-bold text-white disabled:opacity-50">Retry request</button></div>}
          {(stage === 'recap' || stage === 'mailing_list') ? <div role="group" aria-label={prompts[stage]} className="flex flex-wrap gap-3">
            <button type="button" disabled={sending || !!pending} onClick={() => choose(true)} className="sage-choice bg-[#2e5ce6] hover:bg-[#3c69e9]">{stage === 'recap' ? 'Yes, email a recap' : 'Yes, send updates'}</button>
            <button type="button" disabled={sending || !!pending} onClick={() => choose(false)} className="sage-choice border border-[#526a9d] hover:bg-[#1c2a46]">No thanks</button>
          </div> : <form onSubmit={submit}>
            <label htmlFor="sage-message" className="mb-2 block text-xs font-semibold text-[#aebfe8]">{prompts[stage]}</label>
            <div className="flex items-center gap-2 rounded-xl border border-[#526a9d] bg-[#0c1322] p-2 focus-within:border-[#91b0ff]">
              <input id="sage-message" type={stage === 'email' ? 'email' : 'text'} autoComplete={stage === 'email' ? 'email' : stage === 'name' ? 'name' : 'off'} required maxLength={stage === 'email' ? 254 : stage === 'name' ? 120 : 4000} value={input} onChange={event => setInput(event.target.value)} disabled={sending || !!pending} placeholder={stage === 'project' ? 'I’m working on…' : prompts[stage]} className="min-w-0 flex-1 bg-transparent px-2 py-2 text-base text-white placeholder:text-[#9cafda] disabled:opacity-60" />
              <button type="submit" aria-label="Send to Sage" disabled={!input.trim() || sending || !!pending} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#2e5ce6] hover:bg-[#3c69e9] disabled:opacity-40"><ArrowUp size={20} aria-hidden="true" /></button>
            </div>
          </form>}
          <p className="mt-4 text-xs leading-5 text-[#aebfe8]">Prefer email? <a href="mailto:clint@sweetwater.technology" className="underline underline-offset-4">Contact Clint directly</a>.</p>
        </div>
      </div>
      <p className="mt-4 px-2 text-xs leading-5 text-[#aebfe8]">Your project, messages, and contact details are shared with Sweetwater Technology to respond to your inquiry. Email recaps and updates are optional. <a href="/privacy" className="text-white underline underline-offset-4">Privacy policy</a></p>
    </div>
  );
}

