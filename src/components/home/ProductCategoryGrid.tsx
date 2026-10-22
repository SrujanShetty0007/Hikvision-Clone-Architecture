'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productCategories } from '@/data/productCategories';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const ProductCategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-[#F5F6F7] border-t border-b border-gray-200/80">
      <div className="container-enterprise">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
            Global Hardware Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Comprehensive Product Catalogues
          </h2>
          <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
            From 4K ultra-low-light surveillance sensors to touchless biometric access and enterprise intelligent displays.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Header */}
              <Link href={`/products/${cat.slug}`} className="relative aspect-4/3 w-full overflow-hidden bg-gray-50">
                <Image
                  src={cat.imageUrl}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                    <Link href={`/products/${cat.slug}`}>
                      {cat.name}
                    </Link>
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed">
                    {cat.shortDesc}
                  </p>

                  {/* Subcategories quick pill preview */}
                  <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5">
                    {cat.subcategories.slice(0, 3).map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/products/${cat.slug}/${sub.slug}`}
                        className="flex items-center justify-between text-xs text-gray-600 hover:text-[#D71920] transition-colors py-0.5"
                      >
                        <span className="line-clamp-1">{sub.name}</span>
                        <ChevronRight className="w-3 h-3 text-gray-400 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100">
                  <Link
                    href={`/products/${cat.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#D71920] group-hover:translate-x-1 transition-transform"
                  >
                    <span>View Category Range</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full catalogue link button */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-300 hover:border-[#D71920] text-gray-800 hover:text-[#D71920] text-xs font-bold rounded-md shadow-2xs transition-colors"
          >
            <span>Explore All 20+ Hardware Subcategories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
