import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import config from '../data/config';

export default function HeroSection({ onExploreClick }) {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center text-center px-6 pt-24 pb-12 overflow-hidden"
    >
      {/* Top Cherry Blossom Branch Framing (Top Right) */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-48 md:h-64 pointer-events-none opacity-60 z-10">
        <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
          <path
            d="M320 -20 Q240 60 160 50 T40 120"
            stroke="#5A4238"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M200 55 Q170 110 110 125"
            stroke="#5A4238"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Cherry blossoms along the branch */}
          <circle cx="160" cy="50" r="10" fill="#FBCFE8" opacity="0.85" filter="drop-shadow(0 0 6px #F2B8D0)" />
          <circle cx="160" cy="50" r="4" fill="#F472B6" />
          <circle cx="110" cy="125" r="9" fill="#FBCFE8" opacity="0.85" filter="drop-shadow(0 0 6px #F2B8D0)" />
          <circle cx="110" cy="125" r="3.5" fill="#F472B6" />
          <circle cx="210" cy="65" r="8" fill="#FBCFE8" opacity="0.85" />
          <circle cx="70" cy="115" r="8" fill="#FBCFE8" opacity="0.85" />
          <circle cx="40" cy="120" r="7" fill="#FBCFE8" opacity="0.8" />
        </svg>
      </div>

      {/* Top Left Willow / Vine Framing */}
      <div className="absolute top-0 left-0 w-64 md:w-80 h-48 md:h-64 pointer-events-none opacity-50 z-10">
        <svg viewBox="0 0 300 200" fill="none" className="w-full h-full">
          <path
            d="M-20 -20 Q80 80 140 70 T240 140"
            stroke="#4D7C5D"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="140" cy="70" r="7" fill="#BCA5F5" opacity="0.8" filter="drop-shadow(0 0 5px #BCA5F5)" />
          <circle cx="90" cy="60" r="6" fill="#F2B8D0" opacity="0.75" />
          <circle cx="190" cy="110" r="8" fill="#BCA5F5" opacity="0.8" />
        </svg>
      </div>

      {/* Soft Moon in Hero */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 -z-10 pointer-events-none">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-[#FFF5E8] via-[#FFFDF5] to-[#E8D6A5] opacity-90 shadow-[0_0_100px_35px_rgba(255,245,232,0.22)]" />
      </div>

      {/* Spacer to balance vertical alignment */}
      <div className="h-6" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-[#BCA5F5]/30 mb-6 text-xs md:text-sm text-[#E8D6A5] font-sans"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E8D6A5] animate-spin" style={{ animationDuration: '8s' }} />
          <span>{config.hero.moonQuote}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FFF5E8] tracking-tight mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          {config.hero.title}
        </motion.h1>

        {/* Roopsha's Name in Special Handwritten Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex items-center gap-3 justify-center mb-6"
        >
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent to-[#BCA5F5]/60" />
          <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#F2B8D0] drop-shadow-[0_0_15px_rgba(242,184,208,0.5)]">
            For {config.recipientName}
          </span>
          <span className="h-[1px] w-8 md:w-16 bg-gradient-to-l from-transparent to-[#BCA5F5]/60" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#FFF5E8]/80 max-w-xl mx-auto leading-relaxed mb-8 font-light"
        >
          {config.hero.subtitle}
        </motion.p>
      </div>

      {/* Decorative Botanical Garden Foreground Silhouette with Glowing Flowers */}
      <div className="relative w-full max-w-5xl mx-auto mt-6 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1000 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-[0_0_20px_rgba(188,165,245,0.25)]"
        >
          {/* Ground Silhouette Curve */}
          <path
            d="M0 180 C200 140 400 165 600 145 C800 125 900 155 1000 140 L1000 180 L0 180 Z"
            fill="url(#groundGrad)"
          />

          {/* Rose 1 (Left) */}
          <g transform="translate(140, 110)">
            <path d="M0 70 Q-5 35 0 0" stroke="#4D7C5D" strokeWidth="3" />
            <circle cx="0" cy="0" r="14" fill="#F2B8D0" opacity="0.9" filter="drop-shadow(0 0 10px #F2B8D0)" />
            <circle cx="0" cy="0" r="7" fill="#E11D48" />
          </g>

          {/* Lavender stalks (Left Center) */}
          <g transform="translate(280, 85)">
            <path d="M0 95 Q6 45 0 0" stroke="#4D7C5D" strokeWidth="2.5" />
            <ellipse cx="0" cy="0" rx="6" ry="18" fill="#BCA5F5" opacity="0.9" filter="drop-shadow(0 0 8px #BCA5F5)" />
            <ellipse cx="-4" cy="12" rx="4" ry="10" fill="#9333EA" opacity="0.85" />
            <ellipse cx="4" cy="8" rx="4" ry="10" fill="#BCA5F5" opacity="0.85" />
          </g>

          {/* Golden Sunflower (Center) */}
          <g transform="translate(500, 60)">
            <path d="M0 120 Q-8 60 0 0" stroke="#3F6E4E" strokeWidth="4" />
            {/* Petals */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <ellipse
                key={deg}
                cx="0"
                cy="-24"
                rx="5"
                ry="14"
                fill="#FBBF24"
                transform={`rotate(${deg} 0 0)`}
                filter="drop-shadow(0 0 6px #F59E0B)"
              />
            ))}
            <circle cx="0" cy="0" r="15" fill="#78350F" />
            <circle cx="0" cy="0" r="12" fill="#451A03" />
          </g>

          {/* Tulip (Right Center) */}
          <g transform="translate(710, 95)">
            <path d="M0 85 Q10 40 0 0" stroke="#4D7C5D" strokeWidth="3" />
            <path
              d="M-10 0 C-12 -22 0 -24 0 -24 C0 -24 12 -22 10 0 C8 10 -8 10 -10 0 Z"
              fill="#BCA5F5"
              filter="drop-shadow(0 0 10px #BCA5F5)"
            />
            <path d="M0 -24 C-3 -15 3 -15 0 -24" fill="#C084FC" />
          </g>

          {/* Daisy (Right) */}
          <g transform="translate(860, 115)">
            <path d="M0 65 Q-4 30 0 0" stroke="#4D7C5D" strokeWidth="2.5" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <ellipse
                key={deg}
                cx="0"
                cy="-16"
                rx="4"
                ry="10"
                fill="#FFF5E8"
                transform={`rotate(${deg} 0 0)`}
                filter="drop-shadow(0 0 5px #FFF5E8)"
              />
            ))}
            <circle cx="0" cy="0" r="7" fill="#EAB308" />
          </g>

          <defs>
            <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#17132D" stopOpacity="0.8" />
              <stop offset="1" stopColor="#090D20" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative z-20 flex flex-col items-center mt-2 cursor-pointer group"
        onClick={() => {
          if (onExploreClick) {
            onExploreClick();
          } else {
            const el = document.getElementById('garden');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-xs md:text-sm font-sans tracking-widest text-[#FFF5E8]/70 uppercase group-hover:text-[#BCA5F5] transition-colors mb-2">
          {config.hero.scrollPrompt}
        </span>
        <div className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-[#BCA5F5] group-hover:text-[#FFF5E8] group-hover:border-[#BCA5F5]/60 transition-all duration-300">
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
