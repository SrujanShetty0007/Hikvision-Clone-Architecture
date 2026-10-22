'use client';

import React from 'react';
import Link from 'next/link';
import { Sliders, Calculator, Download, HelpCircle, ArrowRight } from 'lucide-react';

export const ResourceCards: React.FC = () => {
  const tools = [
    {
      title: 'Interactive Product Selector',
      desc: 'Answer 3 simple operational questions to instantly filter the ideal camera, lens, and NVR models for your site.',
      icon: Sliders,
      href: '/tools#selector',
      action: 'Launch Selector',
      badge: 'Interactive',
    },
    {
      title: 'Bandwidth & Storage Calculator',
      desc: 'Simulate required hard disk terabytes and network PoE switch throughput based on camera channels, resolution, and H.265+.',
      icon: Calculator,
      href: '/tools#calculator',
      action: 'Calculate Storage',
      badge: 'Engineering Tool',
    },
    {
      title: 'Central Download Center',
      desc: 'Search, verify, and download official device firmware binaries, SADP network tools, and multi-language client software.',
      icon: Download,
      href: '/support/downloads',
      action: 'Explore Downloads',
      badge: 'Firmware & VMS',
    },
    {
      title: 'Technical FAQs & Knowledgebase',
      desc: 'Browse step-by-step wiring guides, camera initial activation protocols, and common network troubleshooting.',
      icon: HelpCircle,
      href: '/support#faq',
      action: 'Read Guides',
      badge: '24/7 Support',
    },
  ];

  return (
    <section className="py-20 bg-[#F5F6F7] border-t border-gray-200/80 font-sans" aria-label="Tools and Engineering Resources">
      <div className="container-enterprise">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-bold text-[#D71920] uppercase tracking-wider block mb-1.5">
            System Design &amp; Deployment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Engineering Tools &amp; Resources
          </h2>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            Free enterprise software utilities designed to streamline pre-sales estimation, system design, and on-site maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-7 border border-gray-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-red-50 text-[#D71920] flex items-center justify-center group-hover:bg-[#D71920] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-gray-100 text-gray-700">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2.5 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-gray-100">
                  <Link
                    href={tool.href}
                    className="inline-flex items-center text-sm font-bold text-[#D71920] group-hover:translate-x-1 transition-transform"
                  >
                    <span>{tool.action}</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
