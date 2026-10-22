'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { technologiesData } from '@/data/technologies';
import { ContextualNavigation } from '@/components/layout/ContextualNavigation';
import { ArrowRight, Cpu, Eye, Zap, Shield, FileText } from 'lucide-react';

export default function TechnologiesOverviewPage() {
  const contextualNavItems = [
    { label: 'Overview', href: '/technologies', active: true },
    { label: 'DeepinView AI', href: '/technologies/deepinview-ai' },
    { label: 'ColorVu 24/7', href: '/technologies/colorvu-technology' },
    { label: 'DarkFighterX', href: '/technologies/darkfighter-ultra-low-light' },
    { label: 'CyberShield Security', href: '/technologies/cybersecurity' },
  ];

  const categoryIcons: Record<string, any> = {
    'AI & Intelligence': Cpu,
    'Imaging Technology': Eye,
    'Cybersecurity': Shield,
  };

  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Hero Banner */}
      <div className="relative w-full h-80 sm:h-96 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src="/images/hero-smb.jpg"
          alt="NexusVision Technologies"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-4 max-w-2xl">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            R&amp;D Innovations
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Core Vision &amp; AIoT Technologies
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Advancing edge computer vision, night imaging physics, and quantum cybersecurity architectures that define international standards.
          </p>
        </div>
      </div>

      <ContextualNavigation items={contextualNavItems} title="Technologies" />

      <div className="container-enterprise py-14 space-y-12">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
            Pioneering Science
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Proprietary Engineering Platforms
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Explore how our optical lab breakthroughs and edge neural networks deliver unprecedented real-time clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologiesData.map((tech) => {
            const Icon = categoryIcons[tech.category] || Cpu;
            return (
              <div
                key={tech.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-16/10 w-full bg-gray-950 overflow-hidden">
                    <Image
                      src={tech.heroImage}
                      alt={tech.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      sizes="500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                      <div className="w-8 h-8 rounded-lg bg-[#D71920] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                      {tech.summary}
                    </p>

                    {/* Metric Highlights */}
                    <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-gray-100">
                      {tech.keyInnovations.map((inn, i) => (
                        <div key={i}>
                          <span className="text-xs font-bold text-[#D71920] block">
                            {inn.metric || 'Certified'}
                          </span>
                          <span className="text-[10px] text-gray-500 line-clamp-1">{inn.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <Link
                    href={`/technologies/${tech.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Technical Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>

                  <span className="text-[11px] text-gray-400 font-mono">
                    {tech.applicableProducts.length} Compatible Lines
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
