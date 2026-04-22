import { motion, useScroll, useTransform } from "motion/react";
import { 
  Leaf, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ChevronDown
} from "lucide-react";
import { useState, useRef } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Systems", href: "#systems" },
    { name: "Services", href: "#services" },
    { name: "Workshops", href: "#workshops" },
    { name: "Our Story", href: "#story" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-growth/30 overflow-x-hidden" ref={containerRef}>
      {/* Minimal Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-8 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 pointer-events-auto group cursor-pointer"
        >
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Leaf className="text-paper w-4 h-4" />
          </div>
          <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase">Sweetwater</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 pointer-events-auto">
          {navLinks.slice(1, 5).map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-8 pointer-events-auto">
          <button className="hidden lg:block font-mono text-[9px] font-bold uppercase tracking-[0.2em] border border-ink/10 px-6 py-2.5 rounded-full hover:bg-ink hover:text-paper transition-all">
            Join the Farm
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-paper border border-ink/5 shadow-sm hover:shadow-md transition-all"
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

      {/* Hero Section - Editorial Style */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-8">
        <div className="max-w-7xl mx-auto w-full relative">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center relative z-10"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">Est. 2018 // Alpharetta, GA</span>
            <h1 className="text-[12vw] lg:text-[10rem] font-serif leading-[0.8] tracking-tight mb-12">
              Future <br />
              <span className="italic text-growth">Harvest</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
              <p className="max-w-sm text-lg font-body italic text-ink/60 leading-relaxed">
                Nurturing our community with nutrient-dense local produce through the art of aeroponics.
              </p>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-24 bg-ink/10 hidden md:block"
              ></motion.div>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-accent text-paper rounded-full font-mono text-[10px] uppercase tracking-widest hover:scale-105 transition-transform">
                  Explore Systems
                </button>
              </div>
            </div>
          </motion.div>

          {/* Floating Decorative Images */}
          <motion.div 
            style={{ y }}
            className="absolute -top-20 -left-10 w-64 h-80 hidden xl:block opacity-40"
          >
            <img src="https://picsum.photos/seed/leaf1/600/800" className="w-full h-full object-cover rounded-t-full" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -400]) }}
            className="absolute top-40 -right-20 w-80 h-[30rem] hidden xl:block opacity-30"
          >
            <img src="/images/tower-hero.jpg" alt="Tower Garden growing fresh greens" className="w-full h-full object-cover rounded-full" />
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown size={14} />
        </div>
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
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-6 block">01 // Systems</span>
              <h2 className="text-6xl md:text-8xl font-serif leading-none tracking-tighter">
                Residential <br />
                <span className="italic text-growth">Solutions</span>
              </h2>
            </div>
            <p className="max-w-xs text-ink/60 font-body italic">
              Professional-grade aeroponic systems designed for the modern home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Tower Garden", src: "/images/tower-hero.jpg", desc: "The gold standard in home aeroponics. Grow up to 20 plants in less than 3 square feet." },
              { title: "Seedling Service", src: "https://picsum.photos/seed/seedling/800/1200", desc: "Expertly nurtured starter plants delivered to your door, ready for your system." },
              { title: "Fresh Produce", src: "https://picsum.photos/seed/produce/800/1200", desc: "Direct from our farm to your table. Nutrient-dense greens harvested at peak vitality." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] mb-8">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-3xl font-serif italic mb-4">{item.title}</h3>
                <p className="text-ink/60 font-body text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest group-hover:gap-4 transition-all">
                  View Details <ArrowRight size={12} />
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
              <img src="https://picsum.photos/seed/community/1000/1200" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card rounded-full flex items-center justify-center p-8 text-center">
              <p className="font-serif italic text-lg leading-tight">
                "Integrating urban agriculture into the fabric of daily life."
              </p>
            </div>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">02 // Services</span>
            <h2 className="text-6xl font-serif mb-12 leading-tight">Professional <br />Consulting</h2>
            <div className="space-y-12">
              {[
                { title: "Mixed Use Development", desc: "Designing edible landscapes for modern residential and commercial projects." },
                { title: "Educational Programs", desc: "Hands-on STEM learning modules for schools and community centers." },
                { title: "Commercial Maintenance", desc: "Full-service management for large-scale aeroponic installations." }
              ].map((service, i) => (
                <div key={i} className="group">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-4">
                    <span className="text-growth font-mono text-xs">0{i+1}</span>
                    {service.title}
                  </h4>
                  <p className="text-ink/60 text-sm max-w-md leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
            <button className="mt-16 px-10 py-5 bg-accent text-paper rounded-full font-mono text-[10px] uppercase tracking-widest hover:bg-growth transition-colors">
              Request a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Section 04: Workshops */}
      <section id="workshops" className="py-40 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">03 // Workshops</span>
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
            Join us for our Spring 2026 series at AboutFace Farm. Learn the science and soul of aeroponic growing.
          </p>
          <button className="px-12 py-6 border border-accent text-accent rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-paper transition-all">
            Reserve Your Space
          </button>
        </div>
      </section>

      {/* Section 05: Story */}
      <section id="story" className="py-40 px-8 bg-accent text-paper overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-growth mb-8 block">04 // Our Story</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-40 mb-8 block">05 // Connect</span>
              <h2 className="text-7xl font-serif mb-16 italic">Let's Grow.</h2>
              <div className="space-y-12">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-4">Inquiries</p>
                  <p className="text-2xl font-serif italic hover:text-growth transition-colors cursor-pointer underline underline-offset-8 decoration-ink/10">
                    info@sweetwaterurbanfarms.com
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 mb-4">Phone</p>
                  <p className="text-2xl font-serif italic">770.678.6552</p>
                </div>
                <div className="flex gap-8 pt-8">
                  {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center hover:bg-accent hover:text-paper transition-all">
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-[#F5F5F0] p-12 md:p-20 rounded-[3rem]">
              <form className="space-y-12">
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest opacity-40">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-ink/10 py-4 font-serif italic text-2xl outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest opacity-40">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-ink/10 py-4 font-serif italic text-2xl outline-none focus:border-accent transition-colors" placeholder="hello@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[9px] uppercase tracking-widest opacity-40">Message</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-ink/10 py-4 font-serif italic text-2xl outline-none focus:border-accent transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button className="w-full py-6 bg-accent text-paper rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-growth transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-ink/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Leaf className="text-paper w-5 h-5" />
            </div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.4em]">Sweetwater</span>
          </div>
          
          <p className="font-mono text-[9px] opacity-30 uppercase tracking-[0.2em]">
            © 2026 Sweetwater Urban Farms // All Rights Reserved
          </p>

          <div className="flex gap-12 font-mono text-[9px] opacity-30 uppercase tracking-[0.2em]">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
