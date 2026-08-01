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
    <section className="bg-[#F4F8FF] py-14 border-b border-blue-100/60 min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header bar with count and status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-200/60">
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 flex items-center gap-2.5">
              <span>Software Houses</span>
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-[#0056D2] border border-blue-200">
                {companies.length} {companies.length === 1 ? 'house' : 'houses'}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {searchQuery ? `Matching search: "${searchQuery}"` : 'Showing all verified software houses in Islamabad'}
            </p>
          </div>

          {searchQuery && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-[#0056D2] border border-slate-200 hover:border-[#0056D2] transition-all shadow-xs cursor-pointer"
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
              <div key={i} className="bg-white rounded-[18px] p-5 border border-slate-200 animate-pulse h-48 flex flex-col justify-between shadow-xs">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-slate-100" />
                  <div className="w-20 h-5 rounded-md bg-slate-100" />
                </div>
                <div className="w-3/4 h-5 rounded bg-slate-100 my-3" />
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <div className="h-8 rounded-lg bg-slate-100" />
                  <div className="h-8 rounded-lg bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && companies.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-[18px] border border-slate-200/90 shadow-md max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0056D2] mx-auto mb-4">
              <FilterX className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
              No Software Houses Found
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn't find any software house matching your search criteria.
            </p>
            <button
              onClick={onResetFilters}
              className="px-5 py-2.5 rounded-full bg-[#0056D2] hover:bg-[#1E88E5] text-white font-bold text-xs transition-all shadow-md shadow-[#0056D2]/20 cursor-pointer"
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
