'use client';

import React, { useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';
import { productCategories } from '@/data/productCategories';

interface ProductFiltersProps {
  currentCategorySlug?: string;
  currentSubcategorySlug?: string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSeries: string[];
  setSelectedSeries: (series: string[]) => void;
  selectedResolutions: string[];
  setSelectedResolutions: (res: string[]) => void;
  selectedFeatures: string[];
  setSelectedFeatures: (features: string[]) => void;
  onClearAll: () => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  currentCategorySlug,
  currentSubcategorySlug,
  searchQuery,
  setSearchQuery,
  selectedSeries,
  setSelectedSeries,
  selectedResolutions,
  setSelectedResolutions,
  selectedFeatures,
  setSelectedFeatures,
  onClearAll,
}) => {
  const currentCategory = productCategories.find((c) => c.slug === currentCategorySlug);

  // Accordion state
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    subcategory: true,
    series: true,
    waterproof: false,
    poe: false,
    resolution: false,
    features: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const seriesOptions = [
    'Pro DeepinView Series',
    'ColorVu Gen-2 Series',
    'SolarVu Autonomous Series',
    'TandemVu & Speed Dome Series',
    'DeepinMind Super NVR',
    'MinMoe Biometric Series',
    'Smart Commercial Display',
    'Industrial Thermography',
  ];

  const resolutionOptions = [
    '4K (3840 × 2160) @ 30fps',
    '4K 8MP (3840 × 2160)',
    '4 MP (2688 × 1520)',
    '2 MP (1920 × 1080)',
  ];

  const waterproofOptions = ['IP67 Waterproof', 'IP66 Weatherproof', 'IK10 Vandal-proof'];
  const poeOptions = ['Standard PoE (802.3af)', 'PoE+ (802.3at)', 'Hi-PoE'];
  const featureOptions = [
    'License Plate Recognition (ANPR)',
    'ColorVu 24/7 Full Color',
    'AcuSense Human/Vehicle AI',
    'Smart Target Auto-Tracking',
    'Active Strobe & Siren Deterrence',
    'Anti-spoofing Biometrics',
  ];

  const toggleItem = (list: string[], setList: (items: string[]) => void, item: string) => {
    if (list.includes(item)) {
      setList(list.filter((x) => x !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <aside className="w-full lg:w-[280px] bg-white shrink-0 font-sans">
      {/* Top Header matching Screenshot 4: "Search List" and "Reset" */}
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-lg font-bold text-gray-950 tracking-tight">Search List</h3>
        <button
          onClick={onClearAll}
          className="border border-gray-300 rounded-full px-3.5 py-1 text-xs font-medium text-gray-700 hover:text-[#D71920] hover:border-[#D71920] transition-colors cursor-pointer"
        >
          Reset
        </button>
      </div>

      {/* Search Input matching Screenshot 4: rounded pill with search icon on right */}
      <div className="relative mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for Product Models"
          className="w-full text-sm pl-4 pr-10 py-2.5 bg-white border border-gray-300 rounded-full placeholder:text-gray-400 focus:border-[#D71920] outline-hidden transition-all text-gray-900"
        />
        <Search className="w-4 h-4 text-gray-500 absolute right-3.5 top-3 pointer-events-none" />
      </div>

      {/* Accordion List */}
      <div className="border-t border-gray-200 divide-y divide-gray-100">
        {/* 1. Subcategory Accordion */}
        {currentCategory && (
          <div className="py-3.5">
            <button
              onClick={() => toggleSection('subcategory')}
              className="w-full flex items-center justify-between text-[14.5px] font-bold text-gray-900 py-1"
            >
              <span>Subcategory</span>
              {openSections.subcategory ? (
                <Minus className="w-4 h-4 text-[#D71920]" />
              ) : (
                <Plus className="w-4 h-4 text-gray-700" />
              )}
            </button>
            {openSections.subcategory && (
              <div className="mt-3 space-y-2.5 pl-0.5">
                <a
                  href={`/products/${currentCategory.slug}`}
                  className="flex items-center gap-2.5 text-[13.5px] text-gray-700 hover:text-[#D71920] group"
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      !currentSubcategorySlug
                        ? 'border-[#D71920]'
                        : 'border-gray-300'
                    }`}
                  >
                    {!currentSubcategorySlug && (
                      <span className="w-2 h-2 rounded-full bg-[#D71920]" />
                    )}
                  </span>
                  <span className={!currentSubcategorySlug ? 'font-semibold text-gray-950' : ''}>
                    All {currentCategory.name}
                  </span>
                </a>
                {currentCategory.subcategories.map((sub) => {
                  const isActive = currentSubcategorySlug === sub.slug;
                  return (
                    <a
                      key={sub.slug}
                      href={`/products/${currentCategory.slug}/${sub.slug}`}
                      className="flex items-center gap-2.5 text-[13.5px] text-gray-700 hover:text-[#D71920] group"
                    >
                      <span
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isActive ? 'border-[#D71920]' : 'border-gray-300'
                        }`}
                      >
                        {isActive && <span className="w-2 h-2 rounded-full bg-[#D71920]" />}
                      </span>
                      <span className={isActive ? 'font-semibold text-gray-950' : ''}>
                        {sub.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 2. Series Accordion */}
        <div className="py-3.5">
          <button
            onClick={() => toggleSection('series')}
            className="w-full flex items-center justify-between text-[14.5px] font-bold text-gray-900 py-1"
          >
            <span>Series</span>
            {openSections.series ? (
              <Minus className="w-4 h-4 text-[#D71920]" />
            ) : (
              <Plus className="w-4 h-4 text-gray-700" />
            )}
          </button>
          {openSections.series && (
            <div className="mt-3 space-y-2.5 pl-0.5">
              {seriesOptions.map((series) => {
                const isChecked = selectedSeries.includes(series);
                return (
                  <label
                    key={series}
                    onClick={() => toggleItem(selectedSeries, setSelectedSeries, series)}
                    className="flex items-center gap-2.5 text-[13.5px] text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-xs border flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-[#D71920] border-[#D71920]'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      {isChecked && <span className="w-2 h-2 bg-white rounded-xs" />}
                    </span>
                    <span>{series}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* 3. Water Proof Accordion */}
        <div className="py-3.5">
          <button
            onClick={() => toggleSection('waterproof')}
            className="w-full flex items-center justify-between text-[14.5px] font-bold text-gray-900 py-1"
          >
            <span>Water Proof</span>
            {openSections.waterproof ? (
              <Minus className="w-4 h-4 text-[#D71920]" />
            ) : (
              <Plus className="w-4 h-4 text-gray-700" />
            )}
          </button>
          {openSections.waterproof && (
            <div className="mt-3 space-y-2.5 pl-0.5">
              {waterproofOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2.5 text-[13.5px] text-gray-700 cursor-pointer select-none"
                >
                  <span className="w-4 h-4 rounded-xs border border-gray-300" />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* 4. PoE Accordion */}
        <div className="py-3.5">
          <button
            onClick={() => toggleSection('poe')}
            className="w-full flex items-center justify-between text-[14.5px] font-bold text-gray-900 py-1"
          >
            <span>PoE</span>
            {openSections.poe ? (
              <Minus className="w-4 h-4 text-[#D71920]" />
            ) : (
              <Plus className="w-4 h-4 text-gray-700" />
            )}
          </button>
          {openSections.poe && (
            <div className="mt-3 space-y-2.5 pl-0.5">
              {poeOptions.map((opt) => (
                <label
                  key={opt}
                  className="flex items-center gap-2.5 text-[13.5px] text-gray-700 cursor-pointer select-none"
                >
                  <span className="w-4 h-4 rounded-xs border border-gray-300" />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* 5. Resolution Accordion */}
        <div className="py-3.5">
          <button
            onClick={() => toggleSection('resolution')}
            className="w-full flex items-center justify-between text-[14.5px] font-bold text-gray-900 py-1"
          >
            <span>Resolution</span>
            {openSections.resolution ? (
              <Minus className="w-4 h-4 text-[#D71920]" />
            ) : (
              <Plus className="w-4 h-4 text-gray-700" />
            )}
          </button>
          {openSections.resolution && (
            <div className="mt-3 space-y-2.5 pl-0.5">
              {resolutionOptions.map((res) => {
                const isChecked = selectedResolutions.includes(res);
                return (
                  <label
                    key={res}
                    onClick={() => toggleItem(selectedResolutions, setSelectedResolutions, res)}
                    className="flex items-center gap-2.5 text-[13.5px] text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                        isChecked ? 'bg-[#D71920] border-[#D71920]' : 'border-gray-300'
                      }`}
                    >
                      {isChecked && <span className="w-2 h-2 bg-white rounded-xs" />}
                    </span>
                    <span>{res}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* 6. AI & Key Features Accordion */}
        <div className="py-3.5">
          <button
            onClick={() => toggleSection('features')}
            className="w-full flex items-center justify-between text-[14.5px] font-bold text-gray-900 py-1"
          >
            <span>AI &amp; Key Features</span>
            {openSections.features ? (
              <Minus className="w-4 h-4 text-[#D71920]" />
            ) : (
              <Plus className="w-4 h-4 text-gray-700" />
            )}
          </button>
          {openSections.features && (
            <div className="mt-3 space-y-2.5 pl-0.5">
              {featureOptions.map((feat) => {
                const isChecked = selectedFeatures.includes(feat);
                return (
                  <label
                    key={feat}
                    onClick={() => toggleItem(selectedFeatures, setSelectedFeatures, feat)}
                    className="flex items-center gap-2.5 text-[13.5px] text-gray-700 hover:text-gray-950 cursor-pointer select-none"
                  >
                    <span
                      className={`w-4 h-4 rounded-xs border flex items-center justify-center ${
                        isChecked ? 'bg-[#D71920] border-[#D71920]' : 'border-gray-300'
                      }`}
                    >
                      {isChecked && <span className="w-2 h-2 bg-white rounded-xs" />}
                    </span>
                    <span>{feat}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
