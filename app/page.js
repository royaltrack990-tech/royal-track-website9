'use client';

import React, { useState, useEffect } from "react";

const IMG = {
  logo: '/images/logo.png',
  pool_landscape: '/images/pool_landscape.jpg',
  kitchen_marble: '/images/kitchen_marble.jpg',
  kitchen_gold: '/images/kitchen_gold.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
};

export default function RoyalTrackHome() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <img src={IMG.logo} className="h-10" />
          <div className="hidden md:flex gap-8 text-white">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Luxury Construction in Dubai
          </h1>

          <p className="text-lg text-white/80 mb-6">
            Premium villas, landscaping & pools
          </p>

          <a
            href="#contact"
            className="bg-[#E8B92C] text-black px-6 py-3 rounded-md font-semibold"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-stone-600 leading-relaxed">
          Royal Track Building & Contracting delivers premium construction,
          landscaping, and interior solutions across Dubai. We focus on quality,
          precision, and long-term durability.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <img src={IMG.kitchen_gold} className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">Interior Fit-Out</h3>
            </div>

            <div>
              <img src={IMG.pool_landscape} className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">Pools & Landscaping</h3>
            </div>

            <div>
              <img src={IMG.living_modern} className="mb-4 rounded" />
              <h3 className="text-xl font-semibold">Turnkey Projects</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <form className="space-y-4">
          <input placeholder="Name" className="w-full border p-3 rounded" />
          <input placeholder="Email" className="w-full border p-3 rounded" />
          <input placeholder="Phone" className="w-full border p-3 rounded" />

          <button className="bg-[#E8B92C] px-6 py-3 rounded font-semibold">
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 Royal Track Contracting
      </footer>

    </div>
  );
}
