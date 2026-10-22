'use client';

import React, { useRef } from 'react';
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden" aria-label="Featured Highlights">
      <div className="container-enterprise">
        {/* Section Header with Left Title and Right Arrows */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Innovations &amp; Flagship Releases
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Featured Products &amp; Solutions
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors shadow-2xs cursor-pointer"
              aria-label="Previous Featured Card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors shadow-2xs cursor-pointer"
              aria-label="Next Featured Card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Gallery (Matching Screenshot 1) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {featuredItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="group relative shrink-0 w-[290px] sm:w-[340px] md:w-[380px] h-[480px] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 border border-gray-100"
            >
              {/* Background Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 300px, 400px"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:from-black/90" />

              {/* Content overlay */}
              <div className="relative z-10 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/80 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-sm inline-block mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1.5 line-clamp-2">
                  {item.subtitle}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#D71920] transition-colors">
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
