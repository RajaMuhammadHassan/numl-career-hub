import React from 'react';
import { CompanyCard } from './CompanyCard';
import { Company } from '../types';
import { FilterX, RefreshCw } from 'lucide-react';

interface CompaniesListProps {
  companies: Company[];
  loading: boolean;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onResetFilters: () => void;
}

export const CompaniesList: React.FC<CompaniesListProps> = ({
  companies,
  loading,
  searchQuery,
  onResetFilters,
}) => {
  return (
    <section 
      className="relative w-full py-20 border-b border-blue-200 min-h-[600px] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #D4E4FF 0%, #C2DCFF 40%, #E0EDFF 100%)'
      }}
    >
      
      {/* Vibrant Background Glowing Blobs */}
      <div 
        className="absolute top-10 left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(0, 86, 212, 0.25) 0%, rgba(0, 86, 212, 0) 70%)',
          filter: 'blur(70px)'
        }}
      />
      <div 
        className="absolute bottom-10 right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.25) 0%, rgba(37, 99, 235, 0) 70%)',
          filter: 'blur(70px)'
        }}
      />
      <div 
        className="absolute top-[40%] left-[35%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0056D2 1.5px, transparent 1.5px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Main Content Container with Full Width Spacing */}
      <div className="relative w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header bar with count and status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-5 border-b border-blue-300/60">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 flex items-center gap-3">
              <span>Software Houses</span>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-[#0056D2] text-white shadow-sm">
                {companies.length} {companies.length === 1 ? 'house' : 'houses'}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1">
              {searchQuery ? `Matching search: "${searchQuery}"` : 'Showing all verified software houses in Islamabad'}
            </p>
          </div>

          {searchQuery && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-[#0056D2] border border-slate-300 hover:border-[#0056D2] transition-all shadow-xs cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#0056D2]" />
              <span>Reset Search</span>
            </button>
          )}
        </div>

        {/* Loading Skeleton state */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white/90 backdrop-blur-md rounded-[18px] p-5 border border-blue-100 animate-pulse h-52 flex flex-col justify-between shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="w-28 h-16 rounded-xl bg-slate-200" />
                  <div className="w-16 h-5 rounded-full bg-slate-200" />
                </div>
                <div className="w-3/4 h-5 rounded bg-slate-200 my-3" />
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <div className="h-8 rounded-xl bg-slate-200" />
                  <div className="h-8 rounded-xl bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && companies.length === 0 && (
          <div className="text-center py-16 px-4 bg-white/95 backdrop-blur-md rounded-[20px] border border-blue-200 shadow-lg max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0056D2] mx-auto mb-4">
              <FilterX className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              No Software Houses Found
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              We couldn't find any software house matching your search criteria.
            </p>
            <button
              onClick={onResetFilters}
              className="px-5 py-2.5 rounded-full bg-[#0056D2] hover:bg-[#1E88E5] text-white font-bold text-xs transition-all shadow-md cursor-pointer"
            >
              Clear Search & Show All
            </button>
          </div>
        )}

        {/* Company Cards Grid */}
        {!loading && companies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};