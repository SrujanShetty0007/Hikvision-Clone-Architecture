'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductsMegaMenuProps {
  onClose: () => void;
}

export const ProductsMegaMenu: React.FC<ProductsMegaMenuProps> = ({ onClose }) => {
  const col1 = [
    { title: 'Camera Products', href: '/products/video-security/network-cameras' },
    { title: 'Video Recorders and Storage', href: '/products/video-security/network-video-recorders' },
    { title: 'Networking', href: '/products/infrastructure-display/networking' },
    { title: 'Video Intercom', href: '/products/access-control/video-intercom' },
    { title: 'Alarms', href: '/products/access-control/alarm-systems' },
    { title: 'Access Control', href: '/products/access-control' },
    { title: 'Parking Management', href: '/products/specialized-solutions/parking' },
  ];

  const col2 = [
    { title: 'Display & Control', href: '/products/infrastructure-display/displays' },
    { title: 'Audio', href: '/products/infrastructure-display/audio' },
    { title: 'Intelligent Traffic System', href: '/products/specialized-solutions/its-traffic' },
    { title: 'Portable & PDA Products', href: '/products/specialized-solutions/portable-pda' },
    { title: 'Premises Distribution System', href: '/products/infrastructure-display/distribution' },
    { title: 'Sensing Products', href: '/products/specialized-solutions/sensing' },
    { title: 'Thermal', href: '/products/infrastructure-display/thermal' },
  ];

  const col3 = [
    { title: 'Radar', href: '/products/specialized-solutions/radar' },
    { title: 'Intelligent Vehicle Solutions', href: '/products/specialized-solutions/vehicle' },
    { title: 'Security Inspection & Industrial Inspection', href: '/products/specialized-solutions/machine-vision' },
    { title: 'Fire Safety', href: '/products/specialized-solutions/fire-safety' },
    { title: 'Software & Servers', href: '/products/specialized-solutions/ai-servers' },
    { title: 'HiLook Series', href: '/products/video-security/turbo-hd' },
  ];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-gray-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-50 animate-fade-in"
      role="region"
      aria-label="Products Navigation Menu"
    >
      <div className="container-enterprise py-8">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left: 3 Clean Columns of plain text links */}
          <div className="col-span-8 lg:col-span-9 grid grid-cols-3 gap-6">
            <div>
              <ul className="space-y-3">
                {col1.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-[13.5px] font-normal text-gray-700 hover:text-[#D71920] transition-colors block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                {col2.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-[13.5px] font-normal text-gray-700 hover:text-[#D71920] transition-colors block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                {col3.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-[13.5px] font-normal text-gray-700 hover:text-[#D71920] transition-colors block"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Clean Promotional Feature Card matching Image 2 */}
          <div className="col-span-4 lg:col-span-3">
            <div className="bg-[#F7F8F9] rounded-xl p-5 border border-gray-100 flex flex-col justify-between h-[280px]">
              <div>
                <div className="relative aspect-16/9 w-full rounded-lg overflow-hidden bg-white border border-gray-200/60 mb-3.5 flex items-center justify-center">
                  <Image
                    src="/images/card-cameras.jpg"
                    alt="Accessory Selector"
                    fill
                    className="object-contain p-2"
                    sizes="260px"
                  />
                </div>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">
                  Accessory Selector
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                  Use the search criteria to find all available brackets, power units, and accessories for your camera model.
                </p>
              </div>

              <div>
                <Link
                  href="/tools"
                  onClick={onClose}
                  className="inline-flex items-center text-xs font-semibold text-[#D71920] hover:underline"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                {/* Subtle carousel indicators */}
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-gray-200/60">
                  <span className="w-4 h-0.5 bg-[#D71920] rounded-full" />
                  <span className="w-4 h-0.5 bg-gray-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
