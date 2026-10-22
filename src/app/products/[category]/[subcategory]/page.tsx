import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { productCategories } from '@/data/productCategories';
import { productsData } from '@/data/products';
import { ContextualNavigation } from '@/components/layout/ContextualNavigation';
import { ProductListing } from '@/components/products/ProductListing';
import { ChevronRight } from 'lucide-react';

export function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  productCategories.forEach((cat) => {
    cat.subcategories.forEach((sub) => {
      params.push({
        category: cat.slug,
        subcategory: sub.slug,
      });
    });
  });
  return params;
}

interface SubcategoryPageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

export default async function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;

  const category = productCategories.find((c) => c.slug === categorySlug);
  if (!category) notFound();

  const subcategory = category.subcategories.find((s) => s.slug === subcategorySlug);
  if (!subcategory) notFound();

  const subcategoryProducts = productsData.filter(
    (p) => p.categorySlug === categorySlug && p.subcategorySlug === subcategorySlug
  );

  const contextualNavItems = [
    { label: `All ${category.name}`, href: `/products/${category.slug}` },
    ...category.subcategories.map((s) => ({
      label: s.name,
      href: `/products/${category.slug}/${s.slug}`,
      active: s.slug === subcategorySlug,
    })),
  ];

  return (
    <div className="w-full bg-[#FBFBFB] font-sans">
      {/* Category & Subcategory Header matching Hikvision Screenshot 4 */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container-enterprise">
          <nav className="flex items-center space-x-2 text-[13px] text-gray-400 mb-3">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/products/${category.slug}`} className="hover:text-gray-900 transition-colors">
              {category.name}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-gray-900 font-semibold">{subcategory.name}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight">
            {subcategory.name}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2.5 max-w-3xl leading-relaxed font-normal">
            {subcategory.description}
          </p>
        </div>
      </div>

      {/* Subcategory contextual nav */}
      <ContextualNavigation items={contextualNavItems} title="Sub-Series" />

      {/* Product Listing */}
      <div className="container-enterprise py-10">
        <ProductListing
          initialProducts={subcategoryProducts.length > 0 ? subcategoryProducts : productsData}
          categorySlug={categorySlug}
          subcategorySlug={subcategorySlug}
          categoryTitle={`${subcategory.name} Catalogue`}
        />
      </div>
    </div>
  );
}
