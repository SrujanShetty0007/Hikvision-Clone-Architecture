'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  productsMegaMenuData,
  solutionsMegaMenuData,
  supportMegaMenuData,
  technologiesMegaMenuData,
  partnersMegaMenuData,
} from '@/data/navigation';
import { useEnterprise } from '@/context/EnterpriseContext';
import { X, ChevronDown, Search, Globe, User, ExternalLink, ArrowRight } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { setIsSearchOpen, setIsLangModalOpen, setIsAccountModalOpen, currentLanguage } = useEnterprise();

  if (!isOpen) return null;

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const navSections = [
    { id: 'products', title: 'Products', data: productsMegaMenuData },
    { id: 'solutions', title: 'Solutions', data: solutionsMegaMenuData },
    { id: 'support', title: 'Support', data: supportMegaMenuData },
    { id: 'technologies', title: 'Technologies', data: technologiesMegaMenuData },
    { id: 'partners', title: 'Partners', data: partnersMegaMenuData },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 animate-fade-in">
        {/* Drawer Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <Link href="/" onClick={onClose} className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-xs bg-[#D71920]" />
            <span className="font-extrabold tracking-tight text-gray-900 text-lg">
              NEXUS<span className="text-[#D71920]">VISION</span>
            </span>
          </Link>
          <button onClick={onClose} className="p-1.5 text-gray-500 hover:text-gray-900">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick action bar inside mobile menu */}
        <div className="p-3 bg-gray-50 border-b border-gray-100 grid grid-cols-3 gap-2 text-center text-xs">
          <button
            onClick={() => {
              onClose();
              setIsSearchOpen(true);
            }}
            className="flex flex-col items-center gap-1 p-2 rounded bg-white border border-gray-200 text-gray-700 hover:text-[#D71920]"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
          <button
            onClick={() => {
              onClose();
              setIsAccountModalOpen(true);
            }}
            className="flex flex-col items-center gap-1 p-2 rounded bg-white border border-gray-200 text-gray-700 hover:text-[#D71920]"
          >
            <User className="w-4 h-4" />
            <span>Portal</span>
          </button>
          <button
            onClick={() => {
              onClose();
              setIsLangModalOpen(true);
            }}
            className="flex flex-col items-center gap-1 p-2 rounded bg-white border border-gray-200 text-gray-700 hover:text-[#D71920]"
          >
            <Globe className="w-4 h-4" />
            <span className="line-clamp-1">{currentLanguage.split(' ')[0]}</span>
          </button>
        </div>

        {/* Scrollable Nav Accordions */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
          {navSections.map((sec) => {
            const isExpanded = openSection === sec.id;
            return (
              <div key={sec.id} className="py-1">
                <button
                  onClick={() => toggleSection(sec.id)}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-sm font-bold text-gray-800 hover:text-[#D71920] transition-colors"
                >
                  <span>{sec.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="px-5 pb-4 pt-1 bg-gray-50/70 space-y-4">
                    {sec.data.columns.map((col, cIdx) => (
                      <div key={cIdx} className="space-y-1.5">
                        <Link
                          href={col.href || '#'}
                          onClick={onClose}
                          className="text-xs font-bold text-gray-900 uppercase tracking-wider block hover:text-[#D71920]"
                        >
                          {col.title}
                        </Link>
                        <ul className="space-y-1 pl-2 border-l border-gray-200">
                          {col.items.map((item, iIdx) => (
                            <li key={iIdx}>
                              <Link
                                href={item.href}
                                onClick={onClose}
                                className="block text-xs text-gray-600 hover:text-[#D71920] py-1"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <div className="pt-2">
                      <Link
                        href={`/${sec.id}`}
                        onClick={onClose}
                        className="inline-flex items-center text-xs font-bold text-[#D71920] hover:underline"
                      >
                        <span>View All {sec.title} Overview</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* External portal link */}
          <div className="p-5">
            <a
              href="#nexus-proav"
              onClick={onClose}
              className="flex items-center justify-between text-sm font-semibold text-gray-700 hover:text-[#D71920]"
            >
              <span>Nexus ProAV Solutions</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </a>
          </div>

          {/* Additional quick links */}
          <div className="p-5 space-y-2.5 text-xs text-gray-600 bg-gray-50/40">
            <Link href="/tools" onClick={onClose} className="block hover:text-[#D71920]">
              Interactive Product Selector & Calculator
            </Link>
            <Link href="/support/downloads" onClick={onClose} className="block hover:text-[#D71920]">
              Firmware & Software Downloads
            </Link>
            <Link href="/about" onClick={onClose} className="block hover:text-[#D71920]">
              About NexusVision Global
            </Link>
            <Link href="/contact" onClick={onClose} className="block hover:text-[#D71920]">
              Contact Global Offices
            </Link>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 text-center text-[11px] text-gray-400">
          © 2026 NexusVision Digital Technology Co., Ltd.
        </div>
      </div>
    </div>
  );
};
