'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  secondaryCtaType?: 'link' | 'video';
  imageUrl: string;
  theme: 'dark' | 'light';
  pillBadges?: string[];
}

const slides: HeroSlide[] = [
  {
    id: 'slide-smb-converged',
    title: 'SMB Converged Solutions',
    subtitle: 'Seamless product linkage. Smarter SMB protection.',
    primaryCtaText: 'Learn Now',
    primaryCtaLink: '/solutions/industry/retail',
    imageUrl: '/images/hero-smb.jpg',
    theme: 'light',
    pillBadges: [
      'Alarm-Video Linkage',
      'Access-Triggered Video Verification',
      'Automatic Disarm via Face Recognition',
      'Intelligent Gate Automation',
      'ANPR & Face Dual Verification',
      'Visualized Remote Troubleshooting',
    ],
  },
  {
    id: 'slide-tech-summit',
    title: 'NexTech Star 2026',
    subtitle: 'Your Vision. Your Impact. Your Stage.',
    primaryCtaText: 'Unveil Now',
    primaryCtaLink: '/technologies/deepinview-ai',
    secondaryCtaText: 'Watch Video',
    secondaryCtaLink: '#watch-keynote',
    secondaryCtaType: 'video',
    imageUrl: '/images/hero-summit.jpg',
    theme: 'dark',
  },
  {
    id: 'slide-smart-education',
    title: 'AI-Centered Smart Education',
    subtitle: 'Transforming Teaching with AI, Intelligent Displays & Cloud Collaboration',
    primaryCtaText: 'Learn More',
    primaryCtaLink: '/solutions/industry/education',
    secondaryCtaText: 'Download the Whitepaper',
    secondaryCtaLink: '/support/downloads',
    imageUrl: '/images/hero-education.jpg',
    theme: 'light',
  },
  {
    id: 'slide-solar-vu',
    title: 'AOV SolarVu™ Autonomous Security',
    subtitle: '100% Off-Grid 4G PTZ Vision with 24/7 ColorVu Night Optics',
    primaryCtaText: 'Explore SolarVu Kit',
    primaryCtaLink: '/products/video-security/network-cameras/nex-solar-camera-4g',
    secondaryCtaText: 'Off-Grid Solutions',
    secondaryCtaLink: '/solutions/industry/energy',
    imageUrl: '/images/card-solar.jpg',
    theme: 'dark',
    pillBadges: [
      '80W Monocrystalline Solar Panel',
      '360Wh Smart Lithium Battery',
      '4G LTE Cellular Uplink',
      '7 Days Rainy Weather Endurance',
      'F1.0 Full-Color at 0.0005 Lux',
    ],
  },
];

interface HeroCarouselProps {
  onOpenVideo?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenVideo }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 7000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIdx]);

  const slide = slides[currentIdx];
  const isDark = slide.theme === 'dark';

  return (
    <section
      className="relative w-full h-[65vh] min-h-[520px] max-h-[780px] bg-gray-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Promotional Hero Showcase"
    >
      {/* Background Image Slides */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={s.imageUrl}
            alt={s.title}
            fill
            priority={idx === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle gradient overlay to guarantee text legibility */}
          <div
            className={`absolute inset-0 ${
              s.theme === 'dark'
                ? 'bg-gradient-to-r from-black/85 via-black/40 to-transparent'
                : 'bg-gradient-to-r from-white/90 via-white/50 to-transparent'
            }`}
          />
        </div>
      ))}

      {/* Slide Content Layer */}
      <div className="relative z-20 h-full container-enterprise flex flex-col justify-between py-12 md:py-16">
        {/* Main Text Content */}
        <div className="max-w-2xl mt-4 md:mt-10 animate-fade-in" key={slide.id}>
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 ${
              isDark ? 'text-white' : 'text-gray-950'
            }`}
          >
            {slide.title}
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}
          >
            {slide.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href={slide.primaryCtaLink}
              className="px-6 sm:px-8 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-semibold rounded tracking-wide transition-colors shadow-sm flex items-center gap-2 group cursor-pointer"
            >
              <span>{slide.primaryCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {slide.secondaryCtaText && (
              slide.secondaryCtaType === 'video' ? (
                <button
                  onClick={onOpenVideo}
                  className={`px-5 sm:px-6 py-2.5 rounded text-xs font-semibold border transition-colors flex items-center gap-2 cursor-pointer ${
                    isDark
                      ? 'border-white/80 text-white hover:bg-white/10'
                      : 'border-gray-800 text-gray-900 hover:bg-black/5'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{slide.secondaryCtaText}</span>
                </button>
              ) : (
                <Link
                  href={slide.secondaryCtaLink || '#'}
                  className={`px-5 sm:px-6 py-2.5 rounded text-xs font-semibold border transition-colors ${
                    isDark
                      ? 'border-white/80 text-white hover:bg-white/10'
                      : 'border-gray-800 text-gray-900 hover:bg-black/5'
                  }`}
                >
                  {slide.secondaryCtaText}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Floating Feature Tags at Bottom */}
        {slide.pillBadges && slide.pillBadges.length > 0 && (
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-2.5 max-w-4xl pt-4 animate-fade-in">
            {slide.pillBadges.map((badge, bIdx) => (
              <div
                key={bIdx}
                className="px-3.5 py-2 rounded bg-white/90 border border-gray-200 text-xs font-medium text-gray-800 shadow-2xs flex items-center gap-2 transition-colors cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D71920]" />
                <span className="line-clamp-1">{badge}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Edge: Vertical Pagination & Play/Pause Controls (Matching Screenshot 2 & 3) */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
        {slides.map((_, idx) => {
          const isActive = idx === currentIdx;
          return (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`transition-all rounded-full flex items-center justify-center font-mono cursor-pointer ${
                isActive
                  ? 'w-7 h-7 text-xs font-bold bg-white text-gray-950 shadow-md border border-gray-300'
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {isActive && (idx + 1)}
            </button>
          );
        })}

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="mt-2 text-white/60 hover:text-white p-1 transition-colors"
          title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
          aria-label={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Subtle Bottom Arrows for manual stepping */}
      <div className="absolute left-6 bottom-4 z-30 hidden sm:flex items-center gap-2 text-white/70">
        <button
          onClick={prevSlide}
          className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 rounded-full bg-black/30 hover:bg-black/60 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
