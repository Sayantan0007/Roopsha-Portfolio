import { ArrowUp, Moon } from 'lucide-react';
import config from '../data/config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 border-t border-[#BCA5F5]/15 bg-[#090D20] text-center select-none overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Soft Moon Crest Graphic */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FFF5E8] to-[#E8D6A5] opacity-80 shadow-[0_0_25px_rgba(255,245,232,0.3)] flex items-center justify-center mb-6">
          <Moon className="w-6 h-6 text-[#17132D]" />
        </div>

        {/* Heading & Dedication */}
        <h4 className="font-serif text-2xl sm:text-3xl text-[#FFF5E8] mb-2 tracking-wide">
          {config.websiteTitle}
        </h4>

        <p className="font-script text-xl sm:text-2xl text-[#F2B8D0] mb-4">
          {config.footer.dedication}
        </p>

        <p className="font-sans text-xs md:text-sm text-[#FFF5E8]/60 max-w-md mx-auto mb-8 font-light">
          {config.footer.note}
        </p>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-[#BCA5F5]/30 text-xs font-sans text-[#FFF5E8]/80 hover:text-[#FFF5E8] hover:border-[#BCA5F5]/60 transition-all duration-300 group cursor-pointer"
        >
          <span>Return to the top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#E8D6A5] group-hover:-translate-y-0.5 transition-transform" />
        </button>

        <div className="mt-8 text-[11px] text-[#FFF5E8]/40 font-sans tracking-widest uppercase">
          {config.footer.year} • Dedicated to Roopsha
        </div>
      </div>
    </footer>
  );
}
