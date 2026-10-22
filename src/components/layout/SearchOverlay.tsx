'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useEnterprise } from '@/context/EnterpriseContext';
import { productsData } from '@/data/products';
import { solutionsData } from '@/data/solutions';
import { technologiesData } from '@/data/technologies';
import { supportResourcesData } from '@/data/resources';
import { Search, X, ArrowRight, ShieldCheck, Box, Lightbulb, FileText } from 'lucide-react';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useEnterprise();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search products
  const matchedProducts = trimmed
    ? productsData.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.model.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.series.toLowerCase().includes(trimmed)
      ).slice(0, 4)
    : [];

  // Search solutions
  const matchedSolutions = trimmed
    ? solutionsData.filter(
        (s) =>
          s.title.toLowerCase().includes(trimmed) ||
          s.summary.toLowerCase().includes(trimmed) ||
          s.subtitle.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  // Search technologies
  const matchedTechnologies = trimmed
    ? technologiesData.filter(
        (t) =>
          t.title.toLowerCase().includes(trimmed) ||
          t.summary.toLowerCase().includes(trimmed) ||
          t.tagline.toLowerCase().includes(trimmed)
      ).slice(0, 2)
    : [];

  // Search support
  const matchedSupport = trimmed
    ? supportResourcesData.filter(
        (r) =>
          r.title.toLowerCase().includes(trimmed) ||
          r.productFamily.toLowerCase().includes(trimmed) ||
          r.description.toLowerCase().includes(trimmed)
      ).slice(0, 3)
    : [];

  const totalResults =
    matchedProducts.length +
    matchedSolutions.length +
    matchedTechnologies.length +
    matchedSupport.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 md:pt-24 p-4 animate-fade-in">
      <div
        className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 md:p-6 border-b border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, models (e.g. 7A86, ColorVu), solutions, firmware..."
            className="w-full text-base md:text-lg text-gray-900 placeholder:text-gray-400 outline-hidden bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-semibold px-2.5 py-1.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 md:p-6 overflow-y-auto space-y-6">
          {!trimmed ? (
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                Trending Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'ColorVu 4K',
                  'DeepinView 8MP',
                  'MinMoe Face Terminal',
                  'SolarVu 4G',
                  'Smart Education Solution',
                  'SADP Discovery Tool',
                  'VMS Client Software',
                ].map((term, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(term)}
                    className="text-xs bg-gray-50 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:border-[#D71920] hover:text-[#D71920] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-10">
              <p className="text-sm text-gray-600">
                No matching results found for &ldquo;<span className="font-semibold text-gray-900">{query}</span>&rdquo;
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Try searching for product series (e.g., ColorVu, DeepinView), model numbers (7A86, 2387), or keywords like firmware.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Product matches */}
              {matchedProducts.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    <Box className="w-3.5 h-3.5 text-[#D71920]" />
                    <span>Products ({matchedProducts.length})</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {matchedProducts.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/products/${prod.categorySlug}/${prod.subcategorySlug}/${prod.slug}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="group py-2.5 flex items-center justify-between hover:bg-gray-50 px-2 rounded transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#D71920] bg-red-50 px-1.5 py-0.5 rounded">
                              {prod.model}
                            </span>
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-[#D71920] transition-colors">
                              {prod.name}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{prod.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Solutions matches */}
              {matchedSolutions.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Solutions ({matchedSolutions.length})</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {matchedSolutions.map((sol) => (
                      <Link
                        key={sol.id}
                        href={`/solutions/industry/${sol.slug}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="group py-2.5 flex items-center justify-between hover:bg-gray-50 px-2 rounded transition-colors"
                      >
                        <div>
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#D71920] transition-colors">
                            {sol.title}
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{sol.subtitle}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies matches */}
              {matchedTechnologies.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>Technologies ({matchedTechnologies.length})</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {matchedTechnologies.map((tech) => (
                      <Link
                        key={tech.id}
                        href={`/technologies/${tech.slug}`}
                        onClick={() => setIsSearchOpen(false)}
                        className="group py-2.5 flex items-center justify-between hover:bg-gray-50 px-2 rounded transition-colors"
                      >
                        <div>
                          <span className="text-sm font-semibold text-gray-900 group-hover:text-[#D71920] transition-colors">
                            {tech.title}
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{tech.tagline}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Support matches */}
              {matchedSupport.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Downloads & Support Docs ({matchedSupport.length})</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {matchedSupport.map((res) => (
                      <Link
                        key={res.id}
                        href="/support/downloads"
                        onClick={() => setIsSearchOpen(false)}
                        className="group py-2.5 flex items-center justify-between hover:bg-gray-50 px-2 rounded transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-medium bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                              {res.category}
                            </span>
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-[#D71920] transition-colors">
                              {res.title}
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{res.description}</p>
                        </div>
                        <span className="text-xs text-gray-400 shrink-0">{res.fileSize}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500 flex justify-between items-center px-6">
          <span>Global Enterprise Product Database</span>
          <Link
            href="/search"
            onClick={() => setIsSearchOpen(false)}
            className="text-[#D71920] font-semibold hover:underline"
          >
            Open Advanced Search Page &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};
