import React from 'react';
import { Search, GraduationCap, ArrowRight } from 'lucide-react';
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
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#2d3322] bg-gradient-to-b from-[#15170f] to-[#0d0e0a]">
      {/* Background Lime Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#a3e635]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Student Discipline Pills Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2014] border border-[#3a422b] mb-6">
          <GraduationCap className="w-4 h-4 text-[#a3e635]" />
          <span className="text-xs font-medium text-stone-300">
            Dedicated Platform for NUML Students:
          </span>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-[#a3e635]">
            <span className="px-2 py-0.5 rounded-md bg-[#252b1b]">SE</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-md bg-[#252b1b]">CS</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-md bg-[#252b1b]">IT</span>
            <span>•</span>
            <span className="px-2 py-0.5 rounded-md bg-[#252b1b]">AI</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-4">
          Find Islamabad <span className="text-[#a3e635]">Software Houses</span> in One Place
        </h1>

        {/* Subtitle */}
        <p className="font-heading text-lg sm:text-xl font-medium text-stone-300 mb-4 max-w-3xl mx-auto">
          Helping NUML students discover software houses, LinkedIn pages and Career pages across Islamabad.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-stone-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          NUML Career Hub helps NUML Software Engineering, Computer Science, IT, and AI students discover software houses in Islamabad and quickly access their official LinkedIn and Career pages.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-center bg-[#1c2014] rounded-full border border-[#3a422b] p-2 shadow-2xl focus-within:border-[#a3e635] focus-within:ring-1 focus-within:ring-[#a3e635] transition-all">
            <Search className="w-5 h-5 text-stone-500 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search Islamabad companies (e.g. Systems Limited, 10Pearls, Devsinc)..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-stone-500 px-3 py-1.5 focus:outline-none"
            />
            <button
              onClick={onSearchSubmit}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#a3e635] hover:bg-[#b5f547] text-[#0d0e0a] font-bold text-sm transition-all shrink-0 shadow-lg shadow-[#a3e635]/20"
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
