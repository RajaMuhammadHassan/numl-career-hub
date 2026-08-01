import React from 'react';
import { Flag, Sparkles, Send, MessageSquarePlus } from 'lucide-react';

interface FeedbackSectionProps {
  onOpenFeedbackModal: () => void;
}

export const FeedbackSection: React.FC<FeedbackSectionProps> = ({ onOpenFeedbackModal }) => {
  return (
    <section id="feedback-section" className="relative bg-[#070D1B] py-16 border-b border-cyan-500/20 overflow-hidden">
      
      {/* Background AI Neon Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Pattern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main AI Glassmorphic Card */}
        <div className="relative overflow-hidden bg-[#0A1224]/90 backdrop-blur-xl border border-cyan-500/30 rounded-[24px] p-8 sm:p-12 text-center text-white shadow-[0_0_40px_rgba(6,182,212,0.15)]">
          
          <div className="max-w-2xl mx-auto relative z-10 space-y-6">
            
            {/* AI Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>COMMUNITY FEEDBACK</span>
            </div>

            {/* AI Gradient Title */}
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Report an Issue or <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">Suggest a Company</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
              Found a broken link? Want to suggest a new software house? Notice incorrect information? Help us keep NUML Career Hub updated for all students.
            </p>

            {/* Centered AI Button */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={onOpenFeedbackModal}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(6,182,212,0.35)] cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4 stroke-[2.5] text-cyan-200" />
                <span>Report Issue / Suggest Company</span>
                <Send className="w-3.5 h-3.5 text-purple-200 ml-1" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};