import React from 'react';
import { Flag, MessageSquarePlus } from 'lucide-react';

interface FeedbackSectionProps {
  onOpenFeedbackModal: () => void;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ onOpenFeedbackModal }) => {
  return (
    <section id="feedback-section" className="bg-[#EDF4FF] py-16 border-b border-blue-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-md border border-blue-200/90 rounded-[18px] p-8 sm:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden text-center">
          {/* Background Subtle Gradient Accent */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#0056D2]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#1E88E5]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10 space-y-5">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-[#0056D2] text-xs font-extrabold uppercase tracking-wider">
              <Flag className="w-3.5 h-3.5" />
              <span>Community Feedback</span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Report an Issue or Suggest a Company
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Found a broken link? Want to suggest a new software house? Notice incorrect information? Help us improve NUML Career Hub by sending your feedback.
            </p>

            {/* Centered Blue Button */}
            <div className="pt-3 flex justify-center">
              <button
                onClick={onOpenFeedbackModal}
                className="px-8 py-3.5 rounded-xl bg-[#0056D2] hover:bg-[#1E88E5] text-white font-extrabold text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2.5 shadow-lg shadow-[#0056D2]/25 cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4 stroke-[2.5]" />
                <span>📝 Report Issue / Suggest Company</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
