import React from 'react';
import { Flag, MessageSquarePlus } from 'lucide-react';

interface FeedbackSectionProps {
  onOpenFeedbackModal: () => void;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ onOpenFeedbackModal }) => {
  return (
    <section id="feedback-section" className="max-w-4xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#15170f] border border-[#2d3322] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center">
        {/* Background Subtle Gradient Accent */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#a3e635]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#a3e635]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl mx-auto relative z-10 space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c2014] border border-[#3a422b] text-[#a3e635] text-xs font-bold uppercase tracking-wider">
            <Flag className="w-3.5 h-3.5" />
            <span>Community Feedback</span>
          </div>

          {/* Title */}
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Report an Issue or Suggest a Company
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl mx-auto">
            Found a broken link? Want to suggest a new software house? Notice incorrect information? Help us improve NUML Career Hub by sending your feedback.
          </p>

          {/* Centered Green Button */}
          <div className="pt-3 flex justify-center">
            <button
              onClick={onOpenFeedbackModal}
              className="px-8 py-3.5 rounded-xl bg-[#a3e635] text-[#0d0e0a] font-extrabold text-xs sm:text-sm hover:bg-[#b5f547] hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#a3e635]/20 cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4 stroke-[2.5]" />
              <span>Report Issue / Suggest Company</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

