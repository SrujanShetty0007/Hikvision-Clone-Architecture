export interface TechnologyItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'AI & Intelligence' | 'Imaging Technology' | 'Cloud & IoT' | 'Cybersecurity' | 'Transmission';
  heroImage: string;
  summary: string;
  overview: string;
  keyInnovations: {
    title: string;
    description: string;
    metric?: string;
  }[];
  architecturePoints: string[];
  applicableProducts: string[];
  whitepaperUrl?: string;
}

export interface SupportResource {
  id: string;
  title: string;
  category: 'Firmware' | 'Software Tool' | 'User Manual' | 'Quick Start Guide' | 'Datasheet' | 'Certificate';
  productFamily: string;
  version?: string;
  releaseDate: string;
  fileSize: string;
  osCompatibility?: string[];
  description: string;
  downloadUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
