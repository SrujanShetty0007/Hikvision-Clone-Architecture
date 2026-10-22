'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Globe2, ShieldCheck, Leaf, Users, Building, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Hero Banner */}
      <div className="relative w-full h-80 sm:h-96 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src="/images/card-cameras.jpg"
          alt="About NexusVision"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-4 max-w-2xl">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            About Our Enterprise
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Empowering Vision, Inspiring Tomorrow
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            NexusVision is an IoT solution provider with video as its core competency. Operating in over 150 countries, we dedicate over 10% of annual revenues to pioneering R&amp;D.
          </p>
        </div>
      </div>

      <div className="container-enterprise py-14 space-y-20">
        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { metric: '150+', label: 'Countries & Regions Served' },
            { metric: '52,000+', label: 'Global Employees Worldwide' },
            { metric: '25,000+', label: 'Dedicated R&D Engineers' },
            { metric: '10%+', label: 'Annual Revenue Invested in R&D' },
          ].map((m, i) => (
            <div key={i} className="p-6 bg-white rounded-xl border border-gray-200 text-center shadow-2xs">
              <span className="text-3xl sm:text-4xl font-black text-[#D71920] font-mono block">
                {m.metric}
              </span>
              <span className="text-xs text-gray-600 font-semibold mt-1 block">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Corporate Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="leadership">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
              Corporate Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              Pioneering Machine Perception for an Interconnected Planet
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Founded with the vision to illuminate the world with precision optical science, NexusVision has grown from an innovator in digital video compression codecs into a global technological powerhouse.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Today, our solutions extend far beyond traditional video surveillance to incorporate multi-dimensional sensing: millimeter-wave radar, thermal radiation, sound spectrum analysis, and environmental air quality sensors, all synthesized through edge artificial intelligence.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/products"
                className="px-6 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded transition-colors"
              >
                Explore Hardware Range
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-white border border-gray-300 text-gray-800 text-xs font-bold rounded hover:bg-gray-50 transition-colors"
              >
                Global Offices
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/hero-education.jpg"
                alt="NexusVision Global Innovation Center"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Sustainability & ESG */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200 shadow-2xs" id="sustainability">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-emerald-600 mb-2">
              <Leaf className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Green Tech Commitment
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              Sustainability &amp; Environmental Stewardship
            </h3>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Committed to achieving net-zero operational carbon emissions by 2040. We champion green product life cycles from energy-efficient manufacturing to solar-powered autonomous camera deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'SolarVu Clean Energy Vision',
                desc: 'Eliminating the need for miles of copper wiring and fossil-fueled generators at off-grid agricultural and construction sites.',
              },
              {
                title: 'Eco-Friendly Packaging',
                desc: '100% biodegradable, unbleached recycled carton packaging and plastic-free component trays across all volume product lines.',
              },
              {
                title: 'Low-Power AI Silicon',
                desc: 'Edge tensor processors optimized for sub-10W power envelopes, reducing facility data center electricity footprints.',
              },
            ].map((card, idx) => (
              <div key={idx} className="p-5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
                <h4 className="text-sm font-bold text-gray-900">{card.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
