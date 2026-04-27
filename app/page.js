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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">

      {/* HERO SECTION (FIXED WITH VIDEO) */}
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

          <p className="text-lg md:text-xl text-white/80 mb-6">
            Premium villas, landscaping & pools
          </p>

          <a
            href="#contact"
            className="bg-[#E8B92C] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#d4a514] transition"
          >
            Get Free Consultation
          </a>
        </div>

      </section>

      {/* SIMPLE CONTENT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Website is Working 🚀</h2>
        <p className="text-stone-600">All errors fixed successfully</p>
      </section>

    </div>
  );
}
