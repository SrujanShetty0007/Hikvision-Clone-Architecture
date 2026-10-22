'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { supportResourcesData } from '@/data/resources';
import { Download, Search, Filter, ChevronRight, FileCode, CheckCircle2 } from 'lucide-react';

export default function DownloadsCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Firmware', 'Software Tool', 'User Manual', 'Quick Start Guide'];

  const filteredResources = useMemo(() => {
    let result = supportResourcesData;

    if (selectedCategory !== 'All') {
      result = result.filter((r) => r.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.productFamily.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container-enterprise">
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-3">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/support" className="hover:text-gray-900">Support</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-900 font-semibold">Download Center</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Central Download &amp; Firmware Center
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl">
            Official repository of device firmware binaries, SADP network tools, VMS client software, and engineering manuals.
          </p>
        </div>
      </div>

      <div className="container-enterprise py-10 space-y-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#D71920] text-white shadow-2xs'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword or model..."
              className="w-full text-xs pl-9 pr-3 py-2 bg-gray-50 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
            />
          </div>
        </div>

        {/* Resources Table / Cards */}
        <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
            <span>Resource Title &amp; Details</span>
            <span className="hidden sm:inline">Release Date / Size</span>
          </div>

          <div className="divide-y divide-gray-100">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/70 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                        res.category === 'Firmware'
                          ? 'bg-amber-100 text-amber-800'
                          : res.category === 'Software Tool'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {res.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">{res.productFamily}</span>
                    {res.version && (
                      <span className="text-[11px] font-mono font-medium text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">
                        {res.version}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-gray-900">{res.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">
                    {res.description}
                  </p>

                  {res.osCompatibility && (
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 pt-1">
                      <span>Supported OS:</span>
                      <span className="font-medium text-gray-600">{res.osCompatibility.join(' • ')}</span>
                    </div>
                  )}
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 shrink-0">
                  <span className="text-xs text-gray-400 font-mono">
                    {res.releaseDate} • {res.fileSize}
                  </span>

                  <a
                    href={res.downloadUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Initiating download for ${res.title} (${res.fileSize})`);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D71920] hover:bg-[#B81419] text-white rounded text-xs font-bold transition-colors shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Note */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center gap-3 text-xs text-blue-800">
          <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
          <span>
            All firmware files are digitally signed with cryptographic SHA-256 hashes to guarantee authenticity and prevent unauthorized tampering.
          </span>
        </div>
      </div>
    </div>
  );
}
