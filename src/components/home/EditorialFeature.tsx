'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const EditorialFeature: React.FC = () => {
  return (
    <section className="py-20 bg-[#1A1C20] text-white overflow-hidden" aria-label="Editorial Technology Spotlight">
      <div className="container-enterprise">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-7">
            <span className="text-sm font-bold text-[#D71920] uppercase tracking-wider block">
              Core Vision Architecture
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Next-Gen DeepinView: Neural Edge Vision at 0.0005 Lux
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
              Equipped with our latest 8th-generation neural processing unit, NEXUSVISION cameras execute multi-layered convolutional neural inference directly at the optical sensor edge. By classifying human postures, vehicle models, and license plates in sub-milliseconds, false intrusion alarms are eliminated.
            </p>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-5 border-t border-gray-700/60">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#D71920] block">99.8%</span>
                <span className="text-sm text-gray-300 mt-1 block">Target Accuracy</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white block">0.0005</span>
                <span className="text-sm text-gray-300 mt-1 block">Lux Sensitivity</span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white block">60 fps</span>
                <span className="text-sm text-gray-300 mt-1 block">Real-Time Inference</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/technologies/deepinview-ai"
                className="px-7 py-3 bg-[#D71920] hover:bg-[#B81419] text-white text-sm font-semibold rounded-full tracking-wide transition-colors flex items-center gap-2 group shadow-md"
              >
                <span>Read Technology Whitepaper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="/products/video-security/network-cameras"
                className="px-7 py-3 border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white text-sm font-semibold rounded-full tracking-wide transition-colors"
              >
                <span>Explore Products</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Column: Clean product hardware on dark ground */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 w-full rounded overflow-hidden border border-gray-800 shadow-lg bg-[#0F1012] flex items-center justify-center p-6">
              <Image
                src="/images/card-cameras.jpg"
                alt="DeepinView Flagship Camera Hardware"
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
