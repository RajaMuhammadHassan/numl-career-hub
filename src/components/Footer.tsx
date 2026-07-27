import React from 'react';
import { Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-[#2d3322] bg-[#15170f] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Logo and Tagline */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#a3e635] flex items-center justify-center text-[#0d0e0a]">
            <Building2 className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="font-heading font-extrabold text-lg text-white">
            NUML Career<span className="text-[#a3e635]"> Hub</span>
          </span>
        </div>

        {/* Core Text 1 */}
        <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
          Created for NUML Software Engineering, Computer Science, Information Technology & Artificial Intelligence Students.
        </p>

        {/* Creator Section */}
        <div className="pt-4 border-t border-[#2d3322] w-full max-w-md text-center">
          <p className="text-[#a3e635] text-base sm:text-lg font-extrabold tracking-tight">
            <span className="text-stone-300 text-sm font-normal block sm:inline sm:mr-1">Created by</span> Raja Muhammad Hassan
          </p>
        </div>

      </div>
    </footer>
  );
};
