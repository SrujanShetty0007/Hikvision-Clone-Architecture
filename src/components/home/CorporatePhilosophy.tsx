'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface PhilosophyCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  colSpan: string; // Tailwind grid span
  link: string;
}

const philosophyCards: PhilosophyCard[] = [
  {
    id: 'phil-1',
    title: 'Grow Value',
    description:
      'We create value for our customers, partners, and society through continuous innovation, quality products, and dedicated service across all domains.',
    imageUrl: '/images/card-smb.jpg',
    colSpan: 'lg:col-span-4',
    link: '/about',
  },
  {
    id: 'phil-2',
    title: 'What We Care About',
    description:
      'Hikvision\'s commitment to sustainability is embodied in our THRIVE philosophy. With "Tech for Good" at its core, we focus on Harmony, Reliability, Integrity, Value Chain, and Environment—jointly creating a prosperous future with our stakeholders.',
    imageUrl: '/images/case-study-building.jpg',
    colSpan: 'lg:col-span-8',
    link: '/about',
  },
  {
    id: 'phil-3',
    title: 'Build Trust',
    description:
      'We adhere to the highest cybersecurity standards, ensuring data privacy and system integrity to earn and maintain customer trust globally.',
    imageUrl: '/images/hero-summit.jpg',
    colSpan: 'lg:col-span-4',
    link: '/technologies/cybersecurity',
  },
  {
    id: 'phil-4',
    title: 'What We Create & Deliver',
    description:
      'We deliver innovative AIoT products and integrated solutions that empower customers across industries to perceive and understand the world.',
    imageUrl: '/images/card-display.jpg',
    colSpan: 'lg:col-span-4',
    link: '/products',
  },
  {
    id: 'phil-5',
    title: 'Uphold Integrity',
    description:
      'We hold ourselves to the highest ethical standards, conducting business with honesty, transparency, and compliance worldwide.',
    imageUrl: '/images/hero-education.jpg',
    colSpan: 'lg:col-span-4',
    link: '/about',
  },
];

export const CorporatePhilosophy: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white font-sans" aria-label="Corporate Philosophy">
      <div className="container-enterprise">
        {/* Section Heading matching Screenshot 1 & 2 */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 sm:mb-16 tracking-tight">
          Who is Hikvision
        </h2>

        {/* 5-Card Grid with Hover Reveal Content matching Screenshot 1 & 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
          {philosophyCards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className={`group relative h-[320px] sm:h-[350px] md:h-[380px] rounded-[20px] sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block ${card.colSpan}`}
            >
              {/* Background Photo (using existing images from public/images/) */}
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Default Subtle Gradient at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-0 duration-300 pointer-events-none" />

              {/* Default State: Title at Bottom-Left (Screenshot 1) */}
              <div className="absolute bottom-6 sm:bottom-7 left-6 sm:left-7 z-10 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2 pointer-events-none">
                <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* Hover State: Revealed Content Overlay (matching Screenshot 2) */}
              <div className="absolute inset-0 z-20 bg-black/75 backdrop-blur-[2px] p-6 sm:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="space-y-3 sm:space-y-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-gray-200 leading-relaxed font-normal max-w-xl">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Right Circular Arrow Button (matching Screenshot 2) */}
                <div className="flex justify-end pt-4">
                  <div className="w-10 h-10 rounded-full border border-white/90 group-hover:border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-200 shadow-md">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Right Auxiliary Link matching Screenshot 1 */}
        <div className="flex justify-end mt-7 sm:mt-8">
          <Link
            href="/support"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#0066CC] hover:text-[#004C99] transition-colors group"
          >
            <span>Find Your Answers Here</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
