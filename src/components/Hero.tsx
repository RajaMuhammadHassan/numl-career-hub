import React from 'react';
import { Search, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { CityOption } from '../types';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  cities: CityOption[];
  onSearchSubmit: () => void;
  totalCompanies: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
}) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <section className="relative pt-14 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-br from-[#0B2E83] via-[#0047AB] to-[#1E88E5] text-white">
      {/* Background Subtle Radial Glowing Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#64B5F6]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-[#1E88E5]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#0056D2]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Abstract Wave & Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />

      {/* Abstract Wave SVG Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 400">
        <path d="M0,150 C300,280 600,20 1200,180 L1200,400 L0,400 Z" fill="url(#heroWaveGrad)" />
        <defs>
          <linearGradient id="heroWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64B5F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0B2E83" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Faint Outline Vector Illustration of Islamabad Landmarks (Faisal Mosque + Centaurus) */}
      <div className="absolute right-2 sm:right-8 bottom-0 w-[280px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[300px] pointer-events-none opacity-10 sm:opacity-12 transition-opacity">
        <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white stroke-current">
          {/* Faisal Mosque Tent Structure */}
          <path d="M 220 280 L 290 130 L 360 280 Z" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M 290 130 L 290 280" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M 255 205 L 325 205" strokeWidth="1.5" />
          
          {/* Mosque Minarets */}
          <path d="M 200 280 L 200 90 L 205 80 L 210 90 L 210 280" strokeWidth="2" />
          <polygon points="205,65 202,80 208,80" fill="currentColor" />
          
          <path d="M 370 280 L 370 90 L 375 80 L 380 90 L 380 280" strokeWidth="2" />
          <polygon points="375,65 372,80 378,80" fill="currentColor" />

          {/* Crescent on Mosque */}
          <circle cx="290" cy="118" r="4" strokeWidth="1.5" />

          {/* Centaurus Curved Towers */}
          <path d="M 60 280 Q 75 140 100 80 Q 115 75 125 80 Q 140 140 150 280" strokeWidth="2" />
          <line x1="80" y1="130" x2="135" y2="130" strokeWidth="1.5" />
          <line x1="85" y1="180" x2="138" y2="180" strokeWidth="1.5" />
          <line x1="88" y1="230" x2="142" y2="230" strokeWidth="1.5" />

          <path d="M 130 280 Q 140 150 160 100 Q 172 95 180 100 Q 192 150 200 280" strokeWidth="1.8" />
          <line x1="145" y1="150" x2="185" y2="150" strokeWidth="1.2" />
          <line x1="150" y1="200" x2="190" y2="200" strokeWidth="1.2" />

          {/* Ground Base Line */}
          <line x1="10" y1="280" x2="480" y2="280" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Student Discipline Pills Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-6">
          <GraduationCap className="w-4 h-4 text-[#64B5F6]" />
          <span className="text-xs font-medium text-blue-100">
            Dedicated Platform for NUML Students:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-extrabold text-white">
            <span className="px-2 py-0.5 rounded-md bg-white/15 border border-white/20">SE</span>
            <span className="text-blue-300">•</span>
            <span className="px-2 py-0.5 rounded-md bg-white/15 border border-white/20">CS</span>
            <span className="text-blue-300">•</span>
            <span className="px-2 py-0.5 rounded-md bg-white/15 border border-white/20">IT</span>
            <span className="text-blue-300">•</span>
            <span className="px-2 py-0.5 rounded-md bg-white/15 border border-white/20">AI</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-4 drop-shadow-sm">
          Find Islamabad <span className="text-[#64B5F6] underline decoration-blue-400/40 underline-offset-8">Software Houses</span> in One Place
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-lg sm:text-xl font-medium text-blue-100 mb-4 max-w-3xl mx-auto">
          Helping NUML students discover software houses, LinkedIn pages and Career pages across Islamabad.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-blue-200/90 max-w-2xl mx-auto mb-9 leading-relaxed">
          NUML Career Hub helps NUML Software Engineering, Computer Science, IT, and AI students discover software houses in Islamabad and quickly access their official LinkedIn and Career pages.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-full border border-white/40 p-2 shadow-2xl shadow-blue-950/40 focus-within:ring-4 focus-within:ring-[#64B5F6]/40 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search Islamabad companies (e.g. Systems Limited, 10Pearls, Devsinc)..."
              className="w-full bg-transparent text-sm sm:text-base text-slate-900 placeholder-slate-400 px-3 py-1.5 focus:outline-none"
            />
            <button
              onClick={onSearchSubmit}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0056D2] hover:bg-[#1E88E5] text-white font-bold text-sm transition-all shrink-0 shadow-lg shadow-blue-900/30 cursor-pointer active:scale-95 hover:scale-[1.02]"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
