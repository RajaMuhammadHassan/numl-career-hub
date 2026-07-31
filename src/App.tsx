import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompaniesList } from './components/CompaniesList';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { AddCompanyModal } from './components/AddCompanyModal';
import { FeedbackSection } from './components/FeedbackSection';
import { FeedbackModal } from './components/FeedbackModal';
import { Company, CityOption, ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [allCompanies, setAllCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  useEffect(() => {
    async function loadCompanies() {
      setLoading(true);
      try {
        const res = await fetch('/companies.json');
        if (res.ok) {
          const data = await res.json();
          setAllCompanies(data);
        }
      } catch (err) {
        console.error('Error loading companies:', err);
      } finally {
        setLoading(false);
      }
    }
    loadCompanies();
  }, []);

  // Compute filtered companies client-side
  const filteredCompanies = useMemo(() => {
    return allCompanies.filter((company) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        company.name.toLowerCase().includes(query) ||
        company.city.toLowerCase().includes(query);

      const matchesCity =
        selectedCity === 'All' ||
        company.city.toLowerCase() === selectedCity.toLowerCase();

      return matchesSearch && matchesCity;
    });
  }, [allCompanies, searchQuery, selectedCity]);

  // Compute city stats dynamically from allCompanies
  const cities: CityOption[] = useMemo(() => {
    const counts: Record<string, number> = {};
    allCompanies.forEach((c) => {
      const city = c.city || 'Islamabad';
      counts[city] = (counts[city] || 0) + 1;
    });

    const standardCities = ['Islamabad'];
    return standardCities.map((cityName) => ({
      name: cityName,
      count: counts[cityName] || 0,
    }));
  }, [allCompanies]);

  const handleSearchSubmit = () => {
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
    setAllCompanies((prev) => [newCompany, ...prev]);
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
        onOpenFeedbackModal={() => setIsFeedbackModalOpen(true)}
        totalCompaniesCount={filteredCompanies.length}
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
              totalCompanies={filteredCompanies.length}
            />

            <div id="companies-section">
              <CompaniesList
                companies={filteredCompanies}
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
              companies={filteredCompanies}
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

        {/* Community Feedback & Report Issue Section */}
        <FeedbackSection onOpenFeedbackModal={() => setIsFeedbackModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Add / Suggest Software House Modal */}
      <AddCompanyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onCompanyAdded={handleCompanyAdded}
      />

      {/* Embedded Google Form Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
      />
    </div>
  );
}
