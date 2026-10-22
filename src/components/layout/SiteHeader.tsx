'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useEnterprise } from '@/context/EnterpriseContext';
import { ProductsMegaMenu } from './ProductsMegaMenu';
import { SolutionsMegaMenu } from './SolutionsMegaMenu';
import { SupportMegaMenu } from './SupportMegaMenu';
import { TechnologiesMegaMenu } from './TechnologiesMegaMenu';
import { PartnersMegaMenu } from './PartnersMegaMenu';
import { MobileNavigation } from './MobileNavigation';
import {
  Search,
  User,
  Globe,
  ExternalLink,
  Menu,
  ChevronDown,
} from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const {
    setIsSearchOpen,
    setIsLangModalOpen,
    setIsAccountModalOpen,
    currentLanguage,
  } = useEnterprise();

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(null);
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 bg-white border-b border-gray-200 transition-all duration-200 shadow-2xs"
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-enterprise">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* 1. Left: Brand Logo */}
            <div className="flex items-center gap-8 shrink-0">
              <Link
                href="/"
                onClick={closeMenu}
                className="group flex items-center gap-2.5 transition-transform"
                aria-label="NexusVision Global Home"
              >
                {/* Geometric Camera Aperture / Vision Emblem */}
                <div className="relative w-8 h-8 rounded-sm bg-[#D71920] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm group-hover:bg-[#B81419] transition-colors">
                  <span className="relative z-10">N</span>
                  <div className="absolute inset-1 border border-white/40 rounded-xs" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-black tracking-tight text-gray-900 leading-none">
                    NEXUS<span className="text-[#D71920]">VISION</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">
                    Security &amp; AIoT
                  </span>
                </div>
              </Link>
            </div>

            {/* 2. Center: Desktop Primary Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3 h-full">
              {/* Products */}
              <div
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('products')}
              >
                <Link
                  href="/products"
                  onClick={closeMenu}
                  className={`h-full flex items-center px-3 text-sm font-semibold tracking-wide transition-colors relative ${
                    activeMenu === 'products'
                      ? 'text-[#D71920]'
                      : 'text-gray-800 hover:text-[#D71920]'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-1 text-gray-400 transition-transform ${
                      activeMenu === 'products' ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                  {activeMenu === 'products' && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D71920]" />
                  )}
                </Link>
              </div>

              {/* Solutions */}
              <div
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('solutions')}
              >
                <Link
                  href="/solutions"
                  onClick={closeMenu}
                  className={`h-full flex items-center px-3 text-sm font-semibold tracking-wide transition-colors relative ${
                    activeMenu === 'solutions'
                      ? 'text-[#D71920]'
                      : 'text-gray-800 hover:text-[#D71920]'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-1 text-gray-400 transition-transform ${
                      activeMenu === 'solutions' ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                  {activeMenu === 'solutions' && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D71920]" />
                  )}
                </Link>
              </div>

              {/* Support */}
              <div
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('support')}
              >
                <Link
                  href="/support"
                  onClick={closeMenu}
                  className={`h-full flex items-center px-3 text-sm font-semibold tracking-wide transition-colors relative ${
                    activeMenu === 'support'
                      ? 'text-[#D71920]'
                      : 'text-gray-800 hover:text-[#D71920]'
                  }`}
                >
                  <span>Support</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-1 text-gray-400 transition-transform ${
                      activeMenu === 'support' ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                  {activeMenu === 'support' && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D71920]" />
                  )}
                </Link>
              </div>

              {/* Technologies */}
              <div
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('technologies')}
              >
                <Link
                  href="/technologies"
                  onClick={closeMenu}
                  className={`h-full flex items-center px-3 text-sm font-semibold tracking-wide transition-colors relative ${
                    activeMenu === 'technologies'
                      ? 'text-[#D71920]'
                      : 'text-gray-800 hover:text-[#D71920]'
                  }`}
                >
                  <span>Technologies</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-1 text-gray-400 transition-transform ${
                      activeMenu === 'technologies' ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                  {activeMenu === 'technologies' && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D71920]" />
                  )}
                </Link>
              </div>

              {/* Partners */}
              <div
                className="h-full flex items-center"
                onMouseEnter={() => handleMouseEnter('partners')}
              >
                <Link
                  href="/partners"
                  onClick={closeMenu}
                  className={`h-full flex items-center px-3 text-sm font-semibold tracking-wide transition-colors relative ${
                    activeMenu === 'partners'
                      ? 'text-[#D71920]'
                      : 'text-gray-800 hover:text-[#D71920]'
                  }`}
                >
                  <span>Partners</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 ml-1 text-gray-400 transition-transform ${
                      activeMenu === 'partners' ? 'rotate-180 text-[#D71920]' : ''
                    }`}
                  />
                  {activeMenu === 'partners' && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D71920]" />
                  )}
                </Link>
              </div>
            </nav>

            {/* 3. Right: Utility Actions */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* External Business Portal link (matching "Hikvision ProAV ↗") */}
              <Link
                href="/products/infrastructure-display/displays"
                onClick={closeMenu}
                className="hidden xl:flex items-center text-xs font-semibold text-gray-700 hover:text-[#D71920] px-2 py-1 transition-colors group"
              >
                <span>Nexus ProAV</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:text-[#D71920] transition-colors" />
              </Link>

              {/* Search Trigger */}
              <button
                onClick={() => {
                  closeMenu();
                  setIsSearchOpen(true);
                }}
                className="p-2 text-gray-700 hover:text-[#D71920] transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
                aria-label="Open Search"
                title="Search Products & Solutions"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User Account / Partner Portal Trigger */}
              <button
                onClick={() => {
                  closeMenu();
                  setIsAccountModalOpen(true);
                }}
                className="p-2 text-gray-700 hover:text-[#D71920] transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
                aria-label="Account and Partner Portal"
                title="Account / Partner Portal"
              >
                <User className="w-5 h-5" />
              </button>

              {/* Region and Language Selector (e.g. Global EN) */}
              <button
                onClick={() => {
                  closeMenu();
                  setIsLangModalOpen(true);
                }}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-gray-700 hover:text-[#D71920] transition-colors rounded hover:bg-gray-100 cursor-pointer"
                aria-label="Select Language and Region"
              >
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="hidden md:inline">
                  {currentLanguage.split(' ')[0]} EN
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden p-2 text-gray-700 hover:text-[#D71920] rounded-md hover:bg-gray-100 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdowns */}
        <div onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}>
          {activeMenu === 'products' && <ProductsMegaMenu onClose={closeMenu} />}
          {activeMenu === 'solutions' && <SolutionsMegaMenu onClose={closeMenu} />}
          {activeMenu === 'support' && (
            <SupportMegaMenu
              onClose={closeMenu}
              onOpenSearch={() => setIsSearchOpen(true)}
            />
          )}
          {activeMenu === 'technologies' && <TechnologiesMegaMenu onClose={closeMenu} />}
          {activeMenu === 'partners' && <PartnersMegaMenu onClose={closeMenu} />}
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};
