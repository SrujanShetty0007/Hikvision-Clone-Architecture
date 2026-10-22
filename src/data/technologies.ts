import { TechnologyItem } from '@/types/technology';

export const technologiesData: TechnologyItem[] = [
  {
    id: 'tech-001',
    slug: 'deepinview-ai',
    title: 'DeepinView AI Neural Analytics',
    tagline: 'High-precision deep learning computer vision embedded directly on the camera edge',
    category: 'AI & Intelligence',
    heroImage: '/images/hero-smb.jpg',
    summary: 'DeepinView is NexusVision’s flagship edge-AI platform. It trains multi-layered convolutional neural networks to classify targets with over 99.8% precision, identifying vehicle models, license plates, human body attributes, and line-crossing intrusions in real-time.',
    overview: 'Unlike traditional pixel-differencing motion detection that triggers hundreds of false alarms from swaying tree branches, shifting shadows, or rainstorms, DeepinView uses advanced deep-learning feature extraction. The camera understands the scene semantically, allowing security teams to focus on real threats.',
    keyInnovations: [
      {
        title: 'Deep Structured Neural Processor (NPU)',
        description: 'Dedicated multi-TOPs tensor compute engine handles up to 60 simultaneous targets at 60 fps without slowing down video streaming.',
        metric: '99.8% Target Accuracy',
      },
      {
        title: 'Multi-Attribute Classification',
        description: 'Instantly categorizes targets by gender, clothing color, bag or helmet carrying status, vehicle color, vehicle type, and license plate.',
        metric: '18 Target Attributes',
      },
      {
        title: 'Continuous On-Site Re-Learning',
        description: 'Cameras adapt to local environmental variations over time, reducing edge false positives even in changing lighting conditions.',
        metric: '< 0.1% False Alarm Rate',
      },
    ],
    architecturePoints: [
      'Edge-first computing minimizes cloud server bandwidth and eliminates cloud processing latency.',
      'Hardware security cryptographic enclave protects neural network weights and training models.',
      'Open ONVIF Profile M compatibility for metadata streaming to third-party VMS platforms.',
    ],
    applicableProducts: ['nex-pro-bullet-8mp', 'nex-speed-dome-32x', 'nex-traffic-anpr-camera'],
    whitepaperUrl: '#whitepaper-deepinview',
  },
  {
    id: 'tech-002',
    slug: 'colorvu-technology',
    title: 'ColorVu 24/7 Full-Color Imaging',
    tagline: 'Vivid color imagery in total darkness without black-and-white infrared switching',
    category: 'Imaging Technology',
    heroImage: '/images/card-cameras.jpg',
    summary: 'ColorVu technology empowers cameras to produce colorful videos even in extremely dim environments down to 0.0005 Lux. By combining F1.0 super-apertures with large-format back-illuminated sensors and gentle warm supplementary lighting.',
    overview: 'In conventional infrared cameras, night video turns into grainy monochrome, rendering suspect clothing colors, vehicle paint, and crucial forensic details completely invisible. ColorVu solves this challenge permanently, capturing the real world in full vivid color 24 hours a day.',
    keyInnovations: [
      {
        title: 'F1.0 Super Aperture Optics',
        description: 'Captures 4 times the amount of light compared to conventional F2.0 security camera lenses.',
        metric: '4× Light Intake',
      },
      {
        title: 'Advanced 1/1.2" Large Format Sensor',
        description: 'Maximizes light-gathering area per pixel, ensuring clean, noise-free images in dimly lit parking lots and alleyways.',
        metric: '0.0005 Lux Sensitivity',
      },
      {
        title: 'Anti-Glare Soft Supplementary Light',
        description: 'Warm, eye-friendly LED light engages automatically only when environmental ambient light drops to absolute zero.',
        metric: '40m Warm Light Distance',
      },
    ],
    architecturePoints: [
      'Active alignment manufacturing technology aligns lens elements down to 4-pixel precision during factory assembly.',
      '3D Dynamic Noise Reduction (DNR) algorithms eliminate color smearing and digital noise.',
    ],
    applicableProducts: ['nex-colorvu-turret-4k', 'nex-solar-camera-4g', 'nex-pro-bullet-8mp'],
    whitepaperUrl: '#whitepaper-colorvu',
  },
  {
    id: 'tech-003',
    slug: 'darkfighter-ultra-low-light',
    title: 'DarkFighterX Bi-Spectral Low-Light Architecture',
    tagline: 'Inspired by the human eye: combining color and infrared spectrums for ultra-long distance night clarity',
    category: 'Imaging Technology',
    heroImage: '/images/card-thermal.jpg',
    summary: 'DarkFighterX uses dual sensors: one sensor dedicated to infrared wavelength brightness and contrast, and another sensor dedicated to visible color gamut. A proprietary fusion engine synthesizes them in real-time into an ultra-sharp, vivid color picture.',
    overview: 'Human eyes perceive brightness and color through rod and cone cells separately. DarkFighterX mimics this biological phenomenon with two synchronized sensors and a custom bi-spectral prism, achieving unprecedented clarity at ranges beyond 200 meters in low-light environments.',
    keyInnovations: [
      {
        title: 'Bi-Spectral Optical Prism Architecture',
        description: 'Splits incoming photon beams precisely into color and detail channels, eliminating chromatic aberration.',
        metric: 'Dual-Sensor Fusion',
      },
      {
        title: 'Ultra-Long Range Color PTZ',
        description: 'Maintains full-color situational awareness across highway corridors, shipping ports, and vast airport runways.',
        metric: '200m+ Night Reach',
      },
    ],
    architecturePoints: [
      'Zero-latency hardware ISP image signal processing engine.',
      'Defog and EIS electronic image stabilization for high-vibration bridge and tower installations.',
    ],
    applicableProducts: ['nex-speed-dome-32x', 'nex-pro-bullet-8mp', 'nex-traffic-anpr-camera'],
  },
  {
    id: 'tech-004',
    slug: 'cybersecurity',
    title: 'Quantum CyberShield Security Architecture',
    tagline: 'Defense-in-depth hardware root-of-trust, encrypted firmware, and ISO 27001 compliance',
    category: 'Cybersecurity',
    heroImage: '/images/hero-summit.jpg',
    summary: 'NexusVision products are built on a hardened security baseline: dual-certificate HTTPS, secure boot, tamper-resistant cryptographic co-processors, automated vulnerability scanning, and strict GDPR/CCPA privacy safeguards.',
    overview: 'In an era of rising cyber threats, enterprise physical security equipment must be as resilient to network attacks as banking infrastructure. CyberShield ensures every device, firmware payload, and cloud handshake is authenticated and cryptographically protected.',
    keyInnovations: [
      {
        title: 'Hardware Root of Trust & Secure Boot',
        description: 'Cryptographic chips verify firmware signatures before CPU boot execution, blocking unauthorized rootkits.',
        metric: 'FIPS 140-3 Level 2',
      },
      {
        title: 'End-to-End TLS 1.3 & AES-256 Encryption',
        description: 'All video streams, authentication tokens, and user credentials are encrypted in transit and at rest.',
        metric: 'AES-256 Bit Encryption',
      },
    ],
    architecturePoints: [
      'Independent third-party penetration testing and CVE vulnerability bounty programs.',
      'Strict role-based access control (RBAC) with IEEE 802.1X network port authentication.',
    ],
    applicableProducts: ['nex-pro-bullet-8mp', 'nex-nvr-32ch-4k', 'nex-minmoe-face-terminal'],
  },
];
