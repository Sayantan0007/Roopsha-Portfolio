import { useEffect, useRef } from 'react';

export default function AmbientAtmosphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Star generation
    const starCount = Math.min(100, Math.floor((width * height) / 9000));
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      color: Math.random() > 0.4 ? '#FFF5E8' : Math.random() > 0.5 ? '#BCA5F5' : '#E8D6A5',
    }));

    // Shooting star state
    let shootingStar = null;
    let nextShootingStarTime = Date.now() + 4000;

    // Firefly generation
    const fireflyCount = Math.min(20, Math.max(10, Math.floor(width / 80)));
    const fireflies = Array.from({ length: fireflyCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1.2,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.7 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      glowRadius: Math.random() * 10 + 8,
      pulseSpeed: Math.random() * 0.04 + 0.015,
      pulseDir: 1,
    }));

    // Falling petals
    const petalColors = ['#F2B8D0', '#FBCFE8', '#FFF5E8', '#BCA5F5'];
    const petalCount = 14;
    const petals = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * -height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: Math.random() * 0.4 - 0.2,
      angle: Math.random() * Math.PI * 2,
      rotSpeed: Math.random() * 0.02 - 0.01,
      sway: Math.random() * 0.02 + 0.01,
      swayOffset: Math.random() * Math.PI * 2,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.4 + 0.3,
    }));

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 0.95 || star.alpha < 0.15) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
        ctx.shadowBlur = star.radius * 3;
        ctx.shadowColor = star.color;
        ctx.fill();
      }

      // Check shooting star
      const now = Date.now();
      if (!shootingStar && now > nextShootingStarTime) {
        shootingStar = {
          x: Math.random() * (width * 0.8),
          y: Math.random() * (height * 0.4),
          length: Math.random() * 80 + 70,
          speed: Math.random() * 9 + 8,
          angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1),
          alpha: 1,
        };
        nextShootingStarTime = now + Math.random() * 9000 + 7000;
      }

      if (shootingStar) {
        ctx.save();
        ctx.beginPath();
        const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
        const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;
        const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
        grad.addColorStop(0, 'rgba(255, 245, 232, 0)');
        grad.addColorStop(1, `rgba(255, 245, 232, ${shootingStar.alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();
        ctx.restore();

        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.alpha -= 0.02;

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar = null;
        }
      }

      // Draw fireflies
      for (let i = 0; i < fireflies.length; i++) {
        const fly = fireflies[i];
        fly.angle += (Math.random() - 0.5) * 0.2;
        fly.x += Math.cos(fly.angle) * fly.speed;
        fly.y += Math.sin(fly.angle) * fly.speed;

        // Wrap around boundaries smoothly
        if (fly.x < -20) fly.x = width + 20;
        if (fly.x > width + 20) fly.x = -20;
        if (fly.y < -20) fly.y = height + 20;
        if (fly.y > height + 20) fly.y = -20;

        fly.alpha += fly.pulseSpeed * fly.pulseDir;
        if (fly.alpha >= 0.95) {
          fly.alpha = 0.95;
          fly.pulseDir = -1;
        } else if (fly.alpha <= 0.15) {
          fly.alpha = 0.15;
          fly.pulseDir = 1;
        }

        ctx.save();
        ctx.globalAlpha = fly.alpha;
        const glow = ctx.createRadialGradient(fly.x, fly.y, 0, fly.x, fly.y, fly.glowRadius);
        glow.addColorStop(0, 'rgba(232, 214, 165, 0.9)');
        glow.addColorStop(0.3, 'rgba(232, 214, 165, 0.4)');
        glow.addColorStop(1, 'rgba(232, 214, 165, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(fly.x, fly.y, fly.glowRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFF5E8';
        ctx.beginPath();
        ctx.arc(fly.x, fly.y, fly.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw drifting flower petals
      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.swayOffset += p.sway;
        p.y += p.speedY;
        p.x += Math.sin(p.swayOffset) * 0.7 + p.speedX;
        p.angle += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        // Petal shape (elongated curved teardrop)
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.7, -p.size * 0.5, p.size * 0.7, p.size * 0.5, 0, p.size);
        ctx.bezierCurveTo(-p.size * 0.7, p.size * 0.5, -p.size * 0.7, -p.size * 0.5, 0, -p.size);
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic star, firefly, and petal canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Soft atmospheric gradient glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#17132D]/40 via-[#BCA5F5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#BCA5F5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 -right-40 w-[600px] h-[600px] bg-[#F2B8D0]/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
