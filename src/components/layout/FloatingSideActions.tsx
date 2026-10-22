'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Headphones, Calculator, ArrowUp } from 'lucide-react';
import { useEnterprise } from '@/context/EnterpriseContext';

export const FloatingSideActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { setIsInquiryOpen } = useEnterprise();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-3 bottom-24 z-40 flex flex-col gap-2 items-center">
      {/* Online Support / Sales Inquiry */}
      <button
        onClick={() => setIsInquiryOpen(true)}
        title="Contact Technical Support & Sales"
        className="w-11 h-11 bg-white hover:bg-red-50 text-gray-700 hover:text-[#D71920] border border-gray-200 rounded-lg shadow-md flex items-center justify-center transition-all group cursor-pointer"
        aria-label="Online Support"
      >
        <Headphones className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Tools & Calculator Shortcut */}
      <Link
        href="/tools"
        title="Interactive System Tools & Calculators"
        className="w-11 h-11 bg-white hover:bg-red-50 text-gray-700 hover:text-[#D71920] border border-gray-200 rounded-lg shadow-md flex items-center justify-center transition-all group"
        aria-label="System Tools"
      >
        <Calculator className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </Link>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="w-11 h-11 bg-gray-900 hover:bg-[#D71920] text-white rounded-lg shadow-lg flex items-center justify-center transition-all cursor-pointer animate-fade-in"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
