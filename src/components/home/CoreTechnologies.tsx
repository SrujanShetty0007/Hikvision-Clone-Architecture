'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface TechSlide {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  link: string;
  videoUrl?: string;
  imageUrl?: string;
}

const techSlides: TechSlide[] = [
  {
    id: 'tech-guanlan',
    title: 'Guanlan Encoding',
    description:
      'Guanlan Encoding brings our Guanlan Large-Scale AI Model directly into the video encoding pipeline — cutting storage costs by 30%–50% on average without compromising the clarity of critical objects like people and vehicles.',
    ctaText: 'Discover Now',
    link: '/technologies/deepinview-ai',
    videoUrl: '/videos/core-tech-encoding.mp4',
  },
  {
    id: 'tech-colorvu',
    title: 'ColorVu 3.0 Ultra-Low-Light Optics',
    description:
      'Empowered by F1.0 super-apertures and advanced 1/1.2" sensors, ColorVu achieves vivid true-to-life color imaging in ultra-low light (0.0005 Lux) without requiring blinding supplemental white spotlights.',
    ctaText: 'Discover Now',
    link: '/technologies/colorvu-technology',
    imageUrl: '/images/card-cameras.jpg',
  },
  {
    id: 'tech-minmoe',
    title: 'MinMoe Deep Learning Biometrics',
    description:
      'Dual-lens anti-spoofing algorithm authenticates user facial profiles in under 0.2 seconds across 50,000 enrolled credentials with real-time live-body verification and zero-latency door release.',
    ctaText: 'Discover Now',
    link: '/products/access-control',
    imageUrl: '/images/card-display.jpg',
  },
  {
    id: 'tech-solarvu',
    title: 'AOV Always-On Off-Grid Security',
    description:
      'Dual radar-PIR triggered wake-up algorithm with intelligent battery thermal management delivers 100% off-grid 4G surveillance with up to 7 consecutive rainy days endurance in extreme weather.',
    ctaText: 'Discover Now',
    link: '/products/video-security/network-cameras/nex-solar-camera-4g',
    imageUrl: '/images/card-solar.jpg',
  },
];

export const CoreTechnologies: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? techSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === techSlides.length - 1 ? 0 : prev + 1));
  };

  const slide = techSlides[currentIdx];

  return (
    <section className="bg-black text-white py-18 md:py-24 font-sans overflow-hidden select-none" aria-label="Core Technologies">
      <div className="container-enterprise">
        {/* Top Header Row matching Hikvision Reference */}
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Core Technologies
          </h2>

          <Link
            href="/technologies"
            className="text-sm font-semibold text-white/90 hover:text-white inline-flex items-center gap-1.5 transition-colors group"
          >
            <span>View more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-Column Main Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center min-h-[420px] md:min-h-[480px]">
          {/* Left Column: Video Animation / Visual Graphic */}
          <div className="lg:col-span-7 flex items-center justify-center">
            {slide.videoUrl ? (
              <div className="relative w-full max-w-2xl aspect-16/10 sm:aspect-video rounded-2xl overflow-hidden flex items-center justify-center">
                <video
                  key={slide.id}
                  src={slide.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            ) : (
              <div className="relative w-full max-w-2xl aspect-16/10 sm:aspect-video rounded-2xl overflow-hidden bg-gray-950 flex items-center justify-center p-8 border border-gray-900">
                <Image
                  src={slide.imageUrl || '/images/card-cameras.jpg'}
                  alt={slide.title}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            )}
          </div>

          {/* Right Column: Editorial Text & Discovery CTA */}
          <div className="lg:col-span-5 space-y-6 animate-fade-in" key={slide.id}>
            <h3 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-white leading-tight tracking-tight">
              {slide.title}
            </h3>

            <p className="text-base sm:text-[17px] text-gray-300 leading-relaxed font-normal">
              {slide.description}
            </p>

            <div className="pt-2">
              <Link
                href={slide.link}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/80 hover:border-white text-white hover:bg-white hover:text-black transition-all text-sm font-semibold tracking-wide cursor-pointer shadow-sm"
              >
                <span>{slide.ctaText}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Controls matching Reference Screenshot */}
        <div className="flex items-center justify-center gap-6 mt-12 md:mt-16 pt-4">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous Technology"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carousel Dots */}
          <div className="flex items-center gap-2.5">
            {techSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`transition-all rounded-full cursor-pointer flex items-center justify-center ${
                  idx === currentIdx
                    ? 'w-3.5 h-3.5 border-2 border-white bg-transparent'
                    : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next Technology"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
