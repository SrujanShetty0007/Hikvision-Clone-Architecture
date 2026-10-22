'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGrid, Layers, Cpu, Store, ArrowRight } from 'lucide-react';

interface SolutionsMegaMenuProps {
  onClose: () => void;
}

interface IndustryData {
  name: string;
  slug: string;
  scenarios: { title: string; href: string }[];
  functions: { title: string; href: string }[];
}

const industriesData: Record<string, IndustryData> = {
  education: {
    name: 'Education',
    slug: 'education',
    scenarios: [
      { title: 'Classroom Hub', href: '/solutions/scenario/schools' },
      { title: 'Schools', href: '/solutions/scenario/schools' },
      { title: 'Campus Boundary & Gate', href: '/solutions/scenario/schools' },
    ],
    functions: [
      { title: 'Course Recording', href: '/solutions/function/video-surveillance' },
      { title: 'Student Attendance', href: '/solutions/function/attendance-management' },
      { title: 'Distance Learning', href: '/solutions/function/remote-monitoring' },
      { title: 'Information Display', href: '/solutions/function/centralized-management' },
      { title: 'Remote Classroom Inspection', href: '/solutions/function/video-surveillance' },
      { title: 'Student Pick-up', href: '/solutions/function/access-control' },
    ],
  },
  energy: {
    name: 'Energy',
    slug: 'energy',
    scenarios: [
      { title: 'Substations & Grids', href: '/solutions/scenario/power-plants' },
      { title: 'Solar Power Plants', href: '/solutions/scenario/power-plants' },
      { title: 'Oil & Gas Fields', href: '/solutions/scenario/power-plants' },
    ],
    functions: [
      { title: 'Thermal Fire Warning', href: '/solutions/function/intrusion-detection' },
      { title: 'Perimeter Intrusion Detection', href: '/solutions/function/intrusion-detection' },
      { title: 'Unattended Patrol AI', href: '/solutions/function/remote-monitoring' },
      { title: 'Gas & Heat Anomalies', href: '/solutions/function/intelligent-analytics' },
      { title: 'Substation Gate Control', href: '/solutions/function/access-control' },
    ],
  },
  healthcare: {
    name: 'Healthcare',
    slug: 'healthcare',
    scenarios: [
      { title: 'Hospitals & Clinics', href: '/solutions/scenario/healthcare' },
      { title: 'Pharmacies & Cleanrooms', href: '/solutions/scenario/healthcare' },
      { title: 'ICU & Emergency Wards', href: '/solutions/scenario/healthcare' },
    ],
    functions: [
      { title: 'Patient Fall Detection', href: '/solutions/function/intelligent-analytics' },
      { title: 'Contactless Cleanroom Access', href: '/solutions/function/access-control' },
      { title: 'Emergency Nurse Call Intercom', href: '/solutions/function/remote-monitoring' },
      { title: 'Pharmacy RFID Security', href: '/solutions/function/access-control' },
      { title: 'Medical Cold-Chain Thermal Alert', href: '/solutions/function/intelligent-analytics' },
    ],
  },
  logistics: {
    name: 'Logistics',
    slug: 'logistics',
    scenarios: [
      { title: 'Automated Warehouses', href: '/solutions/scenario/warehouses' },
      { title: 'Freight Distribution Hubs', href: '/solutions/scenario/warehouses' },
      { title: 'Cargo Loading Docks', href: '/solutions/scenario/warehouses' },
    ],
    functions: [
      { title: 'Dock Door Management', href: '/solutions/function/traffic-management' },
      { title: 'Parcel Barcode OCR', href: '/solutions/function/intelligent-analytics' },
      { title: 'Forklift Safety Warning', href: '/solutions/function/intrusion-detection' },
      { title: 'Perimeter Radar Guard', href: '/solutions/function/intrusion-detection' },
      { title: 'Vehicle ANPR Check-in', href: '/solutions/function/traffic-management' },
    ],
  },
  manufacturing: {
    name: 'Manufacturing',
    slug: 'manufacturing',
    scenarios: [
      { title: 'Industrial Production Floors', href: '/solutions/scenario/industrial-plants' },
      { title: 'Assembly & Testing Lines', href: '/solutions/scenario/industrial-plants' },
      { title: 'Chemical Storage Yards', href: '/solutions/scenario/industrial-plants' },
    ],
    functions: [
      { title: 'PPE & Helmet Compliance', href: '/solutions/function/intelligent-analytics' },
      { title: 'Machine Vision Defect Check', href: '/solutions/function/intelligent-analytics' },
      { title: 'Flammable Zone Thermal Patrol', href: '/solutions/function/intrusion-detection' },
      { title: 'Shift Attendance Time & Gate', href: '/solutions/function/attendance-management' },
      { title: 'Plant Perimeter Multi-Sensor', href: '/solutions/function/intrusion-detection' },
    ],
  },
  publictransport: {
    name: 'Public Transport',
    slug: 'public-transport',
    scenarios: [
      { title: 'Airports & Terminals', href: '/solutions/scenario/transit-hubs' },
      { title: 'Metro Stations & Platforms', href: '/solutions/scenario/transit-hubs' },
      { title: 'Railway Hubs', href: '/solutions/scenario/transit-hubs' },
    ],
    functions: [
      { title: 'Passenger Density & Crowd Flow', href: '/solutions/function/traffic-management' },
      { title: 'Unattended Baggage Alert', href: '/solutions/function/intelligent-analytics' },
      { title: 'Platform Track Fall Warning', href: '/solutions/function/intrusion-detection' },
      { title: 'Automated Biometric Fare Gates', href: '/solutions/function/access-control' },
      { title: 'Bus Fleet Mobile Tracking', href: '/solutions/function/remote-monitoring' },
    ],
  },
  safecity: {
    name: 'Safe City',
    slug: 'smart-cities',
    scenarios: [
      { title: 'Urban Command Centers', href: '/solutions/scenario/command-centers' },
      { title: 'Public Plazas & Streets', href: '/solutions/scenario/smart-cities' },
      { title: 'Smart Intersections', href: '/solutions/scenario/smart-cities' },
    ],
    functions: [
      { title: 'Citywide Unified Video', href: '/solutions/function/centralized-management' },
      { title: 'Emergency SOS Call Boxes', href: '/solutions/function/remote-monitoring' },
      { title: 'Automated Incident Detection', href: '/solutions/function/intelligent-analytics' },
      { title: 'Vehicle Recognition Across Zones', href: '/solutions/function/traffic-management' },
      { title: 'Public Safety Perimeter', href: '/solutions/function/intrusion-detection' },
    ],
  },
  retail: {
    name: 'Retail',
    slug: 'retail',
    scenarios: [
      { title: 'Shopping Malls & Outlets', href: '/solutions/scenario/shopping-centers' },
      { title: 'Supermarkets & Hypermarkets', href: '/solutions/scenario/shopping-centers' },
      { title: 'Brand Boutiques & Chains', href: '/solutions/scenario/shopping-centers' },
    ],
    functions: [
      { title: 'Footfall & People Counting', href: '/solutions/function/intelligent-analytics' },
      { title: 'Customer Heatmap Analytics', href: '/solutions/function/intelligent-analytics' },
      { title: 'POS Integration & Cash Register', href: '/solutions/function/centralized-management' },
      { title: 'Shoplifting Deterrence', href: '/solutions/function/intrusion-detection' },
      { title: 'Smart Shelf Inventory Vision', href: '/solutions/function/intelligent-analytics' },
    ],
  },
  traffic: {
    name: 'Traffic',
    slug: 'traffic',
    scenarios: [
      { title: 'Highways & Toll Plazas', href: '/solutions/scenario/transit-hubs' },
      { title: 'Urban Intersections', href: '/solutions/scenario/smart-cities' },
      { title: 'Commercial Parking Hubs', href: '/solutions/scenario/parking-facilities' },
    ],
    functions: [
      { title: 'Speed Enforcement Radar', href: '/solutions/function/traffic-management' },
      { title: 'Red Light & Violation Capture', href: '/solutions/function/traffic-management' },
      { title: 'Traffic Jam & Congestion Alert', href: '/solutions/function/traffic-management' },
      { title: 'Barrier-free ANPR Toll Gate', href: '/solutions/function/traffic-management' },
      { title: 'Reversible Tidal Lane Control', href: '/solutions/function/traffic-management' },
    ],
  },
};

