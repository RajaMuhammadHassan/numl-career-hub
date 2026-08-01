import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1F5C] text-slate-200 py-12 border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center gap-2.5">
          <img
            src="/images/numl-logo.svg"
            alt="NUML University Logo"
            className="w-12 h-12 rounded-full object-contain"
          />
          <span className="font-heading font-extrabold text-xl text-white">
            NUML Career<span className="text-[#64B5F6]"> Hub</span>
          </span>
        </div>

        {/* Core Text */}
        <p className="text-xs sm:text-sm text-blue-100/80 max-w-2xl leading-relaxed">
          Created for NUML Software Engineering, Computer Science, Information Technology & Artificial Intelligence Students.
        </p>

        {/* Creator Section */}
        <div className="pt-4 border-t border-blue-900/60 w-full max-w-md text-center">
          <p className="text-[#64B5F6] text-base sm:text-lg font-extrabold tracking-tight">
            <span className="text-blue-200/80 text-sm font-normal block sm:inline sm:mr-1">Created by</span> Raja Muhammad Hassan
          </p>
        </div>

      </div>
    </footer>
  );
};
