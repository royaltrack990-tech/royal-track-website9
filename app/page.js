'use client';

import React, { useState, useEffect } from "react";

const IMG = {
  logo: '/images/royal-track-logo-transparent.png',
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const slides = [
    {
      image: IMG.pool_landscape,
      service: "Pools & Landscaping",
      title: "Transform Your Outdoor Paradise",
      description: "Luxury pool design and premium landscaping solutions that redefine outdoor living across Dubai and UAE."
    },
    {
      image: IMG.kitchen_gold,
      service: "Interior Fit-Out",
      title: "Exquisite Interior Craftsmanship",
      description: "Premium interior design and fit-out services delivering unmatched elegance and functionality for your spaces."
    },
    {
      image: IMG.turnkey,
      service: "Turnkey Solutions",
      title: "Complete Project Excellence",
      description: "End-to-end construction management from concept to completion, ensuring seamless delivery and superior quality."
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');
        
        * { -webkit-font-smoothing: antialiased; margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-elegant { font-family: 'Cormorant Garamond', serif; }
        
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideUp { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-slideInLeft { animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-slideInRight { animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-scaleIn { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-float { animation: float 3s ease-in-out infinite; }
        
        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gold-shimmer {
          background: linear-gradient(90deg, #E8B92C 0%, #FFE89E 50%, #E8B92C 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }
        
        .image-zoom {
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }
        .image-zoom:hover img {
          transform: scale(1.1);
        }
        
        .curved-box {
          border-radius: 20px;
          overflow: hidden;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* NAVIGATION - COMPACT */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(232, 185, 44, 0.3)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src={IMG.logo} 
              alt="Royal Track Logo" 
              className="h-16 w-auto object-contain" 
              style={{
                filter: 'brightness(0) saturate(100%) invert(73%) sepia(94%) saturate(489%) hue-rotate(1deg) brightness(101%) contrast(93%)'
              }}
            />
            <div className="leading-tight text-white">
              <div className="font-display text-xl font-bold tracking-wide">ROYAL TRACK</div>
              <div className="text-[9px] font-light uppercase tracking-[0.15em] text-[#E8B92C] mt-0.5">Building & Contracting L.L.C</div>
              <div className="text-[8px] font-light tracking-wide text-[#E8B92C]/80 text-left" dir="rtl">رويال تراك للمقاولات البناء ش.ذ.م.م</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-white">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact Us', href: '#contact' },
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-base font-medium tracking-wide hover:text-[#E8B92C] transition-all duration-300 font-elegant relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E8B92C] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 transition-all duration-300 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105">
            GET QUOTE →
          </a>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-[#E8B92C]/30">
            <div className="px-6 py-6 space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Contact Us'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white text-lg font-elegant hover:text-[#E8B92C] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SLIDER - COMPACT & FIT TO SCREEN */}
      <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={slide.image} alt={slide.service} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <div className={`transition-all duration-700 ${index === currentSlide ? 'animate-slideInLeft' : ''}`}>
                    <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-4">
                      <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.2em]">{slide.service}</span>
                    </div>
                    
                    <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">
                      {slide.title}
                    </h1>
                    
                    <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <a href="#services" className="px-6 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
                        EXPLORE SERVICES →
                      </a>
                      <a href="#contact" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
                        GET IN TOUCH
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#E8B92C] w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-6 lg:right-10 hidden lg:block animate-float">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-[10px] uppercase tracking-widest font-light">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="1" width="18" height="28" rx="9" />
              <circle cx="10" cy="8" r="2" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-0 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 pt-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">BUILDING BEYOND EXPECTATIONS</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-tight text-stone-900 mb-4">
              Where Vision Meets <span className="gold-gradient">Precision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="relative p-8">
              <div className="relative curved-box overflow-hidden shadow-2xl">
                <img src={IMG.kitchen_marble} alt="Royal Track craftsmanship" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-8 right-8 bg-gradient-to-br from-[#E8B92C] to-[#C9831A] text-stone-900 p-8 curved-box shadow-xl max-w-[200px]">
                  <div className="font-display text-5xl leading-none mb-2 font-bold">UAE</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Dubai-Based Excellence</div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                At <strong className="font-bold text-stone-900">Royal Track Building & Contracting L.L.C</strong>, we don't just build structures — we create spaces that define modern living and luxury. From refined interiors to striking exteriors and complete outdoor transformations, every project is delivered with an unwavering focus on quality, meticulous detail, and lasting performance that exceeds expectations.
              </p>

              <p className="text-stone-600 text-base leading-relaxed mb-8">
                Driven by deep expertise and a passionate commitment to excellence, we seamlessly bring together innovative design, superior craftsmanship, and flawless execution to deliver projects that truly stand out. Across the UAE, from Dubai to Abu Dhabi, we are dedicated to turning our clients' most ambitious visions into stunning reality with unmatched reliability, precision, and attention to every detail.
              </p>

              

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { num: 'Premium', label: 'Quality Standards' },
                  { num: 'Expert', label: 'Craftsmanship' },
                  { num: 'Trusted', label: 'Across UAE' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-4 border-[#E8B92C] pl-4 hover-lift">
                    <div className="font-display text-3xl text-stone-900 mb-1 font-bold">{stat.num}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105">
                GET IN TOUCH →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-0 bg-stone-900 text-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">OUR ADVANTAGE</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-4">
              Why <span className="gold-gradient">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Award-Winning', desc: 'Recognized excellence in construction and design across UAE' },
              { title: 'Fast Delivery', desc: 'On-time project completion with zero compromise on quality' },
              { title: 'Premium Materials', desc: 'Only the finest materials sourced from trusted suppliers' },
              { title: 'Client-Focused', desc: 'Your vision, our mission—complete satisfaction guaranteed' },
            ].map((item, idx) => (
              <div key={idx} className="curved-box bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover-lift text-center">
                <div className="text-5xl mb-4 animate-float" style={{animationDelay: `${idx * 0.2}s`}}>{item.icon}</div>
                <h3 className="font-display text-2xl mb-3 text-[#E8B92C]">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-0 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR SERVICES</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight text-stone-900 mb-6">
              Comprehensive <span className="gold-gradient">Construction</span> Solutions
            </h2>
            <p className="text-stone-600 text-xl font-light max-w-3xl mx-auto">
              Elevating Spaces, Redefining Luxury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', title: 'Interior Fit-Out', desc: 'Complete interior solutions including design execution, finishing, and high-quality detailing for residential and commercial spaces with unmatched precision.', image: IMG.kitchen_gold },
              { num: '02', title: 'Pools & Landscaping', desc: 'Professional design and construction of swimming pools and landscape environments, creating functional and visually stunning outdoor spaces.', image: IMG.pool_landscape },
              { num: '03', title: 'Turnkey Solutions', desc: 'End-to-end project execution covering planning, design, construction, and final delivery with complete responsibility and excellence.', image: IMG.turnkey },
            ].map((service) => (
              <div key={service.num} className="group curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
                  <span className="absolute top-6 left-6 font-bold text-[#E8B92C] text-sm tracking-widest bg-stone-900/90 px-4 py-2 rounded-full">
                    {service.num}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl mb-4 group-hover:text-[#E8B92C] transition-colors">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[#E8B92C] text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-0 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">HOW WE WORK</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-4">
              Our <span className="gold-gradient">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Consultation', desc: 'Understanding your vision and requirements' },
              { num: '02', title: 'Design & Planning', desc: 'Creating detailed blueprints and timelines' },
              { num: '03', title: 'Execution', desc: 'Expert construction with quality control' },
              { num: '04', title: 'Delivery', desc: 'Final handover and ongoing support' },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="curved-box bg-white/5 backdrop-blur-sm border-2 border-[#E8B92C]/30 p-8 hover-lift">
                  <div className="text-6xl font-display font-bold text-[#E8B92C]/20 mb-4">{step.num}</div>
                  <h3 className="font-display text-2xl mb-3 text-[#E8B92C]">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#E8B92C]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-0 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR CRAFTSMANSHIP</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight text-stone-900">
              Showcasing <span className="gold-gradient">Exceptional</span> Projects
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
              <div key={project.name} className="group cursor-pointer relative overflow-hidden curved-box aspect-[4/3] hover-lift">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-2">Location · 0{idx + 1}</div>
                  <div className="font-display text-2xl text-white">{project.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-0 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">CLIENT TESTIMONIALS</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight mb-4">
              What Our <span className="gold-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              { name: 'Ahmed Al Maktoum', role: 'Villa Owner, Emirates Hills', quote: 'Royal Track transformed our vision into reality with exceptional craftsmanship and attention to detail. Highly recommended!' },
              { name: 'Sarah Johnson', role: 'Business Owner, Dubai Marina', quote: 'Professional, reliable, and outstanding quality. Our commercial fit-out exceeded all expectations.' },
              { name: 'Mohammed Hassan', role: 'Homeowner, Arabian Ranches', quote: 'From design to delivery, the team was exceptional. Our pool and landscape project is absolutely stunning.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="curved-box bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover-lift">
                <div className="text-[#E8B92C] text-4xl mb-4">"</div>
                <p className="text-white/80 leading-relaxed mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-display text-xl text-[#E8B92C]">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-0 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">GET IN TOUCH</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl leading-tight text-stone-900 mb-4">
              We're Here to <span className="gold-gradient">Assist</span> You
            </h2>
            <p className="text-stone-600 text-xl font-light">
              Schedule a consultation. Our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="curved-box bg-white p-8 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-widest text-[#C9831A] mb-3">Email</div>
                <a href="mailto:royal.track990@gmail.com" className="text-stone-900 text-lg font-medium hover:text-[#E8B92C] transition-colors break-all">
                  royal.track990@gmail.com
                </a>
              </div>
              
              <div className="curved-box bg-white p-8 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-widest text-[#C9831A] mb-3">Location</div>
                <a href="https://www.google.com/maps/place/+Dubai+DU+UAE" target="_blank" rel="noreferrer" className="text-stone-900 text-lg font-medium hover:text-[#E8B92C] transition-colors flex items-start gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-1 flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                  Dubai, DU UAE
                </a>
              </div>

              <div className="curved-box bg-white p-8 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-widest text-[#C9831A] mb-4">Working Hours</div>
                <div className="space-y-3 text-sm">
                  {[
                    { day: 'Monday - Friday', hours: '9:00am – 10:00pm' },
                    { day: 'Saturday', hours: '9:00am – 6:00pm' },
                    { day: 'Sunday', hours: '9:00am – 12:00pm' },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between py-2 border-b border-stone-200 last:border-0">
                      <span className="text-stone-600 font-medium">{item.day}</span>
                      <span className="text-stone-900 font-semibold text-xs">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="curved-box bg-white p-10 shadow-xl">
                {submitted ? (
                  <div className="py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#E8B92C]/20 flex items-center justify-center mx-auto mb-6">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="font-display text-4xl mb-3 text-stone-900">Thank You!</h3>
                    <p className="text-stone-600">We've received your message and will respond shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-3 block">
                        Name <span className="text-[#E8B92C]">*</span>
                      </label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your full name" className="w-full bg-stone-50 border-2 border-stone-200 focus:border-[#E8B92C] text-stone-900 px-4 py-3 outline-none transition-colors rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-3 block">
                        Email Address <span className="text-[#E8B92C]">*</span>
                      </label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="you@example.com" className="w-full bg-stone-50 border-2 border-stone-200 focus:border-[#E8B92C] text-stone-900 px-4 py-3 outline-none transition-colors rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-3 block">
                        Phone Number <span className="text-[#E8B92C]">*</span>
                      </label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+971 XX XXX XXXX" className="w-full bg-stone-50 border-2 border-stone-200 focus:border-[#E8B92C] text-stone-900 px-4 py-3 outline-none transition-colors rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-600 mb-3 block">Message</label>
                      <textarea rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your project..." className="w-full bg-stone-50 border-2 border-stone-200 focus:border-[#E8B92C] text-stone-900 px-4 py-3 outline-none transition-colors resize-none rounded-lg" />
                    </div>
                    
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({...formData, consent: e.target.checked})} className="mt-1 w-5 h-5 accent-[#E8B92C] rounded" />
                      <span className="text-sm text-stone-600 leading-relaxed">
                        I allow this website to store my submission so they can respond to my inquiry. <span className="text-[#E8B92C]">*</span>
                      </span>
                    </label>

                    <button type="submit" className="w-full mt-4 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105">
                      SUBMIT MESSAGE →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white pt-16 pb-8 border-t border-[#E8B92C]/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src={IMG.logo} alt="Royal Track Logo" className="h-20 w-auto" style={{filter: 'brightness(0) saturate(100%) invert(73%) sepia(94%) saturate(489%) hue-rotate(1deg) brightness(101%) contrast(93%)'}} />
                <div>
                  <div className="font-display text-2xl text-[#E8B92C] font-bold">ROYAL TRACK</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Building & Contracting L.L.C</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                Premium construction and contracting services across the United Arab Emirates. Where vision meets precision.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-5">Navigation</div>
              <div className="space-y-3">
                {['Home', 'About', 'Services', 'Projects', 'Contact Us'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="block text-white/70 hover:text-[#E8B92C] text-sm transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-5">Contact</div>
              <div className="space-y-3 text-sm text-white/70">
                <div className="break-all">royal.track990@gmail.com</div>
                <div>Dubai, UAE</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider text-white/40">
            <div>© 2026 Royal Track Building & Contracting L.L.C. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-[#E8B92C] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#E8B92C] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
