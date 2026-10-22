'use client';

import React from 'react';
import Link from 'next/link';
import { ProductSelectorWizard } from '@/components/tools/ProductSelectorWizard';
import { BandwidthCalculator } from '@/components/tools/BandwidthCalculator';
import { ContextualNavigation } from '@/components/layout/ContextualNavigation';
import { ChevronRight, Sliders, Calculator, ShieldCheck } from 'lucide-react';

export default function ToolsPage() {
  const contextualNavItems = [
    { label: 'All Tools', href: '/tools', active: true },
    { label: 'Product Selector', href: '/tools#selector' },
    { label: 'Storage & Bandwidth Calculator', href: '/tools#calculator' },
    { label: 'Firmware Downloads', href: '/support/downloads' },
    { label: 'Contact Pre-Sales', href: '/contact' },
  ];

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container-enterprise">
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-semibold">Engineering Tools &amp; Calculators</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            System Design &amp; Dimensioning Tools
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
            Interactive software tools for surveillance system integrators, design consultants, and enterprise IT architects.
          </p>
        </div>
      </div>

      <ContextualNavigation items={contextualNavItems} title="Utilities" />

      <div className="container-enterprise py-12 space-y-16">
        {/* Tool 1: Interactive Product Selector */}
        <section>
          <ProductSelectorWizard />
        </section>

        {/* Tool 2: Bandwidth & Storage Calculator */}
        <section>
          <BandwidthCalculator />
        </section>

        {/* Engineering Standards Assurance */}
        <div className="p-6 bg-white rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#D71920] shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">Certified Calculation Accuracy</h4>
              <p className="text-xs text-gray-500">
                Bitrate models incorporate H.265+ dynamic GOP and variable macroblock bitrate limits certified by NexusVision R&amp;D.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded transition-colors shrink-0"
          >
            Request Official BOM Review
          </Link>
        </div>
      </div>
    </div>
  );
}
