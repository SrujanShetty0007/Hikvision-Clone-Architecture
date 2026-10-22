'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productCategories } from '@/data/productCategories';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const ProductCategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8F9FA] border-t border-b border-gray-200/80 font-sans">
      <div className="container-enterprise">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Product Categories
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            From 4K ultra-low-light surveillance sensors to touchless biometric access and enterprise intelligent displays.
          </p>
        </div>

        {/* 4-Column Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Header */}
                <Link href={`/products/${cat.slug}`} className="relative h-40 w-full flex items-center justify-center mb-4 overflow-hidden block">
                  <Image
                    src={cat.imageUrl}
                    alt={cat.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>

                {/* Title with clean chevron */}
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center text-sm font-bold text-gray-900 group-hover:text-[#D71920] transition-colors mb-2"
                >
                  <span>{cat.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                  {cat.shortDesc}
                </p>

                {/* Subcategories quick list */}
                <div className="pt-3 border-t border-gray-100 space-y-1.5 text-xs text-[#0066CC]">
                  {cat.subcategories.slice(0, 3).map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/products/${cat.slug}/${sub.slug}`}
                      className="hover:underline block truncate"
                    >
                      &bull; {sub.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-gray-100">
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center text-xs font-semibold text-gray-700 hover:text-[#D71920] group-hover:translate-x-0.5 transition-all"
                >
                  <span>View Category Range</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View full catalogue link button */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 hover:text-[#D71920] text-xs font-semibold rounded shadow-2xs transition-colors"
          >
            <span>Explore All 20+ Hardware Categories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
