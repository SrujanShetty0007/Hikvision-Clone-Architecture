'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sliders, Wrench } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  imageUrl: string;
  href: string;
}

const productCategoryTiles: CategoryItem[] = [
  {
    id: 'network-products',
    name: 'Network Products',
    imageUrl: '/images/card-cameras.jpg',
    href: '/products/video-security/network-cameras',
  },
  {
    id: 'turbo-hd',
    name: 'Turbo HD Products',
    imageUrl: '/images/card-solar.jpg',
    href: '/products/video-security/turbo-hd',
  },
  {
    id: 'access-control',
    name: 'Access Control',
    imageUrl: '/images/card-display.jpg',
    href: '/products/access-control',
  },
  {
    id: 'video-intercom',
    name: 'Video Intercom',
    imageUrl: '/images/card-cameras.jpg',
    href: '/products/access-control/video-intercom',
  },
  {
    id: 'networking',
    name: 'Networking',
    imageUrl: '/images/card-smb.jpg',
    href: '/products/infrastructure-display/networking',
  },
  {
    id: 'display-control',
    name: 'Display & Control',
    imageUrl: '/images/card-display.jpg',
    href: '/products/infrastructure-display/displays',
  },
  {
    id: 'alarm-system',
    name: 'Alarm System',
    imageUrl: '/images/card-cameras.jpg',
    href: '/products/access-control/alarm-systems',
  },
  {
    id: 'audio',
    name: 'Audio',
    imageUrl: '/images/card-cameras.jpg',
    href: '/products/infrastructure-display/audio',
  },
  {
    id: 'sensing-products',
    name: 'Sensing Products',
    imageUrl: '/images/card-thermal.jpg',
    href: '/products/specialized-solutions/sensing',
  },
  {
    id: 'its',
    name: 'Intelligent Traffic System',
    imageUrl: '/images/card-smb.jpg',
    href: '/products/specialized-solutions/its-traffic',
  },
  {
    id: 'parking',
    name: 'Parking Management',
    imageUrl: '/images/card-solar.jpg',
    href: '/products/specialized-solutions/parking',
  },
  {
    id: 'onboard-security',
    name: 'Onboard Security',
    imageUrl: '/images/card-cameras.jpg',
    href: '/products/specialized-solutions/vehicle',
  },
  {
    id: 'thermal-cameras',
    name: 'Thermal Cameras',
    imageUrl: '/images/card-thermal.jpg',
    href: '/products/infrastructure-display/thermal',
  },
  {
    id: 'radar',
    name: 'Radar',
    imageUrl: '/images/card-solar.jpg',
    href: '/products/specialized-solutions/radar',
  },
  {
    id: 'inspection',
    name: 'Security Inspection & Industrial Inspection',
    imageUrl: '/images/card-thermal.jpg',
    href: '/products/specialized-solutions/machine-vision',
  },
  {
    id: 'transmission',
    name: 'Transmission & Distribution System',
    imageUrl: '/images/card-smb.jpg',
    href: '/products/infrastructure-display/distribution',
  },
  {
    id: 'software-servers',
    name: 'Software & Servers',
    imageUrl: '/images/hero-summit.jpg',
    href: '/products/specialized-solutions/ai-servers',
  },
  {
    id: 'hilook',
    name: 'HiLook',
    imageUrl: '/images/card-cameras.jpg',
    href: '/products/video-security/turbo-hd',
  },
  {
    id: 'smart-city',
    name: 'Smart City',
    imageUrl: '/images/hero-education.jpg',
    href: '/solutions/scenario/smart-cities',
  },
];

