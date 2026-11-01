import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import config from '../data/config';

export default function SecretSurprise() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);

    // Warm soft heart & starlight particle burst
    confetti({
      particleCount: 35,
      spread: 70,
      origin: { y: 0.55 },
      colors: ['#F2B8D0', '#E11D48', '#FFF5E8', '#E8D6A5'],
      scalar: 1,
      gravity: 0.65,
    });
  };

  return (
    <section className="relative py-16 px-6 overflow-hidden flex flex-col items-center">
      {/* Mysterious Glowing Button Container */}
      <div className="relative inline-block">
        {/* Pulsing Stardust Aura */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-[#BCA5F5] via-[#F2B8D0] to-[#E8D6A5] rounded-full blur-md opacity-70 animate-pulse pointer-events-none" />

        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          className="relative px-7 py-3 rounded-full bg-gradient-to-r from-[#17132D] via-[#2A1E4A] to-[#17132D] border border-[#FFF5E8]/35 text-[#FFF5E8] font-sans font-medium text-sm sm:text-base flex items-center gap-2.5 shadow-2xl hover:shadow-[0_0_35px_rgba(242,184,208,0.5)] transition-all duration-300 cursor-pointer"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          <span>{config.secretSurprise.buttonLabel}</span>
          <Sparkles className="w-4 h-4 text-[#E8D6A5] animate-spin" style={{ animationDuration: '6s' }} />
        </motion.button>
      </div>

      {/* Floating Surprise Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#090D20]/85 backdrop-blur-md select-none"
            onClick={() => setIsOpen(false)}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.88, y: 25, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 24, stiffness: 240 }}
              className="relative max-w-lg w-full p-8 sm:p-10 rounded-3xl glass-card border border-[#F2B8D0]/40 text-center shadow-[0_0_60px_rgba(242,184,208,0.25)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Icon */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#F2B8D0]/20 to-[#BCA5F5]/20 border border-[#F2B8D0]/50 flex items-center justify-center shadow-inner">
                <Heart className="w-7 h-7 text-[#F2B8D0] fill-[#F2B8D0]/40 animate-pulse" />
              </div>

              {/* Badge */}
              <div className="text-xs uppercase tracking-widest text-[#E8D6A5] font-sans font-medium mb-3">
                {config.secretSurprise.modalBadge}
              </div>

              {/* The Surprise Message */}
              <p className="font-serif text-2xl sm:text-3xl text-[#FFF5E8] leading-relaxed drop-shadow-md font-normal mb-8">
                "{config.secretSurprise.message}"
              </p>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-full glass-panel border border-[#BCA5F5]/30 text-xs sm:text-sm font-sans text-[#FFF5E8] hover:text-[#BCA5F5] hover:border-[#BCA5F5]/60 transition-all duration-300 cursor-pointer shadow-md"
              >
                {config.secretSurprise.closeButton}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
