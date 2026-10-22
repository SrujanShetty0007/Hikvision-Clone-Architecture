import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { productCategories } from '@/data/productCategories';
import { productsData } from '@/data/products';
import { ProductListing } from '@/components/products/ProductListing';
import { Play, Download, ArrowRight, ChevronRight, Sliders, Cpu, Wrench } from 'lucide-react';

export function generateStaticParams() {
  return productCategories.map((c) => ({
    category: c.slug,
  }));
}

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = productCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  const categoryProducts = productsData.filter((p) => p.categorySlug === categorySlug);

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      {/* 1. Full-Width Hero Banner matching Screenshot 3 */}
      <section className="relative w-full h-[460px] md:h-[520px] bg-gradient-to-r from-[#071328] via-[#0d2146] to-[#09172f] overflow-hidden flex items-center">
        {/* Subtle background tech glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(0,102,204,0.25),transparent_60%)]" />

        <div className="container-enterprise relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 text-white space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              DeepinViewX Cameras with Guanlan AI
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-normal">
              Find out more by clicking on cameras &amp; vision sensors
            </p>
            <div className="pt-2">
              <a
                href="#product-list"
                className="inline-flex items-center justify-center px-6 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-semibold rounded tracking-wide transition-colors shadow-sm"
              >
                Explore now
              </a>
            </div>
          </div>

          {/* Right Product Graphic Cluster */}
          <div className="lg:col-span-6 relative h-[280px] sm:h-[340px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={category.bannerImage || '/images/card-cameras.jpg'}
                alt={category.name}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Secondary Sub-navigation Bar matching Screenshot 3 */}
      <div className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-200/90 shadow-2xs">
        <div className="container-enterprise flex items-center justify-between h-12 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-900 shrink-0">
            <span>1 /</span>
            <span>{category.name}</span>
          </div>

          <nav className="flex items-center space-x-6 text-xs text-gray-600 shrink-0">
            <a href="#what-we-offer" className="hover:text-[#D71920] transition-colors">
              What we offer
            </a>
            <a href="#categories" className="hover:text-[#D71920] transition-colors">
              Product categories
            </a>
            <a href="#product-list" className="hover:text-[#D71920] transition-colors">
              Product list
            </a>
            <a href="#tools" className="hover:text-[#D71920] transition-colors">
              Tools
            </a>
            <a href="#video" className="hover:text-[#D71920] transition-colors">
              Watch video
            </a>
            <a href="#download" className="hover:text-[#D71920] transition-colors">
              Download
            </a>
            <a href="#related" className="hover:text-[#D71920] transition-colors">
              Related links
            </a>
          </nav>
        </div>
      </div>

      {/* 3. "What we offer" Section matching Screenshot 3 */}
      <section id="what-we-offer" className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            What we offer
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify sm:text-center">
            <p>
              As the core frontline of perimeter intelligence and operational awareness, NEXUSVISION {category.name} integrate industry-leading optical sensors, proprietary ColorVu low-light photon collection, and Guanlan edge deep-learning chips to deliver unparalleled image clarity and threat discrimination.
            </p>
            <p>
              From ultra-high-definition 4K 8MP sensor arrays to ruggedized IP67/IK10 enclosures and autonomous solar-powered 4G deployment platforms, our portfolio provides end-to-end security solutions for commercial, industrial, and urban architectures.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/technologies"
              className="inline-flex items-center text-xs font-semibold text-[#0066CC] hover:text-[#D71920] transition-colors"
            >
              <span>Explore core vision &amp; AI architectures</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. "Product categories" Grid matching Screenshot 3 */}
      <section id="categories" className="py-16 bg-[#FBFBFB] border-b border-gray-100">
        <div className="container-enterprise">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Product categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((sub) => (
              <div
                key={sub.slug}
                className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Centered Image */}
                  <div className="relative h-40 w-full flex items-center justify-center mb-4">
                    <Image
                      src={category.imageUrl}
                      alt={sub.name}
                      fill
                      className="object-contain p-2"
                      sizes="300px"
                    />
                  </div>

                  {/* Title with chevron */}
                  <Link
                    href={`/products/${category.slug}/${sub.slug}`}
                    className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-[#D71920] transition-colors group mb-2"
                  >
                    <span>{sub.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Link>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                    {sub.description}
                  </p>
                </div>

                {/* Subcategory Bullet Links */}
                <ul className="space-y-1.5 pt-3 border-t border-gray-100 text-xs text-[#0066CC]">
                  <li>
                    <Link href={`/products/${category.slug}/${sub.slug}`} className="hover:underline block">
                      &bull; Pro Series Lineup
                    </Link>
                  </li>
                  <li>
                    <Link href={`/products/${category.slug}/${sub.slug}`} className="hover:underline block">
                      &bull; Ultra Series High-End
                    </Link>
                  </li>
                  <li>
                    <Link href={`/products/${category.slug}/${sub.slug}`} className="hover:underline block">
                      &bull; Value Series Cost-Efficient
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Product list" Section matching Screenshot 3 & 4 */}
      <section id="product-list" className="py-16 bg-white border-b border-gray-100">
        <div className="container-enterprise">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Product list
          </h2>

          <ProductListing
            initialProducts={categoryProducts.length > 0 ? categoryProducts : productsData}
            categorySlug={categorySlug}
          />
        </div>
      </section>

      {/* 6. "Tools" Section matching Screenshot 3 */}
      <section id="tools" className="py-16 bg-[#FBFBFB] border-b border-gray-100">
        <div className="container-enterprise">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tools</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Find your ideal products &amp; system setup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Tool 1: Product Selector */}
            <Link
              href="/tools#selector"
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs p-6 rounded-lg group flex items-center justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded bg-red-50 text-[#D71920] flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                  Product Selector
                </h3>
                <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                  Easily discover and compare relevant products across series, resolution, and AI capability.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#D71920] group-hover:translate-x-1 transition-all" />
            </Link>

            {/* Tool 2: System Designer */}
            <Link
              href="/tools#bandwidth"
              className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs p-6 rounded-lg group flex items-center justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded bg-blue-50 text-[#0066CC] flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0066CC] transition-colors">
                  Bandwidth &amp; Storage Calculator
                </h3>
                <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                  Design your surveillance system storage, disk arrays, and network throughput accurately.
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#0066CC] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. "Watch video" Section matching Screenshot 3 */}
      <section id="video" className="py-16 bg-white border-b border-gray-100">
        <div className="container-enterprise">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Watch video
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Video Card 1 */}
            <div className="group relative aspect-16/9 rounded-lg overflow-hidden bg-gray-900 shadow-sm cursor-pointer border border-gray-200">
              <Image
                src="/images/hero-summit.jpg"
                alt="New Era of IP Network Video"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/60 border border-white/40 flex items-center justify-center group-hover:bg-[#D71920] group-hover:border-[#D71920] transition-colors">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-xs font-semibold text-white">
                  New Era of IP Network Video Architecture
                </span>
              </div>
            </div>

            {/* Video Card 2 */}
            <div className="group relative aspect-16/9 rounded-lg overflow-hidden bg-gray-900 shadow-sm cursor-pointer border border-gray-200">
              <Image
                src="/images/card-cameras.jpg"
                alt="ColorVu & AcuSense in Action"
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-black/60 border border-white/40 flex items-center justify-center group-hover:bg-[#D71920] group-hover:border-[#D71920] transition-colors">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <span className="text-xs font-semibold text-white">
                  Automated Perimeter Protection in 4K Full Color
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. "Download" Section matching Screenshot 3 */}
      <section id="download" className="py-16 bg-[#FBFBFB] border-b border-gray-100">
        <div className="container-enterprise text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Download
          </h2>

          <div className="inline-block">
            <Link
              href="/support/downloads"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white border border-gray-300 rounded hover:border-[#D71920] hover:text-[#D71920] transition-all group shadow-2xs"
            >
              <Download className="w-4 h-4 text-gray-500 group-hover:text-[#D71920]" />
              <span className="text-xs font-semibold text-gray-800 group-hover:text-[#D71920]">
                Brochure - Key Innovations of Network Cameras (PDF)
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. "Talk to a representative" matching Screenshot 3 */}
      <section className="py-16 bg-white border-b border-gray-100 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Talk to a representative
        </h2>
        <p className="text-xs text-gray-500 max-w-md mx-auto">
          Need project quotation, architecture consultation, or distributor partner contacts?
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-semibold rounded tracking-wide transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* 10. "Related links" matching Screenshot 3 */}
      <section id="related" className="py-16 bg-[#FBFBFB]">
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
                <p className="text-xs text-gray-300 mt-0.5">Explore scenario-based architectures &rarr;</p>
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
                <p className="text-xs text-gray-300 mt-0.5">Global deployments and customer case studies &rarr;</p>
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
                <p className="text-xs text-gray-300 mt-0.5">DeepinView, ColorVu, AcuSense AI engines &rarr;</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
