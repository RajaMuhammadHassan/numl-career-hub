import React, { useState } from 'react';
import { Search, Menu, X, MessageSquarePlus } from 'lucide-react';
import { ActiveTab } from '../types';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenAddModal: () => void;
  onOpenFeedbackModal: () => void;
  totalCompaniesCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  onOpenFeedbackModal,
  totalCompaniesCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (activeTab !== 'companies' && activeTab !== 'home') {
      setActiveTab('companies');
    }
  };

  const handleReportIssueClick = () => {
    setMobileMenuOpen(false);
    onOpenFeedbackModal();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Logo & Title */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <img
            src="/images/numl-logo.png"
            alt="NUML University Logo"
            className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full object-contain shrink-0 group-hover:scale-105 transition-transform duration-200"
          />
          <div>
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-[#0056D2] transition-colors block leading-tight">
              NUML Career<span className="text-[#0056D2]"> Hub</span>
            </span>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
              Islamabad Software Houses
            </p>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'home'
                ? 'bg-[#0056D2] text-white shadow-md shadow-[#0056D2]/25'
                : 'text-slate-600 hover:text-[#0056D2] hover:bg-white/80'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('companies')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'companies'
                ? 'bg-[#0056D2] text-white shadow-md shadow-[#0056D2]/25'
                : 'text-slate-600 hover:text-[#0056D2] hover:bg-white/80'
            }`}
          >
            <span>Companies</span>
            {totalCompaniesCount > 0 && (
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                activeTab === 'companies' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-blue-100 text-[#0056D2]'
              }`}>
                {totalCompaniesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'about'
                ? 'bg-[#0056D2] text-white shadow-md shadow-[#0056D2]/25'
                : 'text-slate-600 hover:text-[#0056D2] hover:bg-white/80'
            }`}
          >
            About
          </button>
        </nav>

        {/* Right Search Box & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative w-56">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search software houses..."
              className="w-full bg-slate-100 text-xs text-slate-800 placeholder-slate-400 pl-9 pr-3 py-1.5 rounded-full border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0056D2] focus:ring-1 focus:ring-[#0056D2] transition-all"
            />
          </div>

          <button
            onClick={handleReportIssueClick}
            className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-blue-50/80 hover:bg-[#0056D2] text-[#0056D2] hover:text-white border border-blue-200/80 hover:border-[#0056D2] transition-all cursor-pointer shadow-2xs"
            title="Report Issue or Suggest a Company"
          >
            <MessageSquarePlus className="w-3.5 h-3.5" />
            <span>Report Issue</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search companies by name..."
              className="w-full bg-slate-100 text-xs text-slate-800 placeholder-slate-400 pl-9 pr-3 py-2 rounded-full border border-slate-200 focus:bg-white focus:outline-none focus:border-[#0056D2]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs ${
                activeTab === 'home'
                  ? 'bg-[#0056D2] text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Home
            </button>
            
            <button
              onClick={() => handleNavClick('companies')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${
                activeTab === 'companies'
                  ? 'bg-[#0056D2] text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>Companies</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                activeTab === 'companies' ? 'bg-white/20 text-white' : 'bg-blue-100 text-[#0056D2]'
              }`}>
                {totalCompaniesCount}
              </span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs ${
                activeTab === 'about'
                  ? 'bg-[#0056D2] text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              About
            </button>

            <button
              onClick={handleReportIssueClick}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs text-[#0056D2] bg-blue-50/80 hover:bg-[#0056D2] hover:text-white flex items-center gap-2 border border-blue-200/80 mt-1 cursor-pointer transition-all"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Report Issue / Feedback</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
