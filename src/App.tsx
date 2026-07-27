import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompaniesList } from './components/CompaniesList';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { AddCompanyModal } from './components/AddCompanyModal';
import { Company, CityOption, ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [companies, setCompanies] = useState<Company[]>([]);
  const [cities, setCities] = useState<CityOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Fetch companies dynamically from API endpoint
  const fetchCompanies = useCallback(async (query: string, city: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (query) params.append('search', query);
      if (city && city !== 'All') params.append('city', city);

      const res = await fetch(`/api/companies?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setCompanies(data);
      }
    } catch (err) {
      console.error('Error fetching companies:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch cities list with counts
  const fetchCities = useCallback(async () => {
    try {
      const res = await fetch('/api/cities');
      if (res.ok) {
        const data = await res.json();
        setCities(data);
      }
    } catch (err) {
      console.error('Error fetching cities:', err);
    }
  }, []);

  useEffect(() => {
    fetchCompanies(searchQuery, selectedCity);
  }, [searchQuery, selectedCity, fetchCompanies]);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const handleSearchSubmit = () => {
    // If on home tab, scrolling down or showing companies is natural
    if (activeTab === 'home') {
      const listElement = document.getElementById('companies-section');
      if (listElement) {
        listElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCity('All');
  };

  const handleCompanyAdded = (newCompany: Company) => {
    setCompanies((prev) => [newCompany, ...prev]);
    fetchCities();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0e0a] text-stone-100 selection:bg-[#a3e635]/30 selection:text-[#a3e635]">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        totalCompaniesCount={companies.length}
      />

      {/* Main Content Area based on Tab */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              cities={cities}
              onSearchSubmit={handleSearchSubmit}
              totalCompanies={companies.length}
            />

            <div id="companies-section">
              <CompaniesList
                companies={companies}
                loading={loading}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onResetFilters={handleResetFilters}
              />
            </div>
          </>
        )}

        {activeTab === 'companies' && (
          <div className="pt-6">
            <CompaniesList
              companies={companies}
              loading={loading}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onResetFilters={handleResetFilters}
            />
          </div>
        )}

        {activeTab === 'about' && <About />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Add / Suggest Software House Modal */}
      <AddCompanyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onCompanyAdded={handleCompanyAdded}
      />
    </div>
  );
}
