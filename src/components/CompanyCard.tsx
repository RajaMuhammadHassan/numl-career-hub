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
    <div className="bg-white p-5 rounded-[18px] border border-slate-200/90 shadow-md shadow-blue-950/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-[#0056D2]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group relative overflow-hidden">
      {/* Subtle top border accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0056D2] via-[#1E88E5] to-[#64B5F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-[18px]" />

      <div>
        {/* Top Header: Logo & City Badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-200 p-1.5 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-[#0056D2] transition-colors shadow-2xs">
            {!imageError && company.logo ? (
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain rounded-lg"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full rounded-lg bg-blue-50 flex items-center justify-center text-[#0056D2] font-heading font-extrabold text-xs">
                {getInitials(company.name)}
              </div>
            )}
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50/90 text-[#0056D2] border border-blue-100/80 text-[10px] font-extrabold uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-[#0056D2] shrink-0" />
            <span>{company.city}</span>
          </div>
        </div>

        {/* Company Name */}
        <h3 className="font-heading font-bold text-lg text-slate-900 mb-6 line-clamp-1 group-hover:text-[#0056D2] transition-colors">
          {company.name}
        </h3>
      </div>

      {/* Action Buttons: LinkedIn & Careers */}
      <div className="grid grid-cols-2 gap-2.5 pt-3.5 border-t border-slate-100 mt-auto">
        <a
          href={company.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-blue-50/70 hover:bg-[#0056D2] text-[#0056D2] hover:text-white border border-blue-200/80 hover:border-[#0056D2] rounded-xl text-xs font-bold transition-all shadow-2xs"
          title={`Visit ${company.name} LinkedIn`}
        >
          <Linkedin className="w-3.5 h-3.5 shrink-0" />
          <span>LinkedIn</span>
        </a>

        <a
          href={company.career_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-[#0056D2] hover:bg-[#1E88E5] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#0056D2]/20 hover:shadow-lg hover:shadow-[#0056D2]/30"
          title={`Visit ${company.name} Careers`}
        >
          <span>Careers</span>
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </div>
  );
};
