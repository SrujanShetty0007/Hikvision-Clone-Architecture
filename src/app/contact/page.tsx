'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const offices = [
    {
      region: 'Global Headquarters',
      city: 'London, United Kingdom',
      address: '25 Bank Street, Canary Wharf, London E14 5JP',
      phone: '+44 20 7946 0800',
      email: 'global.hq@nexusvision.com',
      hours: 'Mon - Fri: 08:30 - 18:00 GMT',
    },
    {
      region: 'North America Technical Center',
      city: 'City of Industry, California, USA',
      address: '18639 Railroad Street, City of Industry, CA 91748',
      phone: '+1 909 895 0400',
      email: 'usa.support@nexusvision.com',
      hours: 'Mon - Fri: 07:00 - 17:00 PST',
    },
    {
      region: 'European Operations & Logistics',
      city: 'Hoofddorp, The Netherlands',
      address: 'Dirk Storklaan 3, 2132 PX Hoofddorp, Amsterdam',
      phone: '+31 23 554 2770',
      email: 'eu.sales@nexusvision.com',
      hours: 'Mon - Fri: 09:00 - 17:30 CET',
    },
    {
      region: 'Asia Pacific Regional Office',
      city: 'Singapore',
      address: '7 Temasek Boulevard, #12-01 Suntec Tower One, Singapore 038987',
      phone: '+65 6884 9288',
      email: 'apac@nexusvision.com',
      hours: 'Mon - Fri: 09:00 - 18:00 SGT',
    },
    {
      region: 'Middle East & Africa HQ',
      city: 'Dubai, United Arab Emirates',
      address: 'Dubai Silicon Oasis, Dtec Center, PO Box 341041',
      phone: '+971 4 371 2688',
      email: 'mea@nexusvision.com',
      hours: 'Sun - Thu: 08:30 - 17:30 GST',
    },
  ];

  return (
    <div className="w-full bg-[#FBFBFB] min-h-screen">
      <div className="bg-white border-b border-gray-200 py-10">
        <div className="container-enterprise">
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-2">
            Global Network
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact NexusVision Global
          </h1>
          <p className="text-sm text-gray-600 mt-2 max-w-2xl leading-relaxed">
            Reach our regional pre-sales architects, project deal managers, and certified warranty repair centers worldwide.
          </p>
        </div>
      </div>

      <div className="container-enterprise py-12 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-gray-200/90 shadow-2xs">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Send an Enterprise Inquiry</h2>
            <p className="text-xs text-gray-500 mb-6">
              Complete the form below and your regional branch office will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-green-50 rounded-xl border border-green-200">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-green-900">Message Dispatched</h4>
                <p className="text-xs text-green-700 mt-1 max-w-md mx-auto">
                  Your inquiry has been assigned ticket #NX-2026-8941. An authorized account specialist will contact you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4 text-xs"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enterprise Security Corp"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Direct Phone</label>
                    <input
                      type="tel"
                      placeholder="+44 20 7946 0192"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Subject / Department</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden bg-white text-gray-800">
                    <option>Product Pre-Sales &amp; Enterprise Project Pricing</option>
                    <option>Distributor / Channel Partnership Application</option>
                    <option>Technical Support &amp; Firmware Troubleshooting</option>
                    <option>Warranty RMA &amp; Advance Hardware Replacement</option>
                    <option>Media, Press &amp; Corporate Relations</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Project Details / Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details on project location, estimated device quantities, or specific models..."
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D71920] hover:bg-[#B81419] text-white font-bold rounded transition-colors shadow-sm cursor-pointer"
                >
                  Send Inquiry to Regional Branch
                </button>
              </form>
            )}
          </div>

          {/* Hotline & Escalation Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gray-900 text-white space-y-4 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D71920] block">
                Direct Engineering Care
              </span>
              <h3 className="text-xl font-bold">24/7 Technical Support Hotline</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Certified Level-3 system engineers available round the clock for active mission-critical installations.
              </p>
              <div className="pt-2 font-mono text-xl font-bold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#D71920]" />
                <span>+1 (800) 555-NEXUS</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Toll-free international access with English, Spanish, French, and German language support.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs space-y-3">
              <h4 className="text-sm font-bold text-gray-900">RMA Repair &amp; Service Centers</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Need to submit a repair request or check status? Use our digital warranty portal to print pre-paid courier shipping labels.
              </p>
              <a
                href="/support#warranty"
                className="text-xs font-bold text-[#D71920] hover:underline inline-block pt-1"
              >
                Launch Online RMA Service &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Global Offices Directory */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Global Presence
            </span>
            <h2 className="text-2xl font-bold text-gray-900">Regional Branch Offices</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs space-y-3"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D71920] block">
                    {office.region}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mt-0.5">{office.city}</h3>
                </div>

                <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono">
                    <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
