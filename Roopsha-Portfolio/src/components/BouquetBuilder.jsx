import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RotateCcw, Plus, Minus } from 'lucide-react';
import confetti from 'canvas-confetti';
import config from '../data/config';

// Custom SVG Icons for each of the 7 Bouquet Flowers
const FlowerSvg = ({ type, color, secondary, isMini = false }) => {
  const size = isMini ? 32 : 56;

  switch (type) {
    case 'rose':
      return (
        <svg width={size} height={size} viewBox="-25 -25 50 50">
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-10"
              rx="9"
              ry="14"
              fill={color}
              stroke={secondary}
              strokeWidth="0.75"
              transform={`rotate(${deg} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="8" fill={secondary} />
          <circle cx="0" cy="0" r="4" fill={color} />
        </svg>
      );

    case 'tulip':
      return (
        <svg width={size} height={size} viewBox="-25 -25 50 50">
          <path
            d="M-10 10 C-18 -10 -12 -22 0 -24 C12 -22 18 -10 10 10 C6 14 -6 14 -10 10"
            fill={color}
            stroke={secondary}
            strokeWidth="0.75"
          />
          <path
            d="M0 -24 C-4 -12 4 -12 0 -24"
            fill={secondary}
          />
          <circle cx="0" cy="-6" r="3" fill="#FFF5E8" opacity="0.8" />
        </svg>
      );

    case 'daisy':
      return (
        <svg width={size} height={size} viewBox="-25 -25 50 50">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-12"
              rx="3.5"
              ry="10"
              fill={color}
              stroke="#FDE68A"
              strokeWidth="0.5"
              transform={`rotate(${deg} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="6" fill="#FBBF24" />
          <circle cx="0" cy="0" r="3" fill="#D97706" />
        </svg>
      );

    case 'sunflower':
      return (
        <svg width={size} height={size} viewBox="-25 -25 50 50">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <ellipse
              key={deg}
              cx="0"
              cy="-14"
              rx="4"
              ry="11"
              fill={color}
              stroke="#D97706"
              strokeWidth="0.5"
              transform={`rotate(${deg} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="10" fill="#78350F" />
          <circle cx="0" cy="0" r="6" fill="#451A03" />
        </svg>
      );

    case 'lavender':
      return (
        <svg width={size} height={size} viewBox="-25 -25 50 50">
          {[-16, -10, -4, 2, 8].map((y, i) => (
            <g key={i}>
              <ellipse cx="-4" cy={y} rx="5" ry="3.5" fill={color} />
              <ellipse cx="4" cy={y} rx="5" ry="3.5" fill={secondary} />
            </g>
          ))}
          <circle cx="0" cy="-20" r="3" fill="#E0E7FF" />
        </svg>
      );

    case 'cherryBlossom':
      return (
        <svg width={size} height={size} viewBox="-25 -25 50 50">
          {[0, 72, 144, 216, 288].map((deg) => (
            <path
              key={deg}
              d="M0 0 C-9 -8 -11 -20 0 -22 C11 -20 9 -8 0 0"
              fill={color}
              stroke={secondary}
              strokeWidth="0.5"
              transform={`rotate(${deg} 0 0)`}
            />
          ))}
          <circle cx="0" cy="0" r="4.5" fill="#FFE4E6" />
          <circle cx="0" cy="0" r="2" fill="#E11D48" />
        </svg>
      );

    default:
      return <circle cx="0" cy="0" r="14" fill={color} />;
  }
};

export default function BouquetBuilder() {
  const [selectedFlowers, setSelectedFlowers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [emptyWarning, setEmptyWarning] = useState(false);

  // Add a flower to bouquet
  const handleAddFlower = (flower) => {
    setSelectedFlowers((prev) => [
      ...prev,
      {
        ...flower,
        uniqueId: `${flower.id}-${Date.now()}-${Math.random()}`,
        angle: (Math.random() - 0.5) * 45,
        scale: 0.9 + Math.random() * 0.25,
      },
    ]);
    setEmptyWarning(false);
  };

  // Remove one instance of flower type
  const handleRemoveFlower = (flowerId) => {
    const index = selectedFlowers.map((f) => f.id).lastIndexOf(flowerId);
    if (index !== -1) {
      setSelectedFlowers((prev) => prev.filter((_, i) => i !== index));
    }
  };

  // Reset bouquet
  const handleReset = () => {
    setSelectedFlowers([]);
    setIsFinished(false);
    setEmptyWarning(false);
  };

  // Finish bouquet
  const handleFinish = () => {
    if (selectedFlowers.length === 0) {
      setEmptyWarning(true);
      return;
    }

    setIsFinished(true);

    // Grand celebratory floral starlight shower
    confetti({
      particleCount: 75,
      spread: 90,
      origin: { y: 0.55 },
      colors: ['#F2B8D0', '#BCA5F5', '#E8D6A5', '#FFF5E8', '#FBBF24'],
      scalar: 1.2,
      gravity: 0.5,
    });
  };

  // Count items per flower type
  const flowerCounts = selectedFlowers.reduce((acc, f) => {
    acc[f.id] = (acc[f.id] || 0) + 1;
    return acc;
  }, {});

  return (
    <section id="bouquet" className="relative py-24 px-6 overflow-hidden min-h-screen">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#BCA5F5]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#F2B8D0]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#BCA5F5]/30 text-xs text-[#E8D6A5] font-sans mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E8D6A5]" />
            <span>The Main Surprise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF5E8] tracking-tight mb-4 drop-shadow-md">
            {config.bouquet.heading}
          </h2>

          <p className="font-sans text-base md:text-lg text-[#FFF5E8]/75 leading-relaxed font-light">
            {config.bouquet.subtitle}
          </p>
        </div>

        {/* Builder Layout: Left Flowers Grid, Right Bouquet Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Flower Picker Options */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center justify-between pb-2 border-b border-[#BCA5F5]/20">
              <span className="font-serif text-xl text-[#FFF5E8]">Select Flowers to Add</span>
              <span className="text-xs text-[#E8D6A5] font-sans">
                {selectedFlowers.length} {selectedFlowers.length === 1 ? 'flower' : 'flowers'} picked
              </span>
            </div>

            {/* Flowers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.bouquet.flowers.map((flower) => {
                const count = flowerCounts[flower.id] || 0;

                return (
                  <div
                    key={flower.id}
                    className="p-4 rounded-2xl glass-card border border-[#BCA5F5]/25 flex items-center justify-between hover:border-[#BCA5F5]/50 transition-all duration-300 group"
                  >
                    {/* Flower Graphic & Name */}
                    <div
                      onClick={() => handleAddFlower(flower)}
                      className="flex items-center gap-3.5 cursor-pointer flex-1"
                      role="button"
                      tabIndex={0}
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#17132D] border border-[#BCA5F5]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <FlowerSvg
                          type={flower.type}
                          color={flower.color}
                          secondary={flower.secondary}
                        />
                      </div>

                      <div className="text-left">
                        <h4 className="font-serif text-lg text-[#FFF5E8] group-hover:text-[#BCA5F5] transition-colors">
                          {flower.name}
                        </h4>
                        <span className="text-xs text-[#E8D6A5]/80 font-sans">
                          {flower.meaning}
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-1.5 ml-2">
                      {count > 0 && (
                        <button
                          onClick={() => handleRemoveFlower(flower.id)}
                          className="w-7 h-7 rounded-full glass-panel flex items-center justify-center text-[#FFF5E8]/70 hover:text-[#FFF5E8] hover:border-red-400 transition-colors"
                          aria-label={`Remove one ${flower.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                      )}

                      {count > 0 && (
                        <span className="w-5 text-center font-sans text-xs font-semibold text-[#E8D6A5]">
                          {count}
                        </span>
                      )}

                      <button
                        onClick={() => handleAddFlower(flower)}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-[#BCA5F5]/30 to-[#F2B8D0]/30 hover:from-[#BCA5F5]/60 hover:to-[#F2B8D0]/60 border border-[#FFF5E8]/30 flex items-center justify-center text-[#FFF5E8] transition-all duration-300 cursor-pointer shadow-sm hover:scale-110 active:scale-95"
                        aria-label={`Add ${flower.name}`}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Bouquet Preview Box */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full p-6 sm:p-8 rounded-3xl glass-panel-gold border border-[#E8D6A5]/35 flex flex-col items-center shadow-2xl relative min-h-[460px] justify-between">
              {/* Header inside preview */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-[#E8D6A5]/25">
                <span className="text-xs font-sans uppercase tracking-widest text-[#E8D6A5] font-medium">
                  Your Virtual Bouquet
                </span>
                {selectedFlowers.length > 0 && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-xs text-[#FFF5E8]/60 hover:text-[#FFF5E8] transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{config.bouquet.resetButton}</span>
                  </button>
                )}
              </div>

              {/* Live Bouquet Visual Arrangement Canvas */}
              <div className="relative w-full h-64 sm:h-72 my-4 flex items-center justify-center overflow-hidden">
                {selectedFlowers.length === 0 ? (
                  <div className="text-center text-[#FFF5E8]/40 flex flex-col items-center">
                    <span className="text-4xl mb-3 opacity-40">💐</span>
                    <p className="font-serif text-lg">Your bouquet is currently empty</p>
                    <p className="text-xs font-sans mt-1">Tap flowers on the left to gather them here</p>
                  </div>
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Flower Stems Gathering */}
                    <svg className="absolute bottom-2 w-32 h-36 overflow-visible" viewBox="0 0 100 120">
                      {selectedFlowers.map((f, i) => {
                        const spreadAngle = ((i - selectedFlowers.length / 2) / Math.max(1, selectedFlowers.length)) * 50;
                        return (
                          <line
                            key={`stem-${i}`}
                            x1="50"
                            y1="110"
                            x2={50 + Math.sin((spreadAngle * Math.PI) / 180) * 80}
                            y2={110 - Math.cos((spreadAngle * Math.PI) / 180) * 80}
                            stroke="#4D7C5D"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        );
                      })}
                      {/* Ribbon around stems */}
                      <path
                        d="M38 90 C50 96 50 96 62 90"
                        stroke="#F2B8D0"
                        strokeWidth="6"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <circle cx="50" cy="93" r="5" fill="#E8D6A5" />
                    </svg>

                    {/* Flower Heads Fan */}
                    <div className="absolute top-6 flex items-center justify-center w-full h-40">
                      {selectedFlowers.map((f, i) => {
                        const total = selectedFlowers.length;
                        const spreadX = ((i - (total - 1) / 2) / Math.max(1, total)) * 140;
                        const spreadY = -Math.abs(spreadX) * 0.2 + (i % 2 === 0 ? -8 : 6);

                        return (
                          <motion.div
                            key={f.uniqueId}
                            initial={{ scale: 0, y: -20, opacity: 0 }}
                            animate={{ scale: f.scale, y: spreadY, x: spreadX, opacity: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className="absolute flex items-center justify-center filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
                            style={{ rotate: `${f.angle}deg` }}
                          >
                            <FlowerSvg
                              type={f.type}
                              color={f.color}
                              secondary={f.secondary}
                              isMini={total > 8}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Warning if trying to finish empty bouquet */}
              {emptyWarning && (
                <p className="text-xs text-[#F2B8D0] font-sans font-medium mb-2 animate-bounce">
                  {config.bouquet.emptyNotice}
                </p>
              )}

              {/* Action Button: Finish Bouquet */}
              <button
                onClick={handleFinish}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#BCA5F5] via-[#F2B8D0] to-[#E8D6A5] text-[#090D20] font-sans font-semibold text-base flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(188,165,245,0.4)] hover:shadow-[0_0_40px_rgba(242,184,208,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>{config.bouquet.finishButton}</span>
                <Sparkles className="w-4 h-4 text-[#090D20]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Completed Bouquet Arrangement Modal (Step 3 & 4) */}
      <AnimatePresence>
        {isFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#090D20]/90 backdrop-blur-xl select-none"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative max-w-xl w-full p-8 sm:p-12 rounded-3xl glass-card border-2 border-[#E8D6A5]/50 text-center shadow-[0_0_80px_rgba(232,214,165,0.35)] flex flex-col items-center"
            >
              {/* Completed Bouquet Botanical Artwork */}
              <div className="relative w-64 h-64 flex items-center justify-center mb-6">
                {/* Golden Halo Spotlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#BCA5F5]/30 via-[#F2B8D0]/30 to-[#E8D6A5]/40 blur-2xl animate-pulse" />

                {/* Stems Fan SVG with Ribbon */}
                <svg className="absolute bottom-4 w-44 h-48 overflow-visible" viewBox="0 0 120 140">
                  {selectedFlowers.map((f, i) => {
                    const spread = ((i - selectedFlowers.length / 2) / Math.max(1, selectedFlowers.length)) * 55;
                    return (
                      <line
                        key={`fin-stem-${i}`}
                        x1="60"
                        y1="130"
                        x2={60 + Math.sin((spread * Math.PI) / 180) * 95}
                        y2={130 - Math.cos((spread * Math.PI) / 180) * 95}
                        stroke="#3F6E4E"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    );
                  })}
                  {/* Pink Ribbon Bow Wrapped around stems */}
                  <g transform="translate(60, 105)">
                    <ellipse cx="-12" cy="-4" rx="10" ry="6" fill="#F2B8D0" stroke="#FDA4AF" strokeWidth="1" transform="rotate(-20)" />
                    <ellipse cx="12" cy="-4" rx="10" ry="6" fill="#F2B8D0" stroke="#FDA4AF" strokeWidth="1" transform="rotate(20)" />
                    <circle cx="0" cy="-2" r="5" fill="#E11D48" />
                    <path d="M-4 2 L-10 18 M4 2 L10 18" stroke="#F2B8D0" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </svg>

                {/* Arranged Floral Heads in full bloom */}
                <div className="absolute top-2 w-full h-44 flex items-center justify-center">
                  {selectedFlowers.map((f, i) => {
                    const count = selectedFlowers.length;
                    const angleRad = ((i / count) * 360 * Math.PI) / 180;
                    const radius = Math.min(65, count * 6 + 25);
                    const posX = Math.cos(angleRad) * radius;
                    const posY = Math.sin(angleRad) * (radius * 0.7);

                    return (
                      <motion.div
                        key={`fin-flower-${i}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.1 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                        className="absolute filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                        style={{ transform: `translate(${posX}px, ${posY}px) rotate(${f.angle}deg)` }}
                      >
                        <FlowerSvg type={f.type} color={f.color} secondary={f.secondary} />
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Final Greeting */}
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FFF5E8] mb-3">
                {config.bouquet.finalTitle}
              </h3>

              <p className="font-serif text-lg sm:text-xl text-[#E8D6A5] leading-relaxed mb-8 max-w-md italic">
                "{config.bouquet.finalSubtitle}"
              </p>

              {/* Rebuild / Another Bouquet Button */}
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full glass-panel border border-[#E8D6A5]/50 text-[#FFF5E8] font-sans text-sm hover:text-[#E8D6A5] hover:border-[#E8D6A5] transition-all duration-300 cursor-pointer shadow-lg"
              >
                {config.bouquet.rebuildButton}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
