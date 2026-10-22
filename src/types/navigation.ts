export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
}

export interface NavCategoryColumn {
  title: string;
  href?: string;
  items: NavSubItem[];
}

export interface PromoPanel {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  href: string;
  ctaText: string;
}

export interface MegaMenuData {
  type: 'products' | 'solutions' | 'support' | 'technologies' | 'partners';
  columns: NavCategoryColumn[];
  promo?: PromoPanel;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
