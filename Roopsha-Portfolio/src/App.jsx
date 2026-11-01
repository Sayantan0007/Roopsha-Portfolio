import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Atmospheric & Interactive Global Elements
import AmbientAtmosphere from './components/AmbientAtmosphere';
import Butterfly from './components/Butterfly';
import MusicToggle from './components/MusicToggle';
import FloatingNav from './components/FloatingNav';

// Sections
import IntroScreen from './components/IntroScreen';
import HeroSection from './components/HeroSection';
import FlowerGarden from './components/FlowerGarden';
import SecretMessage from './components/SecretMessage';
import PhotoGallery from './components/PhotoGallery';
import FlowerQuestion from './components/FlowerQuestion';
import PersonalLetter from './components/PersonalLetter';
import SecretSurprise from './components/SecretSurprise';
import BouquetBuilder from './components/BouquetBuilder';
import Footer from './components/Footer';

export default function App() {
  const [gardenOpened, setGardenOpened] = useState(false);

  // Scroll to top on first open
  useEffect(() => {
    if (gardenOpened) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [gardenOpened]);

  return (
    <div className="relative min-h-screen bg-[#090D20] text-[#FFF5E8] overflow-x-hidden selection:bg-[#BCA5F5]/30 selection:text-[#FFF5E8]">
      {/* Background Starfield, Fireflies & Drifting Petals Canvas */}
      <AmbientAtmosphere />

      {/* Floating Animated Butterfly Following Cursor / Drifting on Mobile */}
      <Butterfly />

      {/* Manual Ambient Music Player Toggle (Never Autoplays) */}
      <MusicToggle />

      {/* Opening Invitation Screen */}
      <AnimatePresence>
        {!gardenOpened && (
          <IntroScreen onOpenGarden={() => setGardenOpened(true)} />
        )}
      </AnimatePresence>

      {/* Main Website Experience (Accessible once opened) */}
      {gardenOpened && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 flex flex-col"
        >
          {/* Floating Navigation Dock */}
          <FloatingNav />

          {/* Section 4: Hero Section */}
          <HeroSection
            onExploreClick={() => {
              const el = document.getElementById('garden');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Section 5: Interactive Flower Garden — Click to Bloom */}
          <FlowerGarden />

          {/* Section 6: Hidden Secret Inside the Sunflower */}
          <SecretMessage />

          {/* Section 8: Personal Photo Gallery — Memories in Bloom */}
          <PhotoGallery />

          {/* Section 9: Interactive Question — Which flower would you choose? */}
          <FlowerQuestion />

          {/* Section 10: Personal Letter — A little note for you */}
          <PersonalLetter />

          {/* Section 11: "One more thing..." Secret Surprise */}
          <SecretSurprise />

          {/* Section 12: Build Your Own Bouquet — The Climax Surprise */}
          <BouquetBuilder />

          {/* Section 15: Poetic Footer & Back to Top */}
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
