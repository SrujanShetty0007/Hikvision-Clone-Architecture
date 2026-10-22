'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ContextualNavigation } from '@/components/layout/ContextualNavigation';
import { CheckCircle2, ArrowRight, Building, Award, Shield, Users, Check } from 'lucide-react';
import { useEnterprise } from '@/context/EnterpriseContext';

export default function PartnersPage() {
  const [partnerType, setPartnerType] = useState('integrator');
  const [applied, setApplied] = useState(false);
  const { setIsAccountModalOpen } = useEnterprise();

  const contextualNavItems = [
    { label: 'Overview', href: '/partners', active: true },
    { label: 'Channel Partner Program', href: '/partners#channel-program' },
    { label: 'Technology Partners', href: '/partners#technology-partners' },
    { label: 'Distributor Directory', href: '/partners#distributors' },
    { label: 'Partner Portal Login', href: '#portal' },
  ];

  return (
    <div className="w-full bg-[#FBFBFB]">
      {/* Hero */}
      <div className="relative w-full h-80 sm:h-96 bg-gray-950 overflow-hidden flex items-center">
        <Image
          src="/images/hero-summit.jpg"
          alt="Partnership ecosystem"
          fill
          className="object-cover opacity-35"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        <div className="relative z-10 container-enterprise text-white space-y-4 max-w-2xl">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
            Global Partner Ecosystem
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Grow Your Business With NexusVision
          </h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Join over 12,000 certified distributors, system integrators, and technology alliance partners delivering intelligent vision worldwide.
          </p>
        </div>
      </div>

      <ContextualNavigation items={contextualNavItems} title="Partners" />

      <div className="container-enterprise py-14 space-y-20">
        {/* Channel Partner Program (Two-column layout matching Section 8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="channel-program">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block">
              Global Channel Alliance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Channel Partner Program 2026
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Designed for security installers, value-added resellers (VARs), and system integrators. Benefit from multi-tiered margin protection, direct project deal registration, advance hardware replacements, and accredited academy certifications.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Project Deal Protection', desc: 'Secure exclusive tender discounts and protected margins on registered enterprise projects.' },
                { title: 'Advance RMA Replacement', desc: 'Pre-shipment hardware replacement dispatched within 24 hours to keep client sites operational.' },
                { title: 'Nexus Academy Certification', desc: 'Hands-on technical training and certified engineer badges for your pre-sales and field staff.' },
                { title: 'Co-op Marketing Development Funds (MDF)', desc: 'Co-funded promotional exhibition booths, client demo showcases, and marketing collateral.' },
              ].map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">{b.title}</h4>
                    <p className="text-xs text-gray-500">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="px-6 py-3 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded-md shadow-md transition-all cursor-pointer"
              >
                Apply for Channel Partnership
              </a>
              <button
                onClick={() => setIsAccountModalOpen(true)}
                className="px-5 py-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-800 text-xs font-bold rounded-md shadow-2xs transition-colors cursor-pointer"
              >
                Existing Partner Login
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/images/card-display.jpg"
                alt="Channel partners collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Technology Alliance Program */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200/90 shadow-2xs" id="technology-partners">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Open Integration Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Technology Alliance Program
            </h2>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              We collaborate with world-leading VMS software, access control panels, cloud storage providers, and analytics developers via open APIs and ONVIF Profile M standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            {[
              { name: 'Milestone Systems', type: 'VMS Alliance Verified' },
              { name: 'Genetec Security Center', type: 'Protocol Integrated' },
              { name: 'Cisco Networking', type: 'PoE Switch Verified' },
              { name: 'Western Digital / Seagate', type: 'Surveillance HDD Qualified' },
              { name: 'HID Global', type: 'Smart Card Integrated' },
              { name: 'Bosch Building Systems', type: 'Intercom Linked' },
              { name: 'Nvidia Metropolis', type: 'Edge AI Acceleration' },
              { name: 'AWS IoT Core', type: 'Cloud Device Qualification' },
            ].map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-200 bg-gray-50 text-center space-y-1">
                <span className="text-sm font-bold text-gray-900 block">{p.name}</span>
                <span className="text-[10px] text-gray-400 font-medium block">{p.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Discover More Cards (Matching Section 8) */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Partner Hub
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Discover More Partner Resources</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="distributors">
            {[
              {
                title: 'Find a Distributor',
                desc: 'Locate authorized tier-1 stocking distributors in your country with local inventory and warranty support.',
                action: 'Distributor Directory',
                href: '/contact',
              },
              {
                title: 'Find a Solution Partner',
                desc: 'Connect with certified systems integrators specialized in enterprise campus and industrial projects.',
                action: 'Integrator Directory',
                href: '/solutions',
              },
              {
                title: 'Nexus Partner Portal',
                desc: 'Access deal registration, order tracking, price lists, and technical support escalation.',
                action: 'Launch Portal',
                href: '#portal',
              },
              {
                title: 'Nexus Academy Certification',
                desc: 'Enroll in online and instructor-led training courses for Certified Security Professional (NCSP).',
                action: 'Explore Academy',
                href: '/support',
              },
            ].map((card, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{card.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href={card.href}
                    className="text-xs font-bold text-[#D71920] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{card.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Application Form Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-200/90 shadow-sm max-w-3xl mx-auto" id="apply">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Partner Enrollment
            </span>
            <h3 className="text-2xl font-bold text-gray-900">
              Apply to Become an Authorized Partner
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Fill in your corporate details to be assigned to your regional distribution channel manager.
            </p>
          </div>

          {applied ? (
            <div className="text-center py-8 bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="text-base font-bold text-green-900">Application Submitted Successfully</h4>
              <p className="text-xs text-green-700 mt-1">
                Our regional partner account team will review your business credentials and contact you within 2 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setApplied(true);
              }}
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Company Legal Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Apex Security Technologies LLC"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Business Website *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://apexsecurity.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Vance"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Job Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="Managing Director / VP Engineering"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@apexsecurity.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Country / Territory *</label>
                  <input
                    type="text"
                    required
                    placeholder="United Kingdom / Europe"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Primary Business Activity</label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden bg-white text-gray-800"
                >
                  <option value="integrator">System Integrator / Installer (Commercial &amp; Enterprise)</option>
                  <option value="distributor">Stocking Distributor / Wholesaler</option>
                  <option value="var">Value-Added Reseller (VAR)</option>
                  <option value="technology">Technology / Software Alliance Developer</option>
                  <option value="consultant">Security Consultant / A&amp;E Specifier</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#D71920] hover:bg-[#B81419] text-white font-bold rounded transition-colors shadow-sm cursor-pointer"
                >
                  Submit Channel Partner Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
