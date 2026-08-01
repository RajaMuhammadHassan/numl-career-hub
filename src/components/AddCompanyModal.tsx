import React, { useState } from 'react';
import { X, Building2, Linkedin, ExternalLink, PlusCircle, CheckCircle } from 'lucide-react';
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

    const newCompany: Company = {
      id: Date.now().toString(),
      name: name.trim(),
      city,
      linkedin_url: linkedinUrl.trim(),
      career_url: careerUrl.trim(),
      logo: logoUrl.trim() || 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&auto=format&fit=crop&q=80',
    };

    onCompanyAdded(newCompany);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      setName('');
      setLinkedinUrl('');
      setCareerUrl('');
      setLogoUrl('');
      onClose();
      setSubmitting(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0056D2]">
            <Building2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xl text-slate-900">
              Add a Software House
            </h3>
            <p className="text-xs text-slate-500">
              Contribute to the NUML Career Hub directory
            </p>
          </div>
        </div>

        {successMessage ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle className="w-12 h-12 text-[#0056D2] mx-auto animate-bounce" />
            <h4 className="font-heading font-bold text-lg text-slate-900">
              Company Added Successfully!
            </h4>
            <p className="text-xs text-slate-500">
              {name} has been added to the database.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Systems Limited, Devsinc, 10Pearls..."
                className="w-full bg-slate-50 text-xs text-slate-900 placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0056D2] focus:bg-white"
              />
            </div>

            {/* City Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                City *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-50 text-xs text-slate-900 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0056D2] focus:bg-white"
              >
                {CITIES.map((c) => (
                  <option key={c} value={c} className="bg-white text-slate-900">
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Official LinkedIn URL *
              </label>
              <div className="relative">
                <Linkedin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="url"
                  required
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/company/company-name"
                  className="w-full bg-slate-50 text-xs text-slate-900 placeholder-slate-400 pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0056D2] focus:bg-white"
                />
              </div>
            </div>

            {/* Career Page URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Official Career Page URL *
              </label>
              <div className="relative">
                <ExternalLink className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="url"
                  required
                  value={careerUrl}
                  onChange={(e) => setCareerUrl(e.target.value)}
                  placeholder="https://company.com/careers"
                  className="w-full bg-slate-50 text-xs text-slate-900 placeholder-slate-400 pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0056D2] focus:bg-white"
                />
              </div>
            </div>

            {/* Logo URL (Optional) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Company Logo Image URL (Optional)
              </label>
              <input
                type="url"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                placeholder="https://example.com/logo.png"
                className="w-full bg-slate-50 text-xs text-slate-900 placeholder-slate-400 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0056D2] focus:bg-white"
              />
            </div>

            {/* Form Action Buttons */}
            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#0056D2] hover:bg-[#1E88E5] transition-all flex items-center gap-2 shadow-md shadow-[#0056D2]/20"
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
