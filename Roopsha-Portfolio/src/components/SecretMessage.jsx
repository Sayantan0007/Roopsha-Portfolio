import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Sparkles, Lock, Unlock } from 'lucide-react';
import confetti from 'canvas-confetti';
import config from '../data/config';

export default function SecretMessage() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);

      // Golden stardust burst
      confetti({
        particleCount: 40,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#FBBF24', '#F59E0B', '#FFF5E8', '#E8D6A5'],
        scalar: 1.1,
        gravity: 0.6,
      });
    }
  };

  return (
    <section id="secret" className="relative py-24 px-6 overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8D6A5]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#E8D6A5]/30 text-xs text-[#E8D6A5] font-sans mb-4">
          <Sun className="w-3.5 h-3.5 text-[#FBBF24] animate-spin" style={{ animationDuration: '10s' }} />
          <span>A Hidden Secret in the Garden</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF5E8] tracking-tight mb-4 drop-shadow-md">
          The Midnight Sunflower
        </h2>

        <p className="font-sans text-base md:text-lg text-[#FFF5E8]/75 max-w-md mx-auto mb-10 font-light">
          {config.sunflowerSecret.instruction}
        </p>

        {/* The Oversized Interactive Sunflower */}
        <div className="relative flex flex-col items-center">
          <div
            onClick={handleReveal}
            className="relative cursor-pointer select-none group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleReveal();
            }}
            aria-label="Click the sunflower to reveal the secret message"
          >
            {/* Glowing Golden Aura */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 pointer-events-none blur-2xl ${
                isRevealed
                  ? 'w-80 h-80 bg-[#FBBF24]/30 scale-125'
                  : 'w-60 h-60 bg-[#E8D6A5]/20 group-hover:scale-110 group-hover:bg-[#FBBF24]/30'
              }`}
            />

            {/* Sunflower SVG Graphic */}
            <svg
              width="240"
              height="300"
              viewBox="-120 -120 240 300"
              className="overflow-visible"
            >
              {/* Tall sturdy stem */}
              <path
                d="M0 180 Q-6 90 0 0"
                stroke="#3E6B48"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />

              {/* Large Broad Leaves */}
              <path
                d="M-3 90 C-45 80 -55 50 -2 55"
                fill="#4D7C5D"
                stroke="#2B4D36"
                strokeWidth="1"
              />
              <path
                d="M3 120 C45 110 55 80 2 85"
                fill="#4D7C5D"
                stroke="#2B4D36"
                strokeWidth="1"
              />

              {/* Flower Head Group */}
              <g transform="translate(0, 0)">
                {/* 24 Radiant Golden Outer Petals */}
                {[
                  0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165,
                  180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345
                ].map((deg, i) => (
                  <motion.ellipse
                    key={deg}
                    cx="0"
                    cy={isRevealed ? -65 : -48}
                    rx={isRevealed ? 8 : 6}
                    ry={isRevealed ? 30 : 20}
                    fill={i % 2 === 0 ? '#FBBF24' : '#F59E0B'}
                    stroke="#D97706"
                    strokeWidth="0.75"
                    transform={`rotate(${deg} 0 0)`}
                    initial={false}
                    animate={
                      isRevealed
                        ? { scale: 1.15, opacity: 1 }
                        : { scale: 1, opacity: 0.9 }
                    }
                    transition={{ duration: 0.8, delay: (i % 8) * 0.03 }}
                  />
                ))}

                {/* Inner Petal Layer */}
                {[7.5, 37.5, 67.5, 97.5, 127.5, 157.5, 187.5, 217.5, 247.5, 277.5, 307.5, 337.5].map((deg) => (
                  <ellipse
                    key={deg}
                    cx="0"
                    cy={isRevealed ? -45 : -35}
                    rx="6"
                    ry={isRevealed ? 18 : 14}
                    fill="#FCD34D"
                    transform={`rotate(${deg} 0 0)`}
                  />
                ))}

                {/* Large Center Disc */}
                <circle
                  cx="0"
                  cy="0"
                  r={isRevealed ? 38 : 30}
                  fill="#78350F"
                  stroke="#451A03"
                  strokeWidth="2"
                  className="transition-all duration-700"
                />

                {/* Disc Florets / Seed Spiral Details */}
                <circle cx="0" cy="0" r={isRevealed ? 28 : 22} fill="#451A03" />

                {/* Glowing Core / Heart when unlocked */}
                {isRevealed ? (
                  <g className="animate-spin origin-center" style={{ animationDuration: '24s' }}>
                    <circle cx="0" cy="0" r="16" fill="#FBBF24" opacity="0.9" filter="drop-shadow(0 0 10px #F59E0B)" />
                    <circle cx="0" cy="0" r="8" fill="#FFF5E8" />
                  </g>
                ) : (
                  <circle cx="0" cy="0" r="10" fill="#92400E" className="animate-pulse" />
                )}
              </g>
            </svg>

            {/* Click Prompt Pill before revealed */}
            {!isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full glass-panel border border-[#E8D6A5]/50 text-xs md:text-sm font-sans text-[#FFF5E8] shadow-2xl flex items-center gap-2 group-hover:scale-105 group-hover:border-[#FBBF24] transition-all"
              >
                <Lock className="w-3.5 h-3.5 text-[#E8D6A5]" />
                <span className="font-medium">Touch to unlock secret ✨</span>
              </motion.div>
            )}
          </div>

          {/* Revealed Secret Message Card */}
          <AnimatePresence>
            {isRevealed && (
              <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 max-w-xl w-full p-8 rounded-3xl glass-panel-gold border border-[#E8D6A5]/40 shadow-[0_0_50px_rgba(232,214,165,0.25)] relative text-center"
              >
                {/* Decorative Top Seal */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#FBBF24] to-[#B45309] border border-[#FFF5E8] flex items-center justify-center shadow-lg">
                  <Unlock className="w-4 h-4 text-[#FFF5E8]" />
                </div>

                <div className="text-xs uppercase tracking-widest text-[#E8D6A5] font-sans font-medium mb-3 mt-1">
                  {config.sunflowerSecret.title}
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#FFF5E8] font-normal leading-relaxed italic drop-shadow-md">
                  "{config.sunflowerSecret.message}"
                </blockquote>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#E8D6A5]/80 font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
                  <span>A little sunshine in the midnight garden</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
