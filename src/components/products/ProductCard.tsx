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
    <div className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xs transition-all duration-200 p-5 flex flex-col justify-between group h-full">
      <Link href={productUrl} className="block flex-1">
        {/* Top Header: Clean NEW badge or spacer */}
        <div className="h-5 flex items-center justify-between">
          {product.badge === 'New' || product.badge === 'Flagship' ? (
            <span className="text-[11.5px] font-semibold italic text-[#D71920] tracking-wide">
              NEW
            </span>
          ) : (
            <span className="h-4" />
          )}
        </div>

        {/* Product Image: Centered on clean white */}
        <div className="relative h-44 w-full flex items-center justify-center my-3 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Model Number (Bold Black) */}
        <div className="mt-3">
          <h3 className="text-[13.5px] font-bold text-gray-900 group-hover:text-[#D71920] transition-colors leading-tight">
            {product.model}
          </h3>
          {/* Subtitle / Product Name (Clean muted text) */}
          <p className="text-[12px] text-gray-500 mt-1 line-clamp-2 leading-relaxed font-normal">
            {product.name}
          </p>
        </div>
      </Link>

      {/* Bottom Compare Checkbox matching Hikvision screenshot */}
      <div className="pt-3 mt-4 border-t border-gray-100 flex items-center">
        <label
          onClick={toggleCompare}
          className="inline-flex items-center gap-2 cursor-pointer text-xs text-gray-700 select-none hover:text-[#D71920] transition-colors"
        >
          <div
            className={`w-3.5 h-3.5 rounded-xs border flex items-center justify-center transition-colors ${
              isCompared
                ? 'bg-[#D71920] border-[#D71920] text-white'
                : 'border-gray-400 bg-white hover:border-gray-600'
            }`}
          >
            {isCompared && <Check className="w-2.5 h-2.5 stroke-[3]" />}
          </div>
          <span className="text-[12px] text-gray-600 font-normal">Compare</span>
        </label>
      </div>
    </div>
  );
};
