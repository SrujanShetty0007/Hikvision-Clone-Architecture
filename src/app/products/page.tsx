'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productCategories } from '@/data/productCategories';
import { productsData } from '@/data/products';
import { ContextualNavigation } from '@/components/layout/ContextualNavigation';
import { ProductListing } from '@/components/products/ProductListing';
import { ResourceCards } from '@/components/home/ResourceCards';
import { ArrowRight, ChevronRight, Sliders, ShieldCheck } from 'lucide-react';

export default function ProductsOverviewPage() {
  const contextualNavItems = [
    { label: 'Overview', href: '/products', active: true },
    { label: 'Video Security', href: '/products/video-security' },
    { label: 'Access Control', href: '/products/access-control' },
    { label: 'Commercial Displays', href: '/products/infrastructure-display' },
    { label: 'Specialized ITS & Radar', href: '/products/specialized-solutions' },
    { label: 'Interactive Selector', href: '/tools#selector' },
  ];

  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Full-width Product Hero Banner */}
      <div className="relative w-full h-80 sm:h-96 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src="/images/card-cameras.jpg"
          alt="NexusVision Hardware Solutions"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-4 max-w-2xl">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            Product Catalogue &amp; Equipment
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Comprehensive Enterprise Hardware
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Engineered for mission-critical reliability. Discover our complete ecosystem of 4K IP cameras, ColorVu night optics, biometric access terminals, commercial displays, and intelligent edge video servers.
          </p>
        </div>
      </div>

      {/* Secondary Contextual Navigation Bar */}
      <ContextualNavigation items={contextualNavItems} title="Products" />

      {/* Product Categories Cards */}
      <div className="container-enterprise py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Architecture Domains
            </span>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Explore Hardware Categories
            </h2>
          </div>
          <Link
            href="/tools#selector"
            className="text-xs font-bold text-[#D71920] hover:underline hidden sm:flex items-center gap-1"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Launch Product Selector Wizard &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products/${cat.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-16/10 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={cat.imageUrl}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="350px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-xs font-bold text-white">
                    {cat.subcategories.length} Subcategories
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-gray-100 mt-2">
                <span className="text-xs font-bold text-[#D71920] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Browse Series <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Complete Filterable Product Catalogue Grid */}
      <div className="container-enterprise pb-16">
        <ProductListing
          initialProducts={productsData}
          categoryTitle="All Featured Hardware Models"
        />
      </div>

      {/* Tools Section */}
      <ResourceCards />
    </div>
  );
}
