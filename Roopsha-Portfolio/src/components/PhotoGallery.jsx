import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, Sparkles, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import config from '../data/config';

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const [developedPhotos, setDevelopedPhotos] = useState({});

  const photos = config.gallery.photos;

  const handleNextPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
  }, [photos.length]);

  const handlePrevPhoto = useCallback(() => {
    setSelectedPhotoIndex((prev) => (prev === null ? null : (prev - 1 + photos.length) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    // Keyboard navigation (Escape to close, Left/Right arrows to flip)
    const handleKeyDown = (e) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, handleNextPhoto, handlePrevPhoto]);

  const handlePhotoInView = (id) => {
    if (!developedPhotos[id]) {
      setDevelopedPhotos((prev) => ({ ...prev, [id]: true }));
    }
  };

  const selectedPhoto = selectedPhotoIndex !== null ? photos[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="relative py-24 px-6 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#BCA5F5]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#BCA5F5]/30 text-xs text-[#E8D6A5] font-sans mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-[#BCA5F5]" />
            <span>Memories in Bloom</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF5E8] tracking-tight mb-4 drop-shadow-md">
            {config.gallery.title}
          </h2>

          <p className="font-sans text-base md:text-lg text-[#FFF5E8]/75 leading-relaxed font-light">
            {config.gallery.subtitle}
          </p>

          <p className="text-xs text-[#E8D6A5]/80 font-sans tracking-wide uppercase mt-2">
            {config.gallery.instructions}
          </p>
        </div>

        {/* Polaroid Grid (7 Photos) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-7 justify-items-center">
          {photos.map((item, idx) => {
            const isDeveloped = developedPhotos[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: (idx % 4) * 0.15 }}
                onViewportEnter={() => handlePhotoInView(item.id)}
                whileHover={{ scale: 1.04, rotate: 0, zIndex: 20 }}
                style={{ rotate: `${item.rotation}deg` }}
                className="group relative cursor-pointer select-none w-full max-w-[270px] transition-shadow duration-500"
                onClick={() => setSelectedPhotoIndex(idx)}
              >
                {/* Polaroid Frame Card */}
                <div className="p-3.5 pb-7 bg-[#FFFDF9] rounded-sm shadow-[0_15px_35px_rgba(0,0,0,0.45)] border border-[#E8D6A5]/30 relative transition-transform duration-300">
                  {/* Washi Tape Accent at Top */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-[#BCA5F5]/40 backdrop-blur-xs rounded-xs shadow-xs -rotate-2 pointer-events-none" />

                  {/* Photo Image Area */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#17132D] rounded-xs shadow-inner">
                    <img
                      src={item.url}
                      alt={`Memory ${item.id} - ${item.caption}`}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-all duration-1000 ${
                        isDeveloped
                          ? 'polaroid-developing filter brightness-95 contrast-105'
                          : 'opacity-20 blur-md grayscale'
                      }`}
                      onError={(e) => {
                        // Fallback to static URL if needed
                        if (item.fallbackUrl && e.target.src !== item.fallbackUrl) {
                          e.target.src = item.fallbackUrl;
                        }
                      }}
                    />

                    {/* Developing film shimmer overlay */}
                    {!isDeveloped && (
                      <div className="absolute inset-0 bg-[#FFF5E8]/30 backdrop-blur-xs flex items-center justify-center">
                        <span className="text-xs text-[#090D20] font-sans font-medium">Developing...</span>
                      </div>
                    )}

                    {/* Subtle Hover Zoom Hint */}
                    <div className="absolute inset-0 bg-[#090D20]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#17132D]/80 backdrop-blur-md flex items-center justify-center text-[#FFF5E8] border border-[#BCA5F5]/40 shadow-lg">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Handwritten Polaroid Caption */}
                  <div className="mt-4 text-center px-1">
                    <p className="font-script text-lg sm:text-xl text-[#17132D] leading-snug">
                      {item.caption}
                    </p>
                    <span className="text-[10px] text-[#17132D]/40 font-sans uppercase tracking-widest block mt-1">
                      No. 0{item.id} • Roopsha
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal with Next / Prev Navigation */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#090D20]/92 backdrop-blur-lg select-none"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full glass-panel border border-[#BCA5F5]/40 text-[#FFF5E8] hover:text-[#BCA5F5] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
              aria-label="Close photo view"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              className="absolute left-4 sm:left-8 z-20 w-11 h-11 rounded-full glass-panel border border-[#BCA5F5]/40 text-[#FFF5E8] hover:text-[#BCA5F5] hover:scale-110 flex items-center justify-center cursor-pointer transition-all"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              className="absolute right-4 sm:right-8 z-20 w-11 h-11 rounded-full glass-panel border border-[#BCA5F5]/40 text-[#FFF5E8] hover:text-[#BCA5F5] hover:scale-110 flex items-center justify-center cursor-pointer transition-all"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Card Container */}
            <motion.div
              key={selectedPhoto.id}
              initial={{ scale: 0.92, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 260 }}
              className="relative max-w-lg w-full bg-[#FFFDF9] p-5 pb-8 rounded-md shadow-2xl border border-[#E8D6A5]/50 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Display */}
              <div className="relative aspect-[4/5] w-full bg-[#17132D] rounded-xs overflow-hidden shadow-inner">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover filter contrast-105"
                  onError={(e) => {
                    if (selectedPhoto.fallbackUrl && e.target.src !== selectedPhoto.fallbackUrl) {
                      e.target.src = selectedPhoto.fallbackUrl;
                    }
                  }}
                />
              </div>

              {/* Caption & Navigation Indicators */}
              <div className="mt-5 text-center px-4">
                <p className="font-script text-2xl sm:text-3xl text-[#17132D] leading-tight mb-1">
                  "{selectedPhoto.caption}"
                </p>
                <div className="flex items-center justify-center gap-2 mt-2 text-xs font-sans text-[#17132D]/55 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>
                    Memory {selectedPhotoIndex + 1} of {photos.length} • Roopsha
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
