'use client';

import React, { useState } from 'react';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { FeaturedCarousel } from '@/components/home/FeaturedCarousel';
import { CoreTechnologies } from '@/components/home/CoreTechnologies';
import { ProductCategoryGrid } from '@/components/home/ProductCategoryGrid';
import { SolutionDiscovery } from '@/components/home/SolutionDiscovery';
import { EditorialFeature } from '@/components/home/EditorialFeature';
import { ResourceCards } from '@/components/home/ResourceCards';
import { VideoStories } from '@/components/home/VideoStories';
import { RelatedLinks } from '@/components/home/RelatedLinks';
import { CorporatePhilosophy } from '@/components/home/CorporatePhilosophy';
import { WhereToBuy } from '@/components/home/WhereToBuy';
import { Play, X } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const [showKeynoteModal, setShowKeynoteModal] = useState(false);

  return (
    <div className="w-full">
      {/* Section 2: Full-Width Hero Carousel */}
      <HeroCarousel onOpenVideo={() => setShowKeynoteModal(true)} />

      {/* Section 3: Featured Product and Solution Carousel */}
      <FeaturedCarousel />

      {/* Section 4: Core Technologies (Guanlan Encoding & AI Video Optics) */}
      <CoreTechnologies />

      {/* Section 5: Product Categories Grid */}
      <ProductCategoryGrid />

      {/* Section 5: Solutions Discovery */}
      <SolutionDiscovery />

      {/* Section 6: Featured Technology or Corporate Story */}
      <EditorialFeature />

      {/* Section 7: Tools and Resources */}
      <ResourceCards />

      {/* Section 8: Video and Stories */}
      <VideoStories />

      {/* Section 9: Related Links */}
      <RelatedLinks />

      {/* Section 10: Corporate Philosophy with Hover Reveal */}
      <CorporatePhilosophy />

      {/* Section 11: Where to Buy */}
      <WhereToBuy />

      {/* Keynote Video Modal triggered from Hero Slide 2 */}
      {showKeynoteModal && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowKeynoteModal(false)}
        >
          <div
            className="w-full max-w-4xl bg-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-800 flex items-center justify-between text-white">
              <h4 className="text-sm font-bold">NexTech Star Global Summit 2026 — Opening Keynote</h4>
              <button
                onClick={() => setShowKeynoteModal(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center text-center p-8">
              <Image
                src="/images/hero-summit.jpg"
                alt="Keynote event"
                fill
                className="object-cover opacity-40 blur-xs"
              />
              <div className="relative z-10 space-y-4 max-w-lg">
                <div className="w-16 h-16 rounded-full bg-[#D71920] text-white flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <h3 className="text-2xl font-black text-white leading-tight">
                  Your Vision. Your Impact. Your Stage.
                </h3>
                <p className="text-xs text-gray-300">
                  Global Keynote presentation announcing 8th Gen DeepinView Neural Processing Units and next-generation ColorVu full-color optics.
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-900 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span>Recorded live at the London ExCeL International Exhibition Center</span>
              <button
                onClick={() => setShowKeynoteModal(false)}
                className="px-4 py-1.5 bg-[#D71920] text-white rounded font-semibold hover:bg-[#B81419]"
              >
                Close Keynote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
