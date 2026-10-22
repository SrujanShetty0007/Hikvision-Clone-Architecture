import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { productsData } from '@/data/products';
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return [
    { slug: 'schools' },
    { slug: 'power-plants' },
    { slug: 'healthcare' },
    { slug: 'warehouses' },
    { slug: 'industrial-plants' },
    { slug: 'transit-hubs' },
    { slug: 'smart-cities' },
    { slug: 'shopping-centers' },
    { slug: 'command-centers' },
    { slug: 'parking-facilities' },
    { slug: 'campuses' },
    { slug: 'offices' },
    { slug: 'retail-stores' },
    { slug: 'industrial-sites' },
    { slug: 'residential-communities' },
  ];
}

interface ScenarioPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ScenarioPage({ params }: ScenarioPageProps) {
  const { slug } = await params;
  // Match scenario or fallback to first
  const solution = solutionsData.find((s) => s.slug === slug) || solutionsData[0];
  const recommendedHardware = productsData.slice(0, 4);

  const scenarioTitles: Record<string, string> = {
    campuses: 'Schools & University Campuses',
    offices: 'Corporate Offices & Headquarters',
    warehouses: 'Distribution Centers & Logistics Hubs',
    'retail-stores': 'Retail Stores & Supermarkets',
    'parking-facilities': 'Parking Garages & Transportation Terminals',
    'industrial-sites': 'Industrial Manufacturing Facilities',
    'residential-communities': 'Residential Gated Communities',
    'command-centers': 'Central Operations & Command Centers',
  };

  const title = scenarioTitles[slug] || `${slug.replace(/-/g, ' ')} Scenario`;

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      <div className="relative w-full h-80 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src={solution.heroImage}
          alt={title}
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-3 max-w-2xl">
          <nav className="flex items-center space-x-2 text-xs text-gray-400 mb-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/solutions" className="hover:text-white">Solutions</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-semibold">Scenario</span>
          </nav>

          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            Physical Scenario Architecture
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight capitalize">
            {title}
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Tailored equipment layout, perimeter radar protection, and multi-sensor coverage designed specifically for {title.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="container-enterprise py-12 space-y-12">
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Scenario Deployment Strategy</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Every physical scenario presents unique optical lighting hurdles, human footfall patterns, and regulatory demands. NexusVision scenario blueprints combine AI deep-learning analytics with specialized mounting hardware to eliminate dead zones and automate response workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-[#D71920] block mb-1">Zone 1: Perimeter</span>
              <p className="text-xs text-gray-600">Thermal bi-spectrum &amp; AcuSense cameras filtering false alarms.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-[#D71920] block mb-1">Zone 2: Access Checkpoints</span>
              <p className="text-xs text-gray-600">MinMoe touchless biometric turnstiles and ANPR vehicle barrier gates.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="text-xs font-bold text-[#D71920] block mb-1">Zone 3: Core Operations</span>
              <p className="text-xs text-gray-600">4K ColorVu full-color cameras and DeepinMind central NVR storage.</p>
            </div>
          </div>
        </div>

        {/* Recommended Hardware */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Compatible Hardware Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedHardware.map((prod) => (
              <div key={prod.id} className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 flex flex-col justify-between">
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

        <div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#D71920]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Solutions Hub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
