'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface FeatureCardItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  link: string;
}

const featuredItems: FeatureCardItem[] = [
  {
    id: 'feat-1',
    title: 'Pro Series Network Cameras',
    subtitle: 'Supreme 4K Clarity & DarkFighter Night Optics',
    category: 'Flagship Hardware',
    imageUrl: '/images/card-cameras.jpg',
    link: '/products/video-security/network-cameras',
  },
  {
    id: 'feat-2',
    title: 'AOV SolarVu™ Camera',
    subtitle: 'Always-On Autonomous 4G Solar Surveillance',
    category: 'Off-Grid Security',
    imageUrl: '/images/card-solar.jpg',
    link: '/products/video-security/network-cameras/nex-solar-camera-4g',
  },
  {
    id: 'feat-3',
    title: 'SMB Converged Solutions',
    subtitle: 'Unified Video, Alarm & Cloud Mobile Linkage',
    category: 'Commercial Solutions',
    imageUrl: '/images/card-smb.jpg',
    link: '/solutions/industry/retail',
  },
  {
    id: 'feat-4',
    title: 'Commercial Interactive Displays',
    subtitle: '4K Ultra Touch Panels for Modern Collaboration',
    category: 'Display & ProAV',
    imageUrl: '/images/card-display.jpg',
    link: '/products/infrastructure-display/displays',
  },
  {
    id: 'feat-5',
    title: 'Bi-Spectrum Thermal Systems',
    subtitle: 'Early Fire Warning & Thermographic Detection',
    category: 'Industrial Vision',
    imageUrl: '/images/card-thermal.jpg',
    link: '/products/infrastructure-display/thermal',
  },
];

export const FeaturedCarousel: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  // Wheel scroll listener: convert vertical wheel to horizontal smooth slide
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const scrollEl = scrollContainerRef.current;
    if (!sectionEl || !scrollEl) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const atStart = scrollEl.scrollLeft <= 5;
        const atEnd = scrollEl.scrollLeft >= scrollEl.scrollWidth - scrollEl.clientWidth - 5;

        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
          e.preventDefault();
          scrollEl.scrollLeft += e.deltaY * 1.5;
        }
      }
    };

    sectionEl.addEventListener('wheel', handleWheel, { passive: false });
    return () => sectionEl.removeEventListener('wheel', handleWheel);
  }, []);

  // Mouse Drag to Slide
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) setHasDragged(true);
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-22 bg-white overflow-hidden font-sans"
      aria-label="Featured Highlights"
    >
      <div className="container-enterprise">
        {/* Section Header with Left Title and Right Arrows */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-sm font-bold text-[#D71920] uppercase tracking-wider block mb-1.5">
              Innovations &amp; Flagship Releases
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Featured Products &amp; Solutions
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-800 transition-colors shadow-2xs cursor-pointer"
              aria-label="Previous Featured Card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-gray-300 bg-white hover:bg-gray-100 flex items-center justify-center text-gray-800 transition-colors shadow-2xs cursor-pointer"
              aria-label="Next Featured Card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Gallery: supports mouse drag, wheel scroll & arrow controls */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex gap-7 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 select-none ${
            isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              onClick={(e) => {
                if (hasDragged) e.preventDefault();
              }}
              className="group relative shrink-0 w-[320px] sm:w-[380px] md:w-[420px] h-[520px] rounded-2xl overflow-hidden bg-gray-900 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-8 border border-gray-100"
            >
              {/* Background Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                sizes="(max-width: 768px) 340px, 440px"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity group-hover:from-black/90 pointer-events-none" />

              {/* Content overlay with generous readable enterprise typography */}
              <div className="relative z-10 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/95 bg-black/50 backdrop-blur-xs px-3.5 py-1.5 rounded-sm inline-block mb-3 border border-white/20">
                  {item.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-gray-200 mt-2.5 line-clamp-2 leading-relaxed font-normal">
                  {item.subtitle}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#D71920] transition-colors">
                  <span>Explore Series</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
