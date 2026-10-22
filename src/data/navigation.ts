import { MegaMenuData } from '@/types/navigation';

export const productsMegaMenuData: MegaMenuData = {
  type: 'products',
  columns: [
    {
      title: 'Video Security',
      href: '/products/video-security',
      items: [
        { title: 'Network Cameras', href: '/products/video-security/network-cameras', badge: 'Popular' },
        { title: 'Network Video Recorders', href: '/products/video-security/network-video-recorders' },
        { title: 'Turbo HD Products', href: '/products/video-security/turbo-hd' },
        { title: 'Video Management Systems', href: '/products/video-security/vms-software' },
        { title: 'Camera Accessories & Mounts', href: '/products/video-security/camera-accessories' },
      ],
    },
    {
      title: 'Access & Communication',
      href: '/products/access-control',
      items: [
        { title: 'Access Control Terminals', href: '/products/access-control/terminals', badge: 'Biometric' },
        { title: 'Video Intercom Systems', href: '/products/access-control/video-intercom' },
        { title: 'Alarm Systems & Sensors', href: '/products/access-control/alarm-systems' },
        { title: 'Time & Attendance Systems', href: '/products/access-control/attendance' },
        { title: 'Emergency Call & Intercom', href: '/products/access-control/emergency-intercom' },
      ],
    },
    {
      title: 'Infrastructure & Display',
      href: '/products/infrastructure-display',
      items: [
        { title: 'Commercial Displays & Interactive Panels', href: '/products/infrastructure-display/displays', badge: '4K Ultra' },
        { title: 'Enterprise PoE Switches & Networking', href: '/products/infrastructure-display/networking' },
        { title: 'IP SAN & Hybrid Cloud Storage', href: '/products/infrastructure-display/storage' },
        { title: 'Commercial Audio & PA Systems', href: '/products/infrastructure-display/audio' },
        { title: 'Thermal Imaging Cameras', href: '/products/infrastructure-display/thermal' },
      ],
    },
    {
      title: 'Specialized Solutions',
      href: '/products/specialized-solutions',
      items: [
        { title: 'Intelligent Traffic Systems (ITS)', href: '/products/specialized-solutions/its-traffic', badge: 'ANPR' },
        { title: 'Smart Parking Management', href: '/products/specialized-solutions/parking' },
        { title: 'Perimeter Security Radar', href: '/products/specialized-solutions/radar' },
        { title: 'Industrial Machine Vision', href: '/products/specialized-solutions/machine-vision' },
        { title: 'Edge AI Compute Servers', href: '/products/specialized-solutions/ai-servers' },
      ],
    },
  ],
  promo: {
    title: 'Flagship DeepinView Pro Series',
    subtitle: 'Next-Gen 8MP Dual-Lens Camera',
    description: 'Empowered by onboard deep learning algorithms for 99.8% precision target classification and full-color night vision.',
    imageUrl: '/images/card-cameras.jpg',
    href: '/products/video-security/network-cameras/nex-pro-bullet-8mp',
    ctaText: 'Explore Pro Series',
  },
};

