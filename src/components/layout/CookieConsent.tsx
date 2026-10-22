'use client';

import React, { useState } from 'react';
import { useEnterprise } from '@/context/EnterpriseContext';
import { X, ShieldCheck } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const { cookieAccepted, acceptCookies, declineCookies } = useEnterprise();
  const [showManageModal, setShowManageModal] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  // If user has already made a decision, don't show
  if (cookieAccepted !== null) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-2xl p-4 md:p-5 animate-fade-in">
        <div className="container-enterprise flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-gray-600 leading-relaxed max-w-4xl">
            NexusVision uses strictly necessary cookies and related technologies to enable the website to function. With your consent, we would also like to use cookies to observe and analyse traffic levels and other metrics / show you targeted advertising / show you advertising on the basis of your location / tailor our website&apos;s content. For more information on cookie practices please refer to our{' '}
            <a href="#cookie-policy" className="text-[#D71920] underline hover:text-[#B81419]">
              cookie policy
            </a>
            .
          </p>
          <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
            <button
              onClick={() => setShowManageModal(true)}
              className="px-4 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Manage cookies
            </button>
            <button
              onClick={acceptCookies}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#D71920] hover:bg-[#B81419] rounded-md transition-colors shadow-xs cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={declineCookies}
              className="text-gray-400 hover:text-gray-600 p-1"
              aria-label="Decline and close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Manage cookies modal */}
      {showManageModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 border border-gray-100">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D71920]" />
                <h4 className="text-sm font-bold text-gray-900">Cookie Preferences</h4>
              </div>
              <button
                onClick={() => setShowManageModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-gray-600">
              <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-gray-900">Strictly Necessary Cookies</span>
                  <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded font-semibold">
                    Always Active
                  </span>
                </div>
                <p className="text-[11px] text-gray-500">
                  Essential for site navigation, security token generation, and account authentication.
                </p>
              </div>

              <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-gray-900">Performance & Analytics</span>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="accent-[#D71920]"
                  />
                </div>
                <p className="text-[11px] text-gray-500">
                  Aggregated telemetry allowing us to count visitors and diagnose download speeds.
                </p>
              </div>

              <div className="p-3 bg-gray-50 rounded border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-gray-900">Marketing & Targeting</span>
                  <input
                    type="checkbox"
                    checked={marketingEnabled}
                    onChange={(e) => setMarketingEnabled(e.target.checked)}
                    className="accent-[#D71920]"
                  />
                </div>
                <p className="text-[11px] text-gray-500">
                  Used by authorized marketing partners to show relevant enterprise product announcements.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => {
                  declineCookies();
                  setShowManageModal(false);
                }}
                className="px-3.5 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 border border-gray-200 rounded"
              >
                Reject Optional
              </button>
              <button
                onClick={() => {
                  acceptCookies();
                  setShowManageModal(false);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#D71920] rounded hover:bg-[#B81419]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
