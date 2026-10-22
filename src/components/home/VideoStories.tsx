'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, Clock } from 'lucide-react';

interface VideoStoryItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  category: string;
}

const videoStories: VideoStoryItem[] = [
  {
    id: 'vid-1',
    title: 'ColorVu Gen-3: Overcoming Low-Light Limits',
    subtitle: 'Behind the engineering of F1.0 super apertures and ultra-large multi-spectral sensors.',
    duration: '04:12',
    thumbnail: '/images/card-cameras.jpg',
    category: 'Innovation Spotlight',
  },
  {
    id: 'vid-2',
    title: 'Smart Campus Deployment: St. Andrews Academy',
    subtitle: 'How 1,800 students transitioned to touchless biometric gates and 4K interactive displays.',
    duration: '05:48',
    thumbnail: '/images/hero-education.jpg',
    category: 'Case Study',
  },
  {
    id: 'vid-3',
    title: 'SolarVu in the Mojave: 120 Off-Grid Cameras',
    subtitle: 'Autonomous clean-energy security for a 500MW utility-scale solar generating facility.',
    duration: '03:35',
    thumbnail: '/images/card-solar.jpg',
    category: 'Field Documentary',
  },
];

export const VideoStories: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoStoryItem | null>(null);

  return (
    <section className="py-16 bg-white" aria-label="Customer Video Stories">
      <div className="container-enterprise">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold text-[#D71920] uppercase tracking-wider block mb-1">
              Field Documentaries &amp; Tech Insights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Video Stories &amp; Keynotes
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoStories.map((story) => (
            <div
              key={story.id}
              className="group cursor-pointer flex flex-col"
              onClick={() => setActiveVideo(story)}
            >
              {/* Thumbnail with play overlay */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-gray-100 shadow-sm border border-gray-100 mb-3">
                <Image
                  src={story.thumbnail}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors" />

                {/* Play button icon in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#D71920] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#D71920] group-hover:text-white transition-all">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[11px] font-mono text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{story.duration}</span>
                </div>

                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-[10px] font-bold uppercase tracking-wider text-white/90">
                  {story.category}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#D71920] transition-colors leading-snug">
                {story.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                {story.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl bg-gray-950 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-gray-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold bg-[#D71920] px-2 py-0.5 rounded text-white">
                  {activeVideo.category}
                </span>
                <h4 className="text-sm font-bold truncate max-w-lg">{activeVideo.title}</h4>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport / Simulated Player with realistic video HUD */}
            <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center text-center p-8">
              <Image
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                fill
                className="object-cover opacity-40 blur-xs"
              />
              <div className="relative z-10 space-y-4 max-w-lg">
                <div className="w-16 h-16 rounded-full bg-[#D71920] text-white flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-gray-300">
                  High-definition streaming presentation. Official corporate video content produced by NexusVision Global Media.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <span className="text-[11px] text-gray-400 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    4K Ultra HD • 60 FPS • Stereo Audio
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-900 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
              <span>{activeVideo.subtitle}</span>
              <button
                onClick={() => setActiveVideo(null)}
                className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white rounded font-semibold"
              >
                Close Player
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
