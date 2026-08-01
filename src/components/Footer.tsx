import React from 'react';
import { Cpu, Globe, ExternalLink, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#050A14] border-t border-cyan-500/20 text-slate-300 overflow-hidden py-12">
      
      {/* Background Subtle AI Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-6 z-10">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative p-1 rounded-full bg-slate-900 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <img
              src="/images/numl-logo.png"
              alt="NUML University Logo"
              className="w-12 h-12 rounded-full object-contain"
            />
          </div>
          <span className="font-heading font-extrabold text-xl text-white tracking-wide">
            NUML Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Hub</span>
          </span>
        </div>

        {/* Core Text */}
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Created for NUML <span className="text-cyan-300 font-semibold">Software Engineering</span>, <span className="text-cyan-300 font-semibold">Computer Science</span>, <span className="text-cyan-300 font-semibold">Information Technology</span> & <span className="text-purple-300 font-semibold">Artificial Intelligence</span> Students.
        </p>

        {/* Creator Section with AI Glow Effect */}
        <div className="pt-6 border-t border-cyan-500/20 w-full max-w-md text-center">
          <p className="text-base sm:text-lg font-extrabold tracking-tight">
            <span className="text-slate-400 text-sm font-normal block sm:inline sm:mr-1.5">Created by</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
              Raja Muhammad Hassan
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
};