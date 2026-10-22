'use client';

import React from 'react';
import Link from 'next/link';

export const WhereToBuy: React.FC = () => {
  return (
    <section className="relative bg-[#000000] text-white py-24 md:py-28 overflow-hidden font-sans text-center" aria-label="Where to Buy">
      {/* Background World Map Dotted Pattern Silhouette matching Screenshot 1 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none select-none">
        <svg
          viewBox="0 0 1000 480"
          className="w-full h-full max-w-6xl object-contain fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized world dot matrix outline */}
          <g>
            {/* North America */}
            <circle cx="160" cy="110" r="3" /><circle cx="180" cy="100" r="2.5" /><circle cx="200" cy="95" r="3" /><circle cx="220" cy="110" r="2.5" />
            <circle cx="150" cy="130" r="3" /><circle cx="170" cy="130" r="3.5" /><circle cx="190" cy="125" r="3.5" /><circle cx="210" cy="130" r="3" /><circle cx="230" cy="135" r="3" />
            <circle cx="160" cy="150" r="3.5" /><circle cx="180" cy="150" r="4" /><circle cx="200" cy="150" r="4" /><circle cx="220" cy="155" r="3.5" /><circle cx="245" cy="155" r="3" />
            <circle cx="170" cy="170" r="3.5" /><circle cx="190" cy="170" r="4" /><circle cx="210" cy="175" r="4" /><circle cx="230" cy="175" r="3.5" /><circle cx="250" cy="175" r="3" />
            <circle cx="185" cy="190" r="3" /><circle cx="205" cy="190" r="3.5" /><circle cx="225" cy="195" r="3.5" /><circle cx="245" cy="195" r="3" />
            <circle cx="210" cy="215" r="3" /><circle cx="225" cy="220" r="3" /><circle cx="240" cy="225" r="2.5" />
            <circle cx="235" cy="245" r="2.5" /><circle cx="250" cy="255" r="2.5" />

            {/* South America */}
            <circle cx="280" cy="280" r="3" /><circle cx="295" cy="285" r="3.5" /><circle cx="310" cy="290" r="3" />
            <circle cx="290" cy="305" r="3.5" /><circle cx="305" cy="310" r="4" /><circle cx="320" cy="315" r="3.5" />
            <circle cx="295" cy="330" r="3.5" /><circle cx="310" cy="335" r="4" /><circle cx="325" cy="340" r="3.5" /><circle cx="340" cy="335" r="3" />
            <circle cx="305" cy="355" r="3.5" /><circle cx="320" cy="360" r="3.5" /><circle cx="330" cy="365" r="3" />
            <circle cx="310" cy="380" r="3" /><circle cx="320" cy="385" r="3" />
            <circle cx="315" cy="405" r="2.5" /><circle cx="320" cy="425" r="2.5" />

            {/* Europe */}
            <circle cx="480" cy="115" r="3" /><circle cx="500" cy="110" r="3" /><circle cx="520" cy="105" r="3" /><circle cx="540" cy="115" r="3" />
            <circle cx="475" cy="135" r="3.5" /><circle cx="495" cy="130" r="4" /><circle cx="515" cy="130" r="4" /><circle cx="535" cy="130" r="3.5" /><circle cx="555" cy="135" r="3" />
            <circle cx="485" cy="155" r="3.5" /><circle cx="505" cy="150" r="4" /><circle cx="525" cy="150" r="4" /><circle cx="545" cy="155" r="3.5" />
            <circle cx="480" cy="175" r="3" /><circle cx="500" cy="175" r="3.5" /><circle cx="520" cy="170" r="3.5" /><circle cx="540" cy="175" r="3" />

            {/* Africa */}
            <circle cx="490" cy="205" r="3.5" /><circle cx="510" cy="205" r="4" /><circle cx="530" cy="210" r="4" /><circle cx="550" cy="215" r="3.5" />
            <circle cx="480" cy="225" r="3.5" /><circle cx="500" cy="230" r="4" /><circle cx="520" cy="230" r="4" /><circle cx="545" cy="235" r="4" /><circle cx="565" cy="240" r="3.5" />
            <circle cx="495" cy="255" r="3.5" /><circle cx="515" cy="255" r="4" /><circle cx="535" cy="260" r="4" /><circle cx="555" cy="265" r="4" />
            <circle cx="510" cy="285" r="3.5" /><circle cx="530" cy="285" r="4" /><circle cx="550" cy="290" r="3.5" />
            <circle cx="520" cy="315" r="3.5" /><circle cx="535" cy="320" r="3.5" /><circle cx="550" cy="325" r="3" />
            <circle cx="530" cy="345" r="3" /><circle cx="540" cy="355" r="3" /><circle cx="535" cy="375" r="2.5" />

            {/* Asia */}
            <circle cx="600" cy="105" r="3" /><circle cx="630" cy="100" r="3.5" /><circle cx="660" cy="95" r="3.5" /><circle cx="690" cy="100" r="3.5" /><circle cx="720" cy="105" r="3" /><circle cx="750" cy="115" r="2.5" />
            <circle cx="585" cy="130" r="3.5" /><circle cx="615" cy="125" r="4" /><circle cx="645" cy="125" r="4" /><circle cx="675" cy="125" r="4" /><circle cx="705" cy="130" r="3.5" /><circle cx="735" cy="135" r="3" />
            <circle cx="595" cy="155" r="3.5" /><circle cx="625" cy="155" r="4" /><circle cx="655" cy="150" r="4.5" /><circle cx="685" cy="150" r="4.5" /><circle cx="715" cy="155" r="4" /><circle cx="745" cy="160" r="3.5" /><circle cx="775" cy="165" r="3" />
            <circle cx="610" cy="180" r="3.5" /><circle cx="640" cy="180" r="4" /><circle cx="670" cy="175" r="4" /><circle cx="700" cy="175" r="4" /><circle cx="730" cy="180" r="3.5" /><circle cx="760" cy="185" r="3" />
            <circle cx="625" cy="205" r="3" /><circle cx="655" cy="205" r="3.5" /><circle cx="685" cy="200" r="4" /><circle cx="715" cy="205" r="4" /><circle cx="745" cy="210" r="3.5" />
            <circle cx="670" cy="230" r="3" /><circle cx="700" cy="230" r="3.5" /><circle cx="730" cy="235" r="3.5" /><circle cx="755" cy="240" r="3" />
            <circle cx="715" cy="255" r="3" /><circle cx="740" cy="260" r="3" /><circle cx="765" cy="265" r="2.5" />

            {/* Australia / Oceania */}
            <circle cx="770" cy="315" r="3" /><circle cx="795" cy="310" r="3.5" /><circle cx="820" cy="320" r="3" />
            <circle cx="765" cy="340" r="3.5" /><circle cx="790" cy="335" r="4" /><circle cx="815" cy="340" r="4" /><circle cx="840" cy="335" r="3" />
            <circle cx="775" cy="365" r="3.5" /><circle cx="800" cy="365" r="4" /><circle cx="825" cy="365" r="3.5" />
            <circle cx="790" cy="390" r="3" /><circle cx="815" cy="395" r="3" />
            <circle cx="850" cy="385" r="2.5" /><circle cx="865" cy="405" r="2" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 container-enterprise max-w-4xl mx-auto px-4">
        {/* Title matching Screenshot 1 */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight mb-4">
          Where to Buy
        </h2>

        {/* Subtitle matching Screenshot 1 */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-9 font-normal">
          Connect with local distributors to get genuine Hikvision products, expert advice, and reliable after-sales support.
        </p>

        {/* Action Button matching Screenshot 1 */}
        <div>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center px-9 py-3.5 bg-[#D71920] hover:bg-[#B81419] text-white text-sm sm:text-base font-semibold rounded-full shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Find a Distributor
          </Link>
        </div>
      </div>
    </section>
  );
};
