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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-[#15170f] border border-[#2d3322] rounded-3xl w-full max-w-3xl h-[88vh] max-h-[780px] flex flex-col relative shadow-2xl overflow-hidden transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 py-4 bg-[#1c2014] border-b border-[#2d3322] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#252b1b] border border-[#3a422b] flex items-center justify-center text-[#a3e635]">
              <MessageSquarePlus className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-base sm:text-lg text-white leading-snug">
                Report Issue / Suggest Company
              </h3>
              <p className="text-[11px] text-stone-400">
                NUML Career Hub Feedback Form
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#15170f] text-stone-400 hover:text-white hover:bg-[#252b1b] border border-[#3a422b] transition-all cursor-pointer"
            aria-label="Close feedback modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container (Iframe) */}
        <div className="relative flex-grow w-full bg-[#15170f] overflow-hidden">
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#15170f] z-10">
              <Loader2 className="w-8 h-8 text-[#a3e635] animate-spin" />
              <p className="text-xs text-stone-400 font-medium">Loading form...</p>
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
