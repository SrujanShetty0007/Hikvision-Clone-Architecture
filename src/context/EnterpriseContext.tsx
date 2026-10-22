'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { productsData } from '@/data/products';

interface EnterpriseContextType {
  // Compare state
  compareSlugs: string[];
  addToCompare: (slug: string) => void;
  removeFromCompare: (slug: string) => void;
  clearCompare: () => void;
  isCompareModalOpen: boolean;
  setIsCompareModalOpen: (open: boolean) => void;
  compareProducts: Product[];

  // Global search modal
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Language selector modal
  isLangModalOpen: boolean;
  setIsLangModalOpen: (open: boolean) => void;
  currentLanguage: string;
  setCurrentLanguage: (lang: string) => void;

  // Account modal
  isAccountModalOpen: boolean;
  setIsAccountModalOpen: (open: boolean) => void;

  // Contact / Inquiry modal
  isInquiryOpen: boolean;
  setIsInquiryOpen: (open: boolean) => void;
  inquiryProduct: Product | null;
  openInquiryForProduct: (product: Product) => void;

  // Cookie consent
  cookieAccepted: boolean | null;
  acceptCookies: () => void;
  declineCookies: () => void;
}

const EnterpriseContext = createContext<EnterpriseContextType | undefined>(undefined);

export function EnterpriseProvider({ children }: { children: React.ReactNode }) {
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('Global (English)');
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState<Product | null>(null);
  const [cookieAccepted, setCookieAccepted] = useState<boolean | null>(null);

  // Load cookies and compare from local storage
  useEffect(() => {
    try {
      const savedCookies = localStorage.getItem('nexus_cookies_accepted');
      if (savedCookies !== null) {
        setCookieAccepted(savedCookies === 'true');
      }
      const savedCompare = localStorage.getItem('nexus_compare_slugs');
      if (savedCompare) {
        setCompareSlugs(JSON.parse(savedCompare));
      }
    } catch {
      // ignore
    }
  }, []);

  const addToCompare = (slug: string) => {
    if (compareSlugs.includes(slug)) return;
    if (compareSlugs.length >= 4) {
      alert('You can compare up to 4 products simultaneously.');
      return;
    }
    const updated = [...compareSlugs, slug];
    setCompareSlugs(updated);
    try {
      localStorage.setItem('nexus_compare_slugs', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const removeFromCompare = (slug: string) => {
    const updated = compareSlugs.filter((s) => s !== slug);
    setCompareSlugs(updated);
    try {
      localStorage.setItem('nexus_compare_slugs', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const clearCompare = () => {
    setCompareSlugs([]);
    try {
      localStorage.removeItem('nexus_compare_slugs');
    } catch {
      // ignore
    }
  };

  const openInquiryForProduct = (product: Product) => {
    setInquiryProduct(product);
    setIsInquiryOpen(true);
  };

  const acceptCookies = () => {
    setCookieAccepted(true);
    try {
      localStorage.setItem('nexus_cookies_accepted', 'true');
    } catch {
      // ignore
    }
  };

  const declineCookies = () => {
    setCookieAccepted(false);
    try {
      localStorage.setItem('nexus_cookies_accepted', 'false');
    } catch {
      // ignore
    }
  };

  const compareProducts = compareSlugs
    .map((slug) => productsData.find((p) => p.slug === slug))
    .filter((p): p is Product => !!p);

  return (
    <EnterpriseContext.Provider
      value={{
        compareSlugs,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isCompareModalOpen,
        setIsCompareModalOpen,
        compareProducts,
        isSearchOpen,
        setIsSearchOpen,
        isLangModalOpen,
        setIsLangModalOpen,
        currentLanguage,
        setCurrentLanguage,
        isAccountModalOpen,
        setIsAccountModalOpen,
        isInquiryOpen,
        setIsInquiryOpen,
        inquiryProduct,
        openInquiryForProduct,
        cookieAccepted,
        acceptCookies,
        declineCookies,
      }}
    >
      {children}
    </EnterpriseContext.Provider>
  );
}

export function useEnterprise() {
  const context = useContext(EnterpriseContext);
  if (!context) {
    throw new Error('useEnterprise must be used within an EnterpriseProvider');
  }
  return context;
}
