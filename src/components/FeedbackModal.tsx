import React, { useEffect, useState } from 'react';
import { X, MessageSquarePlus, Loader2 } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfYcebiqfSGjnvXVp2Cg4C_e5X4dW-dmEsamaES1RhpWJDT5Q/viewform?embedded=true';

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [iframeLoading, setIframeLoading] = useState(true);

  // Prevent background scrolling & listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/70 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white border border-slate-200 rounded-3xl w-full max-w-3xl h-[88vh] max-h-[780px] flex flex-col relative shadow-2xl overflow-hidden transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0056D2] flex items-center justify-center text-white">
              <MessageSquarePlus className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white leading-snug">
                Report Issue / Suggest Company
              </h3>
              <p className="text-[11px] text-slate-300">
                NUML Career Hub Feedback Form
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-all cursor-pointer"
            aria-label="Close feedback modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container (Iframe) */}
        <div className="relative flex-grow w-full bg-slate-50 overflow-hidden">
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-50 z-10">
              <Loader2 className="w-8 h-8 text-[#0056D2] animate-spin" />
              <p className="text-xs text-slate-500 font-medium">Loading form...</p>
            </div>
          )}

          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="Report Issue or Suggest a Company Google Form"
            className="w-full h-full border-0"
            onLoad={() => setIframeLoading(false)}
            loading="lazy"
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </div>
  );
};
