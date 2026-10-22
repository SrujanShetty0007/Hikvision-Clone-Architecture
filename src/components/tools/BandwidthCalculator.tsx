'use client';

import React, { useState } from 'react';
import { HardDrive, Network, ShieldAlert, Cpu } from 'lucide-react';

export const BandwidthCalculator: React.FC = () => {
  const [channels, setChannels] = useState(16);
  const [resolution, setResolution] = useState<'4K' | '4MP' | '1080P'>('4K');
  const [fps, setFps] = useState(25);
  const [retentionDays, setRetentionDays] = useState(30);
  const [codec, setCodec] = useState<'H265_PLUS' | 'H265' | 'H264'>('H265_PLUS');
  const [recordingHours, setRecordingHours] = useState(24);

  // Base bitrates in Mbps per stream at standard 25fps H.264
  const baseBitrate = {
    '4K': 12.0,
    '4MP': 6.0,
    '1080P': 3.0,
  }[resolution];

  // Codec efficiency factor
  const codecMultiplier = {
    'H265_PLUS': 0.35, // 65% savings
    'H265': 0.50,      // 50% savings
    'H264': 1.0,
  }[codec];

  const effectiveBitratePerChannel = baseBitrate * codecMultiplier * (fps / 25);
  const totalBitrateMbps = channels * effectiveBitratePerChannel;

  // Storage calculation: (Mbps * 3600 sec * hours * days) / (8 bits * 1,000,000 MB per TB)
  const totalBytesPerSec = (totalBitrateMbps * 1000000) / 8;
  const totalBytesPerDay = totalBytesPerSec * 3600 * recordingHours;
  const totalTerabytes = (totalBytesPerDay * retentionDays) / 1000000000000;

  // Recommended HDD count (assuming standard 8TB enterprise disks)
  const recommended8TbDisks = Math.ceil(totalTerabytes / 8) || 1;

  return (
    <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm p-6 sm:p-8" id="calculator">
      <div className="pb-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D71920]" />
          <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider">
            Enterprise System Designer
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
          NVR Storage &amp; Network Bandwidth Calculator
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Calculate real-world SAN/NVR storage requirements and switch throughput based on H.265+ smart compression.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Input Parameters Controls */}
        <div className="lg:col-span-7 space-y-5 text-xs">
          <div>
            <div className="flex justify-between font-semibold text-gray-700 mb-1.5">
              <span>Total Camera Channels: {channels}</span>
              <span className="text-gray-400 font-mono">1 to 128 IP Streams</span>
            </div>
            <input
              type="range"
              min={1}
              max={64}
              value={channels}
              onChange={(e) => setChannels(Number(e.target.value))}
              className="w-full accent-[#D71920]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Resolution Stream</label>
              <select
                value={resolution}
                onChange={(e) => setResolution(e.target.value as any)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded font-medium focus:border-[#D71920] outline-hidden"
              >
                <option value="4K">4K 8MP Ultra HD (3840 × 2160)</option>
                <option value="4MP">4MP Super HD (2560 × 1440)</option>
                <option value="1080P">1080P Full HD (1920 × 1080)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Video Compression Codec</label>
              <select
                value={codec}
                onChange={(e) => setCodec(e.target.value as any)}
                className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded font-medium focus:border-[#D71920] outline-hidden"
              >
                <option value="H265_PLUS">Ultra H.265+ (Smart Encoding - 65% Savings)</option>
                <option value="H265">Standard H.265 (HEVC)</option>
                <option value="H264">Legacy H.264 (Baseline)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between font-semibold text-gray-700 mb-1.5">
                <span>Video Retention: {retentionDays} Days</span>
              </div>
              <input
                type="range"
                min={7}
                max={90}
                value={retentionDays}
                onChange={(e) => setRetentionDays(Number(e.target.value))}
                className="w-full accent-[#D71920]"
              />
            </div>

            <div>
              <div className="flex justify-between font-semibold text-gray-700 mb-1.5">
                <span>Daily Recording: {recordingHours} Hours</span>
              </div>
              <input
                type="range"
                min={8}
                max={24}
                value={recordingHours}
                onChange={(e) => setRecordingHours(Number(e.target.value))}
                className="w-full accent-[#D71920]"
              />
            </div>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg text-gray-600 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#D71920] shrink-0" />
            <span>Framerate locked at {fps} fps for fluid continuous surveillance recording.</span>
          </div>
        </div>

        {/* Calculated Results Box */}
        <div className="lg:col-span-5 bg-gray-900 text-white rounded-xl p-6 flex flex-col justify-between shadow-xl">
          <div className="space-y-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block border-b border-gray-800 pb-2">
              System Dimensioning Output
            </span>

            {/* Total Required Storage */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                <HardDrive className="w-4 h-4 text-[#D71920]" />
                <span>Total Required Raw Storage:</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black font-mono text-white">
                {totalTerabytes.toFixed(1)} <span className="text-xl font-normal text-gray-400">TB</span>
              </div>
              <span className="text-xs text-gray-400 mt-1 block">
                Approx. {recommended8TbDisks} × 8TB Enterprise Surveillance Hard Drives
              </span>
            </div>

            {/* Total Incoming Bandwidth */}
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                <Network className="w-4 h-4 text-emerald-400" />
                <span>NVR Network Incoming Throughput:</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                {totalBitrateMbps.toFixed(1)} <span className="text-lg font-normal text-gray-400">Mbps</span>
              </div>
              <span className="text-xs text-gray-400 mt-1 block">
                Recommended Switch: Gigabit Uplink PoE Switch with 802.3at support
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800">
            <a
              href="/products/video-security/network-video-recorders"
              className="w-full py-2.5 px-4 bg-[#D71920] hover:bg-[#B81419] text-white text-xs font-bold rounded text-center block transition-colors"
            >
              Browse Compatible DeepinMind NVRs &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
