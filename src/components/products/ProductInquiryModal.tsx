'use client';

import React, { useState } from 'react';
import { useEnterprise } from '@/context/EnterpriseContext';
import { Mail, CheckCircle2, X } from 'lucide-react';

export const ProductInquiryModal: React.FC = () => {
  const { isInquiryOpen, setIsInquiryOpen, inquiryProduct } = useEnterprise();
  const [submitted, setSubmitted] = useState(false);

  if (!isInquiryOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div
        className="w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#D71920]" />
            <h3 className="text-base font-bold text-gray-900">
              {inquiryProduct ? `Inquire: ${inquiryProduct.model}` : 'Enterprise Sales & Project Inquiry'}
            </h3>
          </div>
          <button
            onClick={() => {
              setIsInquiryOpen(false);
              setSubmitted(false);
            }}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-gray-900">Inquiry Received</h4>
              <p className="text-xs text-gray-500 mt-2 max-w-sm mx-auto leading-relaxed">
                Thank you for your interest. A regional NexusVision enterprise solution architect will contact you within 1 business day with official project pricing and technical specifications.
              </p>
              <button
                onClick={() => {
                  setIsInquiryOpen(false);
                  setSubmitted(false);
                }}
                className="mt-6 px-5 py-2 text-xs font-semibold bg-gray-900 text-white rounded hover:bg-black transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3.5 text-xs"
            >
              {inquiryProduct && (
                <div className="p-3 bg-red-50/50 border border-red-100 rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-mono font-bold text-[#D71920]">{inquiryProduct.model}</span>
                    <p className="text-gray-600 line-clamp-1">{inquiryProduct.name}</p>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-gray-400">Selected Device</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">First & Last Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    placeholder="Security Systems Ltd"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Project Type / Estimated Scale</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden bg-white text-gray-700">
                  <option>Commercial Building / Enterprise Campus (10-50 Cameras)</option>
                  <option>City Surveillance / Municipal Transit (100+ Channels)</option>
                  <option>School / Educational Campus</option>
                  <option>Industrial Manufacturing / Thermal Perimeter</option>
                  <option>Channel Distributor / Reseller Bulk Order</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Project Notes / Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Describe your site requirements, camera count, lighting challenges, or integration needs..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-[#D71920] outline-hidden resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 font-bold text-white bg-[#D71920] hover:bg-[#B81419] rounded transition-colors shadow-sm cursor-pointer"
                >
                  Submit Project Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