export default function ProductsOverviewPage() {
  return (
    <div className="w-full bg-white font-sans text-gray-900">
      {/* 1. Full-Width Hero Banner matching Screenshot 3 */}
      <section className="relative w-full h-[440px] md:h-[500px] bg-gradient-to-r from-[#050C1A] via-[#09152B] to-[#050C1A] overflow-hidden flex items-center justify-center text-center">
        {/* Subtle flowing wave glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,102,204,0.18),transparent_70%)]" />

        <div className="container-enterprise relative z-10 text-white space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            A Pioneer In Security and Beyond
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Supporting Smart Decision Making and Delivering Commercial Growth
          </p>
        </div>
      </section>

      {/* 2. Secondary Sub-navigation Bar matching Screenshot 3 */}
      <div className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-200 shadow-2xs">
        <div className="container-enterprise flex items-center justify-between h-12 overflow-x-auto no-scrollbar">
          <div className="text-xs font-bold text-gray-900 shrink-0">
            Products
          </div>

          <nav className="flex items-center space-x-8 text-xs text-gray-600 shrink-0">
            <a href="#categories" className="hover:text-[#D71920] transition-colors">
              Product categories
            </a>
            <a href="#tools" className="hover:text-[#D71920] transition-colors">
              Tools
            </a>
            <a href="#related" className="hover:text-[#D71920] transition-colors">
              Related links
            </a>
          </nav>
        </div>
      </div>

      {/* 3. "Product categories" Clean 3-Column Grid matching Screenshot 3 */}
      <section id="categories" className="py-16 bg-white border-b border-gray-100">
        <div className="container-enterprise">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Product categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {productCategoryTiles.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs transition-all duration-200 p-6 flex flex-col items-center justify-center text-center group min-h-[220px]"
              >
                {/* Centered Product Hardware Image on clean white */}
                <div className="relative h-28 w-44 flex items-center justify-center mb-3">
                  <Image
                    src={cat.imageUrl}
                    alt={cat.name}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                    sizes="200px"
                  />
                </div>

                {/* Minimal, Clean Title below image */}
                <h3 className="text-xs sm:text-[13px] font-semibold text-gray-900 group-hover:text-[#D71920] transition-colors leading-tight">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "Tools" Section matching Screenshot 3 */}
      <section id="tools" className="py-16 bg-[#FBFBFB] border-b border-gray-100">
        <div className="container-enterprise">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tools</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Find your ideal products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Tool 1: Product Selector */}
            <Link
              href="/tools#selector"
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs p-8 group flex items-center justify-between transition-all"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 text-[#D71920] flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                  Product Selector
                </h3>
                <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                  Find products precisely to your technical specifications and application needs.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#D71920] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
            </Link>

            {/* Tool 2: System Designer */}
            <Link
              href="/tools#bandwidth"
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs p-8 group flex items-center justify-between transition-all"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded bg-blue-50 text-[#0066CC] flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0066CC] transition-colors">
                  HiTools Designer
                </h3>
                <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                  Everything you need from project design, storage calculation, to system launch.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0066CC] group-hover:translate-x-1 transition-all shrink-0 ml-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. "Related links" matching Screenshot 3 */}
      <section id="related" className="py-16 bg-white">
        <div className="container-enterprise">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Related links
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1: Solutions */}
            <Link
              href="/solutions"
              className="group relative h-40 rounded-lg overflow-hidden bg-gray-900 flex items-end p-5 shadow-sm border border-gray-200"
            >
              <Image
                src="/images/card-smb.jpg"
                alt="Solutions"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="relative z-10 text-white">
                <h3 className="text-base font-bold">Solutions</h3>
                <p className="text-xs text-gray-300 mt-0.5">See a wide array of solutions for real-world applications &rarr;</p>
              </div>
            </Link>

            {/* Card 2: Success Stories */}
            <Link
              href="/news"
              className="group relative h-40 rounded-lg overflow-hidden bg-gray-900 flex items-end p-5 shadow-sm border border-gray-200"
            >
              <Image
                src="/images/hero-education.jpg"
                alt="Success Stories"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="relative z-10 text-white">
                <h3 className="text-base font-bold">Success Stories</h3>
                <p className="text-xs text-gray-300 mt-0.5">How we turn our value propositions into your actual benefits &rarr;</p>
              </div>
            </Link>

            {/* Card 3: Core Technologies */}
            <Link
              href="/technologies"
              className="group relative h-40 rounded-lg overflow-hidden bg-gray-900 flex items-end p-5 shadow-sm border border-gray-200"
            >
              <Image
                src="/images/card-display.jpg"
                alt="Core Technologies"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="relative z-10 text-white">
                <h3 className="text-base font-bold">Core Technologies</h3>
                <p className="text-xs text-gray-300 mt-0.5">Unlock business competencies and how they protect you &rarr;</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
