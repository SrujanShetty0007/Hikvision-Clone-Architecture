'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { useEnterprise } from '@/context/EnterpriseContext';
import {
  FileText,
  Download,
  Share2,
  Scale,
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers,
  ArrowRight,
  Check,
} from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, relatedProducts }) => {
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'features' | 'downloads' | 'accessories'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  const { compareSlugs, addToCompare, removeFromCompare, openInquiryForProduct } = useEnterprise();
  const isCompared = compareSlugs.includes(product.slug);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="bg-[#FBFBFB] min-h-screen">
      {/* Breadcrumbs Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-enterprise py-3">
          <nav className="flex items-center space-x-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <Link href="/products" className="hover:text-gray-900">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <Link href={`/products/${product.categorySlug}`} className="hover:text-gray-900">
              {product.categoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <Link href={`/products/${product.categorySlug}/${product.subcategorySlug}`} className="hover:text-gray-900">
              {product.subcategoryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <span className="font-semibold text-gray-900 truncate max-w-xs">{product.model}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero Section */}
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Multi-Angle Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Active Image Viewport */}
              <div className="relative aspect-4/3 w-full rounded-2xl bg-white border border-gray-200/90 shadow-sm p-6 flex items-center justify-center overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-xs font-bold uppercase rounded bg-[#D71920] text-white shadow-xs">
                    {product.badge}
                  </span>
                )}
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Thumbnail Selector */}
              {product.galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {product.galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 bg-gray-50 shrink-0 transition-all cursor-pointer ${
                        selectedImage === img ? 'border-[#D71920] shadow-xs' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image src={img} alt={`Angle ${i + 1}`} fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Identity, Highlights, CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
                  {product.series}
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 font-mono tracking-tight">
                  {product.model}
                </h1>
                <p className="text-base sm:text-lg text-gray-700 font-medium mt-1 leading-snug">
                  {product.name}
                </p>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Key Technical Highlights Checklist */}
              <div className="space-y-2 bg-gray-50 rounded-xl p-5 border border-gray-200/80">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block mb-2">
                  Key Engineering Highlights
                </span>
                <ul className="space-y-2">
                  {product.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D71920] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openInquiryForProduct(product)}
                  className="px-6 py-3 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded-md shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Project Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#downloads"
                  onClick={() => setActiveTab('downloads')}
                  className="px-5 py-3 bg-white border border-gray-300 hover:border-[#D71920] text-gray-800 hover:text-[#D71920] text-xs font-bold rounded-md shadow-2xs transition-colors flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Datasheet PDF</span>
                </a>

                {/* Compare Button */}
                <button
                  onClick={() => (isCompared ? removeFromCompare(product.slug) : addToCompare(product.slug))}
                  className={`px-4 py-3 rounded-md text-xs font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isCompared
                      ? 'bg-gray-900 border-gray-900 text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Scale className="w-4 h-4" />
                  <span>{isCompared ? 'Compared' : 'Add to Compare'}</span>
                </button>

                {/* Share Link */}
                <button
                  onClick={handleShare}
                  className="p-3 bg-white border border-gray-300 text-gray-600 hover:text-gray-900 rounded-md transition-colors cursor-pointer"
                  title="Share link"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Contextual Navigation Tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-200 shadow-2xs">
        <div className="container-enterprise">
          <div className="flex space-x-1 sm:space-x-4 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: 'Overview & Benefits' },
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'downloads', label: 'Downloads & Software' },
              { id: 'accessories', label: 'Accessories & Related' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-[#D71920] text-[#D71920]'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabbed Content Sections */}
      <div className="container-enterprise py-12">
        {/* 1. Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Product Overview</h2>
              <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
                {product.description}
              </p>

              {/* Core capabilities grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
                <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center mb-3">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Perimeter Infiltration Defense</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Filters false alarms caused by wildlife, foliage, and precipitation with real-time audio and strobe deterrence.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center mb-3">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">High-Throughput Compression</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Ultra H.265+ smart encoding slashes storage and network transmission bandwidth by up to 75% without compromising 4K detail.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">Hardened Industrial Ingress</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Withstands extreme desert heat and arctic blizzards (-40°C to 65°C) with IK10 vandal impact shielding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Specifications Tab */}
        {activeTab === 'specs' && (
          <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs overflow-hidden animate-fade-in">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Certified Technical Specifications</h2>
                <p className="text-xs text-gray-500">Official model datasheet parameters for {product.model}</p>
              </div>
              <button
                onClick={() => openInquiryForProduct(product)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#D71920] rounded hover:bg-[#B81419]"
              >
                Inquire Specs
              </button>
            </div>

            <div className="divide-y divide-gray-200">
              {product.detailedSpecs.map((group, gIdx) => (
                <div key={gIdx} className="p-6">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-l-2 border-[#D71920] pl-2.5">
                    {group.category}
                  </h3>
                  <table className="w-full text-left text-xs">
                    <tbody className="divide-y divide-gray-100">
                      {group.specs.map((spec, sIdx) => (
                        <tr key={sIdx} className="hover:bg-gray-50/60">
                          <td className="py-2.5 pr-4 font-semibold text-gray-600 w-1/3 align-top">
                            {spec.label}
                          </td>
                          <td className="py-2.5 text-gray-900 font-medium align-top leading-relaxed">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Downloads Tab */}
        {activeTab === 'downloads' && (
          <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs p-6 space-y-6 animate-fade-in">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Documentation, Firmware &amp; Software</h2>
              <p className="text-xs text-gray-500">Verified downloads for model {product.model}</p>
            </div>

            <div className="divide-y divide-gray-100">
              {product.downloads.map((item, dIdx) => (
                <div key={dIdx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                        {item.type}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      Released: {item.releaseDate} • Format: {item.fileFormat} • Size: {item.fileSize}
                      {item.version && ` • Version: ${item.version}`}
                    </p>
                  </div>

                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Initiating download for ${item.title} (${item.fileSize})`);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-50 hover:bg-red-50 text-gray-800 hover:text-[#D71920] border border-gray-200 rounded text-xs font-semibold transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Accessories & Related Tab */}
        {activeTab === 'accessories' && (
          <div className="space-y-8 animate-fade-in">
            {/* Compatible Mounts & Accessories */}
            <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Compatible Brackets &amp; Hardware Accessories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {product.compatibleAccessories.map((acc, aIdx) => (
                  <div key={aIdx} className="p-4 rounded-xl border border-gray-200 bg-gray-50 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#D71920]">{acc.model}</span>
                      <h4 className="text-xs font-bold text-gray-900 mt-0.5">{acc.name}</h4>
                      <span className="text-[10px] uppercase text-gray-400 font-semibold">{acc.type}</span>
                    </div>
                    <button
                      onClick={() => openInquiryForProduct(product)}
                      className="mt-4 text-xs font-semibold text-[#D71920] hover:underline text-left cursor-pointer"
                    >
                      Inquire Accessory &rarr;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Models */}
            {relatedProducts.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs p-6">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Related Enterprise Camera Models</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedProducts.map((rel) => (
                    <div key={rel.id} className="p-4 rounded-xl border border-gray-200 bg-white shadow-2xs flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-xs font-bold text-[#D71920]">{rel.model}</span>
                        <h4 className="text-xs font-bold text-gray-900 mt-1 line-clamp-1">{rel.name}</h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{rel.tagline}</p>
                      </div>
                      <Link
                        href={`/products/${rel.categorySlug}/${rel.subcategorySlug}/${rel.slug}`}
                        className="mt-4 text-xs font-bold text-[#D71920] hover:underline"
                      >
                        View Model Details &rarr;
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
