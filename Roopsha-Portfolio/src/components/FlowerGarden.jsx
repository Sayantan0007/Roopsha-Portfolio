import { useState } from 'react';
import { Sparkles, Flower2, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import BloomingFlower from './BloomingFlower';
import { gardenFlowers } from '../data/flowers';

export default function FlowerGarden() {
  const [bloomedFlowers, setBloomedFlowers] = useState({});

  const handleBloom = (id) => {
    if (!bloomedFlowers[id]) {
      setBloomedFlowers((prev) => ({ ...prev, [id]: true }));

      // Little burst of sparkles for that flower
      const flower = gardenFlowers.find((f) => f.id === id);
      confetti({
        particleCount: 15,
        spread: 45,
        origin: { y: 0.7 },
        colors: [flower?.accentColor || '#BCA5F5', '#FFF5E8', '#E8D6A5'],
        scalar: 0.8,
        gravity: 0.8,
      });
    }
  };

  const handleBloomAll = () => {
    const all = {};
    gardenFlowers.forEach((f) => {
      all[f.id] = true;
    });
    setBloomedFlowers(all);

    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#F2B8D0', '#BCA5F5', '#FFF5E8', '#E8D6A5'],
      scalar: 1,
    });
  };

  const bloomedCount = Object.keys(bloomedFlowers).length;
  const totalCount = gardenFlowers.length;

  return (
    <section id="garden" className="relative min-h-screen py-24 px-6 overflow-hidden">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#BCA5F5]/5 via-[#F2B8D0]/5 to-[#E8D6A5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#BCA5F5]/30 text-xs text-[#E8D6A5] font-sans mb-4">
            <Flower2 className="w-3.5 h-3.5 text-[#BCA5F5]" />
            <span>Interactive Flower Garden</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF5E8] tracking-tight mb-4 drop-shadow-md">
            Click Each Flower to Bloom
          </h2>

          <p className="font-sans text-base md:text-lg text-[#FFF5E8]/75 leading-relaxed font-light">
            Every flower carries a quiet thought. Touch them gently and watch this corner of the garden awaken.
          </p>

          {/* Bloom Progress Indicator */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-[#BCA5F5]/20 text-xs md:text-sm font-sans text-[#FFF5E8]">
              {bloomedCount === totalCount ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#789B83]" />
                  <span className="text-[#E8D6A5] font-medium">All {totalCount} flowers in full bloom ✨</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#E8D6A5]" />
                  <span>
                    Bloomed <strong className="text-[#BCA5F5]">{bloomedCount}</strong> of {totalCount} flowers
                  </span>
                </>
              )}
            </div>

            {bloomedCount < totalCount && (
              <button
                onClick={handleBloomAll}
                className="text-xs font-sans text-[#BCA5F5] hover:text-[#FFF5E8] underline underline-offset-4 decoration-[#BCA5F5]/40 hover:decoration-[#FFF5E8] transition-colors cursor-pointer"
              >
                Bloom all together 🌸
              </button>
            )}
          </div>
        </div>

        {/* Garden Grid of Flowers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-end justify-items-center">
          {gardenFlowers.map((flower) => (
            <BloomingFlower
              key={flower.id}
              flower={flower}
              isBloomed={!!bloomedFlowers[flower.id]}
              onBloom={() => handleBloom(flower.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
