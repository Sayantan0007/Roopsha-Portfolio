import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import config from '../data/config';

export default function IntroScreen({ onOpenGarden }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Burst of glowing floral petals & golden starlight
    const count = 45;
    const colors = ['#F2B8D0', '#BCA5F5', '#FFF5E8', '#E8D6A5', '#FBCFE8'];

    confetti({
      particleCount: count,
      angle: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.2,
      ticks: 200,
      gravity: 0.6,
      drift: 0.05,
    });

    setTimeout(() => {
      onOpenGarden();
    }, 1400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#090D20] overflow-hidden select-none"
    >
      {/* Background Moon & Ambient Glow */}
      <div className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        {/* Soft Glowing Moon */}
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-[#FFF5E8] via-[#FFFDF5] to-[#E8D6A5] shadow-[0_0_80px_25px_rgba(255,245,232,0.35)] flex items-center justify-center">
            {/* Soft moon craters */}
            <div className="absolute top-6 left-6 w-5 h-5 rounded-full bg-[#E8D6A5]/25 blur-[1px]" />
            <div className="absolute bottom-6 right-8 w-7 h-7 rounded-full bg-[#E8D6A5]/20 blur-[1px]" />
            <div className="absolute top-12 right-6 w-3 h-3 rounded-full bg-[#E8D6A5]/15 blur-[1px]" />
          </div>
          {/* Moon aura pulse */}
          <div className="absolute -inset-4 rounded-full bg-[#BCA5F5]/15 blur-xl animate-pulse" />
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#FFF5E8] animate-twinkle"
            style={{
              top: `${(i * 19) % 94}%`,
              left: `${(i * 29) % 96}%`,
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              animationDelay: `${(i * 0.4) % 3}s`,
              opacity: 0.3 + (i % 5) * 0.15,
            }}
          />
        ))}
      </div>

      {/* Center Container: Garden Gate & Letter Invitation */}
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Enchanted Garden Gate Illustration */}
        <div className="relative w-64 md:w-80 h-44 mb-6 flex items-center justify-center [perspective:1000px]">
          {/* Gate Archway */}
          <svg className="absolute inset-0 w-full h-full text-[#BCA5F5]/25" viewBox="0 0 240 140" fill="none">
            <path
              d="M20 135 V 60 A 100 80 0 0 1 220 60 V 135"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="4 2"
            />
            {/* Arch finial */}
            <circle cx="120" cy="18" r="6" fill="#E8D6A5" opacity="0.8" />
            <path d="M120 12 L120 4 M116 8 L124 8" stroke="#E8D6A5" strokeWidth="1.5" />
          </svg>

          {/* Left Gate Door */}
          <motion.div
            animate={isOpening ? { rotateY: -80, opacity: 0.4 } : { rotateY: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-28 h-36 origin-left border-y-2 border-l-2 border-[#BCA5F5]/40 bg-gradient-to-r from-[#17132D]/70 to-[#090D20]/40 rounded-tl-3xl relative p-2 shadow-inner"
          >
            {/* Gate bars */}
            <div className="w-full h-full flex justify-around">
              <div className="w-0.5 h-full bg-[#BCA5F5]/20" />
              <div className="w-0.5 h-full bg-[#BCA5F5]/20" />
              <div className="w-0.5 h-full bg-[#BCA5F5]/20" />
            </div>
            {/* Floral ivy accent */}
            <div className="absolute top-4 left-1 text-[#F2B8D0] text-xs">🌸</div>
            <div className="absolute bottom-6 right-2 text-[#789B83] text-xs">🌿</div>
          </motion.div>

          {/* Center Glowing Seal / Envelope Icon */}
          <motion.div
            animate={isOpening ? { scale: 1.4, opacity: 0 } : { scale: [1, 1.05, 1] }}
            transition={isOpening ? { duration: 0.8 } : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute z-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#17132D] via-[#2A1E4A] to-[#17132D] border border-[#E8D6A5]/50 flex items-center justify-center shadow-[0_0_30px_rgba(232,214,165,0.4)]"
          >
            <span className="font-serif text-2xl font-bold text-[#E8D6A5]">R</span>
            <div className="absolute -inset-1 rounded-full border border-[#FFF5E8]/20 animate-spin" style={{ animationDuration: '12s' }} />
          </motion.div>

          {/* Right Gate Door */}
          <motion.div
            animate={isOpening ? { rotateY: 80, opacity: 0.4 } : { rotateY: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="w-28 h-36 origin-right border-y-2 border-r-2 border-[#BCA5F5]/40 bg-gradient-to-l from-[#17132D]/70 to-[#090D20]/40 rounded-tr-3xl relative p-2 shadow-inner"
          >
            <div className="w-full h-full flex justify-around">
              <div className="w-0.5 h-full bg-[#BCA5F5]/20" />
              <div className="w-0.5 h-full bg-[#BCA5F5]/20" />
              <div className="w-0.5 h-full bg-[#BCA5F5]/20" />
            </div>
            <div className="absolute top-8 right-1 text-[#F2B8D0] text-xs">🌷</div>
            <div className="absolute bottom-4 left-2 text-[#789B83] text-xs">🌿</div>
          </motion.div>
        </div>

        {/* Text Presentation */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-script text-2xl md:text-3xl text-[#E8D6A5] tracking-wide mb-2"
        >
          {config.intro.note1}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl font-light text-[#FFF5E8] mb-6 tracking-wide drop-shadow-md"
        >
          {config.intro.note2}
        </motion.h1>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative inline-block"
        >
          {/* Button ambient glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#BCA5F5] via-[#F2B8D0] to-[#E8D6A5] rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse" />

          <button
            onClick={handleOpen}
            disabled={isOpening}
            className="relative px-8 py-3.5 rounded-full bg-gradient-to-r from-[#17132D] via-[#2A1E4A] to-[#17132D] border border-[#FFF5E8]/30 text-[#FFF5E8] font-sans font-medium text-base md:text-lg flex items-center gap-3 shadow-xl hover:shadow-[0_0_35px_rgba(188,165,245,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 disabled:opacity-75 cursor-pointer"
          >
            <span>{isOpening ? "Entering the garden..." : config.intro.buttonText}</span>
            <Sparkles className="w-5 h-5 text-[#E8D6A5] animate-spin" style={{ animationDuration: '4s' }} />
          </button>
        </motion.div>

        {/* Subtle subtext */}
        <p className="mt-5 text-xs text-[#FFF5E8]/50 tracking-wider uppercase font-sans">
          {config.intro.hint}
        </p>
      </div>
    </motion.div>
  );
}
