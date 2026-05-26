import { motion } from "motion/react";
import {
  Leaf,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ChevronDown,
  Mail,
  Clock,
  Plus,
  Minus
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

const FAQS = [
  { category: "Getting Started", question: "How does aeroponic growing work?", answer: "Aeroponics grows plants in a fine mist of nutrient-rich water — no soil. Plants get more oxygen at the roots, grow up to 3× faster, and use 95% less water than traditional methods." },
  { category: "Tower Garden", question: "What's included with a Tower Garden purchase?", answer: "Each Tower Garden comes with the growing system, water pump, timer, starter nutrients, and rockwool growing medium. We also offer optional LED grow light kits and seedling packages to get you started." },
  { category: "Seedlings", question: "Can I buy seedlings without a system?", answer: "Yes — our seedling program is open to anyone, whether you have a Tower Garden, a traditional garden, or are just experimenting. Seedlings are nurtured in our greenhouse and delivered ready to plant." },
  { category: "Workshops", question: "When and where are workshops held?", answer: "Our Spring 2026 series runs at the Sweetwater greenhouse in Alpharetta, GA. Workshops typically last 90 minutes and cover everything from setup to harvest. Reserve your spot through the form on the right." },
  { category: "Consulting", question: "Do you work with restaurants and schools?", answer: "Yes. We've partnered with venues like Braves Stadium and international Tower Farms like Green Life Farms Jamaica, plus a number of schools for STEM programs. Reach out and we'll set up a consultation." }
];

function PrivacyContent() {
  return (
    <article className="pt-40 pb-32 px-8 max-w-3xl mx-auto">
      <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-6 block">Legal</span>
      <h1 className="text-5xl md:text-6xl font-serif mb-4 leading-none">Privacy <span className="italic text-growth">Policy.</span></h1>
      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-16">Last updated: May 26, 2026</p>

      <div className="space-y-12 font-body text-base leading-relaxed text-ink/80">
        <p>Sweetwater Urban Farms ("we," "us," "our") operates sweetwaterurbanfarms.com (the "Site"). This page explains what information we collect and how we use it.</p>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Information we collect</h2>
          <p>When you fill out the contact form on the Site, we collect your name, email address, the inquiry type you selected, and the message you wrote. We collect this information so we can respond to you.</p>
          <p className="mt-4">We do not currently use cookies, tracking pixels, or third-party analytics. If we add analytics in the future, this policy will be updated.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">How we use your information</h2>
          <p>Information you submit through the contact form is used only to respond to your inquiry. We do not sell, rent, or share it with third parties for marketing purposes.</p>
          <p className="mt-4">Form submissions are processed through our workflow automation tool (n8n, self-hosted) and delivered to our team via email (Resend) and Slack. These services receive your message in transit but do not use your information for their own purposes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Your rights</h2>
          <p>You can request that we delete information you've submitted by emailing us at <a href="mailto:info@sweetwaterurbanfarms.com" className="text-accent underline underline-offset-4 decoration-accent/30">info@sweetwaterurbanfarms.com</a>. We'll respond within a reasonable timeframe.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Cloudflare and hosting</h2>
          <p>Our website is delivered through Cloudflare, a content delivery network. Cloudflare may automatically log basic technical information about your visit (IP address, browser type, page requested) for security and performance purposes. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 decoration-accent/30">Cloudflare's privacy policy</a> for details.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Changes to this policy</h2>
          <p>If we make material changes, we'll update the "Last updated" date at the top of this page.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Contact</h2>
          <p>Questions about this policy? Email <a href="mailto:info@sweetwaterurbanfarms.com" className="text-accent underline underline-offset-4 decoration-accent/30">info@sweetwaterurbanfarms.com</a>.</p>
        </section>
      </div>
    </article>
  );
}

function TermsContent() {
  return (
    <article className="pt-40 pb-32 px-8 max-w-3xl mx-auto">
      <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-6 block">Legal</span>
      <h1 className="text-5xl md:text-6xl font-serif mb-4 leading-none">Terms of <span className="italic text-growth">Service.</span></h1>
      <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-16">Last updated: May 26, 2026</p>

      <div className="space-y-12 font-body text-base leading-relaxed text-ink/80">
        <p>By using sweetwaterurbanfarms.com (the "Site"), you agree to these terms. If you don't agree, please don't use the Site.</p>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">About us</h2>
          <p>Sweetwater Urban Farms is a consulting and aeroponic services business based in Alpharetta, Georgia. The Site is an information resource and contact channel — we do not sell products or services directly through it. Project engagements begin via consultation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Use of the Site</h2>
          <p>The Site is provided "as is" for informational purposes. Information on the Site (system specifications, growing claims, partner references) is accurate to the best of our knowledge but may change. Specific commitments to your project will be made in a signed proposal, not by what you read here.</p>
          <p className="mt-4">You may not use the Site to scrape, copy, or republish content for commercial purposes without permission; submit false or misleading information through the contact form; or attempt to interfere with the Site's operation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Intellectual property</h2>
          <p>All content on the Site (text, images, logos, brand marks) is owned by Sweetwater Urban Farms or used with permission. Tower Garden® is a registered trademark of its respective owner; we are an authorized partner. The Sproutify name and platform are referenced as an integrated technology partner.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Limitation of liability</h2>
          <p>We make no warranties beyond what is required by law. To the extent allowed by law, Sweetwater Urban Farms is not liable for indirect, incidental, or consequential damages arising from your use of the Site or reliance on its information.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Governing law</h2>
          <p>These terms are governed by the laws of the State of Georgia, USA. Any dispute will be handled in courts located in Fulton or Forsyth County, Georgia.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Changes</h2>
          <p>We may update these terms. The "Last updated" date will reflect the change. Continued use of the Site after an update means you accept the new terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-serif italic mb-4 text-ink">Contact</h2>
          <p>Questions about these terms? Email <a href="mailto:info@sweetwaterurbanfarms.com" className="text-accent underline underline-offset-4 decoration-accent/30">info@sweetwaterurbanfarms.com</a>.</p>
        </section>
      </div>
    </article>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Tower Garden Systems', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('https://n8n.sproutify.app/webhook/suf-contact-2a9e1c7d-83bf-4e12-9d6a-15a4f7e2c891', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Tower Garden Systems', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please email info@sweetwaterurbanfarms.com directly.');
    }
  };

  const setInquiryAndScroll = (subject: string) => {
    setFormData(prev => ({ ...prev, subject }));
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Systems", href: "/#systems" },
    { name: "Services", href: "/#services" },
    { name: "Clients", href: "/#clients" },
    { name: "Workshops", href: "/#workshops" },
    { name: "Our Story", href: "/#story" },
    { name: "Connect", href: "/#connect" },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-growth/30 overflow-x-hidden">
      {/* Minimal Navigation */}
      <nav className={`fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center pointer-events-none transition-colors duration-300 ${scrolled ? 'bg-paper/85 backdrop-blur-md' : ''}`}>
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 pointer-events-auto group cursor-pointer"
        >
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Leaf className="text-paper w-4 h-4" />
          </div>
          <span className={`font-mono text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${scrolled ? 'text-ink' : 'text-paper'}`}>Sweetwater</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-12 pointer-events-auto">
          {navLinks.slice(1, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-mono text-[9px] uppercase tracking-[0.2em] transition-colors relative group ${scrolled ? 'text-ink/40 hover:text-ink' : 'text-paper/60 hover:text-paper'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8 pointer-events-auto">
          <button onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })} className={`hidden lg:block font-mono text-[9px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all ${scrolled ? 'border border-ink/10 text-ink hover:bg-ink hover:text-paper' : 'border border-paper/30 text-paper hover:bg-paper hover:text-ink'}`}>
            Get in Touch
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`w-10 h-10 flex items-center justify-center rounded-full border shadow-sm hover:shadow-md transition-all ${scrolled ? 'bg-paper border-ink/5 text-ink' : 'bg-paper/10 border-paper/20 text-paper backdrop-blur'}`}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-paper z-[60] flex flex-col items-center justify-center p-12"
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-8 right-8 p-4">
            <X size={32} strokeWidth={1} />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl font-serif italic hover:text-growth transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}

      {pathname === '/privacy' ? <PrivacyContent />
       : pathname === '/terms' ? <TermsContent />
       : <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND — placeholder for future video loop. When video is ready,
            replace this div with: <video autoPlay muted loop playsInline poster="/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"><source src="/hero-loop.mp4" type="video/mp4" /></video> */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#4a5a4a_0%,#2a3a2a_40%,#1a2a1a_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-transparent to-ink/50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-8 max-w-5xl text-paper"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-paper/60 mb-8 block">Est. 2018 // Alpharetta, GA</span>
          <h1 className="text-[14vw] md:text-[8rem] lg:text-[9rem] font-serif font-light leading-[0.9] tracking-tighter mb-8">
            We design, build,<br/>and <span className="italic text-growth">grow.</span>
          </h1>
          <p className="font-body italic text-lg md:text-xl text-paper/75 max-w-xl mx-auto mb-12 leading-relaxed">
            Aeroponic installations and ongoing support for restaurants, schools, and home growers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href="#connect" className="px-8 py-4 bg-paper text-ink rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Start a Project
            </a>
            <a href="#services" className="px-8 py-4 border border-paper/30 text-paper rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-paper/10 transition-colors">
              See Our Work
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent pt-16 pb-12 px-6 z-10">
          <p className="font-mono text-[8px] uppercase tracking-[0.4em] text-paper/50 text-center mb-3">In the field with</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
            <span className="font-serif italic text-base md:text-lg text-paper/80">Braves Stadium</span>
            <span className="text-paper/30 text-xs">•</span>
            <span className="font-serif italic text-base md:text-lg text-paper/80">Green Life Farms Jamaica</span>
            <span className="text-paper/30 text-xs">•</span>
            <span className="font-serif italic text-base md:text-lg text-paper/60">Sproutify</span>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/40 z-10"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown size={12} />
        </motion.div>
      </section>

      {/* Section 01: The Philosophy */}
      <section className="py-40 px-8 bg-accent text-paper">
        <div className="max-w-5xl mx-auto text-center">
          <motion.span 
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.5em] mb-12 block text-growth"
          >
            Our Philosophy
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif italic leading-tight mb-16">
            "We believe that the future of food is local, sustainable, and 
            deeply connected to the technology of nature."
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-paper/10 pt-16">
            {[
              { label: "Efficiency", value: "95% Less Water" },
              { label: "Velocity", value: "3x Faster Growth" },
              { label: "Purity", value: "Zero Pesticides" }
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-4">{stat.label}</p>
                <p className="text-2xl font-serif italic">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Residential Systems */}
      <section id="systems" className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-6 block">01 // What We Do</span>
              <h2 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
                From <span className="italic text-growth">Jamaica</span><br />
                to your kitchen.
              </h2>
            </div>
            <p className="max-w-xs text-ink/60 font-body italic">
              Three worlds we work in — international Tower Farms, schools, and home growers — all built on one aeroponic foundation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                label: "Commercial",
                title: "From stadiums to global Tower Farms",
                desc: "We design, build, and support commercial-scale aeroponic installations — from local restaurants and stadiums to international Tower Farms producing thousands of pounds of greens a week.",
                partners: "With Braves Stadium · Green Life Farms Jamaica",
                cta: "Discuss Your Project",
                subject: "Commercial Installation",
                img: "commercial-tower-farm"
              },
              {
                label: "Schools & Programs",
                title: "STEM curriculum that grows.",
                desc: "Aeroponic systems and hands-on curriculum for K–12, after-school programs, and community education. Students learn biology, chemistry, and sustainability by doing.",
                partners: "STEM curriculum · K–12 partnerships",
                cta: "Bring It to Your School",
                subject: "Schools & STEM Programs",
                img: "school-program-aeroponic"
              },
              {
                label: "Home Growers",
                title: "Tower Gardens for everyone.",
                desc: "The same aeroponic technology that powers our commercial work, scaled for your kitchen, deck, or backyard. Includes seedlings, ongoing support, and a community of growers.",
                partners: "Tower Gardens · Seedlings · Workshops",
                cta: "Start Growing at Home",
                subject: "Tower Garden Systems",
                img: "home-tower-garden"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="group cursor-pointer"
                onClick={() => setInquiryAndScroll(item.subject)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-8">
                  <img
                    src={`https://picsum.photos/seed/${item.img}/800/1200`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent block mb-3">{item.label}</span>
                <h3 className="text-3xl font-serif italic mb-4 leading-tight">{item.title}</h3>
                <p className="text-ink/60 font-body text-sm leading-relaxed mb-4">{item.desc}</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 mb-6">{item.partners}</p>
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-accent group-hover:gap-4 transition-all">
                  {item.cta} <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Community & Commercial */}
      <section id="services" className="py-40 px-8 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="pill-image w-full aspect-[4/5] overflow-hidden">
              <img src="https://picsum.photos/seed/consulting-greenhouse/1000/1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card rounded-full flex items-center justify-center p-8 text-center">
              <p className="font-serif italic text-lg leading-tight">
                From Braves Stadium to a Tower Farm in Jamaica — every project begins with a conversation.
              </p>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">02 // Process</span>
            <h2 className="text-6xl md:text-7xl font-serif mb-16 leading-tight">
              How we<br /><span className="italic text-growth">work.</span>
            </h2>

            <div className="space-y-10">
              {[
                { title: "Discover", desc: "We listen first. Site walk-through, audience needs, growing goals. We learn what the food has to do — feed a stadium, anchor a science program, or fit a kitchen counter." },
                { title: "Design", desc: "Aeroponic systems engineered to your space and harvest targets. From single Tower Gardens to multi-hundred-tower commercial installs, every design accounts for water, light, power, and labor." },
                { title: "Build", desc: "Installation by our team or in partnership with your contractors. Calibration, seedling stocking, and operator training are part of every install." },
                { title: "Support", desc: "Ongoing remote monitoring through Sproutify, regular check-ins, seasonal seedling refreshes, and on-call troubleshooting. The system is the start, not the end." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-growth font-mono text-xs flex-shrink-0 pt-2 tracking-widest">0{i+1}</span>
                  <div>
                    <h4 className="text-2xl font-serif italic mb-2 leading-none">{step.title}</h4>
                    <p className="text-ink/60 text-base leading-relaxed max-w-md">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setInquiryAndScroll('Commercial Installation')}
              className="mt-16 px-10 py-5 bg-accent text-paper rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-growth transition-colors"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* Section 03: Clients */}
      <section id="clients" className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">03 // Clients</span>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-8 tracking-tighter">Where We Grow</h2>
            <p className="max-w-2xl mx-auto text-lg font-body italic text-ink/60 leading-relaxed">
              We bring living gardens to commercial kitchens, hospitality venues, and public spaces — and tend them weekly so chefs and teams can simply harvest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"
            >
              <img
                src="/images/truist-park.jpg"
                alt="Eight Tower Gardens installed at Truist Park, home of the Atlanta Braves"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-growth mb-4 block">Featured Partner</span>
              <h3 className="text-5xl font-serif mb-2">Truist Park</h3>
              <p className="font-mono text-xs uppercase tracking-widest opacity-40 mb-8">Atlanta, GA · Home of the Atlanta Braves</p>
              <p className="text-ink/70 font-body leading-relaxed mb-8">
                We provide and manage <span className="text-accent font-semibold">eight Tower Gardens</span> used inside the stadium by the Executive Chef. Each week we deliver new plants, clean the towers, check nutrient and water quality, and harvest as needed — so the kitchen always has the freshest greens, growing right where they're served.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Weekly fresh plant delivery",
                  "Tower cleaning & maintenance",
                  "Nutrient & water quality checks",
                  "On-demand harvesting",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-ink/70">
                    <Leaf size={14} className="text-growth shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="px-10 py-5 bg-accent text-paper rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-growth transition-colors">
                Bring This To Your Space
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Workshops */}
      <section id="workshops" className="py-40 px-8 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">04 // Workshops</span>
          <h2 className="text-7xl md:text-[10rem] font-serif italic mb-16 tracking-tighter">Grow Good.</h2>
          <div className="relative max-w-4xl mx-auto aspect-video rounded-[3rem] overflow-hidden mb-16">
            <img src="https://picsum.photos/seed/workshop/1200/800" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-24 h-24 rounded-full bg-paper/20 backdrop-blur-md border border-paper/30 flex items-center justify-center hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-paper border-b-[10px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>
          <p className="max-w-2xl mx-auto text-2xl font-body italic text-ink/60 leading-relaxed mb-12">
            Join us for our Spring 2026 series at the Sweetwater greenhouse in Alpharetta. Learn the science and soul of aeroponic growing.
          </p>
          <button onClick={() => setInquiryAndScroll('Workshops')} className="px-12 py-6 border border-accent text-accent rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-paper transition-all">
            Reserve Your Space
          </button>
        </div>
      </section>

      {/* Section 05: Story */}
      <section id="story" className="py-40 px-8 bg-accent text-paper overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-growth mb-8 block">05 // Our Story</span>
            <h2 className="text-6xl md:text-8xl font-serif italic mb-12 leading-none">The Sweet Life.</h2>
            <div className="space-y-8 text-xl md:text-2xl font-body italic text-paper/70 leading-relaxed max-w-2xl">
              <p>
                "Hello! We’re Sheree & Clint. Our journey began with a simple desire to provide 
                better nutrition for our family."
              </p>
              <p>
                "Today, we lead the way in urban agriculture, nurturing our community with 
                nutrient-dense local produce and teaching others how to do the same."
              </p>
            </div>
            <div className="mt-16 flex items-center gap-6">
              <div className="w-16 h-px bg-paper/20"></div>
              <span className="font-mono text-[11px] uppercase tracking-[0.4em]">Sheree & Clint</span>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div 
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 2 }}
              className="rounded-full aspect-square overflow-hidden border-[20px] border-paper/5"
            >
              <img src="https://picsum.photos/seed/founders/800/800" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 06: Connect */}
      <section id="connect" className="py-40 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">05 // Connect</span>
            <h2 className="text-6xl md:text-8xl font-serif leading-none tracking-tight">
              How can we help<br />
              <span className="italic text-growth">you grow?</span>
            </h2>
            <p className="font-body italic text-ink/60 text-lg md:text-xl max-w-xl mx-auto mt-8">
              Whether you're new to aeroponics, planning a workshop, or sourcing fresh produce — we'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* LEFT COLUMN — FAQ */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-3 block">Frequently Asked</span>
              <h3 className="text-4xl font-serif italic mb-10 leading-none">Common questions.</h3>

              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={openFaq === i
                    ? "bg-paper border border-accent rounded-[2rem] p-8 mb-3 transition-all"
                    : "bg-transparent border border-ink/10 rounded-[2rem] p-6 mb-3 transition-all hover:border-ink/20"
                  }
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-start gap-4 text-left"
                  >
                    <div>
                      <span className={`font-mono text-[9px] uppercase tracking-[0.25em] mb-1.5 block ${openFaq === i ? 'text-accent' : 'opacity-40'}`}>{faq.category}</span>
                      <p className={`font-serif italic text-lg md:text-xl ${openFaq === i ? 'text-accent' : 'text-ink'}`}>{faq.question}</p>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openFaq === i ? 'bg-accent text-paper' : 'bg-ink/5 text-ink/40'}`}>
                      {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>
                  {openFaq === i && (
                    <p className="font-body text-sm leading-relaxed text-ink/70 mt-4 pt-4 border-t border-accent/15">{faq.answer}</p>
                  )}
                </div>
              ))}

              <div className="bg-growth/10 rounded-[1.5rem] p-8 mt-8 text-center">
                <p className="font-serif italic text-lg leading-relaxed text-ink/70">"To forget how to dig the earth and tend the soil is to forget ourselves."</p>
                <p className="font-mono text-[8px] uppercase tracking-[0.3em] opacity-40 mt-3">— Mahatma Gandhi</p>
              </div>
            </div>

            {/* RIGHT COLUMN — Form + info cards */}
            <div>
              <div className="bg-[#F5F5F0] p-10 md:p-12 rounded-[3rem]">
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-2 block">Send a Note</span>
                <h3 className="text-4xl font-serif italic mb-2 leading-none">Let's grow.</h3>
                <p className="font-body italic text-sm text-ink/55 mb-10">We typically respond within 1–2 days.</p>

                <div className="space-y-2 mb-8">
                  <label className="font-mono text-[9px] uppercase tracking-widest opacity-40">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-ink/10 py-3 font-serif italic text-xl outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2 mb-8">
                  <label className="font-mono text-[9px] uppercase tracking-widest opacity-40">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="hello@example.com"
                    className="w-full bg-transparent border-b border-ink/10 py-3 font-serif italic text-xl outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2 mb-8">
                  <label className="font-mono text-[9px] uppercase tracking-widest opacity-40">I'm interested in</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-ink/10 py-3 font-serif italic text-xl text-accent outline-none focus:border-accent transition-colors cursor-pointer appearance-none"
                  >
                    <option>Commercial Installation</option>
                    <option>Tower Garden Systems</option>
                    <option>Schools & STEM Programs</option>
                    <option>Restaurant Partnership</option>
                    <option>Seedlings</option>
                    <option>Workshops</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="font-mono text-[9px] uppercase tracking-widest opacity-40">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full bg-transparent border-b border-ink/10 py-3 font-serif italic text-xl outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'submitting'}
                  className="w-full py-5 bg-accent text-paper rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-growth transition-colors disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <p className="text-center font-serif italic text-base text-accent mt-5">Thank you. We'll be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-center font-serif italic text-sm text-ink/60 mt-5">{errorMsg}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-paper border border-ink/5 rounded-[1.5rem] p-6">
                  <div className="w-9 h-9 rounded-full bg-accent/8 flex items-center justify-center mb-3">
                    <Mail size={15} className="text-accent" />
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] opacity-40 mb-1">Email</p>
                  <a href="mailto:info@sweetwaterurbanfarms.com" className="font-serif italic text-sm text-accent break-words">info@sweetwaterurbanfarms.com</a>
                </div>
                <div className="bg-paper border border-ink/5 rounded-[1.5rem] p-6">
                  <div className="w-9 h-9 rounded-full bg-growth/30 flex items-center justify-center mb-3">
                    <Clock size={15} className="text-accent" />
                  </div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.25em] opacity-40 mb-1">Response</p>
                  <p className="font-serif italic text-sm">Under 48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       </>}

      {/* Footer */}
      <footer className="py-16 px-8 border-t border-ink/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-center">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <a href="/" className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Leaf className="text-paper w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em]">Sweetwater</span>
              </a>
            </div>

            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <a href="mailto:info@sweetwaterurbanfarms.com" className="font-serif italic text-sm text-ink/60 hover:text-accent transition-colors">info@sweetwaterurbanfarms.com</a>
                <span className="text-ink/20">·</span>
                <a href="tel:7706786552" className="font-serif italic text-sm text-ink/60 hover:text-accent transition-colors">770.678.6552</a>
              </div>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/sweetwaterurbanfarms", label: "Instagram" },
                  { Icon: Facebook, href: "https://www.facebook.com/sweetwaterurbanfarms", label: "Facebook" },
                  { Icon: Youtube, href: "https://www.youtube.com/@sweetwaterurbanfarms", label: "YouTube" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/sweetwater-urban-farms", label: "LinkedIn" }
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full border border-ink/10 flex items-center justify-center hover:bg-accent hover:text-paper hover:border-accent transition-all">
                    <Icon size={14} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3 font-mono text-[9px] uppercase tracking-[0.25em]">
              <a href="/privacy" className="opacity-40 hover:opacity-100 transition-opacity">Privacy</a>
              <a href="/terms" className="opacity-40 hover:opacity-100 transition-opacity">Terms</a>
            </div>
          </div>

          <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em] text-center pt-8 border-t border-ink/5">
            © 2026 Sweetwater Urban Farms · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
