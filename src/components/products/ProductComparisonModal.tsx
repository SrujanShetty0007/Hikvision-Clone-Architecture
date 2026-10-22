'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEnterprise } from '@/context/EnterpriseContext';
import { X, Scale, Trash2, CheckCircle2 } from 'lucide-react';

export const ProductComparisonModal: React.FC = () => {
  const {
    isCompareModalOpen,
    setIsCompareModalOpen,
    compareProducts,
    removeFromCompare,
    clearCompare,
    openInquiryForProduct,
  } = useEnterprise();

  const [highlightDiffs, setHighlightDiffs] = useState(false);

  if (!isCompareModalOpen || compareProducts.length === 0) return null;

  const specRows = [
    { label: 'Model Number', key: 'model', getVal: (p: any) => p.model },
    { label: 'Product Series', key: 'series', getVal: (p: any) => p.series },
    { label: 'Category', key: 'categoryName', getVal: (p: any) => p.categoryName },
    { label: 'Resolution', key: 'resolution', getVal: (p: any) => p.specsSummary.resolution },
    { label: 'Image Sensor', key: 'sensor', getVal: (p: any) => p.specsSummary.sensor },
    { label: 'Min. Illumination', key: 'illumination', getVal: (p: any) => p.specsSummary.illumination },
    { label: 'Lens & Optics', key: 'lens', getVal: (p: any) => p.specsSummary.lens },
    { label: 'Weather / Vandal Proof', key: 'protection', getVal: (p: any) => p.specsSummary.protection },
    { label: 'Power Supply', key: 'power', getVal: (p: any) => p.specsSummary.power },
    {
      label: 'AI & Analytics',
      key: 'aiFeatures',
      getVal: (p: any) => p.specsSummary.aiFeatures.join(' • '),
    },
    { label: 'Connectivity & I/O', key: 'connectivity', getVal: (p: any) => p.specsSummary.connectivity },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div
        className="w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">Technical Product Comparison</h3>
              <p className="text-xs text-gray-500">
                Comparing {compareProducts.length} model{compareProducts.length > 1 ? 's' : ''} side by side
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={highlightDiffs}
                onChange={(e) => setHighlightDiffs(e.target.checked)}
                className="accent-[#D71920]"
              />
              <span>Highlight Differences</span>
            </label>

            <button
              onClick={clearCompare}
              className="text-xs text-gray-500 hover:text-red-600 flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>

            <button
              onClick={() => setIsCompareModalOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Comparison Table */}
        <div className="overflow-auto p-4 sm:p-6 flex-1">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-3 w-44 font-bold text-gray-400 uppercase tracking-wider bg-gray-50/60 sticky left-0 z-10">
                  Feature / Model
                </th>
                {compareProducts.map((p) => (
                  <th key={p.id} className="p-3 min-w-[220px] max-w-[260px] align-top bg-white">
                    <div className="space-y-2">
                      <div className="relative aspect-4/3 w-full rounded-md overflow-hidden bg-gray-50 border border-gray-100">
                        <Image src={p.imageUrl} alt={p.model} fill className="object-cover" sizes="260px" />
                      </div>
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <span className="font-mono font-bold text-[#D71920] text-sm block">
                            {p.model}
                          </span>
                          <span className="font-semibold text-gray-900 line-clamp-1 block text-xs">
                            {p.name}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCompare(p.slug)}
                          className="text-gray-400 hover:text-red-600 p-1 shrink-0"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="flex gap-2 pt-1">
                        <Link
                          href={`/products/${p.categorySlug}/${p.subcategorySlug}/${p.slug}`}
                          onClick={() => setIsCompareModalOpen(false)}
                          className="flex-1 text-center py-1.5 px-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-semibold text-[11px] transition-colors"
                        >
                          Details
                        </Link>
                        <button
                          onClick={() => openInquiryForProduct(p)}
                          className="flex-1 py-1.5 px-2 bg-[#D71920] hover:bg-[#B81419] text-white rounded font-semibold text-[11px] transition-colors cursor-pointer"
                        >
                          Inquire
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {specRows.map((row) => {
                // Check if all values are identical
                const values = compareProducts.map((p) => row.getVal(p));
                const isDifferent = new Set(values).size > 1;
                const rowClass = highlightDiffs && isDifferent ? 'bg-amber-50/50' : '';

                return (
                  <tr key={row.key} className={`hover:bg-gray-50/50 transition-colors ${rowClass}`}>
                    <td className="p-3 font-semibold text-gray-700 bg-gray-50/80 sticky left-0 z-10 border-r border-gray-100">
                      {row.label}
                    </td>
                    {compareProducts.map((p) => (
                      <td key={p.id} className="p-3 text-gray-600 align-top leading-relaxed">
                        {row.getVal(p) || '—'}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 shrink-0 px-6">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Specifications certified by NexusVision Global Compliance Lab</span>
          </div>
          <button
            onClick={() => setIsCompareModalOpen(false)}
            className="px-4 py-1.5 bg-gray-900 text-white font-semibold rounded hover:bg-black transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
