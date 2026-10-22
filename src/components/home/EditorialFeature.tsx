'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Cpu, Eye, Zap, ShieldCheck } from 'lucide-react';

export const EditorialFeature: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden relative" aria-label="Editorial Technology Spotlight">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-enterprise relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#D71920] text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Edge AI Breakthrough 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Next-Gen DeepinView: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
                Neural Edge Vision at 0.0005 Lux
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Equipped with our latest 8th-generation neural processing unit, NexusVision cameras execute multi-layered convolutional neural inference directly at the optical sensor edge. By classifying human postures, vehicle models, and optical license plates in sub-milliseconds, false intrusion alarms are reduced by over 99.8%.
            </p>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-800">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#D71920] block">99.8%</span>
                <span className="text-xs text-gray-400">Target Accuracy</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white block">0.0005</span>
                <span className="text-xs text-gray-400">Lux Sensitivity</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white block">60 fps</span>
                <span className="text-xs text-gray-400">Real-Time Inference</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/technologies/deepinview-ai"
                className="px-6 py-3 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded-md transition-all shadow-md flex items-center gap-2 group cursor-pointer"
              >
                <span>Read Technology Whitepaper</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/products/video-security/network-cameras/nex-pro-bullet-8mp"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold rounded-md transition-all border border-gray-700 flex items-center gap-2"
              >
                <span>View Compatible Hardware</span>
              </Link>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-gray-700/80 shadow-2xl">
              <Image
                src="/images/card-cameras.jpg"
                alt="DeepinView Flagship Camera Hardware"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />

              {/* Floating feature pills on visual */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                <span className="text-[11px] font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D71920]" />
                  F1.0 Super Aperture
                </span>
                <span className="text-[11px] font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  DarkFighterX Fusion
                </span>
                <span className="text-[11px] font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  IP67 &amp; IK10 Vandal Proof
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
