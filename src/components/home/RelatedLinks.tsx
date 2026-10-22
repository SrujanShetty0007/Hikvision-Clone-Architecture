'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const RelatedLinks: React.FC = () => {
  const cards = [
    {
      title: 'Solutions',
      subtitle: 'See a wide array of solutions for real-world applications',
      imageUrl: '/images/card-smb.jpg',
      link: '/solutions',
    },
    {
      title: 'Success Stories',
      subtitle: 'How we turn our value propositions into your actual benefits',
      imageUrl: '/images/hero-education.jpg',
      link: '/news',
    },
    {
      title: 'Core Technologies',
      subtitle: 'Unlock business competencies and how they protect you',
      imageUrl: '/images/card-display.jpg',
      link: '/technologies',
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] border-t border-gray-200/80 font-sans" aria-label="Related links">
      <div className="container-enterprise">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Related links
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <Link
              key={i}
              href={c.link}
              className="group relative h-40 rounded-lg overflow-hidden bg-gray-900 shadow-sm border border-gray-200 flex flex-col justify-end p-5 transition-all"
            >
              <Image
                src={c.imageUrl}
                alt={c.title}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 text-white">
                <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-gray-300 mt-0.5 line-clamp-1 leading-relaxed">
                  {c.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
