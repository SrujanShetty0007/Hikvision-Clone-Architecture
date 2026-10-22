'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productCategories } from '@/data/productCategories';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const ProductCategoryGrid: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8F9FA] border-t border-b border-gray-200/80 font-sans">
      <div className="container-enterprise">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Product Categories
          </h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            From 4K ultra-low-light surveillance sensors to touchless biometric access and enterprise intelligent displays.
          </p>
        </div>

        {/* 4-Column Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {productCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 p-7 flex flex-col justify-between group rounded-xl"
            >
              <div>
                {/* Product Image Header */}
                <Link href={`/products/${cat.slug}`} className="relative h-44 w-full flex items-center justify-center mb-5 overflow-hidden block">
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
                  className="inline-flex items-center text-lg font-bold text-gray-900 group-hover:text-[#D71920] transition-colors mb-2.5"
                >
                  <span>{cat.name}</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-5">
                  {cat.shortDesc}
                </p>

                {/* Subcategories quick list */}
                <div className="pt-4 border-t border-gray-100 space-y-2 text-[13.5px] text-[#0066CC] font-medium">
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

              <div className="mt-7 pt-4 border-t border-gray-100">
                <Link
                  href={`/products/${cat.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-[#D71920] group-hover:translate-x-0.5 transition-all"
                >
                  <span>View Category Range</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View full catalogue link button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 hover:text-[#D71920] text-sm font-semibold rounded-full shadow-xs transition-colors"
          >
            <span>Explore All 20+ Hardware Categories</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
