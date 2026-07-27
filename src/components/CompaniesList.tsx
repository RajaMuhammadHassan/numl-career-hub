import React from 'react';
import { CompanyCard } from './CompanyCard';
import { Company } from '../types';
import { Building2, FilterX, Search, RefreshCw } from 'lucide-react';

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
  selectedCity,
  searchQuery,
  onResetFilters,
}) => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header bar with count and status */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#2d3322]">
        <div>
          <h2 className="font-heading font-bold text-2xl text-white flex items-center gap-2">
            <span>Software Houses</span>
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#1c2014] text-[#a3e635] border border-[#3a422b]">
              {companies.length} {companies.length === 1 ? 'house' : 'houses'}
            </span>
          </h2>
          <p className="text-xs text-stone-400 mt-1">
            {searchQuery ? `Matching search: "${searchQuery}"` : 'Showing all registered software houses in Islamabad'}
          </p>
        </div>

        {searchQuery && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-[#1c2014] hover:bg-[#252b1b] text-stone-300 hover:text-white border border-[#3a422b] transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#a3e635]" />
            <span>Reset Search</span>
          </button>
        )}
      </div>

      {/* Loading Skeleton state */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-[#1a1d14] rounded-2xl p-5 border border-[#2d3322] animate-pulse h-48 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-[#252b1b]" />
                <div className="w-20 h-5 rounded-md bg-[#252b1b]" />
              </div>
              <div className="w-3/4 h-5 rounded bg-[#252b1b] my-3" />
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#2d3322]">
                <div className="h-8 rounded-lg bg-[#252b1b]" />
                <div className="h-8 rounded-lg bg-[#252b1b]" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && companies.length === 0 && (
        <div className="text-center py-16 px-4 bg-[#15170f] rounded-2xl border border-[#2d3322] max-w-md mx-auto">
          <div className="w-12 h-12 rounded-xl bg-[#1c2014] border border-[#3a422b] flex items-center justify-center text-[#a3e635] mx-auto mb-4">
            <FilterX className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg text-white mb-2">
            No Software Houses Found
          </h3>
          <p className="text-xs text-stone-400 mb-6">
            We couldn't find any software house matching your city or search criteria.
          </p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-full bg-[#a3e635] hover:bg-[#b5f547] text-[#0d0e0a] font-bold text-xs transition-all shadow-lg shadow-[#a3e635]/20"
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

    </section>
  );
};