export const solutionsMegaMenuData: MegaMenuData = {
  type: 'solutions',
  columns: [
    {
      title: 'Solutions by Industry',
      href: '/solutions',
      items: [
        { title: 'Education & Campuses', href: '/solutions/industry/education' },
        { title: 'Healthcare & Hospitals', href: '/solutions/industry/healthcare' },
        { title: 'Smart Retail & Commercial', href: '/solutions/industry/retail' },
        { title: 'Advanced Manufacturing', href: '/solutions/industry/manufacturing' },
        { title: 'Logistics & Warehousing', href: '/solutions/industry/logistics' },
        { title: 'Public Transportation & Metro', href: '/solutions/industry/transportation' },
        { title: 'Energy, Oil & Utilities', href: '/solutions/industry/energy' },
        { title: 'Smart City & Public Security', href: '/solutions/industry/public-infrastructure' },
      ],
    },
    {
      title: 'Solutions by Scenario',
      href: '/solutions#scenarios',
      items: [
        { title: 'Schools & University Campuses', href: '/solutions/scenario/campuses' },
        { title: 'Corporate Offices & Headquarters', href: '/solutions/scenario/offices' },
        { title: 'Distribution Centers & Warehouses', href: '/solutions/scenario/warehouses' },
        { title: 'Retail Stores & Supermarkets', href: '/solutions/scenario/retail-stores' },
        { title: 'Parking Garages & Surface Lots', href: '/solutions/scenario/parking-facilities' },
        { title: 'Heavy Industrial Facilities', href: '/solutions/scenario/industrial-sites' },
        { title: 'Residential Gated Communities', href: '/solutions/scenario/residential-communities' },
        { title: 'Central Command & Control Centers', href: '/solutions/scenario/command-centers' },
      ],
    },
    {
      title: 'Solutions by Function',
      href: '/solutions#functions',
      items: [
        { title: 'Smart Video Surveillance', href: '/solutions/function/video-surveillance' },
        { title: 'Touchless Access Control', href: '/solutions/function/access-control' },
        { title: 'Automated Time & Attendance', href: '/solutions/function/attendance-management' },
        { title: 'Visual Remote Monitoring', href: '/solutions/function/remote-monitoring' },
        { title: 'Perimeter Intrusion Detection', href: '/solutions/function/intrusion-detection' },
        { title: 'Visitor Registration & Badging', href: '/solutions/function/visitor-management' },
        { title: 'Centralized Platform Management', href: '/solutions/function/centralized-management' },
        { title: 'Deep Learning Video Analytics', href: '/solutions/function/intelligent-analytics' },
      ],
    },
  ],
  promo: {
    title: 'Converged SMB Protection',
    subtitle: 'Seamless AIoT Linkage',
    description: 'Integrate alarm, video verification, and automated door disarm into one intuitive mobile and cloud dashboard.',
    imageUrl: '/images/hero-smb.jpg',
    href: '/solutions/industry/retail',
    ctaText: 'View Converged Solutions',
  },
};

export const supportMegaMenuData: MegaMenuData = {
  type: 'support',
  columns: [
    {
      title: 'Download Center',
      href: '/support/downloads',
      items: [
        { title: 'Device Firmware Updates', href: '/support/downloads?type=firmware', badge: 'Latest' },
        { title: 'Nexus Client & VMS Software', href: '/support/downloads?type=software' },
        { title: 'Mobile Apps (iOS & Android)', href: '/support/downloads?type=mobile' },
        { title: 'Device Network Calculator', href: '/tools' },
        { title: 'Lens Selector & Field of View', href: '/tools' },
      ],
    },
    {
      title: 'Documentation & Guides',
      href: '/support',
      items: [
        { title: 'Product Datasheets', href: '/support?tab=datasheets' },
        { title: 'User Manuals & Schematics', href: '/support?tab=manuals' },
        { title: 'Quick Start & Wiring Guides', href: '/support?tab=guides' },
        { title: 'Software Integration SDKs', href: '/support?tab=sdk' },
        { title: 'Compliance & CE Certificates', href: '/support?tab=compliance' },
      ],
    },
    {
      title: 'Service & Warranty',
      href: '/support',
      items: [
        { title: 'Warranty Policy Check', href: '/support?tab=warranty' },
        { title: 'RMA Repair Status Tracking', href: '/support?tab=rma' },
        { title: 'Frequently Asked Questions (FAQ)', href: '/support#faq' },
        { title: 'Technical Troubleshooting Hub', href: '/support#troubleshoot' },
        { title: 'Contact Enterprise Support', href: '/contact' },
      ],
    },
  ],
  promo: {
    title: 'Support Portal 24/7',
    subtitle: 'Direct Expert Assistance',
    description: 'Access 24/7 certified technical assistance, automated RMA service, and engineering documentation.',
    imageUrl: '/images/card-display.jpg',
    href: '/support',
    ctaText: 'Visit Support Hub',
  },
};

export const technologiesMegaMenuData: MegaMenuData = {
  type: 'technologies',
  columns: [
    {
      title: 'Core AI & Vision',
      href: '/technologies',
      items: [
        { title: 'DeepinView AI Neural Analytics', href: '/technologies/deepinview-ai', badge: 'Flagship' },
        { title: 'ColorVu 24/7 True Full Color', href: '/technologies/colorvu-technology' },
        { title: 'DarkFighterX Ultra-Low-Light', href: '/technologies/darkfighter-ultra-low-light' },
        { title: 'AcuSense False-Alarm Reduction', href: '/technologies/acusense-intelligence' },
      ],
    },
    {
      title: 'Edge & Cloud Architecture',
      href: '/technologies',
      items: [
        { title: 'Edge Computing & On-Camera AI', href: '/technologies/edge-computing' },
        { title: 'NexusCloud Hybrid IoT Platform', href: '/technologies/nexus-cloud' },
        { title: 'Ultra H.265+ Smart Codec', href: '/technologies/smart-codec' },
        { title: 'Quantum CyberShield Security', href: '/technologies/cybersecurity', badge: 'Certified' },
      ],
    },
  ],
  promo: {
    title: 'ColorVu Gen-3 Technology',
    subtitle: 'Full-Color 24/7 at 0.0005 Lux',
    description: 'F1.0 super-aperture optics and advanced multi-spectral sensors provide vibrant daytime-quality imagery even in pitch darkness.',
    imageUrl: '/images/card-solar.jpg',
    href: '/technologies/colorvu-technology',
    ctaText: 'Discover Technology',
  },
};

