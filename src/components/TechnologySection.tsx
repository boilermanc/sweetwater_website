import { ArrowRight } from 'lucide-react';
import { useId } from 'react';
import { SageChat } from './SageChat';

export function TechnologySection() {
  const clipId = useId();
  return (
    <section id="technology" aria-labelledby="technology-title" className="technology-section px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <a href="https://sweetwater.technology" target="_blank" rel="noopener noreferrer" aria-label="Sweetwater Technology (opens in a new tab)" className="inline-flex items-center gap-3">
            <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
              <defs><clipPath id={clipId}><circle cx="32" cy="32" r="24" /></clipPath></defs>
              <circle cx="32" cy="32" r="31" fill="#2f63e9" /><circle cx="32" cy="32" r="24" fill="#eef2ff" />
              <g clipPath={`url(#${clipId})`}>
                <path d="M-64 38 C-48 26 -32 26 -16 38 S16 50 32 38 S64 26 80 38 S112 50 128 38 S160 26 176 38 V70 H-64 Z" fill="#2f63e9" />
                <path d="M-64 45 C-48 37 -32 37 -16 45 S16 53 32 45 S64 37 80 45 S112 53 128 45 S160 37 176 45 V70 H-64 Z" fill="#2456d8" opacity=".35" />
              </g>
            </svg>
            <span className="flex flex-col leading-none"><span className="text-[1.35rem] font-extrabold tracking-[-.055em]">SWEETWATER</span><span className="mt-1 text-[.54rem] font-bold tracking-[.36em] text-blue-200">TECHNOLOGY</span></span>
          </a>
          <p className="mb-5 mt-12 text-xs font-bold uppercase tracking-[.22em] text-[#aebfe8]">Rooted in growing. Built for what’s next.</p>
          <h2 id="technology-title" className="max-w-xl text-5xl font-bold leading-[1.06] tracking-[-.045em] sm:text-6xl">Have an <span className="text-[#91b0ff]">ag tech</span> project?</h2>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#aebfe8]">From farm management tools to custom apps and automation, Sweetwater Technology builds software around the way you grow. Tell Sage what you’re working on.</p>
          <a href="https://sweetwater.technology" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-3 border-b border-[#526a9d] pb-2 text-sm font-semibold text-white hover:text-blue-200">Explore Sweetwater Technology <ArrowRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <SageChat />
      </div>
    </section>
  );
}

