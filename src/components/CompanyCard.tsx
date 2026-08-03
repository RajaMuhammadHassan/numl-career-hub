import React, { useState } from 'react';
import { Linkedin, ExternalLink, MapPin } from 'lucide-react';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-[#0A1224]/90 backdrop-blur-xl p-5 rounded-[20px] border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-cyan-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
      
      {/* Neon Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[20px]" />

      <div>
        {/* Top Header: Logo & City Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          
          {/* Logo Container */}
          <div className="w-28 h-16 bg-slate-900/90 rounded-xl border border-cyan-500/30 p-1 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-cyan-400 transition-colors shadow-inner">
            {!imageError && company.logo ? (
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain p-0.5"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full rounded-lg bg-cyan-950/50 flex items-center justify-center text-cyan-400 font-heading font-extrabold text-base">
                {getInitials(company.name)}
              </div>
            )}
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-[10px] font-extrabold uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
            <span>{company.city}</span>
          </div>
        </div>

        {/* Company Name */}
        <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-2 line-clamp-1 group-hover:text-cyan-400 transition-colors">
          {company.name}
        </h3>

        {/* Company 1-Line Description */}
        <p className="text-xs text-slate-300 mb-6 line-clamp-2 leading-relaxed font-normal">
          {company.description}
        </p>
      </div>

      {/* Action Buttons: LinkedIn & Careers */}
      <div className="grid grid-cols-2 gap-2.5 pt-3.5 border-t border-cyan-500/15 mt-auto">
        <a
          href={company.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-slate-900/80 hover:bg-cyan-950 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 rounded-xl text-xs font-bold transition-all shadow-xs"
          title={`Visit ${company.name} LinkedIn`}
        >
          <Linkedin className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
          <span>LinkedIn</span>
        </a>

        <a
          href={company.career_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          title={`Visit ${company.name} Careers`}
        >
          <span>Careers</span>
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </div>
  );
};