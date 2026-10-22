'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { productSelectorQuestions } from '@/data/tools';
import { productsData } from '@/data/products';
import { Product } from '@/types/product';
import { Check, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

export const ProductSelectorWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [recommendedProducts, setRecommendedProducts] = useState<Product[] | null>(null);

  const question = productSelectorQuestions[currentStep];

  const handleSelectOption = (optionIndex: number) => {
    const updated = { ...selectedAnswers, [question.id]: optionIndex };
    setSelectedAnswers(updated);

    if (currentStep < productSelectorQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendations
      calculateRecommendations(updated);
    }
  };

  const calculateRecommendations = (answers: Record<string, number>) => {
    const envIdx = answers['environment'] ?? 0;
    const lightIdx = answers['lighting'] ?? 0;

    let matched: Product[] = [];
    if (envIdx === 2) {
      // Remote solar
      matched = productsData.filter((p) => p.slug === 'nex-solar-camera-4g' || p.slug === 'nex-pro-bullet-8mp');
    } else if (lightIdx === 2) {
      // Thermal
      matched = productsData.filter((p) => p.slug === 'nex-thermal-dual-spectrum' || p.slug === 'nex-speed-dome-32x');
    } else if (envIdx === 3) {
      // Traffic
      matched = productsData.filter((p) => p.slug === 'nex-traffic-anpr-camera' || p.slug === 'nex-pro-bullet-8mp');
    } else if (lightIdx === 0) {
      // ColorVu
      matched = productsData.filter((p) => p.slug === 'nex-colorvu-turret-4k' || p.slug === 'nex-pro-bullet-8mp');
    } else {
      matched = productsData.slice(0, 3);
    }

    setRecommendedProducts(matched);
  };

  const resetWizard = () => {
    setSelectedAnswers({});
    setCurrentStep(0);
    setRecommendedProducts(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6 sm:p-8" id="selector">
      <div className="flex items-center justify-between pb-6 border-b border-gray-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
              Interactive Product Selector
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
            Find the Ideal Hardware Architecture
          </h3>
        </div>

        <button
          onClick={resetWizard}
          className="text-xs font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Start Over</span>
        </button>
      </div>

      {recommendedProducts ? (
        /* Results View */
        <div className="pt-8 space-y-6 animate-fade-in">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-emerald-900">Recommended Hardware System</h4>
              <p className="text-xs text-emerald-700">
                Matched according to your environmental durability, lighting, and AI analytics requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedProducts.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-xl border border-gray-200 bg-gray-50/60 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-3">
                    <Image src={p.imageUrl} alt={p.name} fill className="object-contain p-2" sizes="250px" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#D71920] block">{p.model}</span>
                  <h5 className="text-sm font-bold text-gray-900 mt-0.5 line-clamp-1">{p.name}</h5>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.tagline}</p>
                </div>
                <Link
                  href={`/products/${p.categorySlug}/${p.subcategorySlug}/${p.slug}`}
                  className="mt-4 py-2 px-3 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded text-center block transition-colors"
                >
                  View Model Specifications &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={resetWizard}
              className="text-xs font-bold text-gray-600 hover:text-gray-900 underline"
            >
              Modify Selection Criteria
            </button>
          </div>
        </div>
      ) : (
        /* Step-by-step Wizard Question */
        <div className="pt-8 space-y-6">
          {/* Progress bar */}
          <div className="flex items-center gap-2">
            {productSelectorQuestions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  i <= currentStep ? 'bg-[#D71920]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <div className="text-xs text-gray-400 font-semibold">
            Step {currentStep + 1} of {productSelectorQuestions.length}
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-gray-900">{question.question}</h4>
            <p className="text-xs text-gray-500 mt-1">{question.description}</p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((opt, oIdx) => {
              const isSelected = selectedAnswers[question.id] === oIdx;
              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectOption(oIdx)}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-[#D71920] bg-red-50/50 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-gray-900">{opt.label}</span>
                      {isSelected && <Check className="w-4 h-4 text-[#D71920]" />}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{opt.description}</p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-100 flex items-center gap-1 text-[11px] font-semibold text-[#D71920]">
                    <span>Select this requirement</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
