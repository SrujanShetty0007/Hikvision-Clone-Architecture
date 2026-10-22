'use client';

import React from 'react';
import Link from 'next/link';

export interface ContextualNavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface ContextualNavigationProps {
  items: ContextualNavItem[];
  title?: string;
}

export const ContextualNavigation: React.FC<ContextualNavigationProps> = ({ items, title }) => {
  return (
    <div className="sticky top-16 md:top-20 z-30 bg-[#F5F6F7] border-b border-gray-200/90 shadow-2xs">
      <div className="container-enterprise">
        <div className="flex items-center justify-between h-14 overflow-x-auto no-scrollbar">
          {title && (
            <span className="text-sm font-bold text-gray-900 uppercase tracking-wider shrink-0 pr-6 border-r border-gray-300 hidden md:block">
              {title}
            </span>
          )}
          <nav className="flex items-center space-x-1.5 sm:space-x-3 shrink-0">
            {items.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`px-4 py-2 text-[13.5px] font-semibold rounded-md transition-all whitespace-nowrap ${
                  item.active
                    ? 'bg-white text-[#D71920] shadow-xs'
                    : 'text-gray-700 hover:text-gray-950 hover:bg-white/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
