import React, { useState } from 'react';
import { Building2, Search, Menu, X, MessageSquarePlus } from 'lucide-react';
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
  onOpenAddModal,
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
    <header className="sticky top-0 z-40 bg-[#15170f]/90 backdrop-blur-md border-b border-[#2d3322]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <img
            src="/images/numl-logo.png"
            alt="NUML University Logo"
            className="w-10 h-10 sm:w-[42px] sm:h-[42px] object-contain shrink-0 group-hover:scale-105 transition-transform duration-200"
          />
          <div>
            <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#a3e635] transition-colors block leading-tight">
              NUML Career<span className="text-[#a3e635]"> Hub</span>
            </span>
            <p className="text-[11px] sm:text-xs text-stone-400 font-medium">
              Islamabad Software Houses
            </p>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1c2014] px-3 py-1.5 rounded-full border border-[#3a422b]">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'home'
                ? 'bg-[#a3e635] text-[#0d0e0a] shadow-md shadow-[#a3e635]/25'
                : 'text-stone-400 hover:text-white hover:bg-[#252b1b]'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('companies')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
              activeTab === 'companies'
                ? 'bg-[#a3e635] text-[#0d0e0a] shadow-md shadow-[#a3e635]/25'
                : 'text-stone-400 hover:text-white hover:bg-[#252b1b]'
            }`}
          >
            <span>Companies</span>
            {totalCompaniesCount > 0 && (
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                activeTab === 'companies' 
                  ? 'bg-[#0d0e0a]/30 text-[#0d0e0a]' 
                  : 'bg-[#2d3322] text-[#a3e635]'
              }`}>
                {totalCompaniesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeTab === 'about'
                ? 'bg-[#a3e635] text-[#0d0e0a] shadow-md shadow-[#a3e635]/25'
                : 'text-stone-400 hover:text-white hover:bg-[#252b1b]'
            }`}
          >
            About
          </button>
        </nav>

        {/* Right Search Box & Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative w-56">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search software houses..."
              className="w-full bg-[#1c2014] text-xs text-stone-200 placeholder-stone-500 pl-9 pr-3 py-1.5 rounded-full border border-[#3a422b] focus:outline-none focus:border-[#a3e635] focus:ring-1 focus:ring-[#a3e635] transition-all"
            />
          </div>

          <button
            onClick={handleReportIssueClick}
            className="flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#1c2014] hover:bg-[#252b1b] text-stone-300 hover:text-[#a3e635] border border-[#3a422b] transition-all hover:border-[#a3e635] cursor-pointer"
            title="Report Issue or Suggest a Company"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-[#a3e635]" />
            <span>Report Issue</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#1c2014] text-stone-300 hover:text-white border border-[#3a422b]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#2d3322] bg-[#15170f] px-4 pt-3 pb-5 space-y-3">
          <div className="relative mb-3">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search companies by name..."
              className="w-full bg-[#1c2014] text-xs text-stone-200 placeholder-stone-500 pl-9 pr-3 py-2 rounded-full border border-[#3a422b] focus:outline-none focus:border-[#a3e635]"
            />
          </div>

          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs ${
                activeTab === 'home'
                  ? 'bg-[#a3e635] text-[#0d0e0a]'
                  : 'text-stone-300 hover:bg-[#1c2014]'
              }`}
            >
              Home
            </button>
            
            <button
              onClick={() => handleNavClick('companies')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs flex items-center justify-between ${
                activeTab === 'companies'
                  ? 'bg-[#a3e635] text-[#0d0e0a]'
                  : 'text-stone-300 hover:bg-[#1c2014]'
              }`}
            >
              <span>Companies</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/20">
                {totalCompaniesCount}
              </span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs ${
                activeTab === 'about'
                  ? 'bg-[#a3e635] text-[#0d0e0a]'
                  : 'text-stone-300 hover:bg-[#1c2014]'
              }`}
            >
              About
            </button>

            <button
              onClick={handleReportIssueClick}
              className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs text-[#a3e635] hover:bg-[#1c2014] flex items-center gap-2 border border-[#3a422b]/50 mt-1 cursor-pointer"
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
