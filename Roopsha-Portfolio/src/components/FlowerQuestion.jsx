import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import config from '../data/config';
import { flowerQuestionOptions } from '../data/flowers';

export default function FlowerQuestion() {
  const [selectedId, setSelectedId] = useState('tulip'); // Default charming selection

  const handleSelect = (choice) => {
    setSelectedId(choice.id);

    // Subtle gentle sparkle burst
    confetti({
      particleCount: 18,
      spread: 60,
      origin: { y: 0.7 },
      colors: [choice.color, '#FFF5E8', '#E8D6A5'],
      scalar: 0.85,
      gravity: 0.7,
    });
  };

  const selectedChoice = flowerQuestionOptions.find((c) => c.id === selectedId) || flowerQuestionOptions[0];

  return (
    <section id="choice" className="relative py-24 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-[#BCA5F5]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#BCA5F5]/30 text-xs text-[#E8D6A5] font-sans mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-[#BCA5F5]" />
          <span>A Quiet Question</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF5E8] tracking-tight mb-3 drop-shadow-md">
          {config.flowerQuestion.heading}
        </h2>

        <p className="font-sans text-base md:text-lg text-[#FFF5E8]/75 mb-12 font-light">
          {config.flowerQuestion.subtitle}
        </p>

        {/* 6 Selectable Flower Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full mb-10">
          {flowerQuestionOptions.map((choice) => {
            const isSelected = selectedId === choice.id;

            return (
              <motion.button
                key={choice.id}
                onClick={() => handleSelect(choice)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative p-5 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'glass-panel-gold border-[#E8D6A5] shadow-[0_0_25px_rgba(232,214,165,0.35)] scale-105'
                    : 'glass-panel border-[#BCA5F5]/20 hover:border-[#BCA5F5]/50'
                }`}
                aria-pressed={isSelected}
              >
                {/* Active Selection Glow Ring */}
                {isSelected && (
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#BCA5F5]/30 via-[#F2B8D0]/30 to-[#E8D6A5]/30 blur-sm pointer-events-none" />
                )}

                <span className="text-3xl sm:text-4xl mb-2 drop-shadow-sm">
                  {choice.icon}
                </span>

                <span
                  className={`font-serif text-base sm:text-lg tracking-wide ${
                    isSelected ? 'text-[#E8D6A5] font-medium' : 'text-[#FFF5E8]'
                  }`}
                >
                  {choice.name}
                </span>

                {/* Subtle indicator dot */}
                <div
                  className={`w-1.5 h-1.5 rounded-full mt-2 transition-all ${
                    isSelected ? 'bg-[#E8D6A5] scale-125' : 'bg-transparent'
                  }`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Selected Flower Meaning Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedChoice.id}
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl p-8 rounded-3xl glass-card border border-[#BCA5F5]/30 relative text-center shadow-2xl"
          >
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#E8D6A5] font-sans font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E8D6A5]" />
              <span>You chose the {selectedChoice.name}</span>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#FFF5E8] leading-relaxed drop-shadow-sm font-normal">
              "{selectedChoice.message}"
            </p>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#FFF5E8]/60 font-sans">
              <span>Feel free to choose another flower anytime</span>
              <span className="text-sm">🌷</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
