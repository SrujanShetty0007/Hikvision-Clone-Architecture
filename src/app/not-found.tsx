'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Home, ArrowLeft } from 'lucide-react';
import { useEnterprise } from '@/context/EnterpriseContext';

export default function NotFound() {
  const { setIsSearchOpen } = useEnterprise();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#FBFBFB] py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-red-50 text-[#D71920] flex items-center justify-center mx-auto">
          <span className="font-mono text-2xl font-black">404</span>
        </div>

        <div>
          <h1 className="text-xl font-bold text-gray-900">Page or Hardware Model Not Found</h1>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            The page, datasheet, or category URL you requested may have been relocated or updated in our global catalog.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="w-full py-2.5 px-4 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Search Enterprise Catalogue</span>
          </button>

          <Link
            href="/"
            className="w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
