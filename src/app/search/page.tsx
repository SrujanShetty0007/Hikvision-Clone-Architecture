'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { productsData } from '@/data/products';
import { solutionsData } from '@/data/solutions';
import { technologiesData } from '@/data/technologies';
import { supportResourcesData } from '@/data/resources';
import { Search, Box, ShieldCheck, Lightbulb, FileText, ArrowRight, X } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'products' | 'solutions' | 'technologies' | 'support'>('all');

  const trimmed = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmed) return { products: [], solutions: [], technologies: [], support: [] };

    const products = productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(trimmed) ||
        p.model.toLowerCase().includes(trimmed) ||
        p.description.toLowerCase().includes(trimmed) ||
        p.series.toLowerCase().includes(trimmed)
    );

    const solutions = solutionsData.filter(
      (s) =>
        s.title.toLowerCase().includes(trimmed) ||
        s.summary.toLowerCase().includes(trimmed) ||
        s.subtitle.toLowerCase().includes(trimmed)
    );

    const technologies = technologiesData.filter(
      (t) =>
        t.title.toLowerCase().includes(trimmed) ||
        t.summary.toLowerCase().includes(trimmed) ||
        t.tagline.toLowerCase().includes(trimmed)
    );

    const support = supportResourcesData.filter(
      (r) =>
        r.title.toLowerCase().includes(trimmed) ||
        r.productFamily.toLowerCase().includes(trimmed) ||
        r.description.toLowerCase().includes(trimmed)
    );

    return { products, solutions, technologies, support };
  }, [trimmed]);

  const totalCount =
    results.products.length +
    results.solutions.length +
    results.technologies.length +
    results.support.length;

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="container-enterprise max-w-4xl">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-2">
            Global Knowledge Index
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
            Search Across Hardware, Solutions &amp; Firmware
          </h1>

          {/* Search Input Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by model (e.g., 7A86, ColorVu), technology (DarkFighter), or solution..."
              className="w-full text-sm sm:text-base pl-12 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:border-[#D71920] focus:bg-white outline-hidden shadow-2xs transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4 text-xs font-semibold">
            {[
              { id: 'all', label: `All (${totalCount})` },
              { id: 'products', label: `Products (${results.products.length})` },
              { id: 'solutions', label: `Solutions (${results.solutions.length})` },
              { id: 'technologies', label: `Technologies (${results.technologies.length})` },
              { id: 'support', label: `Support Docs (${results.support.length})` },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id as any)}
                className={`px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                  filterType === f.id
                    ? 'bg-gray-900 border-gray-900 text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container-enterprise max-w-4xl py-10">
        {!trimmed ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-gray-700">Type a keyword to begin searching</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
              {['ColorVu', 'DeepinView', 'SolarVu 4G', 'AcuSense', 'SADP Tool', 'Smart Education'].map((s, i) => (
                <button
                  key={i}
                  onClick={() => setQuery(s)}
                  className="text-xs px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full hover:border-[#D71920] hover:text-[#D71920]"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : totalCount === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 space-y-3">
            <h3 className="text-base font-bold text-gray-900">
              No results found for &ldquo;{query}&rdquo;
            </h3>
            <p className="text-xs text-gray-500">
              Please check your spelling or try broader search terms like &quot;camera&quot;, &quot;NVR&quot;, or &quot;display&quot;.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Products */}
            {(filterType === 'all' || filterType === 'products') && results.products.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <Box className="w-4 h-4 text-[#D71920]" />
                  <span>Hardware Products ({results.products.length})</span>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-2xs">
                  {results.products.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.categorySlug}/${p.subcategorySlug}/${p.slug}`}
                      className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#D71920]">{p.model}</span>
                          <span className="text-sm font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                            {p.name}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{p.tagline}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Solutions */}
            {(filterType === 'all' || filterType === 'solutions') && results.solutions.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Industry Solutions ({results.solutions.length})</span>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-2xs">
                  {results.solutions.map((s) => (
                    <Link
                      key={s.id}
                      href={`/solutions/industry/${s.slug}`}
                      className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
                    >
                      <div>
                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                          {s.title}
                        </span>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{s.summary}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            {(filterType === 'all' || filterType === 'technologies') && results.technologies.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Core Technologies ({results.technologies.length})</span>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-2xs">
                  {results.technologies.map((t) => (
                    <Link
                      key={t.id}
                      href={`/technologies/${t.slug}`}
                      className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
                    >
                      <div>
                        <span className="text-sm font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                          {t.title}
                        </span>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{t.tagline}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Support */}
            {(filterType === 'all' || filterType === 'support') && results.support.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Downloads &amp; Documentation ({results.support.length})</span>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-2xs">
                  {results.support.map((r) => (
                    <Link
                      key={r.id}
                      href="/support/downloads"
                      className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                            {r.category}
                          </span>
                          <span className="text-sm font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                            {r.title}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{r.description}</p>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">{r.fileSize}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
