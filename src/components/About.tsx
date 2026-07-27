import React from 'react';
import { Compass, GraduationCap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* Title Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c2014] border border-[#3a422b] text-xs font-bold text-[#a3e635] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Platform Overview</span>
        </div>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          About <span className="text-[#a3e635]">NUML Career Hub</span>
        </h1>
        <div className="w-16 h-1 bg-[#a3e635] mx-auto rounded-full" />
      </div>

      {/* Main Content Card */}
      <div className="bg-[#1a1d14] rounded-2xl p-6 sm:p-10 mb-10 border border-[#2d3322] shadow-xl">
        
        {/* Core Description as requested */}
        <div className="space-y-6 text-stone-200 text-base sm:text-lg leading-relaxed">
          <p className="font-medium text-white border-l-4 border-[#a3e635] pl-4 py-1">
            NUML Career Hub is built specifically for NUML (National University of Modern Languages) students to help them discover software houses across Islamabad.
          </p>
          
          <p className="text-stone-300">
            Instead of searching different company websites manually, NUML students can easily access official LinkedIn pages and Career portals of software houses in Islamabad from one clean, centralized directory.
          </p>
        </div>

        {/* Key Student Disciplines */}
        <div className="mt-10 pt-8 border-t border-[#2d3322]">
          <h3 className="font-heading font-bold text-base text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[#a3e635]" />
            <span>Built Specifically For Students In:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Software Engineering (SE)",
              "Computer Science (CS)",
              "Information Technology (IT)",
              "Artificial Intelligence (AI)",
            ].map((field) => (
              <div
                key={field}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#15170f] border border-[#2d3322]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#a3e635] shrink-0" />
                <span className="text-xs font-bold text-stone-200">{field}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Pak Career Hub */}
        <div className="mt-10 pt-8 border-t border-[#2d3322] grid sm:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#15170f] border border-[#2d3322]">
            <div className="w-8 h-8 rounded-lg bg-[#2d3322] text-[#a3e635] font-bold text-sm flex items-center justify-center mb-3">
              1
            </div>
            <h4 className="font-heading font-bold text-white text-base mb-1">
              Direct LinkedIn Links
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Follow software companies on LinkedIn with one click to keep track of their news, culture, and job announcements.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#15170f] border border-[#2d3322]">
            <div className="w-8 h-8 rounded-lg bg-[#2d3322] text-[#a3e635] font-bold text-sm flex items-center justify-center mb-3">
              2
            </div>
            <h4 className="font-heading font-bold text-white text-base mb-1">
              Direct Career Pages
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Skip Google searching and jump straight into official careers portals to apply for internships, junior, and entry-level positions.
            </p>
          </div>
        </div>

      </div>

      {/* Creator Attribution Section */}
      <div className="p-6 rounded-2xl bg-[#15170f] border border-[#2d3322] text-center">
        <p className="text-[#a3e635] text-lg sm:text-xl font-extrabold tracking-tight">
          <span className="text-stone-300 text-base font-medium block sm:inline sm:mr-1.5">Created by</span> Raja Muhammad Hassan
        </p>
      </div>

    </section>
  );
};
