import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function BloomingFlower({ flower, isBloomed, onBloom }) {
  const [isHovered, setIsHovered] = useState(false);

  // Render botanical flower head depending on flower.id
  const renderFlowerHead = () => {
    switch (flower.id) {
      case 'rose':
        return (
          <g className="transition-transform duration-700 ease-out origin-center">
            {/* Outer Petals */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.path
                key={`outer-${i}`}
                d="M0 0 C-18 -22 18 -22 0 -36 C-12 -26 0 -10 0 0"
                fill="#F2B8D0"
                stroke="#E11D48"
                strokeWidth="0.5"
                transform={`rotate(${deg} 0 -10)`}
                initial={false}
                animate={isBloomed ? { scale: 1.15, opacity: 0.95 } : { scale: 0.7, opacity: 0.8 }}
                transition={{ duration: 0.8, delay: i * 0.05 }}
              />
            ))}
            {/* Inner Spiral Petals */}
            {[30, 90, 150, 210, 270, 330].map((deg, i) => (
              <motion.path
                key={`inner-${i}`}
                d="M0 0 C-12 -16 12 -16 0 -26 C-8 -18 0 -8 0 0"
                fill="#FDA4AF"
                stroke="#BE123C"
                strokeWidth="0.5"
                transform={`rotate(${deg} 0 -8)`}
                initial={false}
                animate={isBloomed ? { scale: 1.1, opacity: 1 } : { scale: 0.6, opacity: 0.9 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.04 }}
              />
            ))}
            {/* Bud Center */}
            <circle cx="0" cy="-8" r={isBloomed ? 7 : 5} fill="#E11D48" />
            <circle cx="0" cy="-8" r={isBloomed ? 3 : 2} fill="#FFE4E6" />
          </g>
        );

      case 'tulip':
        return (
          <g className="transition-transform duration-700 ease-out origin-center">
            {/* Left Petal */}
            <motion.path
              d="M-4 0 C-22 -18 -18 -45 0 -50 C-10 -35 -2 -15 -4 0"
              fill="#BCA5F5"
              stroke="#7C3AED"
              strokeWidth="0.5"
              initial={false}
              animate={isBloomed ? { rotate: -18, scale: 1.15 } : { rotate: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: '0 0' }}
            />
            {/* Right Petal */}
            <motion.path
              d="M4 0 C22 -18 18 -45 0 -50 C10 -35 2 -15 4 0"
              fill="#C084FC"
              stroke="#7C3AED"
              strokeWidth="0.5"
              initial={false}
              animate={isBloomed ? { rotate: 18, scale: 1.15 } : { rotate: 0, scale: 0.9 }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: '0 0' }}
            />
            {/* Center Front Petal */}
            <motion.path
              d="M-10 0 C-14 -24 0 -48 0 -48 C0 -48 14 -24 10 0 C6 6 -6 6 -10 0"
              fill="#DDD6FE"
              stroke="#9333EA"
              strokeWidth="0.5"
              initial={false}
              animate={isBloomed ? { scaleY: 1.05, opacity: 1 } : { scaleY: 0.9, opacity: 0.85 }}
              transition={{ duration: 0.7 }}
            />
            {/* Inner Stamen glowing */}
            {isBloomed && (
              <circle cx="0" cy="-22" r="3.5" fill="#E8D6A5" className="animate-pulse" />
            )}
          </g>
        );

      case 'sunflower':
        return (
          <g className="transition-transform duration-700 ease-out origin-center">
            {/* Outer Golden Petals */}
            {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((deg, i) => (
              <motion.ellipse
                key={i}
                cx="0"
                cy="-28"
                rx={isBloomed ? 6 : 4}
                ry={isBloomed ? 16 : 9}
                fill="#FBBF24"
                stroke="#D97706"
                strokeWidth="0.5"
                transform={`rotate(${deg} 0 0)`}
                initial={false}
                animate={isBloomed ? { scale: 1.15, opacity: 1 } : { scale: 0.65, opacity: 0.8 }}
                transition={{ duration: 0.7, delay: i * 0.02 }}
              />
            ))}
            {/* Center Disc */}
            <circle cx="0" cy="0" r={isBloomed ? 16 : 10} fill="#78350F" />
            <circle cx="0" cy="0" r={isBloomed ? 12 : 7} fill="#451A03" />
            {/* Seed pattern highlights */}
            {isBloomed && (
              <circle cx="0" cy="0" r="4" fill="#E8D6A5" className="animate-pulse" />
            )}
          </g>
        );

      case 'daisy':
        return (
          <g className="transition-transform duration-700 ease-out origin-center">
            {/* White Petals */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
              <motion.ellipse
                key={i}
                cx="0"
                cy="-24"
                rx={isBloomed ? 5 : 3}
                ry={isBloomed ? 14 : 7}
                fill="#FFF5E8"
                stroke="#FDE68A"
                strokeWidth="0.5"
                transform={`rotate(${deg} 0 0)`}
                initial={false}
                animate={isBloomed ? { scale: 1.1, opacity: 1 } : { scale: 0.6, opacity: 0.8 }}
                transition={{ duration: 0.65, delay: i * 0.03 }}
              />
            ))}
            {/* Yellow Center */}
            <circle cx="0" cy="0" r={isBloomed ? 11 : 7} fill="#EAB308" />
            <circle cx="0" cy="0" r={isBloomed ? 7 : 4} fill="#CA8A04" />
          </g>
        );

      case 'lavender':
        return (
          <g className="transition-transform duration-700 ease-out origin-center">
            {/* Multiple florets up the spike */}
            {[-45, -35, -25, -15, -5, 5].map((yOffset, i) => (
              <motion.g
                key={i}
                initial={false}
                animate={isBloomed ? { scale: 1.15, opacity: 1 } : { scale: 0.7, opacity: 0.8 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <ellipse cx="-5" cy={yOffset} rx={isBloomed ? 6 : 4} ry="4" fill="#818CF8" />
                <ellipse cx="5" cy={yOffset} rx={isBloomed ? 6 : 4} ry="4" fill="#A78BFA" />
                <circle cx="0" cy={yOffset - 2} r={isBloomed ? 4 : 2.5} fill="#C084FC" />
              </motion.g>
            ))}
            <circle cx="0" cy="-52" r={isBloomed ? 4 : 2} fill="#E9D5FF" />
          </g>
        );

      case 'cherryBlossom':
        return (
          <g className="transition-transform duration-700 ease-out origin-center">
            {/* 5 Notched Petals */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <motion.path
                key={i}
                d="M0 0 C-14 -12 -16 -32 0 -36 C16 -32 14 -12 0 0"
                fill="#FBCFE8"
                stroke="#F472B6"
                strokeWidth="0.5"
                transform={`rotate(${deg} 0 0)`}
                initial={false}
                animate={isBloomed ? { scale: 1.15, opacity: 1 } : { scale: 0.65, opacity: 0.85 }}
                transition={{ duration: 0.75, delay: i * 0.05 }}
              />
            ))}
            {/* Center Pistil & Stamens */}
            <circle cx="0" cy="0" r={isBloomed ? 6 : 4} fill="#FB7185" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <line
                key={i}
                x1="0"
                y1="0"
                x2="0"
                y2={isBloomed ? -12 : -6}
                stroke="#FDE68A"
                strokeWidth="1"
                transform={`rotate(${deg} 0 0)`}
              />
            ))}
            <circle cx="0" cy="0" r="3" fill="#FFF5E8" />
          </g>
        );

      default:
        return <circle cx="0" cy="0" r="15" fill="#BCA5F5" />;
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Interactive Plant SVG */}
      <div
        onClick={onBloom}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative cursor-pointer select-none group"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onBloom();
        }}
        aria-label={`${flower.name} - ${isBloomed ? 'Bloomed' : 'Click to bloom'}`}
      >
        {/* Glow backdrop behind flower */}
        <div
          className={`absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full transition-all duration-700 pointer-events-none blur-xl ${
            isBloomed
              ? 'opacity-80 scale-125'
              : isHovered
              ? 'opacity-50 scale-100'
              : 'opacity-20 scale-75'
          }`}
          style={{ backgroundColor: flower.accentColor }}
        />

        {/* Plant Stalk & Blossom SVG */}
        <svg
          width="130"
          height="240"
          viewBox="-65 -80 130 240"
          className="overflow-visible"
        >
          {/* Stem with gentle natural curve */}
          <path
            d={`M0 160 Q${flower.curvature} 70 0 0`}
            stroke={flower.stemColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Left Leaf */}
          <path
            d="M-2 90 C-22 80 -25 60 -1 65"
            fill={flower.leafColor}
            stroke="#2E5038"
            strokeWidth="0.5"
            opacity="0.9"
          />

          {/* Right Leaf */}
          <path
            d="M2 110 C22 100 25 80 1 85"
            fill={flower.leafColor}
            stroke="#2E5038"
            strokeWidth="0.5"
            opacity="0.9"
          />

          {/* Flower Head */}
          <g transform="translate(0, 0)">
            {renderFlowerHead()}
          </g>

          {/* Stardust particles on bloom */}
          {isBloomed && (
            <g className="animate-spin origin-center" style={{ animationDuration: '16s' }}>
              <circle cx="-25" cy="-25" r="1.5" fill="#FFF5E8" className="animate-ping" />
              <circle cx="28" cy="-20" r="1.5" fill="#E8D6A5" className="animate-pulse" />
              <circle cx="20" cy="25" r="1.5" fill="#F2B8D0" />
            </g>
          )}
        </svg>

        {/* Hover / Click Prompt Badge (Only before bloomed) */}
        {!isBloomed && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full glass-panel text-[11px] font-sans text-[#FFF5E8]/80 border border-[#BCA5F5]/30 shadow-md group-hover:scale-105 group-hover:text-[#FFF5E8] transition-all"
          >
            Touch to bloom ✨
          </motion.div>
        )}
      </div>

      {/* Flower Label & Compliment Card */}
      <div className="mt-2 text-center max-w-[240px] min-h-[90px] flex flex-col items-center">
        {/* Flower Name & Symbol */}
        <div className="flex items-center gap-1.5 font-serif text-lg font-medium text-[#FFF5E8] tracking-wide">
          <span>{flower.name}</span>
          <span className="text-sm">{flower.symbol}</span>
        </div>

        {/* Compliment Reveal */}
        <AnimatePresence>
          {isBloomed ? (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 p-3 rounded-2xl glass-card text-center relative border border-[#BCA5F5]/25 shadow-lg"
            >
              <div className="text-[11px] font-sans uppercase tracking-widest text-[#E8D6A5] mb-1 font-medium flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-[#E8D6A5]" />
                <span>{flower.bloomTitle}</span>
              </div>
              <p className="font-script text-base md:text-lg text-[#FFF5E8] leading-tight drop-shadow-sm">
                "{flower.compliment}"
              </p>
            </motion.div>
          ) : (
            <p className="text-xs text-[#FFF5E8]/50 mt-1 font-sans italic">
              Waiting for your touch...
            </p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
