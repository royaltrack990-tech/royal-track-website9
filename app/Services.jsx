'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const IMG = {
  logo: '/images/royal-track-logo-transparent.png',
  kitchen_gold: '/images/kitchen_gold.jpg',
  pool_landscape: '/images/pool_landscape.jpg',
  turnkey: '/images/turnkey.png',
  kitchen_marble: '/images/kitchen_marble.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
  project_1: '/images/project_1.jpg',
  project_2: '/images/project_2.jpg',
};

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlides, setActiveSlides] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate service image sliders
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides(prev => {
        const next = {};
        services.forEach((_, idx) => {
          next[idx] = ((prev[idx] || 0) + 1) % 4;
        });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'Interior Fit-Out',
      description: 'Complete interior design and execution services for residential and commercial spaces with premium finishing and attention to detail.',
      images: [IMG.kitchen_gold, IMG.kitchen_marble, IMG.living_marble, IMG.living_modern],
      features: ['Custom Design', 'Premium Materials', 'Expert Installation', 'Quality Assurance']
    },
    {
      title: 'Pools & Landscaping',
      description: 'Professional pool design, construction, and landscaping services creating stunning outdoor environments.',
      images: [IMG.pool_landscape, IMG.project_1, IMG.project_2, IMG.living_modern],
      features: ['Pool Design', 'Landscape Architecture', 'Water Features', 'Irrigation Systems']
    },
    {
      title: 'Turnkey Solutions',
      description: 'End-to-end project management from initial concept to final handover with complete responsibility.',
      images: [IMG.turnkey, IMG.kitchen_gold, IMG.pool_landscape, IMG.living_marble],
      features: ['Full Project Management', 'Design & Planning', 'Construction', 'Quality Control']
    },
    {
      title: 'Pergola Design & Installation',
      description: 'Custom pergola structures enhancing outdoor spaces with elegant shade solutions and architectural beauty.',
      images: [IMG.living_modern, IMG.pool_landscape, IMG.project_1, IMG.kitchen_marble],
      features: ['Custom Designs', 'Durable Materials', 'Professional Installation', 'Weather Resistant']
    },
    {
      title: 'Maintenance Services',
      description: 'Comprehensive maintenance solutions ensuring your property remains in pristine condition year-round.',
      images: [IMG.kitchen_marble, IMG.living_marble, IMG.kitchen_gold, IMG.project_2],
      features: ['Regular Inspections', 'Preventive Care', 'Quick Repairs', 'Annual Contracts']
    },
    {
      title: 'Glass Partitions & Office Dividers',
      description: 'Modern glass partition systems and office dividers creating functional and aesthetic workspace solutions.',
      images: [IMG.living_marble, IMG.kitchen_gold, IMG.living_modern, IMG.project_1],
      features: ['Frameless Glass', 'Soundproof Options', 'Custom Sizes', 'Safety Glass']
    },
    {
      title: 'Custom Furniture Design',
      description: 'Bespoke furniture solutions tailored to your space, style, and functional requirements.',
      images: [IMG.kitchen_gold, IMG.living_marble, IMG.kitchen_marble, IMG.living_modern],
      features: ['Made-to-Order', 'Premium Woods', 'Modern Designs', 'Expert Craftsmanship']
    },
    {
      title: 'Design, Build & Maintenance',
      description: 'Integrated services combining design creativity, quality construction, and ongoing maintenance support.',
      images: [IMG.pool_landscape, IMG.turnkey, IMG.project_1, IMG.kitchen_gold],
      features: ['Concept Development', 'Construction Excellence', 'Post-Completion Care', 'Long-term Support']
    },
    {
      title: 'Electrical Services',
      description: 'Complete electrical installation, maintenance, and upgrade services for residential and commercial properties.',
      images: [IMG.turnkey, IMG.kitchen_marble, IMG.living_modern, IMG.project_2],
      features: ['Wiring & Installation', 'Safety Inspections', 'Energy Solutions', 'Emergency Repairs']
    },
    {
      title: 'HVAC & Air Conditioning',
      description: 'Professional heating, ventilation, and air conditioning systems installation and maintenance services.',
      images: [IMG.living_modern, IMG.kitchen_gold, IMG.pool_landscape, IMG.living_marble],
      features: ['AC Installation', 'System Maintenance', 'Energy Efficiency', 'Emergency Service']
    },
    {
      title: 'MEP Works',
      description: 'Comprehensive Mechanical, Electrical, and Plumbing services ensuring complete building functionality.',
      images: [IMG.kitchen_marble, IMG.turnkey, IMG.project_1, IMG.living_modern],
      features: ['Mechanical Systems', 'Electrical Infrastructure', 'Plumbing Solutions', 'Integrated Design']
    },
    {
      title: 'Residential Landscaping',
      description: 'Transforming residential outdoor spaces into beautiful, functional gardens and leisure areas.',
      images: [IMG.pool_landscape, IMG.project_2, IMG.living_marble, IMG.kitchen_gold],
      features: ['Garden Design', 'Lawn Installation', 'Plant Selection', 'Outdoor Lighting']
    },
    {
      title: 'Commercial Landscaping',
      description: 'Professional landscaping solutions for commercial properties enhancing curb appeal and value.',
      images: [IMG.living_marble, IMG.pool_landscape, IMG.project_1, IMG.kitchen_marble],
      features: ['Corporate Landscapes', 'Maintenance Plans', 'Seasonal Updates', 'Sustainable Design']
    },
    {
      title: 'Exterior Cladding & Finishing',
      description: 'Premium exterior cladding and finishing solutions protecting and beautifying building facades.',
      images: [IMG.kitchen_gold, IMG.living_modern, IMG.turnkey, IMG.project_2],
      features: ['Stone Cladding', 'Modern Materials', 'Weather Protection', 'Aesthetic Enhancement']
    },
  ];

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
        
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideUp { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1); }
        
        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }
        
        .curved-box {
          border-radius: 20px;
          overflow: hidden;
        }

        .whatsapp-float {
          position: fixed;
          left: 20px;
          bottom: 20px;
          z-index: 100;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        .call-float {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 100;
          width: 60px;
          height: 60px;
          background: #E8B92C;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.3s;
        }
        .call-float:hover {
          transform: scale(1.1);
        }
      `}</style>

      {/* NAVIGATION */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(232, 185, 44, 0.3)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
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
              <div className="text-[8px] font-light tracking-wide text-[#E8B92C]/80" dir="rtl">رويال تراك للمقاولات البناء ش.ذ.م.م</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-white">
            {[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/#about' },
              { label: 'Services', href: '/services' },
              { label: 'Projects', href: '/#projects' },
              { label: 'Contact Us', href: '/#contact' },
            ].map((item) => (
              <Link 
                key={item.label}
                href={item.href}
                className="text-sm font-medium tracking-wide hover:text-[#E8B92C] transition-all duration-300 font-elegant relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E8B92C] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/#contact" className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 transition-all duration-300 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105">
            GET QUOTE →
          </Link>

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
                <Link 
                  key={item}
                  href={item === 'Home' ? '/' : item === 'Services' ? '/services' : `/#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white text-lg font-elegant hover:text-[#E8B92C] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION - FULL SCREEN */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        <img src={IMG.kitchen_gold} alt="Services Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-4">
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">WHAT WE OFFER</span>
            </div>
            
            <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4 font-bold">
              Our <span className="gold-gradient">Services</span>
            </h1>
            
            <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">
              Comprehensive construction and contracting solutions delivered with excellence across the UAE
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#services-list" className="px-6 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
                EXPLORE SERVICES →
              </Link>
              <Link href="/#contact" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services-list" className="py-24 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR EXPERTISE</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-stone-900 mb-4">
              Complete <span className="gold-gradient">Construction Solutions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {service.images.map((img, imgIdx) => (
                    <img 
                      key={imgIdx}
                      src={img} 
                      alt={service.title} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        (activeSlides[idx] || 0) === imgIdx ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                <div className="p-8">
                  <h3 className="font-display text-xl mb-3 group-hover:text-[#E8B92C] transition-colors">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link href="/#contact" className="inline-flex items-center gap-2 text-[#E8B92C] text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">OUR PROMISE</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Service <span className="gold-gradient">Excellence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '⚡', title: 'Fast Turnaround', desc: 'Quick project completion without compromising quality standards' },
              { icon: '🎯', title: 'Precision Work', desc: 'Meticulous attention to detail in every aspect of execution' },
              { icon: '💼', title: 'Professional Team', desc: 'Experienced craftsmen and project managers' },
              { icon: '🔒', title: 'Quality Guarantee', desc: 'Comprehensive warranty on all completed work' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display text-xl mb-3 text-[#E8B92C]">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT PROCESS */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">HOW IT WORKS</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-stone-900 mb-4">
              Our <span className="gold-gradient">Work Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Initial Consultation', desc: 'Discuss your vision, requirements, and project scope' },
              { step: '2', title: 'Design & Planning', desc: 'Create detailed plans, timelines, and cost estimates' },
              { step: '3', title: 'Expert Execution', desc: 'Professional construction with quality control' },
              { step: '4', title: 'Final Handover', desc: 'Complete delivery with satisfaction guarantee' },
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white curved-box p-8 border-2 border-stone-200 hover:border-[#E8B92C] transition-all hover-lift">
                <div className="text-5xl font-display font-bold text-[#E8B92C]/20 mb-4">{item.step}</div>
                <h3 className="font-display text-xl mb-3 text-stone-900">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-6 font-bold">
            Ready to Start Your <span className="gold-gradient">Project?</span>
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's bring your vision to life
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#contact" className="px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
              GET IN TOUCH →
            </Link>
            <a href="tel:+97143934374" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
              CALL US NOW
            </a>
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
                  <Link key={link} href={link === 'Home' ? '/' : link === 'Services' ? '/services' : `/#${link.toLowerCase().replace(' ', '-')}`} className="block text-white/70 hover:text-[#E8B92C] text-sm transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-5">Contact</div>
              <div className="space-y-3 text-sm text-white/70">
                <div className="break-all">Info@royaltrack.ae</div>
                <div>Landline: +971 4 393 4374</div>
                <div>Phone: +971 5 5282 4492</div>
                <div>13 45A St - Al Muraqqabat, Abu Baker Al Siddique St, 21st Century Building, 3rd Floor, Office No 303, Dubai, UAE</div>
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

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="whatsapp-float" title="Chat on WhatsApp">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* FLOATING CALL */}
      <a href="tel:+97143934374" className="call-float" title="Call Us">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </a>
    </div>
  );
}
