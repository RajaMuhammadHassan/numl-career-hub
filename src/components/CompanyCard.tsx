import React, { useState } from 'react';
import { Linkedin, ExternalLink, MapPin, Building2 } from 'lucide-react';
import { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const [imageError, setImageError] = useState(false);

  // Generate fallback avatar background color based on company name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-[#1a1d14] p-5 rounded-2xl border border-[#2d3322] shadow-xl flex flex-col justify-between h-full group hover:border-[#a3e635] transition-all duration-200">
      <div>
        {/* Top Header: Logo & City */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 bg-[#1c2014] rounded-xl border border-[#3a422b] p-1.5 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-[#a3e635] transition-colors">
            {!imageError && company.logo ? (
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain rounded-lg"
                onError={() => setImageError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full rounded-lg bg-[#252b1b] flex items-center justify-center text-[#a3e635] font-heading font-bold text-sm">
                {getInitials(company.name)}
              </div>
            )}
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#2d3322] text-[#a3e635] text-[10px] font-bold uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-[#a3e635] shrink-0" />
            <span>{company.city}</span>
          </div>
        </div>

        {/* Company Name */}
        <h3 className="font-heading font-bold text-lg text-white mb-6 line-clamp-1 group-hover:text-[#a3e635] transition-colors">
          {company.name}
        </h3>
      </div>

      {/* Buttons: LinkedIn & Career Page */}
      <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#2d3322] mt-auto">
        <a
          href={company.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 border border-[#a3e635] text-[#a3e635] rounded-lg text-xs font-bold hover:bg-[#a3e635] hover:text-[#0d0e0a] transition-all"
          title={`Visit ${company.name} LinkedIn`}
        >
          <Linkedin className="w-3.5 h-3.5 shrink-0" />
          <span>LinkedIn</span>
        </a>

        <a
          href={company.career_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-[#a3e635] text-[#0d0e0a] rounded-lg text-xs font-bold hover:bg-[#b5f547] transition-all"
          title={`Visit ${company.name} Careers`}
        >
          <span>Careers</span>
          <ExternalLink className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </div>
  );
};
