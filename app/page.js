'use client';

import React, { useState, useEffect } from "react";

const IMG = {
  logo: '/images/logo.png',
  pool_landscape: '/images/pool_landscape.jpg',
  kitchen_marble: '/images/kitchen_marble.jpg',
  kitchen_gold: '/images/kitchen_gold.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
  project_1: '/images/project_1.jpg',
  project_2: '/images/project_2.jpg',
  project_3: '/images/project_3.jpg',
  project_4: '/images/project_4.jpg',
  project_5: '/images/project_5.jpg',
  project_6: '/images/project_6.jpg',
  project_7: '/images/project_7.jpg',
  yas_island: '/images/yas_island.webp',
  dubai_hills: '/images/dubai_hills.png',
  turnkey: '/images/turnkey.png',
};

export default function RoyalTrackHome() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) return alert("Please agree to the consent");
    if (!formData.name || !formData.email || !formData.phone) return alert("Please fill required fields");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
  };

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Manrope:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * { -webkit-font-smoothing: antialiased; }
        body { font-family: 'Manrope', sans-serif; }
        .font-display { font-family: 'Cormorant Garamond', serif; letter-spacing: -0.02em; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .anim-fade-up { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        
        .gold-text {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gold-shimmer {
          background: linear-gradient(90deg, #E8B92C 0%, #FFE89E 50%, #E8B92C 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        
        .grain { position: relative; }
        .grain::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E");
          opacity: 0.06;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        
        .ticker-track { animation: ticker 50s linear infinite; }
        
        .underline-grow { position: relative; }
        .underline-grow::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .underline-grow:hover::after { width: 100%; }
        
        .image-zoom { transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .image-zoom:hover { transform: scale(1.04); }
      `}</style>

      {/* NAVIGATION */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(10, 10, 10, 0.95)' : 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrollY > 50 ? '1px solid rgba(232, 185, 44, 0.2)' : '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <img src={IMG.logo} alt="Royal Track Logo" className="h-14 w-auto" />
            <div className="leading-tight text-white hidden sm:block">
              <div className="font-display text-base font-semibold tracking-wide">ROYAL TRACK</div>
              <div className="text-[8px] font-mono uppercase tracking-[0.2em] text-[#E8B92C]">Building & Contracting L.L.C</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-10 text-white/90">
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wide underline-grow hover:text-[#E8B92C] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden lg:flex items-center gap-2 px-5 py-2.5 border border-[#E8B92C] text-[#E8B92C] hover:bg-[#E8B92C] hover:text-stone-900 transition-all duration-300 text-xs font-mono uppercase tracking-[0.15em] rounded-full">
            Get Quote
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900 border-t border-[#E8B92C]/20">
            <div className="px-6 py-6 space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white text-lg font-display"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-stone-900">
        <div 
          className="absolute inset-0 grain"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <img src={IMG.living_modern} alt="Luxury interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-stone-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-stone-900/40" />
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8B92C]/20 to-transparent hidden lg:block" />
          <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E8B92C]/20 to-transparent hidden lg:block" />
        </div>

        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8 anim-fade-up" style={{animationDelay: '0.2s'}}>
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-[10px] font-mono uppercase tracking-[0.3em]">
                Premium Construction · UAE
              </span>
            </div>

            <h1 className="font-display text-white text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-8 anim-fade-up" style={{animationDelay: '0.4s'}}>
              Your Vision,
              <br />
              <span className="italic gold-shimmer font-light">Built to</span>
              <br />
              Perfection.
            </h1>

            <p className="text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-12 anim-fade-up" style={{animationDelay: '0.6s'}}>
              We bring your ideas to life with precision, quality, and exceptional craftsmanship.
            </p>

            <div className="flex flex-wrap items-center gap-5 anim-fade-up" style={{animationDelay: '0.8s'}}>
              <a href="#services" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-mono uppercase tracking-[0.15em] transition-all duration-300 font-semibold">
                Explore Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 text-white/90 hover:text-[#E8B92C] text-sm font-mono uppercase tracking-[0.15em] transition-colors underline-grow">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="absolute bottom-12 right-6 lg:right-12 hidden md:block anim-fade-up" style={{animationDelay: '1.2s'}}>
            <div className="text-right">
              <div className="text-[#E8B92C] text-[10px] font-mono uppercase tracking-[0.3em] mb-2">Based in</div>
              <div className="text-white font-display text-2xl">Dubai, UAE</div>
              <div className="w-12 h-px bg-[#E8B92C] ml-auto mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="bg-stone-900 text-[#E8B92C] py-6 overflow-hidden border-y border-[#E8B92C]/20">
        <div className="flex ticker-track whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              {['Interior Fit-Out', '✦', 'Pools & Landscaping', '✦', 'Turnkey Solutions', '✦', 'Building Construction', '✦', 'Luxury Villas', '✦', 'Commercial Spaces', '✦'].map((text, idx) => (
                <span key={idx} className={`font-display ${text === '✦' ? 'text-[#E8B92C]' : 'text-white/90'} text-2xl italic`}>
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 lg:py-40 bg-stone-50 relative">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-[10px] font-mono uppercase tracking-[0.3em]">Building Beyond Expectations</span>
              <span className="w-10 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-stone-900">
              Where Vision Meets <em className="gold-text not-italic">Precision</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img src={IMG.kitchen_marble} alt="Royal Track craftsmanship" className="w-full aspect-[3/4] object-cover image-zoom" />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#E8B92C] to-[#C9831A] text-stone-900 p-8 max-w-[260px] grain shadow-2xl">
                  <div className="font-display text-6xl leading-none mb-2 font-semibold">UAE</div>
                  <div className="text-xs font-mono uppercase tracking-[0.2em] opacity-90">Dubai-Based · Trusted Across Emirates</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="text-stone-700 text-lg leading-relaxed mb-6 font-light">
                At <strong className="font-medium text-stone-900">Royal Track Building & Contracting L.L.C</strong>, we don't just build structures — we create spaces that define modern living. From refined interiors to striking exteriors and complete outdoor transformations, every project is delivered with a focus on quality, detail, and lasting performance.
              </p>

              <p className="text-stone-600 text-base leading-relaxed mb-10 font-light">
                Driven by expertise and a passion for excellence, we bring together design, craftsmanship, and execution to deliver projects that stand out. Across the UAE, we are committed to turning our clients' visions into reality with reliability and precision.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { num: 'Premium', label: 'Quality Standards' },
                  { num: 'Expert', label: 'Craftsmanship' },
                  { num: 'Trusted', label: 'Across UAE' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-[#E8B92C] pl-4">
                    <div className="font-display text-2xl text-stone-900 mb-1 italic">{stat.num}</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.15em] text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-3 px-7 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300">
                Get In Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 lg:py-40 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#E8B92C]/5 blur-3xl" />
        
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-[10px] font-mono uppercase tracking-[0.3em]">Our Services</span>
              <span className="w-10 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6">
              Comprehensive <em className="gold-text not-italic">Construction</em> Solutions
            </h2>
            <p className="text-white/70 text-lg font-light italic font-display">
              Elevating Spaces, Redefining Luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { num: '01', title: 'Interior Fit-Out', desc: 'Complete interior solutions including design execution, finishing, and high-quality detailing for residential and commercial spaces.', image: IMG.kitchen_gold },
              { num: '02', title: 'Pools & Landscaping', desc: 'Design and construction of swimming pools and landscape environments, creating functional and visually appealing outdoor spaces.', image: IMG.pool_landscape },
              { num: '03', title: 'Turnkey Solutions', desc: 'End-to-end project execution covering planning, design, construction, and final delivery with full responsibility.', image: IMG.turnkey },
            ].map((service) => (
              <div key={service.num} className="group bg-stone-800/50 border border-white/5 hover:border-[#E8B92C]/40 transition-all duration-500 cursor-pointer overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover image-zoom" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
                  <span className="absolute top-5 left-5 font-mono text-[#E8B92C] text-xs tracking-[0.2em] bg-stone-900/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    {service.num}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl mb-4 group-hover:text-[#E8B92C] transition-colors">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed font-light mb-6">{service.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#E8B92C] text-xs font-mono uppercase tracking-[0.15em] group-hover:gap-4 transition-all">
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 border border-[#E8B92C] text-[#E8B92C] hover:bg-[#E8B92C] hover:text-stone-900 text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300">
              View More Services
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 font-semibold">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 lg:py-40 bg-stone-50">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-[10px] font-mono uppercase tracking-[0.3em]">Our Craftsmanship</span>
              <span className="w-10 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] text-stone-900">
              Showcasing <em className="gold-text not-italic">Exceptional</em> Projects
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-16">
            {[
              { name: 'Dubai Hills', image: IMG.dubai_hills },
              { name: 'Arabian Ranches', image: IMG.project_1 },
              { name: 'Emirates Hills', image: IMG.living_marble },
              { name: 'Palm Jumeirah', image: IMG.project_2 },
              { name: 'Jumeirah Village Circle', image: IMG.project_3 },
              { name: 'The Valley', image: IMG.project_4 },
              { name: 'Tilal Al Ghaf', image: IMG.project_5 },
              { name: 'Al Jurf, Abu Dhabi', image: IMG.project_6 },
              { name: 'Yas Island', image: IMG.yas_island },
            ].map((project, idx) => (
              <div key={project.name} className="group cursor-pointer relative overflow-hidden aspect-[4/3]">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover image-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8B92C] mb-1">Location · 0{idx + 1}</div>
                  <div className="font-display text-2xl text-white italic">{project.name}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300">
              See More Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 lg:py-40 bg-stone-900 text-white relative overflow-hidden grain">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#E8B92C]/8 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#6B2D8F]/10 blur-3xl" />
        
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-[10px] font-mono uppercase tracking-[0.3em]">Get In Touch</span>
              <span className="w-10 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-4">
              We're Here to <em className="gold-text not-italic">Assist</em> You
            </h2>
            <p className="text-white/70 text-lg font-light">
              Schedule a consultation. Our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8B92C] mb-3">Email</div>
                <a href="mailto:royal.track990@gmail.com" className="text-white text-xl font-light hover:text-[#E8B92C] transition-colors break-all">
                  royal.track990@gmail.com
                </a>
              </div>
              
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8B92C] mb-3">Location</div>
                <a href="https://www.google.com/maps/place/+Dubai+DU+UAE" target="_blank" rel="noreferrer" className="text-white text-xl font-light hover:text-[#E8B92C] transition-colors flex items-start gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1.5 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                  Dubai, DU UAE
                </a>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8B92C] mb-4">Working Hours</div>
                <div className="space-y-2 text-sm font-light">
                  {[
                    { day: 'Monday', hours: '9:00am – 10:00pm' },
                    { day: 'Tuesday', hours: '9:00am – 10:00pm' },
                    { day: 'Wednesday', hours: '9:00am – 10:00pm' },
                    { day: 'Thursday', hours: '9:00am – 10:00pm' },
                    { day: 'Friday', hours: '9:00am – 10:00pm' },
                    { day: 'Saturday', hours: '9:00am – 6:00pm' },
                    { day: 'Sunday', hours: '9:00am – 12:00pm' },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">{item.day}</span>
                      <span className="text-white font-mono text-xs">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#E8B92C]/20 flex items-center justify-center mx-auto mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="2.5">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="font-display text-3xl mb-3">Thank You!</h3>
                    <p className="text-white/70">We've received your message and will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 mb-2 block">
                        Name <span className="text-[#E8B92C]">*</span>
                      </label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your full name" className="w-full bg-transparent border-b border-white/20 focus:border-[#E8B92C] text-white pb-2.5 outline-none transition-colors font-light text-base placeholder-white/30" />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 mb-2 block">
                        Email Address <span className="text-[#E8B92C]">*</span>
                      </label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="you@example.com" className="w-full bg-transparent border-b border-white/20 focus:border-[#E8B92C] text-white pb-2.5 outline-none transition-colors font-light text-base placeholder-white/30" />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 mb-2 block">
                        Phone Number <span className="text-[#E8B92C]">*</span>
                      </label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+971 XX XXX XXXX" className="w-full bg-transparent border-b border-white/20 focus:border-[#E8B92C] text-white pb-2.5 outline-none transition-colors font-light text-base placeholder-white/30" />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 mb-2 block">Message</label>
                      <textarea rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-white/20 focus:border-[#E8B92C] text-white pb-2.5 outline-none transition-colors font-light text-base resize-none placeholder-white/30" />
                    </div>
                    
                    <label className="flex items-start gap-3 cursor-pointer pt-2">
                      <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({...formData, consent: e.target.checked})} className="mt-1 w-4 h-4 accent-[#E8B92C]" />
                      <span className="text-xs text-white/60 font-light leading-relaxed">
                        I allow this website to store my submission so they can respond to my inquiry. <span className="text-[#E8B92C]">*</span>
                      </span>
                    </label>

                    <button type="submit" className="w-full mt-4 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 font-semibold">
                      Submit
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-20 pb-8 border-t border-[#E8B92C]/20">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={IMG.logo} alt="Royal Track Logo" className="h-16 w-auto" />
                <div>
                  <div className="font-display text-xl text-[#E8B92C]">ROYAL TRACK</div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/50">Building & Contracting L.L.C</div>
                </div>
              </div>
              <p className="text-white/60 font-light max-w-md leading-relaxed mb-6">
                Premium construction and contracting services across the United Arab Emirates. Where vision meets precision.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8B92C] mb-5">Navigation</div>
              <div className="space-y-3">
                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-white/70 hover:text-white text-sm font-light transition-colors underline-grow w-fit">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E8B92C] mb-5">Contact</div>
              <div className="space-y-3 text-sm text-white/70 font-light">
                <div className="break-all">royal.track990@gmail.com</div>
                <div>Dubai, UAE</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
            <div>© 2026 Royal Track Building & Contracting L.L.C. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
<section
  id="hero"
  className="relative w-full h-screen min-h-[480px] flex items-center justify-center overflow-hidden"
>
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/Website%20Hero%20Section%20Video.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    aria-hidden="true"
  />
  <div className="absolute inset-0 bg-black/70" />
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
    <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl mb-4">
      Luxury Construction in Dubai
    </h1>
  </div>
</section>
<div className="relative w-full h-screen min-h-[480px] flex items-center justify-center overflow-hidden" id="hero">
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="/hero-video.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    aria-hidden="true"
  />
  <div className="absolute inset-0 bg-black/60" />
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
    <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
      Luxury Construction in Dubai
    </h1>
    <p className="text-lg md:text-2xl text-white/80 font-light mb-8">
      Premium villas, landscaping & pools
    </p>
    <a
      href="#contact"
      className="inline-block bg-[#E8B92C] text-black font-semibold rounded-md px-8 py-3 text-base md:text-lg shadow-lg hover:bg-[#cea116] transition-colors"
    >
      Get Free Consultation
    </a>
  </div>
