import React, { useState } from 'react';
import { X, Building2, MapPin, Linkedin, ExternalLink, PlusCircle, CheckCircle } from 'lucide-react';
import { Company } from '../types';

interface AddCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompanyAdded: (company: Company) => void;
}

const CITIES = [
  "Islamabad"
];

export const AddCompanyModal: React.FC<AddCompanyModalProps> = ({
  isOpen,
  onClose,
  onCompanyAdded,
}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('Islamabad');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [careerUrl, setCareerUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !linkedinUrl.trim() || !careerUrl.trim()) {
      setErrorMessage('Please fill in all required fields (Name, LinkedIn URL, Career URL)');
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          city,
          linkedin_url: linkedinUrl.trim(),
          career_url: careerUrl.trim(),
          logo: logoUrl.trim() || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add company to database');
      }

      const data = await response.json();
      if (data.company) {
        onCompanyAdded(data.company);
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
          setName('');
          setLinkedinUrl('');
          setCareerUrl('');
          setLogoUrl('');
          onClose();
        }, 1500);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#15170f] border border-[#2d3322] rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#1c2014] text-stone-400 hover:text-white border border-[#3a422b] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#1c2014] border border-[#3a422b] flex items-center justify-center text-[#a3e635]">
            <Building2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-white">
              Add a Software House
            </h3>
            <p className="text-xs text-stone-400">
              Contribute to the Pakistan Software House directory
            </p>
          </div>
        </div>

        {successMessage ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-[#a3e635] mx-auto animate-bounce" />
            <h4 className="font-heading font-bold text-lg text-white">
              Company Added Successfully!
            </h4>
            <p className="text-xs text-stone-400">
              {name} has been added to the database.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/50 text-red-300 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Systems Limited, Devsinc, 10Pearls..."
                className="w-full bg-[#1c2014] text-xs text-white placeholder-stone-500 px-3.5 py-2.5 rounded-xl border border-[#3a422b] focus:outline-none focus:border-[#a3e635]"
              />
            </div>

            {/* City Selection */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                City *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-[#1c2014] text-xs text-white px-3.5 py-2.5 rounded-xl border border-[#3a422b] focus:outline-none focus:border-[#a3e635]"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c} className="bg-[#15170f] text-white">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                Official LinkedIn URL *
              </label>
              <div className="relative">
                <Linkedin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                <input
                  type="url"
                  required
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/company/company-name"
                  className="w-full bg-[#1c2014] text-xs text-white placeholder-stone-500 pl-9 pr-3.5 py-2.5 rounded-xl border border-[#3a422b] focus:outline-none focus:border-[#a3e635]"
                />
              </div>
            </div>

            {/* Career Page URL */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                Official Career Page URL *
              </label>
              <div className="relative">
                <ExternalLink className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                <input
                  type="url"
                  required
                  value={careerUrl}
                  onChange={(e) => setCareerUrl(e.target.value)}
                  placeholder="https://company.com/careers"
                  className="w-full bg-[#1c2014] text-xs text-white placeholder-stone-500 pl-9 pr-3.5 py-2.5 rounded-xl border border-[#3a422b] focus:outline-none focus:border-[#a3e635]"
                />
              </div>
            </div>

            {/* Logo URL (Optional) */}
            <div>
              <label className="block text-xs font-bold text-stone-300 uppercase tracking-wider mb-1.5">
                Company Logo Image URL (Optional)
              </label>
              <input
                type="url"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                placeholder="https://example.com/logo.png"
                className="w-full bg-[#1c2014] text-xs text-white placeholder-stone-500 px-3.5 py-2.5 rounded-xl border border-[#3a422b] focus:outline-none focus:border-[#a3e635]"
              />
            </div>

            {/* Form Action Buttons */}
            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-bold text-stone-300 hover:text-white bg-[#1c2014] border border-[#3a422b]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 rounded-full text-xs font-bold text-[#0d0e0a] bg-[#a3e635] hover:bg-[#b5f547] transition-all flex items-center gap-2 shadow-md shadow-[#a3e635]/20"
              >
                {submitting ? (
                  <span>Saving...</span>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4" />
                    <span>Save Company</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
