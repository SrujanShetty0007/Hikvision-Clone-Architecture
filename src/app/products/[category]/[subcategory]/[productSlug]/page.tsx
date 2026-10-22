import React from 'react';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { ProductDetailView } from '@/components/products/ProductDetailView';

export function generateStaticParams() {
  return productsData.map((p) => ({
    category: p.categorySlug,
    subcategory: p.subcategorySlug,
    productSlug: p.slug,
  }));
}

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
    productSlug: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { productSlug } = await params;

  const product = productsData.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.filter((p) =>
    product.relatedProductSlugs.includes(p.slug)
  );

  return <ProductDetailView product={product} relatedProducts={relatedProducts} />;
}
