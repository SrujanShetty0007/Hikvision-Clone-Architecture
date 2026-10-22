'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useEnterprise } from '@/context/EnterpriseContext';
import {
  GraduationCap,
  Zap,
  Activity,
  Truck,
  Factory,
  Train,
  ShoppingBag,
  Shield,
  Eye,
  Car,
  Flame,
  Radio,
  Users,
  Building,
  Lock,
  Camera,
  FileCheck,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface IndustryTab {
  id: string;
  name: string;
  bannerImage: string;
  title: string;
  desc: string;
  cards: { title: string; desc: string; href: string }[];
}

const industries: IndustryTab[] = [
  {
    id: 'education',
    name: 'Education',
    bannerImage: '/images/hero-education.jpg',
    title: 'Education',
    desc: 'Empowering future generations with interactive smart classrooms, AI attendance, and comprehensive campus security architectures.',
    cards: [
      {
        title: 'Smart Classroom Solution',
        desc: 'Interactive touch displays with wireless screen sharing and automated lesson recording.',
        href: '/solutions/scenario/schools',
      },
      {
        title: 'Campus Boundary & Entrance',
        desc: 'Dual-lens AI cameras with facial recognition turnstiles and vehicle ANPR gate controls.',
        href: '/solutions/scenario/schools',
      },
      {
        title: 'Dormitory & Common Area Safety',
        desc: 'Real-time intrusion alerts and panic button integration across student facilities.',
        href: '/solutions/scenario/schools',
      },
    ],
  },
  {
    id: 'energy',
    name: 'Energy',
    bannerImage: '/images/card-solar.jpg',
    title: 'Energy & Utilities',
    desc: 'Safeguarding high-voltage substations, solar plants, and oil refineries with radiometric thermography and perimeter radar.',
    cards: [
      {
        title: 'Substation Automated Patrol',
        desc: 'Unmanned optical & thermal PTZ cameras monitoring transformer heat anomalies 24/7.',
        href: '/solutions/scenario/power-plants',
      },
      {
        title: 'Solar PV Farm Off-Grid Security',
        desc: 'Solar-powered 4G bullet cameras delivering remote boundary surveillance in isolated terrains.',
        href: '/solutions/scenario/power-plants',
      },
      {
        title: 'Pipeline & Valve Leak Detection',
        desc: 'Optical gas imaging and acoustic sensors detecting hazardous fugitive emissions.',
        href: '/solutions/scenario/power-plants',
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    bannerImage: '/images/card-cameras.jpg',
    title: 'Healthcare & Hospitals',
    desc: 'Touchless hygiene access, contactless patient fall detection, and high-security pharmaceutical storage safeguards.',
    cards: [
      {
        title: 'ICU Contactless Cleanroom Access',
        desc: 'Facial and palm vein biometric verification preventing surgical cleanroom contamination.',
        href: '/solutions/scenario/healthcare',
      },
      {
        title: 'Patient Fall & Agitation Detection',
        desc: 'Privacy-compliant radar sensors detecting emergency patient falls without video recording.',
        href: '/solutions/scenario/healthcare',
      },
      {
        title: 'Pharmacy RFID Dispensing Vault',
        desc: 'Automated video and RFID access logs for controlled medical substance custody.',
        href: '/solutions/scenario/healthcare',
      },
    ],
  },
  {
    id: 'logistics',
    name: 'Logistics',
    bannerImage: '/images/card-smb.jpg',
    title: 'Logistics & Warehousing',
    desc: 'Optimizing high-throughput freight hubs, loading bays, automated parcel scanning, and perimeter radar tracks.',
    cards: [
      {
        title: 'Dock Door Management',
        desc: 'ANPR vehicle queues and trailer docking sensors synchronizing freight dispatch.',
        href: '/solutions/scenario/warehouses',
      },
      {
        title: 'Parcel Barcode OCR Tracking',
        desc: 'High-speed top-down cameras reading shipping labels on fast conveyor belts.',
        href: '/solutions/scenario/warehouses',
      },
      {
        title: 'Forklift Anti-Collision AI',
        desc: 'On-vehicle cameras warning operators when pedestrians enter machinery blind spots.',
        href: '/solutions/scenario/warehouses',
      },
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    bannerImage: '/images/card-thermal.jpg',
    title: 'Smart Manufacturing',
    desc: 'Integrating industrial machine vision, worker PPE safety compliance, and flammable chemical storage protection.',
    cards: [
      {
        title: 'Worker PPE Safety Compliance',
        desc: 'Edge algorithms detecting hard hats, high-vis vests, and safety harnesses in real-time.',
        href: '/solutions/scenario/industrial-plants',
      },
      {
        title: 'Machine Vision Defect Sorting',
        desc: 'Micron-level optical inspection identifying manufacturing flaws at production line speeds.',
        href: '/solutions/scenario/industrial-plants',
      },
      {
        title: 'Chemical Tank Thermal Thermography',
        desc: 'Early warning hotspot detection preventing industrial fires before ignition.',
        href: '/solutions/scenario/industrial-plants',
      },
    ],
  },
  {
    id: 'transportation',
    name: 'Public Transport',
    bannerImage: '/images/hero-summit.jpg',
    title: 'Public Transportation & Transit',
    desc: 'Unified intelligent video and passenger flow management across airports, metro networks, and railway terminals.',
    cards: [
      {
        title: 'Passenger Density & Platform Flow',
        desc: 'AI crowd analysis optimizing train dispatch and preventing terminal platform crush.',
        href: '/solutions/scenario/transit-hubs',
      },
      {
        title: 'Unattended Luggage Alert',
        desc: 'Automatic alerts when left-behind baggage remains stationary in high-traffic concourses.',
        href: '/solutions/scenario/transit-hubs',
      },
      {
        title: 'Automated Biometric Fare Gates',
        desc: 'Sub-second facial and QR boarding gates accelerating terminal throughput.',
        href: '/solutions/scenario/transit-hubs',
      },
    ],
  },
  {
    id: 'retail',
    name: 'Retail',
    bannerImage: '/images/card-display.jpg',
    title: 'Retail & Commercial',
    desc: 'Empowering physical store managers with customer heatmap analytics, loss prevention, and POS integration.',
    cards: [
      {
        title: 'Footfall & Heatmap Intelligence',
        desc: 'Analyzing customer linger times and shopping traffic to optimize merchandising layouts.',
        href: '/solutions/scenario/shopping-centers',
      },
      {
        title: 'POS Video Linkage & Loss Prevention',
        desc: 'Synchronized transaction overlays matching cash register receipts with video clips.',
        href: '/solutions/scenario/shopping-centers',
      },
      {
        title: 'Commercial Video Walls & Signage',
        desc: 'Ultra-narrow bezel LED and LCD displays for high-impact branded advertising.',
        href: '/solutions/scenario/shopping-centers',
      },
    ],
  },
];

const scenariosList = [
  { name: 'Apartments', img: '/images/card-cameras.jpg', slug: 'schools' },
  { name: 'Data Center', img: '/images/hero-summit.jpg', slug: 'industrial-plants' },
  { name: 'Commercial Buildings', img: '/images/card-display.jpg', slug: 'shopping-centers' },
  { name: 'Smart City', img: '/images/card-smb.jpg', slug: 'smart-cities' },
  { name: 'Offices', img: '/images/hero-education.jpg', slug: 'shopping-centers' },
  { name: 'Ports & Docks', img: '/images/card-solar.jpg', slug: 'transit-hubs' },
  { name: 'Bus Stations', img: '/images/card-thermal.jpg', slug: 'transit-hubs' },
  { name: 'Auto Dealerships', img: '/images/card-cameras.jpg', slug: 'shopping-centers' },
  { name: 'Healthcare Facilities', img: '/images/hero-education.jpg', slug: 'healthcare' },
  { name: 'Construction Sites', img: '/images/card-solar.jpg', slug: 'industrial-plants' },
  { name: 'Chemical & Industrial', img: '/images/card-thermal.jpg', slug: 'industrial-plants' },
  { name: 'Gas Stations', img: '/images/card-cameras.jpg', slug: 'transit-hubs' },
  { name: 'Highways & Expressways', img: '/images/card-smb.jpg', slug: 'transit-hubs' },
  { name: 'Hotels & Resorts', img: '/images/card-display.jpg', slug: 'shopping-centers' },
  { name: 'Monitoring Center', img: '/images/hero-summit.jpg', slug: 'command-centers' },
  { name: 'Parking Lots', img: '/images/card-solar.jpg', slug: 'parking-facilities' },
  { name: 'Schools & Campuses', img: '/images/hero-education.jpg', slug: 'schools' },
  { name: 'Shopping Malls', img: '/images/card-display.jpg', slug: 'shopping-centers' },
  { name: 'Sports and Stadiums', img: '/images/hero-summit.jpg', slug: 'transit-hubs' },
  { name: 'Warehouses', img: '/images/card-smb.jpg', slug: 'warehouses' },
  { name: 'Oil & Gas Fields', img: '/images/card-thermal.jpg', slug: 'power-plants' },
  { name: 'Theme Parks', img: '/images/card-cameras.jpg', slug: 'schools' },
  { name: 'Offshore Platforms', img: '/images/card-solar.jpg', slug: 'power-plants' },
  { name: 'Transmission Lines', img: '/images/card-thermal.jpg', slug: 'power-plants' },
  { name: 'Solar Power Plants', img: '/images/card-solar.jpg', slug: 'power-plants' },
];

const functionalCapabilities = [
  { name: 'Speed Enforcement', icon: Car, href: '/solutions/function/traffic-management' },
  { name: 'Perimeter Detection', icon: Shield, href: '/solutions/function/intrusion-detection' },
  { name: 'Vehicle Entrance / Exit', icon: Car, href: '/solutions/function/traffic-management' },
  { name: 'Incident Detection', icon: Flame, href: '/solutions/function/intelligent-analytics' },
  { name: 'Reversible Lane Control', icon: Radio, href: '/solutions/function/traffic-management' },
  { name: 'Tunnel Fire Detection', icon: Flame, href: '/solutions/function/intrusion-detection' },
  { name: 'Traffic Monitoring', icon: Eye, href: '/solutions/function/traffic-management' },
  { name: 'People Counting', icon: Users, href: '/solutions/function/intelligent-analytics' },
  { name: 'Smart Parking', icon: Car, href: '/solutions/function/traffic-management' },
  { name: 'Commercial Fleet', icon: Truck, href: '/solutions/function/remote-monitoring' },
  { name: 'Billboard Compliance', icon: Building, href: '/solutions/function/centralized-management' },
  { name: 'Urban Expressway', icon: Radio, href: '/solutions/function/traffic-management' },
  { name: 'Pedestrian Safety', icon: Users, href: '/solutions/function/traffic-management' },
  { name: 'Flow Monitoring', icon: Radio, href: '/solutions/function/traffic-management' },
  { name: 'Park Access Control', icon: Lock, href: '/solutions/function/access-control' },
  { name: 'Dock Door Control', icon: Truck, href: '/solutions/function/traffic-management' },
  { name: 'Asset Tracking RFID', icon: FileCheck, href: '/solutions/function/intelligent-analytics' },
  { name: 'Customer Heatmap', icon: Eye, href: '/solutions/function/intelligent-analytics' },
  { name: 'Facility Safety AI', icon: Shield, href: '/solutions/function/intelligent-analytics' },
  { name: 'PPE Helmet Check', icon: Users, href: '/solutions/function/intelligent-analytics' },
  { name: 'Forklift Anti-Collision', icon: Truck, href: '/solutions/function/intrusion-detection' },
  { name: 'Environmental Air', icon: Zap, href: '/solutions/function/intelligent-analytics' },
  { name: 'Hazardous Chemical', icon: Flame, href: '/solutions/function/intrusion-detection' },
  { name: 'Automated Barrier', icon: Lock, href: '/solutions/function/access-control' },
];

export default function SolutionsOverviewPage() {
  const [activeIndustryId, setActiveIndustryId] = useState<string>('education');
  const [activeFunctionFilter, setActiveFunctionFilter] = useState<string>('All');
  const { setIsInquiryOpen } = useEnterprise();

  const activeIndustry = industries.find((i) => i.id === activeIndustryId) || industries[0];

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      {/* 1. Full-Width Hero Banner matching Screenshot 2 */}
      <section className="relative w-full h-[460px] md:h-[540px] bg-gray-950 overflow-hidden flex items-center">
        <Image
          src="/images/card-smb.jpg"
          alt="Perimeter Protection Solution"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

        <div className="container-enterprise relative z-10 text-white space-y-4 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Perimeter Protection Solution
          </h1>
          <p className="text-sm sm:text-base text-gray-200 font-normal">
            Find out more by clicking on solutions
          </p>
          <div className="pt-2">
            <a
              href="#industries"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-semibold rounded tracking-wide transition-colors"
            >
              Explore now
            </a>
          </div>
        </div>
      </section>

      {/* 2. Secondary Contextual Sub-Nav Bar matching Screenshot 2 */}
      <div className="sticky top-16 md:top-20 z-30 bg-white border-b border-gray-200/90 shadow-2xs">
        <div className="container-enterprise flex items-center justify-between h-12 overflow-x-auto no-scrollbar">
          <div className="text-xs font-bold text-gray-900 shrink-0">
            Solutions Overview
          </div>

          <nav className="flex items-center space-x-6 text-xs text-gray-600 shrink-0">
            <a href="#overview" className="hover:text-[#D71920] transition-colors">
              Overview
            </a>
            <a href="#industries" className="hover:text-[#D71920] transition-colors">
              Solutions by Industry
            </a>
            <a href="#scenarios" className="hover:text-[#D71920] transition-colors">
              Solutions by Scenario
            </a>
            <a href="#functions" className="hover:text-[#D71920] transition-colors">
              Solutions by Function
            </a>
          </nav>
        </div>
      </div>

      {/* 3. "Overview" Section matching Screenshot 2 */}
      <section id="overview" className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Overview
          </h2>
          <p className="text-sm font-semibold text-gray-700">
            A rich portfolio of empowering and enabling solutions
          </p>
          <div className="text-xs sm:text-sm text-gray-600 leading-relaxed space-y-3 text-justify sm:text-center">
            <p>
              NexusVision delivers end-to-end integrated architectures across vertical industries. By combining state-of-the-art vision sensors, thermal thermography, edge AI analytics, and centralized multi-site VMS management, our solutions empower enterprises to streamline operations, enhance safety, and protect critical assets.
            </p>
            <p>
              Whether securing multi-campus educational institutions, heavy petrochemical refineries, or dynamic transit terminals, our scenario-based engineering addresses distinct physical layouts and regulatory standards.
            </p>
          </div>
        </div>
      </section>

      {/* 4. "Solutions by Industry" matching Screenshot 2 */}
      <section id="industries" className="py-16 bg-[#FBFBFB] border-b border-gray-100">
        <div className="container-enterprise">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Solutions by Industry
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Tailor-made solutions to your needs
            </p>
          </div>

          {/* Horizontal Industry Tabs */}
          <div className="flex items-center justify-center border-b border-gray-200 overflow-x-auto no-scrollbar mb-10">
            {industries.map((ind) => {
              const isActive = ind.id === activeIndustryId;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustryId(ind.id)}
                  className={`px-5 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[#D71920]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{ind.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D71920]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Industry Banner & Cards Container */}
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Top Wide Banner Card */}
            <div className="group relative aspect-21/9 sm:aspect-24/9 rounded-lg overflow-hidden bg-gray-900 shadow-sm border border-gray-200 flex items-center p-8 text-white">
              <Image
                src={activeIndustry.bannerImage}
                alt={activeIndustry.title}
                fill
                className="object-cover opacity-50 group-hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1200px) 100vw, 1100px"
              />
              <div className="relative z-10 max-w-lg space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  {activeIndustry.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                  {activeIndustry.desc}
                </p>
                <div className="pt-2">
                  <Link
                    href={`/solutions/industry/${activeIndustry.id}`}
                    className="inline-flex items-center text-xs font-semibold text-white hover:text-red-300 transition-colors"
                  >
                    <span>View All {activeIndustry.title} Blueprints</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* 3 Clean Scenario Cards below banner matching Screenshot 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {activeIndustry.cards.map((card, idx) => (
                <Link
                  key={idx}
                  href={card.href}
                  className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs p-6 rounded-lg flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#D71920] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-[#0066CC] group-hover:text-[#D71920]">
                    <span>Explore Scenario</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Solutions by Scenario" matching Screenshot 2 */}
      <section id="scenarios" className="py-16 bg-white border-b border-gray-100">
        <div className="container-enterprise">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Solutions by Scenario
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Focus on the physical premises and scenarios you care about
            </p>
          </div>

          {/* 5-Column Grid of Photographic Scenario Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {scenariosList.map((scen, idx) => (
              <Link
                key={idx}
                href={`/solutions/scenario/${scen.slug}`}
                className="group flex flex-col bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs transition-all overflow-hidden rounded"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={scen.img}
                    alt={scen.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <div className="p-2.5 text-center">
                  <span className="text-xs font-medium text-gray-800 group-hover:text-[#D71920] transition-colors line-clamp-1">
                    {scen.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. "Solutions by Function" matching Screenshot 2 */}
      <section id="functions" className="py-16 bg-[#FBFBFB] border-b border-gray-100">
        <div className="container-enterprise">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Solutions by Function
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Find products and solutions by functional capabilities
            </p>
          </div>

          {/* Functional Filter Pills matching Screenshot 2 */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {['All', 'General', 'Education', 'Logistics', 'Traffic', 'Energy', 'Retail', 'Healthcare'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFunctionFilter(tab)}
                className={`px-4 py-1 rounded-full text-xs transition-colors cursor-pointer ${
                  activeFunctionFilter === tab
                    ? 'bg-[#D71920] text-white font-semibold'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 6-Column Grid of Functional Icon Tiles matching Screenshot 2 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {functionalCapabilities.map((fn, idx) => {
              const Icon = fn.icon;
              return (
                <Link
                  key={idx}
                  href={fn.href}
                  className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs p-4 rounded flex flex-col items-center text-center justify-center group transition-all h-32"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066CC] flex items-center justify-center mb-2.5 group-hover:bg-red-50 group-hover:text-[#D71920] transition-colors">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <span className="text-xs font-medium text-gray-800 group-hover:text-[#D71920] transition-colors line-clamp-2 leading-tight">
                    {fn.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. "Ready to discuss your needs?" Section matching Screenshot 2 */}
      <section className="py-16 bg-white text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Ready to discuss your needs?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsInquiryOpen(true)}
            className="w-full sm:w-auto px-7 py-2.5 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
          >
            CONTACT EXPERT TEAM
          </button>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-2.5 bg-white border border-[#D71920] text-[#D71920] hover:bg-red-50 text-xs font-bold uppercase tracking-wider rounded transition-colors"
          >
            REQUEST A CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
}
