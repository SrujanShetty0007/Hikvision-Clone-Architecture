'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { X, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductListingProps {
  initialProducts: Product[];
  categorySlug?: string;
  subcategorySlug?: string;
  categoryTitle?: string;
}

export const ProductListing: React.FC<ProductListingProps> = ({
  initialProducts,
  categorySlug,
  subcategorySlug,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<string[]>([]);
  const [selectedResolutions, setSelectedResolutions] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'recommended' | 'newest' | 'model-asc' | 'model-desc'>('recommended');
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const pageSize = 9;

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = initialProducts;

    // In-category search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.model.toLowerCase().includes(q) ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.series.toLowerCase().includes(q)
      );
    }

    // Series filter
    if (selectedSeries.length > 0) {
      result = result.filter((p) => selectedSeries.includes(p.series));
    }

    // Resolution filter
    if (selectedResolutions.length > 0) {
      result = result.filter((p) => selectedResolutions.includes(p.specsSummary.resolution));
    }

    // Features filter
    if (selectedFeatures.length > 0) {
      result = result.filter((p) => {
        const combined = `${p.tagline} ${p.description} ${p.specsSummary.aiFeatures.join(' ')}`;
        return selectedFeatures.some((f) => combined.toLowerCase().includes(f.toLowerCase().split(' ')[0]));
      });
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'model-asc') return a.model.localeCompare(b.model);
      if (sortBy === 'model-desc') return b.model.localeCompare(a.model);
      if (sortBy === 'newest') return (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0);
      return 0; // recommended
    });

    return result;
  }, [
    initialProducts,
    searchQuery,
    selectedSeries,
    selectedResolutions,
    selectedFeatures,
    sortBy,
  ]);

  const totalPages = Math.ceil(filteredProducts.length / pageSize) || 1;
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedSeries([]);
    setSelectedResolutions([]);
    setSelectedFeatures([]);
    setCurrentPage(1);
  };

  const activeChips = [
    ...(searchQuery ? [{ type: 'search', label: `Search: "${searchQuery}"`, onRemove: () => setSearchQuery('') }] : []),
    ...selectedSeries.map((s) => ({ type: 'series', label: s, onRemove: () => setSelectedSeries(selectedSeries.filter((x) => x !== s)) })),
    ...selectedResolutions.map((r) => ({ type: 'resolution', label: r, onRemove: () => setSelectedResolutions(selectedResolutions.filter((x) => x !== r)) })),
    ...selectedFeatures.map((f) => ({ type: 'feature', label: f, onRemove: () => setSelectedFeatures(selectedFeatures.filter((x) => x !== f)) })),
  ];

  return (
    <div className="py-6">
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-gray-300 rounded text-xs font-semibold text-gray-800"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#D71920]" />
          <span>{isMobileFilterOpen ? 'Hide Filters' : 'Show Filter Sidebar'}</span>
          {activeChips.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#D71920] text-white text-[10px] flex items-center justify-center">
              {activeChips.length}
            </span>
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Left Sidebar Filters */}
        <div className={`w-full lg:w-[270px] shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <ProductFilters
            currentCategorySlug={categorySlug}
            currentSubcategorySlug={subcategorySlug}
            searchQuery={searchQuery}
            setSearchQuery={(q) => {
              setSearchQuery(q);
              setCurrentPage(1);
            }}
            selectedSeries={selectedSeries}
            setSelectedSeries={(s) => {
              setSelectedSeries(s);
              setCurrentPage(1);
            }}
            selectedResolutions={selectedResolutions}
            setSelectedResolutions={(r) => {
              setSelectedResolutions(r);
              setCurrentPage(1);
            }}
            selectedFeatures={selectedFeatures}
            setSelectedFeatures={(f) => {
              setSelectedFeatures(f);
              setCurrentPage(1);
            }}
            onClearAll={clearAllFilters}
          />
        </div>

        {/* Right Product Grid Column */}
        <div className="flex-1 w-full space-y-4">
          {/* Top Bar matching Hikvision Screenshot 4: "130 Products Matches" and Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 border-b border-gray-200 gap-3">
            <span className="text-[15px] font-normal text-gray-700">
              <strong className="font-bold text-gray-950 text-base">{filteredProducts.length}</strong> Products Matches
            </span>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-[13px]">
              <span className="text-gray-500 flex items-center gap-1.5 font-normal">
                <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-gray-300 text-gray-800 text-[13px] rounded px-3 py-1.5 focus:border-[#D71920] outline-hidden cursor-pointer"
              >
                <option value="recommended">Featured &amp; Recommended</option>
                <option value="newest">Newest Releases</option>
                <option value="model-asc">Model Number (A to Z)</option>
                <option value="model-desc">Model Number (Z to A)</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeChips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pb-2">
              <span className="text-xs text-gray-500 font-normal">Active Filters:</span>
              {activeChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gray-100 text-gray-800 border border-gray-200 rounded text-xs font-normal"
                >
                  <span>{chip.label}</span>
                  <button
                    onClick={chip.onRemove}
                    className="hover:text-[#D71920] p-0.5 cursor-pointer"
                    title="Remove filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
              <button
                onClick={clearAllFilters}
                className="text-xs text-[#D71920] hover:underline font-medium ml-2 cursor-pointer"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Product Grid (3 Columns on Desktop) */}
          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 p-12 text-center space-y-4 my-6">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto text-gray-400">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-gray-900">No hardware models match criteria</h3>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                No products match your current combination of series, resolution, and AI filter settings.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-4 py-2 bg-[#D71920] text-white text-xs font-medium rounded hover:bg-[#B81419] transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Clean Pagination matching Hikvision Screenshot 4: < 1 2 3 > */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 pt-8 border-t border-gray-100">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-1.5 border border-gray-300 rounded text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-500"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                      isCurrent
                        ? 'border border-[#D71920] text-[#D71920] font-bold'
                        : 'border border-gray-300 text-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="p-1.5 border border-gray-300 rounded text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:border-gray-500"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
