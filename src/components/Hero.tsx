import React from 'react';
import { Search, GraduationCap, ArrowRight, Sparkles, Building2, CheckCircle2, Bot, Cpu } from 'lucide-react';
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
  totalCompanies,
}) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#070D1B] text-white">
      
      {/* 🌟 AI Ambient Neural Glows (Purple + Cyan + Deep Blue) */}
      <div className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-purple-600/30 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[110px] pointer-events-none" />

      {/* ⚡ Futuristic Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* 🤖 AI Neural Nodes Network Effect (Glowing Dots) */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #38BDF8 1.5px, transparent 1.5px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Islamabad Landmarks Silhouette */}
      <div className="absolute right-2 sm:right-8 bottom-0 w-[280px] sm:w-[420px] md:w-[500px] h-[220px] sm:h-[300px] pointer-events-none opacity-15 transition-opacity">
        <svg viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cyan-300 stroke-current">
          <path d="M 220 280 L 290 130 L 360 280 Z" strokeWidth="2" strokeLinejoin="round" />
          <path d="M 290 130 L 290 280" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M 200 280 L 200 90 L 205 80 L 210 90 L 210 280" strokeWidth="1.5" />
          <polygon points="205,65 202,80 208,80" fill="currentColor" />
          <path d="M 370 280 L 370 90 L 375 80 L 380 90 L 380 280" strokeWidth="1.5" />
          <polygon points="375,65 372,80 378,80" fill="currentColor" />
          <circle cx="290" cy="118" r="4" strokeWidth="1.5" />
          <path d="M 60 280 Q 75 140 100 80 Q 115 75 125 80 Q 140 140 150 280" strokeWidth="1.5" />
          <path d="M 130 280 Q 140 150 160 100 Q 172 95 180 100 Q 192 150 200 280" strokeWidth="1.5" />
          <line x1="10" y1="280" x2="480" y2="280" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* AI Tech Discipline Pill Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] mb-8">
          <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-300">
            Dedicated Platform for NUML Students:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-extrabold text-white">
            <span className="px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">SE</span>
            <span className="text-cyan-500">•</span>
            <span className="px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">CS</span>
            <span className="text-cyan-500">•</span>
            <span className="px-2 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">IT</span>
            <span className="text-cyan-500">•</span>
            <span className="px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-500/50 text-purple-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-400" /> AI
            </span>
          </div>
        </div>

        {/* AI Gradient Text Title */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6">
          Find Islamabad <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">Software Houses</span> in One Place
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-base sm:text-lg md:text-xl font-normal text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Helping NUML Software Engineering, CS, IT, and AI students instantly discover verified tech companies, active career portals, and official LinkedIn handles across Islamabad.
        </p>

        {/* AI Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center bg-slate-900/90 rounded-full border border-cyan-500/40 p-2 shadow-[0_0_30px_rgba(0,86,210,0.3)] focus-within:border-cyan-400 focus-within:ring-4 focus-within:ring-cyan-500/20 transition-all backdrop-blur-md">
            <Search className="w-5 h-5 text-cyan-400 ml-3.5 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search Islamabad companies (e.g. Systems Limited, 10Pearls)..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 px-3 py-1.5 focus:outline-none font-medium"
            />
            <button
              onClick={onSearchSubmit}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm transition-all shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer active:scale-95"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* AI Highlights Bar */}
        <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 py-3 px-4 rounded-2xl backdrop-blur-md border border-slate-800 hover:border-cyan-500/40 transition-all">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span><strong className="text-white font-extrabold">{totalCompanies || 15}+</strong> Software Houses</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 py-3 px-4 rounded-2xl backdrop-blur-md border border-slate-800 hover:border-cyan-500/40 transition-all">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span><strong className="text-white font-extrabold">100%</strong> Verified Links</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-900/60 py-3 px-4 rounded-2xl backdrop-blur-md border border-slate-800 hover:border-purple-500/40 transition-all">
            <Bot className="w-4 h-4 text-purple-400" />
            <span>AI Smart Portal</span>
          </div>
        </div>

      </div>
    </section>
  );
};