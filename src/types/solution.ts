export type SolutionType = 'industry' | 'scenario' | 'function';

export interface SolutionItem {
  id: string;
  slug: string;
  type: SolutionType;
  title: string;
  subtitle: string;
  category: string;
  iconName?: string;
  summary: string;
  heroImage: string;
  overview: string;
  challenges: {
    title: string;
    description: string;
  }[];
  architecture: {
    headline: string;
    description: string;
    layers: {
      layerName: string;
      description: string;
      components: string[];
    }[];
  };
  keyCapabilities: {
    title: string;
    description: string;
    icon?: string;
  }[];
  recommendedProducts: string[]; // product slugs
  successStories: {
    client: string;
    location: string;
    quote: string;
    outcome: string;
  }[];
}
