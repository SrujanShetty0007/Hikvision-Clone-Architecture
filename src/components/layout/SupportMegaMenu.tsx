'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supportMegaMenuData } from '@/data/navigation';
import { ChevronRight, ArrowRight, Search } from 'lucide-react';

interface SupportMegaMenuProps {
  onClose: () => void;
  onOpenSearch: () => void;
}

export const SupportMegaMenu: React.FC<SupportMegaMenuProps> = ({ onClose, onOpenSearch }) => {
  const { columns, promo } = supportMegaMenuData;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl z-50 animate-fade-in"
      role="region"
      aria-label="Support Navigation Menu"
    >
      <div className="container-enterprise py-8">
        {/* Support quick search bar banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3.5 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Support Search:</span>
            <p className="text-xs text-gray-500">Quickly find device firmwares, technical manuals, software tools, and FAQs</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full md:w-80 flex items-center justify-between px-3.5 py-1.5 text-xs bg-white border border-gray-300 rounded text-gray-500 hover:border-[#D71920] hover:text-gray-800 transition-colors cursor-pointer shadow-2xs"
          >
            <span>Search firmware, model, error code...</span>
            <Search className="w-3.5 h-3.5 text-gray-400" />
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main 3 columns */}
          <div className="col-span-9 grid grid-cols-3 gap-8">
            {columns.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <Link
                  href={col.href || '/support'}
                  onClick={onClose}
                  className="group inline-flex items-center text-sm font-bold text-gray-900 tracking-wide hover:text-[#D71920] transition-colors"
                >
                  <span className="border-l-2 border-[#D71920] pl-2.5">{col.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#D71920]" />
                </Link>
                <ul className="space-y-2.5">
                  {col.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-center justify-between text-[13px] text-gray-600 hover:text-[#D71920] hover:translate-x-1 transition-all py-0.5"
                      >
                        <span className="line-clamp-1">{item.title}</span>
                        {item.badge && (
                          <span className="ml-2 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-red-50 text-[#D71920] border border-red-100 uppercase tracking-wider shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Promotional Feature Card */}
          {promo && (
            <div className="col-span-3 border-l border-gray-100 pl-6 flex flex-col justify-between">
              <div className="group block">
                <div className="relative aspect-video w-full rounded-md overflow-hidden bg-gray-100 mb-3 shadow-sm border border-gray-100">
                  <Image
                    src={promo.imageUrl}
                    alt={promo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2.5 text-[11px] font-medium text-white/90">
                    {promo.subtitle}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#D71920] transition-colors line-clamp-1">
                  {promo.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {promo.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                <Link
                  href="/support/downloads"
                  onClick={onClose}
                  className="text-xs font-semibold text-gray-700 hover:text-[#D71920] transition-colors"
                >
                  Download Center
                </Link>
                <Link
                  href={promo.href}
                  onClick={onClose}
                  className="inline-flex items-center text-xs font-semibold text-[#D71920] hover:underline"
                >
                  <span>{promo.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
