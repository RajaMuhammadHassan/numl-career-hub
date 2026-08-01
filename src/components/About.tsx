import React from 'react';
import { Compass, GraduationCap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="bg-white py-14 sm:py-20 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-extrabold text-[#0056D2] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Platform Overview</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mb-4">
            About <span className="text-[#0056D2]">NUML Career Hub</span>
          </h1>
          <div className="w-16 h-1 bg-[#0056D2] mx-auto rounded-full" />
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[18px] p-6 sm:p-10 mb-10 border border-slate-200/90 shadow-xl shadow-blue-950/5">
          
          {/* Core Description */}
          <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-slate-900 border-l-4 border-[#0056D2] pl-4 py-1.5 bg-blue-50/50 rounded-r-xl">
              NUML Career Hub is built specifically for NUML (National University of Modern Languages) students to help them discover software houses across Islamabad.
            </p>
            
            <p className="text-slate-600">
              Instead of searching different company websites manually, NUML students can easily access official LinkedIn pages and Career portals of software houses in Islamabad from one clean, centralized directory.
            </p>
          </div>

          {/* Key Student Disciplines */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <h3 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#0056D2]" />
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
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0056D2] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">{field}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-10 pt-8 border-t border-slate-200 grid sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0056D2] font-extrabold text-sm flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                Direct LinkedIn Links
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Follow software companies on LinkedIn with one click to keep track of their news, culture, and job announcements.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0056D2] font-extrabold text-sm flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-base mb-1">
                Direct Career Pages
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Skip Google searching and jump straight into official careers portals to apply for internships, junior, and entry-level positions.
              </p>
            </div>
          </div>

        </div>

        {/* Creator Attribution Section */}
        <div className="p-6 rounded-[18px] bg-white border border-slate-200/90 text-center shadow-md">
          <p className="text-[#0056D2] text-lg sm:text-xl font-extrabold tracking-tight">
            <span className="text-slate-600 text-base font-medium block sm:inline sm:mr-1.5">Created by</span> Raja Muhammad Hassan
          </p>
        </div>

      </div>
    </section>
  );
};
