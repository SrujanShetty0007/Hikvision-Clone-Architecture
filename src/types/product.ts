export interface ProductSpecification {
  category: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export interface ProductDownload {
  title: string;
  type: 'Datasheet' | 'User Manual' | 'Quick Start Guide' | 'Firmware' | 'Software' | 'CAD Drawing';
  fileSize: string;
  fileFormat: string;
  version?: string;
  releaseDate: string;
  url: string;
}

export interface Product {
  id: string;
  slug: string;
  model: string;
  name: string;
  series: string;
  categorySlug: string;
  categoryName: string;
  subcategorySlug: string;
  subcategoryName: string;
  tagline: string;
  description: string;
  badge?: 'New' | 'Flagship' | 'AIoT' | 'ColorVu' | 'AcuSense' | 'SolarVu' | 'Popular';
  imageUrl: string;
  galleryImages: string[];
  keyHighlights: string[];
  specsSummary: {
    resolution: string;
    sensor: string;
    illumination: string;
    lens: string;
    protection: string;
    power: string;
    aiFeatures: string[];
    connectivity: string;
  };
  detailedSpecs: ProductSpecification[];
  downloads: ProductDownload[];
  compatibleAccessories: {
    model: string;
    name: string;
    type: string;
    imageUrl: string;
  }[];
  relatedProductSlugs: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  imageUrl: string;
  bannerImage: string;
  subcategories: {
    slug: string;
    name: string;
    description: string;
    count: number;
    icon?: string;
  }[];
}

export interface ProductFilterState {
  category?: string;
  subcategory?: string;
  series?: string[];
  resolution?: string[];
  features?: string[];
  formFactor?: string[];
  connectivity?: string[];
  searchQuery?: string;
  sortBy?: 'recommended' | 'newest' | 'model-asc' | 'model-desc';
}
