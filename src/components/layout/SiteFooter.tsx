'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { footerNavigation } from '@/data/navigation';
import { ArrowRight, Mail, CheckCircle2, Shield, Globe } from 'lucide-react';
import { useEnterprise } from '@/context/EnterpriseContext';

export const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { setIsLangModalOpen, currentLanguage } = useEnterprise();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#2C2D2F] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="container-enterprise">
        {/* Top Newsletter & Region row */}
        <div className="pb-12 mb-12 border-b border-gray-700/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#D71920] rounded-xs" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                Subscribe to NexusVision Enterprise Insights
              </h3>
            </div>
            <p className="text-xs text-gray-400 max-w-xl leading-relaxed">
              Receive quarterly firmware release advisories, whitepapers on edge AIoT innovations, and invitation-only security summit keynote passes.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold py-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you. You have been enrolled in Enterprise Technical Bulletins.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter corporate email..."
                    className="w-full sm:w-72 bg-gray-800/80 border border-gray-700 text-white text-xs pl-9 pr-3 py-2.5 rounded focus:border-[#D71920] outline-hidden placeholder:text-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-gray-700/60">
          {/* Col 1: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#D71920] pl-2">
              {footerNavigation.company.title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.company.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#D71920] pl-2">
              {footerNavigation.products.title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.products.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#D71920] pl-2">
              {footerNavigation.solutions.title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.solutions.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Partners */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#D71920] pl-2">
              {footerNavigation.partners.title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.partners.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 border-l-2 border-[#D71920] pl-2">
              {footerNavigation.support.title}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.support.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Regional & Trust Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 border-b border-gray-800">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsLangModalOpen(true)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#D71920]" />
              <span>Location / Language: <strong className="text-white">{currentLanguage}</strong></span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 text-gray-400">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span>ISO 27001 &amp; ISO 9001 Certified Security Operations</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a href="#linkedin" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="text-gray-700">|</span>
            <a href="#youtube" className="hover:text-white transition-colors">YouTube</a>
            <span className="text-gray-700">|</span>
            <a href="#x" className="hover:text-white transition-colors">X (Twitter)</a>
            <span className="text-gray-700">|</span>
            <a href="#facebook" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <p>© 2026 NexusVision Digital Technology Co., Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#cookie" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#security" className="hover:text-white transition-colors">Cybersecurity Notice</a>
            <a href="#compliance" className="hover:text-white transition-colors">Ethics &amp; Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
