'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supportResourcesData, faqData } from '@/data/resources';
import { ContextualNavigation } from '@/components/layout/ContextualNavigation';
import {
  Download,
  FileText,
  Search,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useEnterprise } from '@/context/EnterpriseContext';

export default function SupportOverviewPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [serialNumber, setSerialNumber] = useState('');
  const [warrantyResult, setWarrantyResult] = useState<string | null>(null);
  const { setIsInquiryOpen, setIsSearchOpen } = useEnterprise();

  const contextualNavItems = [
    { label: 'Support Overview', href: '/support', active: true },
    { label: 'Download Center', href: '/support/downloads' },
    { label: 'Documentation & Guides', href: '/support#docs' },
    { label: 'Warranty & Service', href: '/support#warranty' },
    { label: 'Technical FAQs', href: '/support#faq' },
    { label: 'Contact Support', href: '/contact' },
  ];

  const handleWarrantyCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serialNumber.trim()) return;
    setWarrantyResult(
      `Hardware S/N [${serialNumber.toUpperCase()}] is covered under NexusVision Standard 3-Year Advanced Warranty until March 2029.`
    );
  };

  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Support Hero Banner */}
      <div className="relative w-full h-80 sm:h-96 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src="/images/card-display.jpg"
          alt="Technical Support"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-4 max-w-2xl">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            Customer Success &amp; Engineering Care
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Support &amp; Service Portal
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Get 24/7 technical assistance, verified firmware binaries, certified user documentation, and warranty status verification for your deployment.
          </p>
        </div>
      </div>

      <ContextualNavigation items={contextualNavItems} title="Support" />

      <div className="container-enterprise py-14 space-y-20">
        {/* Quick Shortcut Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/support/downloads"
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center mb-4 group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                Download Center
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Official firmware updates, SADP subnet tools, and VMS client software suites.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-bold text-[#D71920] inline-flex items-center gap-1">
              <span>Go to Downloads</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <a
            href="#docs"
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center mb-4 group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                Documentation Library
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Hardware installation wiring guides, schematics, and developer API references.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-bold text-[#D71920] inline-flex items-center gap-1">
              <span>Browse Manuals</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          <a
            href="#warranty"
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center mb-4 group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                Warranty &amp; Service
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Check serial number warranty coverage and submit authorized RMA repair tickets.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-bold text-[#D71920] inline-flex items-center gap-1">
              <span>Check Warranty</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </a>

          <Link
            href="/contact"
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center mb-4 group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                Technical Escalation
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Open a priority technical case directly with regional senior support engineers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 text-xs font-bold text-[#D71920] inline-flex items-center gap-1">
              <span>Contact Engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* Warranty Check Widget */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200/90 shadow-2xs" id="warranty">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Online Verification
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              Serial Number Warranty Checker
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Enter the 9-digit serial number located on your camera body or NVR chassis label.
            </p>
          </div>

          <form onSubmit={handleWarrantyCheck} className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="text"
              required
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              placeholder="e.g. NX260199482"
              className="flex-1 px-4 py-2.5 text-xs font-mono uppercase bg-gray-50 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded transition-colors shadow-2xs cursor-pointer shrink-0"
            >
              Verify Warranty
            </button>
          </form>

          {warrantyResult && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-fade-in max-w-xl">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{warrantyResult}</span>
            </div>
          )}
        </div>

        {/* Technical Documentation Hub */}
        <div className="space-y-6" id="docs">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Technical Documentation
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Featured Manuals &amp; User Guides</h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200/90 shadow-2xs divide-y divide-gray-100">
            {supportResourcesData.slice(0, 5).map((res) => (
              <div
                key={res.id}
                className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                      {res.category}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">{res.productFamily}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">{res.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{res.description}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className="text-xs text-gray-400 font-mono">{res.fileSize}</span>
                  <a
                    href={res.downloadUrl}
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Initiating download for ${res.title}`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-gray-100 hover:bg-[#D71920] text-gray-700 hover:text-white rounded transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/support/downloads"
              className="text-xs font-bold text-[#D71920] hover:underline inline-flex items-center gap-1"
            >
              <span>View All 50+ Files in Download Center</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-6" id="faq">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Knowledgebase
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqData.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-gray-200/90 shadow-2xs overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-gray-900 hover:text-[#D71920] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-[#D71920] shrink-0" />
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        isOpen ? 'rotate-180 text-[#D71920]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                      <p>{faq.answer}</p>
                      <span className="inline-block mt-3 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Category: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
