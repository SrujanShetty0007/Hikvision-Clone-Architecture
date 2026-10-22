'use client';

import React from 'react';
import { useEnterprise } from '@/context/EnterpriseContext';
import { Globe, X, Check } from 'lucide-react';

const regions = [
  {
    region: 'Global & International',
    languages: [
      { code: 'en-global', label: 'Global (English)', flag: '🌐' },
    ],
  },
  {
    region: 'Europe & UK',
    languages: [
      { code: 'en-uk', label: 'United Kingdom (English)', flag: '🇬🇧' },
      { code: 'de-de', label: 'Deutschland (Deutsch)', flag: '🇩🇪' },
      { code: 'fr-fr', label: 'France (Français)', flag: '🇫🇷' },
      { code: 'es-es', label: 'España (Español)', flag: '🇪🇸' },
      { code: 'it-it', label: 'Italia (Italiano)', flag: '🇮🇹' },
    ],
  },
  {
    region: 'Americas',
    languages: [
      { code: 'en-us', label: 'United States & Canada (English)', flag: '🇺🇸' },
      { code: 'es-la', label: 'América Latina (Español)', flag: '🇲🇽' },
      { code: 'pt-br', label: 'Brasil (Português)', flag: '🇧🇷' },
    ],
  },
  {
    region: 'Asia Pacific & Middle East',
    languages: [
      { code: 'en-ap', label: 'Asia-Pacific (English)', flag: '🇸🇬' },
      { code: 'ar-me', label: 'Middle East (العربية / English)', flag: '🇦🇪' },
      { code: 'ja-jp', label: '日本 (日本語)', flag: '🇯🇵' },
    ],
  },
];

export const LanguageSelectorModal: React.FC = () => {
  const { isLangModalOpen, setIsLangModalOpen, currentLanguage, setCurrentLanguage } = useEnterprise();

  if (!isLangModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-[#D71920]" />
            <h3 className="text-base font-bold text-gray-900">Select Region & Language</h3>
          </div>
          <button
            onClick={() => setIsLangModalOpen(false)}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6">
          {regions.map((reg, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                {reg.region}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {reg.languages.map((lang) => {
                  const isSelected = currentLanguage === lang.label;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.label);
                        setIsLangModalOpen(false);
                      }}
                      className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#D71920] bg-red-50/50 text-[#D71920] font-semibold'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-xs">{lang.label}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#D71920]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
          Selecting a specific country directs you to regional product certifications and distributor listings.
        </div>
      </div>
    </div>
  );
};
