'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useEnterprise } from '@/context/EnterpriseContext';
import { Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { compareSlugs, addToCompare, removeFromCompare } = useEnterprise();
  const isCompared = compareSlugs.includes(product.slug);

  const toggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isCompared) {
      removeFromCompare(product.slug);
    } else {
      addToCompare(product.slug);
    }
  };

  const productUrl = `/products/${product.categorySlug}/${product.subcategorySlug}/${product.slug}`;

  return (
    <div className="bg-white border border-gray-200/90 hover:border-gray-300 hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between group h-full">
      <Link href={productUrl} className="block flex-1">
        {/* Top Header: Clean NEW badge or spacer */}
        <div className="h-5 flex items-center justify-between">
          {product.badge === 'New' || product.badge === 'Flagship' ? (
            <span className="text-xs font-bold italic text-[#D71920] tracking-wider">
              NEW
            </span>
          ) : (
            <span className="h-4" />
          )}
        </div>

        {/* Product Image: Centered on clean white */}
        <div className="relative h-48 sm:h-52 w-full flex items-center justify-center my-4 overflow-hidden bg-white">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Model Number (Bold Black - Hikvision Standard) */}
        <div className="mt-4">
          <h3 className="text-base sm:text-[17px] font-bold text-gray-900 group-hover:text-[#D71920] transition-colors leading-snug">
            {product.model}
          </h3>
          {/* Subtitle / Product Name (Clean muted text) */}
          <p className="text-[13.5px] text-gray-600 mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {product.name}
          </p>
        </div>
      </Link>

      {/* Bottom Compare Checkbox matching Hikvision screenshot */}
      <div className="pt-4 mt-5 border-t border-gray-100 flex items-center">
        <label
          onClick={toggleCompare}
          className="inline-flex items-center gap-2.5 cursor-pointer text-[13.5px] text-gray-700 select-none hover:text-[#D71920] transition-colors font-medium"
        >
          <div
            className={`w-4 h-4 rounded-xs border flex items-center justify-center transition-colors ${
              isCompared
                ? 'bg-[#D71920] border-[#D71920] text-white'
                : 'border-gray-400 bg-white hover:border-gray-600'
            }`}
          >
            {isCompared && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <span>Compare</span>
        </label>
      </div>
    </div>
  );
};
