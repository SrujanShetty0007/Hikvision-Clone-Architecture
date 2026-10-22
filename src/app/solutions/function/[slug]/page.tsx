import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { productsData } from '@/data/products';
import { ChevronRight, ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return [
    { slug: 'video-surveillance' },
    { slug: 'access-control' },
    { slug: 'attendance-management' },
    { slug: 'remote-monitoring' },
    { slug: 'intrusion-detection' },
    { slug: 'visitor-management' },
    { slug: 'centralized-management' },
    { slug: 'intelligent-analytics' },
    { slug: 'traffic-management' },
    { slug: 'smart-automation' },
  ];
}

interface FunctionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function FunctionPage({ params }: FunctionPageProps) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug) || solutionsData[1];
  const recommendedHardware = productsData.slice(0, 4);

  const functionTitles: Record<string, string> = {
    'video-surveillance': 'Smart Video Surveillance',
    'access-control': 'Touchless Access Control',
    'attendance-management': 'Automated Time & Attendance',
    'remote-monitoring': 'Visual Remote Monitoring',
    'intrusion-detection': 'Perimeter Intrusion Detection',
    'visitor-management': 'Visitor Registration & Badging',
    'centralized-management': 'Centralized Platform Management',
    'intelligent-analytics': 'Deep Learning Video Analytics',
  };

  const title = functionTitles[slug] || `${slug.replace(/-/g, ' ')} Capability`;

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      <div className="relative w-full h-80 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src="/images/hero-smb.jpg"
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
            <span className="text-white font-semibold">Function</span>
          </nav>

          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            Functional Intelligence Module
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-sm text-gray-300 leading-relaxed">
            Harness deep-learning edge neural networks and multi-protocol automation to achieve {title.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="container-enterprise py-12 space-y-12">
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs space-y-4">
          <h2 className="text-xl font-bold text-gray-900">Functional Capabilities &amp; Architecture</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            NexusVision functional modules integrate effortlessly across our full spectrum of network cameras, access control terminals, VMS servers, and mobile client apps. Whether auditing POS cash discrepancies, automating license plate barrier gates, or broadcasting scheduled PA voice announcements, our unified software stack streamlines daily operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {[
              'Sub-second edge processing without sending raw video to cloud servers',
              'Open ONVIF Profile M metadata streaming to third-party VMS suites',
              'Automated alarm linkage: audio sirens, flashing strobes, and push alerts',
              'End-to-end cryptographic encryption with hardware root of trust',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Hardware */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Compatible Hardware Models</h2>
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
