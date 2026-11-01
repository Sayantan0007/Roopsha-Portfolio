import { useState, useEffect } from 'react';
import { Home, Flower2, Sun, Image, HelpCircle, Mail, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Midnight', icon: Home },
  { id: 'garden', label: 'Garden', icon: Flower2 },
  { id: 'secret', label: 'Secret', icon: Sun },
  { id: 'gallery', label: 'Memories', icon: Image },
  { id: 'choice', label: 'Question', icon: HelpCircle },
  { id: 'letter', label: 'Letter', icon: Mail },
  { id: 'bouquet', label: 'Bouquet', icon: Sparkles },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down 150px
      setIsVisible(window.scrollY > 150);

      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Garden journey navigation"
    >
      <div className="glass-panel px-3 py-2 rounded-full border border-[#BCA5F5]/25 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-1 sm:gap-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all duration-300 text-xs font-sans group cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#BCA5F5]/30 to-[#F2B8D0]/30 text-[#FFF5E8] border border-[#FFF5E8]/30 shadow-sm'
                  : 'text-[#FFF5E8]/60 hover:text-[#FFF5E8] hover:bg-[#17132D]/40'
              }`}
              title={item.label}
              aria-label={`Jump to ${item.label}`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#E8D6A5]' : ''}`} />
              <span className={`text-[11px] tracking-wide ${isActive ? 'inline' : 'hidden md:inline'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
