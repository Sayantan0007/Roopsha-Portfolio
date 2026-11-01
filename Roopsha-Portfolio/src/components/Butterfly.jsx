import { useEffect, useRef, useState } from 'react';

export default function Butterfly() {
  const butterflyRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const el = butterflyRef.current;
    if (!el) return;

    let targetX = window.innerWidth * 0.7;
    let targetY = window.innerHeight * 0.35;
    let currentX = targetX;
    let currentY = targetY;
    let angle = 0;
    let animationId;
    let time = 0;

    const onMouseMove = (e) => {
      // Small offset so butterfly hovers near but not exactly under the cursor pointer
      targetX = e.clientX + 24;
      targetY = e.clientY - 28;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', onMouseMove);
    }

    const animate = () => {
      time += 0.025;

      if (isMobile) {
        // Autonomous graceful floating path on mobile
        const w = window.innerWidth;
        const h = window.innerHeight;
        const centerX = w * 0.5;
        const centerY = h * 0.45;
        const radiusX = Math.min(w * 0.38, 160);
        const radiusY = Math.min(h * 0.25, 120);

        // Lissajous curve
        targetX = centerX + Math.sin(time * 0.8) * radiusX;
        targetY = centerY + Math.sin(time * 1.6) * radiusY * 0.6 + Math.cos(time * 0.5) * 40;
      }

      // Smooth lerp movement
      const ease = isMobile ? 0.04 : 0.055;
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * ease;
      currentY += dy * ease;

      // Add gentle organic flight flutter oscillation
      const wanderX = Math.sin(time * 3) * 6;
      const wanderY = Math.cos(time * 2.5) * 8;

      // Calculate facing angle with smoothing
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
      angle += (targetAngle - angle) * 0.08;

      if (el) {
        el.style.transform = `translate3d(${currentX + wanderX}px, ${currentY + wanderY}px, 0) rotate(${angle}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isMobile]);

  return (
    <div
      ref={butterflyRef}
      className="pointer-events-none fixed top-0 left-0 z-40 transition-opacity duration-500 will-change-transform"
      style={{ width: '42px', height: '42px', marginLeft: '-21px', marginTop: '-21px' }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Glow halo behind butterfly */}
        <div className="absolute inset-0 bg-[#BCA5F5]/30 rounded-full blur-md" />

        {/* Butterfly Body & Wings SVG */}
        <div className="relative flex items-center justify-center" style={{ perspective: '300px' }}>
          {/* Left Wing */}
          <div className="animate-wing-left origin-right">
            <svg width="22" height="32" viewBox="0 0 22 32" fill="none">
              <path
                d="M20 16C12 4 0 6 2 18C4 28 15 30 20 20Z"
                fill="url(#butterflyGradLeft)"
                stroke="#FFF5E8"
                strokeWidth="0.75"
                opacity="0.95"
              />
              <path
                d="M18 16C13 10 4 11 5 18C7 24 14 24 18 18Z"
                fill="rgba(255, 245, 232, 0.4)"
              />
              <circle cx="8" cy="14" r="1.5" fill="#FFF5E8" />
              <defs>
                <linearGradient id="butterflyGradLeft" x1="0" y1="0" x2="22" y2="32">
                  <stop stopColor="#F2B8D0" />
                  <stop offset="0.6" stopColor="#BCA5F5" />
                  <stop offset="1" stopColor="#818CF8" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Butterfly Center Body & Antenna */}
          <div className="relative z-10 w-1.5 h-6 bg-gradient-to-b from-[#FFF5E8] via-[#E8D6A5] to-[#17132D] rounded-full mx-[-1px]">
            {/* Left Antenna */}
            <div className="absolute -top-3 -left-1.5 w-2 h-3 border-t border-l border-[#FFF5E8] rounded-tl-full opacity-80" />
            {/* Right Antenna */}
            <div className="absolute -top-3 -right-1.5 w-2 h-3 border-t border-r border-[#FFF5E8] rounded-tr-full opacity-80" />
          </div>

          {/* Right Wing */}
          <div className="animate-wing-right origin-left">
            <svg width="22" height="32" viewBox="0 0 22 32" fill="none">
              <path
                d="M2 16C10 4 22 6 20 18C18 28 7 30 2 20Z"
                fill="url(#butterflyGradRight)"
                stroke="#FFF5E8"
                strokeWidth="0.75"
                opacity="0.95"
              />
              <path
                d="M4 16C9 10 18 11 17 18C15 24 8 24 4 18Z"
                fill="rgba(255, 245, 232, 0.4)"
              />
              <circle cx="14" cy="14" r="1.5" fill="#FFF5E8" />
              <defs>
                <linearGradient id="butterflyGradRight" x1="22" y1="0" x2="0" y2="32">
                  <stop stopColor="#F2B8D0" />
                  <stop offset="0.6" stopColor="#BCA5F5" />
                  <stop offset="1" stopColor="#818CF8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Delicate stardust trail point */}
        <div className="absolute -bottom-2 w-1.5 h-1.5 bg-[#FFF5E8] rounded-full blur-[1px] animate-ping opacity-60" />
      </div>
    </div>
  );
}