export const SolutionsMegaMenu: React.FC<SolutionsMegaMenuProps> = ({ onClose }) => {
  const [selectedKey, setSelectedKey] = useState<string>('education');
  const activeIndustry = industriesData[selectedKey] || industriesData.education;

  const industryKeys = [
    { key: 'education', label: 'Education' },
    { key: 'energy', label: 'Energy' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'logistics', label: 'Logistics' },
    { key: 'manufacturing', label: 'Manufacturing' },
    { key: 'publictransport', label: 'Public Transport' },
    { key: 'safecity', label: 'Safe City' },
    { key: 'retail', label: 'Retail' },
    { key: 'traffic', label: 'Traffic' },
  ];

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-gray-200/90 shadow-[0_20px_40px_rgba(0,0,0,0.06)] z-50 animate-fade-in font-sans"
      role="region"
      aria-label="Solutions Navigation Menu"
    >
      <div className="container-enterprise py-8">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Column 1: Vertical Industry List + "View by" (matching Screenshot 1) */}
          <div className="col-span-3 border-r border-gray-100 pr-6 space-y-6">
            <ul className="space-y-1">
              {industryKeys.map(({ key, label }) => {
                const isSelected = selectedKey === key;
                return (
                  <li key={key}>
                    <button
                      onMouseEnter={() => setSelectedKey(key)}
                      onClick={() => setSelectedKey(key)}
                      className={`w-full text-left px-3 py-1.5 rounded text-[13.5px] transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#F2F3F5] text-gray-900 font-semibold'
                          : 'text-gray-700 hover:text-[#D71920] hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* "View by" Section matching Screenshot 1 */}
            <div className="pt-4 border-t border-gray-100">
              <span className="text-[11px] font-medium text-gray-400 block mb-2.5">
                View by
              </span>
              <ul className="space-y-2 text-[12.5px] text-gray-700">
                <li>
                  <Link
                    href="/solutions#industry"
                    onClick={onClose}
                    className="flex items-center gap-2 hover:text-[#D71920] transition-colors"
                  >
                    <LayoutGrid className="w-3.5 h-3.5 text-gray-500" />
                    <span>Solutions by Industry</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions#scenario"
                    onClick={onClose}
                    className="flex items-center gap-2 hover:text-[#D71920] transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5 text-gray-500" />
                    <span>Solutions by Scenario</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions#function"
                    onClick={onClose}
                    className="flex items-center gap-2 hover:text-[#D71920] transition-colors"
                  >
                    <Cpu className="w-3.5 h-3.5 text-gray-500" />
                    <span>Solutions by Function</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions#smb"
                    onClick={onClose}
                    className="flex items-center gap-2 hover:text-[#D71920] transition-colors"
                  >
                    <Store className="w-3.5 h-3.5 text-gray-500" />
                    <span>SMB Solution</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 & 3: Dynamic Middle Content based on active industry */}
          <div className="col-span-6 grid grid-cols-2 gap-8 pl-2">
            {/* Left side: Solutions by Industry & Solutions by Scenario */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[13px] font-bold text-gray-900 mb-2.5">
                  Solutions by Industry
                </h4>
                <Link
                  href={`/solutions/industry/${activeIndustry.slug}`}
                  onClick={onClose}
                  className="text-[13px] text-gray-700 hover:text-[#D71920] transition-colors block"
                >
                  {activeIndustry.name}
                </Link>
              </div>

              <div>
                <h4 className="text-[13px] font-bold text-gray-900 mb-2.5">
                  Solutions by Scenario
                </h4>
                <ul className="space-y-2">
                  {activeIndustry.scenarios.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-[13px] text-gray-700 hover:text-[#D71920] transition-colors block"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side: Solutions by Function */}
            <div>
              <h4 className="text-[13px] font-bold text-gray-900 mb-2.5">
                Solutions by Function
              </h4>
              <ul className="space-y-2.5">
                {activeIndustry.functions.map((fn, idx) => (
                  <li key={idx}>
                    <Link
                      href={fn.href}
                      onClick={onClose}
                      className="text-[13px] text-gray-700 hover:text-[#D71920] transition-colors block"
                    >
                      {fn.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Right Feature Card matching Screenshot 1 */}
          <div className="col-span-3">
            <div className="bg-[#F7F8F9] rounded-xl p-5 border border-gray-100 flex flex-col justify-between h-[300px]">
              <div>
                <div className="relative aspect-16/9 w-full rounded-lg overflow-hidden bg-white border border-gray-200/60 mb-3.5">
                  <Image
                    src="/images/card-smb.jpg"
                    alt="SMB Converged Solutions"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
                <h4 className="text-sm font-bold text-gray-900 leading-snug">
                  SMB Converged Solutions
                </h4>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                  Resolve everyday security &amp; operational challenges with NEXUSVISION SMB Converged Solutions.
                </p>
              </div>

              <div>
                <Link
                  href="/solutions"
                  onClick={onClose}
                  className="inline-flex items-center text-xs font-semibold text-[#0066CC] hover:underline"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                {/* Subtle dots indicator matching Hikvision Screenshot */}
                <div className="flex items-center gap-1.5 mt-3 pt-2 border-t border-gray-200/60">
                  <span className="w-4 h-0.5 bg-gray-900 rounded-full" />
                  <span className="w-2.5 h-0.5 bg-gray-300 rounded-full" />
                  <span className="w-2.5 h-0.5 bg-gray-300 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
