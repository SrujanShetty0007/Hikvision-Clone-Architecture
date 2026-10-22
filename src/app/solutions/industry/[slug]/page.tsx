import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { solutionsData } from '@/data/solutions';
import { productsData } from '@/data/products';
import { ChevronRight, ArrowRight, CheckCircle2, ShieldAlert, Layers, Quote, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const recommendedHardware = productsData.filter((p) =>
    solution.recommendedProducts.includes(p.slug)
  );

  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Hero Banner */}
      <div className="relative w-full h-80 sm:h-96 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src={solution.heroImage}
          alt={solution.title}
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-3 max-w-2xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/solutions" className="hover:text-white">Solutions</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">{solution.title}</span>
          </nav>

          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            Enterprise Vertical Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {solution.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {solution.subtitle}
          </p>
        </div>
      </div>

      <div className="container-enterprise py-12 space-y-16">
        {/* Solution Overview */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Solution Overview</h2>
          <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
            {solution.overview}
          </p>
        </div>

        {/* Operational Challenges */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Pain Points Addressed
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              Industry Challenges &amp; Bottlenecks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{ch.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{ch.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Architecture Diagram Topology */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              System Topology
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              {solution.architecture.headline}
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              {solution.architecture.description}
            </p>
          </div>

          <div className="space-y-4">
            {solution.architecture.layers.map((layer, lIdx) => (
              <div
                key={lIdx}
                className="p-5 rounded-xl border border-gray-200 bg-gray-50/70 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-[#D71920]" />
                  <h3 className="text-sm font-bold text-gray-900">{layer.layerName}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-3">{layer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.components.map((comp, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-gray-200 rounded text-gray-800"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Capabilities */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Operational Value
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Key Functional Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.keyCapabilities.map((cap, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{cap.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Hardware */}
        {recommendedHardware.length > 0 && (
          <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
                  Bill of Materials
                </span>
                <h2 className="text-xl font-bold text-gray-900">Recommended Hardware Components</h2>
              </div>
              <Link href="/products" className="text-xs font-bold text-[#D71920] hover:underline">
                View All Hardware &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedHardware.map((prod) => (
                <div
                  key={prod.id}
                  className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#D71920]">{prod.model}</span>
                    <h4 className="text-xs font-bold text-gray-900 mt-0.5 line-clamp-1">{prod.name}</h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{prod.tagline}</p>
                  </div>
                  <Link
                    href={`/products/${prod.categorySlug}/${prod.subcategorySlug}/${prod.slug}`}
                    className="mt-4 text-xs font-bold text-[#D71920] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Model Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Case Study & Success Story */}
        {solution.successStories.length > 0 && (
          <div className="p-8 rounded-2xl bg-gray-900 text-white relative overflow-hidden">
            <div className="relative z-10 space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-[#D71920]">
                <Quote className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                  Customer Success Story
                </span>
              </div>
              <p className="text-lg sm:text-xl font-medium italic text-gray-100 leading-relaxed">
                &ldquo;{solution.successStories[0].quote}&rdquo;
              </p>
              <div>
                <span className="text-sm font-bold block">{solution.successStories[0].client}</span>
                <span className="text-xs text-gray-400">{solution.successStories[0].location}</span>
              </div>
              <div className="pt-3 border-t border-gray-800 text-xs text-emerald-400 font-semibold">
                Outcome: {solution.successStories[0].outcome}
              </div>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-4">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#D71920] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Solutions</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
