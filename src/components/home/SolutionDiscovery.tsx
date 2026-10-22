'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export const SolutionDiscovery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'scenario' | 'function'>('industry');
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);

  const filteredSolutions = solutionsData.filter((s) => s.type === activeTab);
  // Default to education or first available
  const currentSolution = filteredSolutions[selectedSolutionIndex] || filteredSolutions[0] || solutionsData[0];

  return (
    <section className="py-20 bg-white" aria-label="Solutions Discovery">
      <div className="container-enterprise">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-bold text-[#D71920] uppercase tracking-wider block mb-1.5">
              End-To-End Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Integrated Enterprise Solutions
            </h2>
          </div>

          {/* Segmented Navigation Tabs */}
          <div className="inline-flex p-1.5 bg-gray-100 rounded-lg border border-gray-200">
            <button
              onClick={() => {
                setActiveTab('industry');
                setSelectedSolutionIndex(0);
              }}
              className={`px-5 py-2.5 text-sm font-bold rounded-md transition-all cursor-pointer ${
                activeTab === 'industry'
                  ? 'bg-white text-[#D71920] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              By Industry
            </button>
            <button
              onClick={() => {
                setActiveTab('scenario');
                setSelectedSolutionIndex(0);
              }}
              className={`px-5 py-2.5 text-sm font-bold rounded-md transition-all cursor-pointer ${
                activeTab === 'scenario'
                  ? 'bg-white text-[#D71920] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              By Scenario
            </button>
            <button
              onClick={() => {
                setActiveTab('function');
                setSelectedSolutionIndex(0);
              }}
              className={`px-5 py-2.5 text-sm font-bold rounded-md transition-all cursor-pointer ${
                activeTab === 'function'
                  ? 'bg-white text-[#D71920] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              By Function
            </button>
          </div>
        </div>

        {/* Interactive Feature Panel + List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50 rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm">
          {/* Left Column: Solution Selector List */}
          <div className="lg:col-span-5 p-6 md:p-8 space-y-2.5">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-3">
              Select Vertical Domain
            </span>
            {filteredSolutions.map((sol, idx) => {
              const isSelected = sol.id === currentSolution.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => setSelectedSolutionIndex(idx)}
                  className={`w-full text-left p-4.5 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-[#D71920] text-gray-900 shadow-md'
                      : 'border-transparent hover:bg-white/60 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div>
                    <h3 className={`text-base font-bold ${isSelected ? 'text-[#D71920]' : 'text-gray-900'}`}>
                      {sol.title}
                    </h3>
                    <p className="text-[13px] text-gray-500 mt-1 line-clamp-1">{sol.subtitle}</p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#D71920] translate-x-1' : 'text-gray-400'
                    }`}
                  />
                </button>
              );
            })}

            <div className="pt-4">
              <Link
                href="/solutions"
                className="text-sm font-bold text-gray-700 hover:text-[#D71920] inline-flex items-center gap-1.5"
              >
                <span>View Full Solutions Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Solution Image & Highlights Preview */}
          <div className="lg:col-span-7 h-full relative min-h-[500px] flex flex-col justify-end p-8 md:p-10 text-white overflow-hidden">
            <Image
              src={currentSolution.heroImage}
              alt={currentSolution.title}
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* Gradient wash */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

            <div className="relative z-10 space-y-4 max-w-xl animate-fade-in" key={currentSolution.id}>
              <span className="text-xs font-bold uppercase tracking-wider text-white/95 bg-[#D71920] px-3 py-1 rounded-sm inline-block">
                {currentSolution.category} Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {currentSolution.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 line-clamp-3 leading-relaxed font-normal">
                {currentSolution.overview}
              </p>

              {/* Key Capabilities Pills */}
              <div className="space-y-2.5 pt-1">
                {currentSolution.keyCapabilities.slice(0, 2).map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">{cap.title}:</strong> {cap.description}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href={`/solutions/industry/${currentSolution.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#D71920] hover:bg-[#B81419] text-white text-sm font-bold rounded-md transition-colors shadow-lg"
                >
                  <span>Explore Full Solution Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