export const partnersMegaMenuData: MegaMenuData = {
  type: 'partners',
  columns: [
    {
      title: 'Partner Programs',
      href: '/partners',
      items: [
        { title: 'Global Channel Partner Program', href: '/partners#channel-program', badge: 'Join Now' },
        { title: 'Technology & Eco-System Partners', href: '/partners#technology-partners' },
        { title: 'Certified System Integrators', href: '/partners#integrators' },
        { title: 'Architect & Engineering (A&E) Portal', href: '/partners#ae-portal' },
      ],
    },
    {
      title: 'Partner Resources',
      href: '/partners',
      items: [
        { title: 'Authorized Distributor Directory', href: '/partners#distributors' },
        { title: 'Partner Portal Login', href: '/partners#portal' },
        { title: 'Marketing Kits & Product Collateral', href: '/partners#marketing' },
        { title: 'Nexus Technical Certification Academy', href: '/partners#academy' },
      ],
    },
  ],
  promo: {
    title: 'Grow With NexusVision',
    subtitle: 'Channel Partner Program 2026',
    description: 'Empower your enterprise with preferential pricing, co-op marketing funds, priority technical escalation, and dedicated project deal registration.',
    imageUrl: '/images/hero-summit.jpg',
    href: '/partners',
    ctaText: 'Become a Partner',
  },
};

export const footerNavigation = {
  company: {
    title: 'Company',
    links: [
      { label: 'About NexusVision', href: '/about' },
      { label: 'Corporate Profile & Leadership', href: '/about#leadership' },
      { label: 'Global Newsroom & Press', href: '/news' },
      { label: 'Careers & Opportunities', href: '/about#careers' },
      { label: 'Sustainability & ESG', href: '/about#sustainability' },
      { label: 'Global Contact & Offices', href: '/contact' },
    ],
  },
  products: {
    title: 'Products',
    links: [
      { label: 'Network Video Surveillance', href: '/products/video-security/network-cameras' },
      { label: 'Access Control & Intercom', href: '/products/access-control' },
      { label: 'Commercial Interactive Displays', href: '/products/infrastructure-display/displays' },
      { label: 'Thermal & Industrial Inspection', href: '/products/infrastructure-display/thermal' },
      { label: 'Intelligent Traffic Systems', href: '/products/specialized-solutions/its-traffic' },
      { label: 'Interactive Product Selector', href: '/tools' },
    ],
  },
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'Smart Education Campuses', href: '/solutions/industry/education' },
      { label: 'Healthcare & Hospital Safety', href: '/solutions/industry/healthcare' },
      { label: 'Retail & Commercial Complexes', href: '/solutions/industry/retail' },
      { label: 'Smart Manufacturing & Logistics', href: '/solutions/industry/manufacturing' },
      { label: 'Energy, Oil & Utilities', href: '/solutions/industry/energy' },
      { label: 'Public Infrastructure & Transport', href: '/solutions/industry/transportation' },
    ],
  },
  partners: {
    title: 'Partners',
    links: [
      { label: 'Channel Partner Program', href: '/partners#channel-program' },
      { label: 'Technology Alliance Program', href: '/partners#technology-partners' },
      { label: 'Find an Authorized Distributor', href: '/partners#distributors' },
      { label: 'Partner Portal Access', href: '/partners#portal' },
      { label: 'Become a Certified Partner', href: '/partners#apply' },
      { label: 'Nexus Academy Certification', href: '/partners#academy' },
    ],
  },
  support: {
    title: 'Support & Resources',
    links: [
      { label: 'Download Center & Firmware', href: '/support/downloads' },
      { label: 'Documentation & Manuals', href: '/support' },
      { label: 'Technical FAQs & Knowledgebase', href: '/support#faq' },
      { label: 'Warranty & RMA Service', href: '/support#warranty' },
      { label: 'System Design Calculator', href: '/tools' },
      { label: 'Customer Support Hotline', href: '/contact' },
    ],
  },
};
