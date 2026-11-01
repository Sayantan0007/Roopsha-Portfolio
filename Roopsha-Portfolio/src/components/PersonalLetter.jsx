import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Feather } from 'lucide-react';
import confetti from 'canvas-confetti';
import config from '../data/config';

export default function PersonalLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#E8D6A5', '#F2B8D0', '#FFF5E8', '#BCA5F5'],
        scalar: 0.9,
      });
    } else {
      setIsOpen(false);
    }
  };

  return (
    <section id="letter" className="relative py-24 px-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[#F2B8D0]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#BCA5F5]/30 text-xs text-[#E8D6A5] font-sans mb-4">
          <Mail className="w-3.5 h-3.5 text-[#F2B8D0]" />
          <span>{config.letter.subtitle}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF5E8] tracking-tight mb-4 drop-shadow-md">
          {config.letter.heading}
        </h2>

        <p className="font-sans text-base md:text-lg text-[#FFF5E8]/75 max-w-md mx-auto mb-12 font-light">
          {isOpen ? "A few words penned under midnight stars..." : "A sealed envelope rests here. Tap the wax seal to read it."}
        </p>

        {/* The Realistic Interactive Envelope & Sliding Letter */}
        <div className="relative w-full max-w-xl flex flex-col items-center">
          {/* Closed Envelope Presentation (When not opened) */}
          {!isOpen && (
            <motion.div
              onClick={handleOpenLetter}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-72 sm:w-96 h-48 sm:h-60 rounded-2xl bg-gradient-to-br from-[#1E1738] via-[#2A1E4A] to-[#17132D] border-2 border-[#BCA5F5]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-pointer select-none overflow-hidden flex items-center justify-center group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpenLetter();
              }}
              aria-label="Click to open letter"
            >
              {/* Envelope Flap Lines */}
              <svg className="absolute inset-0 w-full h-full text-[#BCA5F5]/25" viewBox="0 0 380 240" fill="none">
                {/* Top Flap Triangle */}
                <path d="M0 0 L190 130 L380 0" stroke="currentColor" strokeWidth="2" />
                {/* Bottom Seams */}
                <path d="M0 240 L140 110" stroke="currentColor" strokeWidth="1.5" />
                <path d="M380 240 L240 110" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Envelope Recipient Label */}
              <div className="absolute top-10 font-script text-2xl sm:text-3xl text-[#FFF5E8]/80 drop-shadow-sm">
                {config.letter.envelopeLabel}
              </div>

              {/* Wax Seal in Center */}
              <div className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-[#991B1B] via-[#DC2626] to-[#7F1D1D] border-2 border-[#E8D6A5] shadow-[0_0_25px_rgba(220,38,38,0.5)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#E8D6A5]">
                  {config.letter.sealText}
                </span>
                {/* Seal ring */}
                <div className="absolute inset-1 rounded-full border border-[#E8D6A5]/40 border-dashed" />
              </div>

              {/* Tap to open prompt */}
              <div className="absolute bottom-4 flex items-center gap-1.5 text-xs text-[#E8D6A5] font-sans tracking-wider uppercase font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tap seal to open</span>
              </div>
            </motion.div>
          )}

          {/* Letter Opened: Slides Out in Full Glory */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#FFFDF9] text-[#1E1738] p-8 sm:p-12 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.6)] border border-[#E8D6A5]/50 relative text-left"
              >
                {/* Top Corner Floral Ornament */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#E8D6A5]/40">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7C3AED] font-sans font-medium">
                    <Feather className="w-4 h-4 text-[#7C3AED]" />
                    <span>A Garden Note</span>
                  </div>
                  <button
                    onClick={handleOpenLetter}
                    className="text-xs font-sans text-[#7C3AED] hover:text-[#1E1738] underline transition-colors cursor-pointer"
                  >
                    Fold letter back
                  </button>
                </div>

                {/* Salutation */}
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-script text-3xl sm:text-4xl text-[#1E1738] mb-6 font-semibold"
                >
                  {config.letter.salutation}
                </motion.h3>

                {/* Letter Body Paragraphs */}
                <div className="space-y-4 font-serif text-lg sm:text-xl text-[#2B2347] leading-relaxed">
                  {config.letter.paragraphs.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + idx * 0.15, duration: 0.6 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Sign-off */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.7 }}
                  className="mt-8 pt-6 border-t border-[#E8D6A5]/30 text-right"
                >
                  <p className="font-script text-2xl sm:text-3xl text-[#7C3AED]">
                    {config.letter.signoff}
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
