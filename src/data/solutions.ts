import { SolutionItem } from '@/types/solution';

export const solutionsData: SolutionItem[] = [
  {
    id: 'sol-ind-education',
    slug: 'education',
    type: 'industry',
    title: 'AI-Centered Smart Education Solutions',
    subtitle: 'Transforming Teaching with AI, Intelligent Displays & Cloud Collaboration',
    category: 'Industry',
    iconName: 'GraduationCap',
    summary: 'From interactive flat panel displays and automated lecture capture to AI campus perimeter defense and touchless student attendance.',
    heroImage: '/images/hero-education.jpg',
    overview: 'NexusVision Smart Education solution bridges interactive multimedia learning with holistic school safety. By unifying high-definition classroom displays, automated lecture recording, AI perimeter monitoring, and access turnstiles, schools create an inspiring, safeguarded learning environment for students and faculty alike.',
    challenges: [
      {
        title: 'Dispersed Campus Security Vulnerabilities',
        description: 'Vast campus footprints with multiple gates, dormitories, and sports fields make traditional manual patrol insufficient to prevent unauthorized intruders.',
      },
      {
        title: 'Passive Student Engagement in Large Classrooms',
        description: 'Traditional chalkboards and legacy projectors fail to engage digital-native students or support hybrid remote learners.',
      },
      {
        title: 'Manual Student Attendance Inefficiencies',
        description: 'Roll-call at school gates and classrooms consumes valuable lecture minutes and delays emergency headcount verification.',
      },
    ],
    architecture: {
      headline: 'Multi-Tier Smart Campus Architecture',
      description: 'Hierarchical integration of edge sensing hardware, interactive classrooms, and cloud administration.',
      layers: [
        {
          layerName: '1. Intelligent Edge Layer',
          description: 'MinMoe biometric gates at school entrances, ColorVu perimeter cameras with strobe deterrence, and 4K classroom cameras.',
          components: ['MinMoe Biometric Gates', 'ColorVu Perimeter 4K Cameras', 'Lecture Capture Tracking Cameras'],
        },
        {
          layerName: '2. Interactive Classroom Layer',
          description: '86-inch 4K Interactive Flat Panels with zero-latency digital whiteboard and 4-way wireless screen projection.',
          components: ['Interactive Flat Panel Displays', 'Digital Podium', 'Wireless Sharing Dongles'],
        },
        {
          layerName: '3. Unified Cloud VMS & Campus Management',
          description: 'Centralized school dashboard for attendance reports, parent notifications, e-maps, and live emergency dispatch.',
          components: ['NexusCampus VMS Core', 'Parent Notification Mobile Portal', 'Campus GIS Emergency Map'],
        },
      ],
    },
    keyCapabilities: [
      {
        title: 'Zero-Lag Digital Interactive Whiteboard',
        description: '40-point touch with 1mm pen tip precision, real-time handwriting recognition, and instant cloud QR code lecture sharing.',
      },
      {
        title: 'Touchless Gate Authentication in 0.2s',
        description: 'High-throughput turnstiles verify students rapidly, instantly notifying parents of safe arrival via mobile app.',
      },
      {
        title: 'Perimeter Intrusion Strobe & Voice Warning',
        description: 'Deep-learning AcuSense cameras distinguish human trespassers from stray animals, sounding audible warnings immediately.',
      },
      {
        title: 'Automated Dual-Teacher Remote Lecture Capture',
        description: 'AI auto-tracking camera follows the teacher across the podium while automatically switching to board close-ups.',
      },
    ],
    recommendedProducts: ['nex-interactive-display-86', 'nex-minmoe-face-terminal', 'nex-colorvu-turret-4k', 'nex-nvr-32ch-4k'],
    successStories: [
      {
        client: 'St. Andrews Metropolitan Academy',
        location: 'London, United Kingdom',
        quote: 'The interactive 4K boards and seamless gate face recognition modernised our entire 1,800-student campus within 3 weeks.',
        outcome: '98% reduction in morning gate queuing time and 35% increase in student classroom interaction ratings.',
      },
    ],
  },
  {
    id: 'sol-ind-retail',
    slug: 'retail',
    type: 'industry',
    title: 'Smart Retail & Commercial Complexes',
    subtitle: 'Converged Security, Loss Prevention, and Shopper Heatmap Analytics',
    category: 'Industry',
    iconName: 'ShoppingBag',
    summary: 'Empower retail operations with POS transaction video linkage, customer dwell-time heatmaps, and cashier remote auditing.',
    heroImage: '/images/hero-smb.jpg',
    overview: 'NexusVision Smart Retail Converged Solution transforms loss prevention into business intelligence. Retailers synchronize electronic cash register (POS) receipts with 4K video feeds, analyze customer foot traffic patterns, optimize shelf merchandising with heatmaps, and secure stores after hours.',
    challenges: [
      {
        title: 'Retail Shrinkage & Cashier Fraud',
        description: 'Unrecorded items, sweethearting at checkout counters, and shoplifting cause multi-million dollar inventory losses annually.',
      },
      {
        title: 'Blind Spots in Store Layout Optimization',
        description: 'Store managers lack empirical data on which aisles generate the highest dwell time and foot traffic conversion.',
      },
      {
        title: 'Multi-Store Remote Management Friction',
        description: 'Franchise owners struggle to inspect daily display standards and customer service quality across dozens of regional outlets.',
      },
    ],
    architecture: {
      headline: 'Converged Retail AIoT Architecture',
      description: 'End-to-end integration connecting surveillance cameras, POS cash registers, and cloud business intelligence.',
      layers: [
        {
          layerName: '1. In-Store Sensory Layer',
          description: 'Fisheye panoramic cameras, cashier pinhole cameras, and entrance dual-lens customer counting sensors.',
          components: ['Panoramic 360° Fisheye', 'Cashier POS Video Linkage Cam', 'Dual-Lens 3D People Counter'],
        },
        {
          layerName: '2. Local Smart Recording & POS Hub',
          description: 'DeepinMind NVR extracting text metadata from POS transactions and correlating suspicious refunds.',
          components: ['DeepinMind Retail NVR', 'POS Text Overlay Interface', 'Store Sound Alarm Hub'],
        },
        {
          layerName: '3. Cloud Multi-Store BI Portal',
          description: 'Centralized web dashboard comparing chain store visitor flow, conversion rates, and remote audit checklists.',
          components: ['NexusRetail Cloud BI', 'Regional Manager Mobile App', 'Loss Prevention Audit Suite'],
        },
      ],
    },
    keyCapabilities: [
      {
        title: 'POS Video Overlay & Exception Search',
        description: 'Search video footage by transaction receipt number, product barcode, or refunded amount in seconds.',
      },
      {
        title: 'Shopper Dwell Time & Shelf Heatmaps',
        description: 'Generate intuitive color-coded heatmaps showing which promotional endcaps capture the greatest customer attention.',
      },
      {
        title: 'VIP Customer Recognition & Greeter Alert',
        description: 'Discreetly notify store managers when registered loyalty program VIP members enter the boutique.',
      },
      {
        title: 'After-Hours Active Strobe Deterrence',
        description: 'Automated alarm arming after store closing; triggers bright strobe lights and voice warnings if burglars breach display glass.',
      },
    ],
    recommendedProducts: ['nex-colorvu-turret-4k', 'nex-pro-bullet-8mp', 'nex-nvr-32ch-4k', 'nex-modular-intercom'],
    successStories: [
      {
        client: 'LuxeMart European Department Stores',
        location: 'Milan, Italy',
        quote: 'Correlating our POS data with video reduced checkout discrepancies by 72% across 45 stores in the first quarter.',
        outcome: '72% decrease in register shrinkage and 18% improvement in promotional shelf conversion.',
      },
    ],
  },
  {
    id: 'sol-ind-healthcare',
    slug: 'healthcare',
    type: 'industry',
    title: 'Healthcare & Hospital Campus Solutions',
    subtitle: 'Protecting Patients, Safeguarding Medical Assets, and Optimizing ER Flows',
    category: 'Industry',
    iconName: 'Activity',
    summary: 'Deliver peaceful hospital recovery zones, contactless pharmacy access, emergency room security, and thermal temperature monitoring.',
    heroImage: '/images/card-display.jpg',
    overview: 'Hospitals require an environment balancing open, compassionate public welcome with stringent security for operating theaters, pharmaceutical stores, and nursery wards. NexusVision healthcare solutions provide touchless biometric door access, emergency nurse call buttons, and visual verification.',
    challenges: [
      {
        title: 'Emergency Room Aggression & Staff Safety',
        description: 'Tense emergency departments experience sudden security confrontations requiring rapid security personnel dispatch.',
      },
      {
        title: 'Controlled Substance & Narcotics Theft',
        description: 'Strict regulatory mandates require dual-authentication audit trails for pharmacy dispensary access.',
      },
    ],
    architecture: {
      headline: 'Hospital Security & Medical Care Topology',
      description: 'Integrated security for wards, corridors, surgical suites, and ambulance docks.',
      layers: [
        {
          layerName: '1. Access & Authentication',
          description: 'Touchless facial terminals for sterile surgical entry without touching door handles.',
          components: ['MinMoe Sterile Face Terminals', 'Emergency Panic Buttons', 'Cleanroom Intercoms'],
        },
        {
          layerName: '2. Surveillance & Patient Safeguarding',
          description: 'Ultra-low-noise indoor cameras in patient recovery areas and parking security.',
          components: ['Low-Light Dome Cameras', 'Ambulance Bay ANPR Cameras'],
        },
      ],
    },
    keyCapabilities: [
      {
        title: 'Sterile Touchless Door Control',
        description: 'Doctors and surgical staff open restricted doors hands-free via face verification while carrying sterile trays.',
      },
      {
        title: 'One-Touch ER Panic Dispatch',
        description: 'Emergency panic pillars immediately trigger video pop-ups in hospital dispatch rooms.',
      },
    ],
    recommendedProducts: ['nex-minmoe-face-terminal', 'nex-colorvu-turret-4k', 'nex-modular-intercom'],
    successStories: [
      {
        client: 'Grand Valley Regional Medical Center',
        location: 'Munich, Germany',
        quote: 'Touchless entry transformed our surgical hygiene protocols while keeping pharmacy narcotics secure 24/7.',
        outcome: 'Zero recorded pharmacy inventory loss and 100% compliance with strict EU hospital security standards.',
      },
    ],
  },
  {
    id: 'sol-ind-manufacturing',
    slug: 'manufacturing',
    type: 'industry',
    title: 'Advanced Manufacturing & Industrial Parks',
    subtitle: 'Perimeter Defense, Thermal Overheat Warning, and Automated Yard Management',
    category: 'Industry',
    iconName: 'Factory',
    summary: 'Safeguard expansive factory grounds with thermal fire detection, automated logistics truck ANPR gates, and AI safety helmet compliance.',
    heroImage: '/images/card-thermal.jpg',
    overview: 'Modern industrial production facilities demand round-the-clock protection against equipment overheating, hazardous chemical leaks, perimeter incursions, and heavy truck logistical bottlenecks.',
    challenges: [
      {
        title: 'Costly Equipment Overheating & Electrical Fires',
        description: 'Transformers, high-voltage switchgear, and chemical tanks can ignite with little warning without thermal monitoring.',
      },
      {
        title: 'Expansive Industrial Perimeters with Harsh Weather',
        description: 'Dust, heavy rain, and fog blind ordinary optical security cameras along kilometer-long factory boundaries.',
      },
    ],
    architecture: {
      headline: 'Industrial Smart Park Topology',
      description: 'Full-spectrum thermal imaging, vehicle weighing scale linkage, and perimeter radar.',
      layers: [
        {
          layerName: '1. Perimeter & Fire Sensing',
          description: 'Bi-spectrum thermal cameras constantly measuring surface temperatures and spotting fence jumpers.',
          components: ['Bi-Spectrum Thermal Cameras', 'Security Radars', 'Industrial PTZ Domes'],
        },
        {
          layerName: '2. Logistics Truck Checkpoint',
          description: 'ANPR cameras reading truck license plates and container numbers automatically to lift barrier gates.',
          components: ['ITS ANPR Cameras', 'Barrier Gate Controllers', 'Driver Intercom Kiosks'],
        },
      ],
    },
    keyCapabilities: [
      {
        title: 'Continuous Surface Thermography (-20°C to 550°C)',
        description: 'Flags hot spots on electrical transformers and conveyor bearings before mechanical failure or ignition occurs.',
      },
      {
        title: 'Zero-Blindspot Radar-PTZ Tracking Linkage',
        description: 'Millimeter-wave radar detects moving targets in complete darkness, automatically slewing PTZ cameras to track them.',
      },
    ],
    recommendedProducts: ['nex-thermal-dual-spectrum', 'nex-pro-bullet-8mp', 'nex-speed-dome-32x', 'nex-traffic-anpr-camera'],
    successStories: [
      {
        client: 'Nordic Steel Works',
        location: 'Stockholm, Sweden',
        quote: 'The thermal bi-spectrum cameras detected a furnace cooling leak 4 hours before it could have caused a shutdown.',
        outcome: 'Saved an estimated €1.2M in downtime and increased gate logistics turnaround by 40%.',
      },
    ],
  },
  {
    id: 'sol-ind-transportation',
    slug: 'transportation',
    type: 'industry',
    title: 'Public Transportation & Smart Cities',
    subtitle: 'Highways, Rail Terminals, Airport Concourses, and Transit Hubs',
    category: 'Industry',
    iconName: 'Train',
    summary: 'Ensure seamless urban passenger transit with intelligent traffic violation cameras, passenger crowd density analytics, and luggage tracking.',
    heroImage: '/images/card-solar.jpg',
    overview: 'Urban transit networks are the lifeblood of modern society. NexusVision transportation architectures monitor hundreds of thousands of commuters, detect platform track intrusions, and optimize highway flow.',
    challenges: [
      {
        title: 'High-Speed Traffic Congestion & Toll Evasion',
        description: 'Vehicles traveling at 120 km/h require instantaneous optical capture regardless of headlight glare or rain.',
      },
    ],
    architecture: {
      headline: 'Intelligent Transportation Systems (ITS)',
      description: 'All-in-one highway gantry cameras, roadside edge AI boxes, and central traffic operations.',
      layers: [
        {
          layerName: '1. Roadside & Track Sensing',
          description: 'Global shutter ANPR cameras and high-zoom speed domes.',
          components: ['9MP ITS ANPR Cameras', '32x Speed Dome PTZs', 'Solar Autonomous Units'],
        },
      ],
    },
    keyCapabilities: [
      {
        title: 'Sub-Millisecond 250 km/h ANPR Capture',
        description: 'Clear vehicle plate capture even during midnight highway downpours with synchronized flash illuminators.',
      },
    ],
    recommendedProducts: ['nex-traffic-anpr-camera', 'nex-speed-dome-32x', 'nex-solar-camera-4g'],
    successStories: [
      {
        client: 'Capital Expressway Authority',
        location: 'Madrid, Spain',
        quote: 'ANPR accuracy reached 99.6% across 80 highway toll lanes, drastically speeding up non-stop passage.',
        outcome: '99.6% recognition rate and 30% reduction in congestion bottlenecks at peak hours.',
      },
    ],
  },
  {
    id: 'sol-ind-energy',
    slug: 'energy',
    type: 'industry',
    title: 'Energy, Oil, Gas & Utilities',
    subtitle: 'Autonomous Off-Grid Protection for Pipelines, Substations & Solar Farms',
    category: 'Industry',
    iconName: 'Zap',
    summary: 'Self-powered 4G solar camera stations, explosion-proof housings, and thermal leak monitoring for remote critical energy assets.',
    heroImage: '/images/card-solar.jpg',
    overview: 'Energy production sites and electrical transmission corridors span thousands of miles of remote, harsh terrain. NexusVision solar-powered autonomous systems operate reliably without external power or cellular cables.',
    challenges: [
      {
        title: 'Absence of Power and Fiber Cables on Remote Corridors',
        description: 'Trenching power cables across deserts, mountain passes, and forests is financially and logistically prohibitive.',
      },
    ],
    architecture: {
      headline: 'Off-Grid Renewable Security Infrastructure',
      description: '80W monocrystalline solar units, heated lithium batteries, and 4G LTE transmission.',
      layers: [
        {
          layerName: '1. Self-Sustaining Edge Nodes',
          description: 'SolarVu autonomous kits paired with dual-spectrum thermal cameras for pipeline inspection.',
          components: ['AOV SolarVu 4G Kits', 'Explosion-Proof Stainless Domes', 'Internal Battery Management (BMS)'],
        },
      ],
    },
    keyCapabilities: [
      {
        title: 'Autonomous Solar Operation for 7 Cloudy Days',
        description: 'Smart power management throttles power dynamically, maintaining 24/7 recording and cloud alarm uplink.',
      },
    ],
    recommendedProducts: ['nex-solar-camera-4g', 'nex-thermal-dual-spectrum', 'nex-speed-dome-32x'],
    successStories: [
      {
        client: 'Atlas Solar Power Station (500MW)',
        location: 'Nevada, United States',
        quote: 'We deployed 120 SolarVu 4G units across our 3,000-acre solar field without digging a single foot of electrical trenching.',
        outcome: 'Saved over $650,000 in trenching infrastructure costs with zero security breaches.',
      },
    ],
  },
];
