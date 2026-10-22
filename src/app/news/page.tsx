'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export default function NewsroomPage() {
  const articles = [
    {
      id: 'news-1',
      title: 'NexusVision Unveils 8th-Gen DeepinView Neural Processing Architecture at London ExCeL',
      date: 'March 15, 2026',
      category: 'Product Launch',
      summary: 'Delivering real-time multi-attribute vehicle and posture analytics at 0.0005 Lux with over 99.8% precision, cutting operational false alarms dramatically.',
      image: '/images/hero-summit.jpg',
    },
    {
      id: 'news-2',
      title: 'SolarVu Autonomous Kit Surpasses 10,000 Global Clean Energy Installations',
      date: 'February 28, 2026',
      category: 'Milestone',
      summary: 'Off-grid 4G solar camera installations across European wind farms and American solar arrays have saved an estimated 1,400 tons of carbon emissions.',
      image: '/images/card-solar.jpg',
    },
    {
      id: 'news-3',
      title: 'NexusVision Wins 2026 International Design Award for Interactive Touch Displays',
      date: 'January 18, 2026',
      category: 'Corporate Honor',
      summary: 'The 86-inch 4K Smart Board recognized for ergonomic anti-glare optical bonding and ultra-fine 1mm infrared writing precision in education.',
      image: '/images/hero-education.jpg',
    },
    {
      id: 'news-4',
      title: 'Global Channel Partner Summit 2026 Scheduled for October in Amsterdam',
      date: 'January 10, 2026',
      category: 'Events',
      summary: 'Over 2,500 security installers and systems integrators to converge for technical masterclasses, live interoperability demos, and partner award ceremonies.',
      image: '/images/card-display.jpg',
    },
  ];

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="container-enterprise">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-2">
            Newsroom &amp; Media Center
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Corporate News &amp; Press Releases
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
            Stay informed with official corporate announcements, technical innovation launches, and international event schedules.
          </p>
        </div>
      </div>

      <div className="container-enterprise py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/9 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-black/70 text-white backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#D71920] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-2">
                <span className="text-xs font-bold text-[#D71920] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer">
                  Read Press Release <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
