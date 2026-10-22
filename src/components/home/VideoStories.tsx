'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CaseStudySlide {
  id: string;
  title: string;
  tags: string;
  imageUrl: string;
  link: string;
}

const caseStudies: CaseStudySlide[] = [
  {
    id: 'case-1',
    title: "Bank Dana Nusantara builds a smarter workplace with NexusVision's smart building solution",
    tags: 'Parking management, Speed gates and turnstiles, Access Control, Audio products, Building, Entrance & exit management, Guanlan large-scale AI models, Indonesia, Information display, Interactive flat panel displays, Network cameras, Networking, Perimeter Protection, Radar, Software, Thermal, Visitor management',
    imageUrl: '/images/case-study-building.jpg',
    link: '/solutions/industry/commercial',
  },
  {
    id: 'case-2',
    title: 'Mojave Clean Energy 500MW Facility Deploys 120 Off-Grid Autonomous SolarVu Cameras',
    tags: 'SolarVu Autonomous Series, Perimeter Radar, 4G Cellular Linkage, Clean Energy, Thermal Early Fire Warning, High Desert Remote Security, California',
    imageUrl: '/images/card-solar.jpg',
    link: '/solutions/industry/energy',
  },
  {
    id: 'case-3',
    title: 'St. Andrews Metropolitan Academy Upgrades 1,800 Students to MinMoe Biometric Access',
    tags: 'Smart Campus, MinMoe Touchless Access Terminals, 4K Interactive Displays, Visitor Management, Student Safety Linkage',
    imageUrl: '/images/hero-education.jpg',
    link: '/solutions/industry/education',
  },
];

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail: string;
  link: string;
}

const rightNewsItems: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Wireless Security Cameras Explained: Types, Technologies, and How to Choose the Right Solution',
    category: 'HikSnap',
    date: 'August 28, 2026',
    thumbnail: '/images/card-solar.jpg',
    link: '/products/video-security/network-cameras/nex-solar-camera-4g',
  },
  {
    id: 'news-2',
    title: 'How to effectively leverage AI-powered intelligent displays and cloud collaboration to transform the full classroom experience',
    category: 'Blog',
    date: 'September 07, 2026',
    thumbnail: '/images/hero-education.jpg',
    link: '/solutions/industry/education',
  },
  {
    id: 'news-3',
    title: 'The future of AI video encoding: Poll finds surging demand for AI-based video encoding',
    category: 'Blog',
    date: 'September 17, 2026',
    thumbnail: '/images/ai-encoding.jpg',
    link: '/technologies/deepinview-ai',
  },
];

export const VideoStories: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-16 md:py-20 bg-white font-sans" aria-label="News and Stories">
      <div className="container-enterprise space-y-8">
        {/* TOP: Wide Case Study Carousel Banner (matching Hikvision Screenshot 2) */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-gray-950 min-h-[340px] md:min-h-[400px] flex flex-col justify-end p-8 md:p-12 text-white group">
          <Image
            src={currentCase.imageUrl}
            alt={currentCase.title}
            fill
            className="object-cover object-center transition-all duration-700 pointer-events-none"
            sizes="100vw"
          />
          {/* Subtle gradient wash to guarantee contrast matching Screenshot 2 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent pointer-events-none" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-4xl space-y-3 animate-fade-in" key={currentCase.id}>
            <Link href={currentCase.link} className="hover:underline block">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold text-white tracking-tight leading-snug">
                {currentCase.title}
              </h3>
            </Link>
            <p className="text-xs sm:text-[13px] text-gray-200 line-clamp-2 md:line-clamp-3 leading-relaxed font-normal">
              {currentCase.tags}
            </p>
          </div>

          {/* Carousel Arrows & Dot Indicators matching Screenshot 2 */}
          <div className="relative z-10 flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/20">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Previous Case Study"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all rounded-full cursor-pointer ${
                    idx === currentSlide
                      ? 'w-6 h-2 bg-white'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Next Case Study"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* BOTTOM: 2-Column News & Feature Grid (matching Hikvision Screenshot 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (Col-7): Large ProAV Launch Feature Card */}
          <Link
            href="/products/infrastructure-display/displays"
            className="lg:col-span-6 xl:col-span-7 group rounded-2xl overflow-hidden bg-gray-950 text-white flex flex-col justify-end p-8 md:p-10 relative min-h-[380px] md:min-h-[440px] shadow-sm hover:shadow-xl transition-all"
          >
            <Image
              src="/images/proav-launch.jpg"
              alt="NexusVision ProAV"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-2.5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight group-hover:text-red-300 transition-colors">
                NexusVision launches ProAV to simplify audiovisual integration and shape richer experiences
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300 font-medium">
                Latest News <span className="mx-1.5 opacity-60">|</span> August 05, 2026
              </p>
            </div>
          </Link>

          {/* Right Column (Col-5): 3 Stacked Horizontal News Items */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between space-y-5">
            {rightNewsItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="group flex items-center gap-4 sm:gap-5 p-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {/* Thumbnail */}
                <div className="relative w-36 sm:w-44 h-24 sm:h-28 shrink-0 rounded-xl overflow-hidden bg-gray-900 shadow-xs">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="180px"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[14.5px] sm:text-base font-bold text-gray-900 group-hover:text-[#D71920] line-clamp-2 leading-snug transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-2 font-medium">
                    {item.category} <span className="mx-1.5 opacity-60">|</span> {item.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
