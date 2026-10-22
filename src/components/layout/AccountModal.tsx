'use client';

import React, { useState } from 'react';
import { useEnterprise } from '@/context/EnterpriseContext';
import { User, Lock, Mail, Building, X, ExternalLink } from 'lucide-react';

export const AccountModal: React.FC = () => {
  const { isAccountModalOpen, setIsAccountModalOpen } = useEnterprise();
  const [tab, setTab] = useState<'partner' | 'cloud'>('partner');
  const [submitted, setSubmitted] = useState(false);

  if (!isAccountModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
      <div
        className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#D71920]" />
            <h3 className="text-base font-bold text-gray-900">Enterprise Access Portals</h3>
          </div>
          <button
            onClick={() => setIsAccountModalOpen(false)}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-gray-100 bg-gray-50 text-xs font-semibold">
          <button
            onClick={() => {
              setTab('partner');
              setSubmitted(false);
            }}
            className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-colors ${
              tab === 'partner'
                ? 'border-[#D71920] text-[#D71920] bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            Partner Portal (Distributors & Integrators)
          </button>
          <button
            onClick={() => {
              setTab('cloud');
              setSubmitted(false);
            }}
            className={`flex-1 py-3 text-center border-b-2 cursor-pointer transition-colors ${
              tab === 'cloud'
                ? 'border-[#D71920] text-[#D71920] bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            NexusCloud (End-User VMS)
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-gray-900">SSO Authentication Initiated</h4>
              <p className="text-xs text-gray-500 mt-1">
                Redirecting securely to Nexus Global OAuth2 SSO Gateway...
              </p>
              <button
                onClick={() => setIsAccountModalOpen(false)}
                className="mt-4 px-4 py-2 text-xs font-semibold bg-gray-900 text-white rounded hover:bg-black transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Enterprise Work Email or Partner ID
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="partner@integrator-corp.com"
                    className="w-full text-xs pl-9 pr-3 py-2.5 border border-gray-300 rounded focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-semibold text-gray-700">Security Password</label>
                  <a href="#forgot" className="text-[11px] text-[#D71920] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="w-full text-xs pl-9 pr-3 py-2.5 border border-gray-300 rounded focus:border-[#D71920] focus:ring-1 focus:ring-[#D71920] outline-hidden"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 text-xs font-bold text-white bg-[#D71920] hover:bg-[#B81419] rounded transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Log In to {tab === 'partner' ? 'Partner Portal' : 'NexusCloud'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-[11px] text-gray-500">
                  Not an authorized partner yet?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setIsAccountModalOpen(false);
                      window.location.href = '/partners#channel-program';
                    }}
                    className="text-[#D71920] font-semibold hover:underline"
                  >
                    Apply for Channel Certification &rarr;
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
