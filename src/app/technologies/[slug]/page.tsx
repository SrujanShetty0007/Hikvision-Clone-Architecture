import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { technologiesData } from '@/data/technologies';
import { productsData } from '@/data/products';
import { ChevronRight, ArrowRight, CheckCircle2, Cpu, ArrowLeft, Download } from 'lucide-react';

export function generateStaticParams() {
  return technologiesData.map((t) => ({
    slug: t.slug,
  }));
}

interface TechnologyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TechnologyPage({ params }: TechnologyPageProps) {
  const { slug } = await params;
  const tech = technologiesData.find((t) => t.slug === slug);

  if (!tech) {
    notFound();
  }

  const compatibleHardware = productsData.filter((p) =>
    tech.applicableProducts.includes(p.slug)
  );

  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Hero */}
      <div className="relative w-full h-80 sm:h-96 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src={tech.heroImage}
          alt={tech.title}
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-3 max-w-2xl">
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/technologies" className="hover:text-white">Technologies</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">{tech.title}</span>
          </nav>

          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            {tech.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {tech.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {tech.tagline}
          </p>
        </div>
      </div>

      <div className="container-enterprise py-12 space-y-16">
        {/* Technology Overview */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Scientific Background &amp; Architecture</h2>
          <p className="text-sm text-gray-700 leading-relaxed max-w-4xl">
            {tech.overview}
          </p>
        </div>

        {/* Key Innovations */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Patented Breakthroughs
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Key Engineering Innovations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tech.keyInnovations.map((inn, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs space-y-3"
              >
                {inn.metric && (
                  <span className="text-xs font-bold text-[#D71920] bg-red-50 border border-red-100 px-2.5 py-1 rounded-sm inline-block">
                    {inn.metric}
                  </span>
                )}
                <h3 className="text-sm font-bold text-gray-900">{inn.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{inn.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Principles */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs space-y-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Technical Standards &amp; Principles</h2>
          <div className="space-y-3">
            {tech.architecturePoints.map((point, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hardware Implementations */}
        {compatibleHardware.length > 0 && (
          <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
                  Product Deployment
                </span>
                <h2 className="text-xl font-bold text-gray-900">
                  Hardware Powered by {tech.title}
                </h2>
              </div>
              <Link href="/products" className="text-xs font-bold text-[#D71920] hover:underline">
                View Full Range &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {compatibleHardware.map((prod) => (
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
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back navigation */}
        <div className="pt-4">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#D71920] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Technologies</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
