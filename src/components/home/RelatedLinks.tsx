'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const RelatedLinks: React.FC = () => {
  const cards = [
    {
      title: 'Global Channel Partner Program 2026',
      subtitle: 'Exclusive discounts, lead distribution, and advance RMA replacement for certified systems integrators.',
      tag: 'Partner Network',
      imageUrl: '/images/hero-summit.jpg',
      link: '/partners',
    },
    {
      title: 'NexTech Innovation Summit Keynotes',
      subtitle: 'Explore 30+ technical deep-dives into edge computer vision, cybersecurity hardening, and hybrid cloud AIoT.',
      tag: 'Annual Summit',
      imageUrl: '/images/hero-smb.jpg',
      link: '/technologies',
    },
    {
      title: 'Sustainability & Zero-Carbon Operations',
      subtitle: 'Discover how SolarVu autonomous systems reduce carbon emissions while safeguarding clean energy installations.',
      tag: 'ESG & Corporate Impact',
      imageUrl: '/images/card-solar.jpg',
      link: '/about',
    },
  ];

  return (
    <section className="py-16 bg-[#F5F6F7] border-t border-gray-200/80" aria-label="Corporate Initiatives and Related Links">
      <div className="container-enterprise">
        <div className="mb-8">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
            Global Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Strategic Initiatives &amp; Alliances
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Link
              key={i}
              href={c.link}
              className="group relative h-80 rounded-2xl overflow-hidden bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-end p-6 border border-gray-200"
            >
              <Image
                src={c.imageUrl}
                alt={c.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-85"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D71920] bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs mb-2 inline-block">
                  {c.tag}
                </span>
                <h3 className="text-lg font-bold leading-snug group-hover:text-red-300 transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2 leading-relaxed">
                  {c.subtitle}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#D71920] transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
