'use client';

import React from 'react';
import Image from 'next/image';
import { useEnterprise } from '@/context/EnterpriseContext';
import { Scale, X, ArrowRight } from 'lucide-react';

export const ProductComparisonBar: React.FC = () => {
  const { compareProducts, removeFromCompare, clearCompare, setIsCompareModalOpen } = useEnterprise();

  if (compareProducts.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900/95 text-white backdrop-blur-md border-t border-gray-700 shadow-2xl py-3 px-4 animate-fade-in">
      <div className="container-enterprise flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left count & info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#D71920] flex items-center justify-center shrink-0">
            <Scale className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Compare Products</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-full border border-gray-700 font-mono">
                {compareProducts.length} / 4
              </span>
            </div>
            <p className="text-xs text-gray-400 hidden md:block">
              Side-by-side technical specification analysis
            </p>
          </div>
        </div>

        {/* Selected Product Thumbnails */}
        <div className="flex items-center gap-2.5 overflow-x-auto max-w-xl py-1">
          {compareProducts.map((p) => (
            <div
              key={p.id}
              className="relative bg-gray-800 border border-gray-700 rounded-lg p-1.5 flex items-center gap-2 group shrink-0"
            >
              <div className="relative w-8 h-8 rounded bg-gray-900 overflow-hidden shrink-0">
                <Image src={p.imageUrl} alt={p.model} fill className="object-cover" sizes="32px" />
              </div>
              <span className="text-xs font-mono font-medium text-gray-200 pr-4">{p.model}</span>
              <button
                onClick={() => removeFromCompare(p.slug)}
                className="absolute right-1 top-1 text-gray-400 hover:text-white p-0.5"
                title="Remove"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={clearCompare}
            className="text-xs text-gray-400 hover:text-white px-2.5 py-1.5 transition-colors cursor-pointer"
          >
            Clear All
          </button>
          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-[#D71920] hover:bg-[#B81419] text-white rounded-md transition-colors shadow-sm cursor-pointer"
          >
            <span>Compare Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
