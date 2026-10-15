import { useEffect, useRef } from 'react';

export default function GoldenWaveEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle pool for golden stardust
    const particleCount = 65;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.7),
        radius: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.8 + 0.2,
        speedX: (Math.random() - 0.4) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        goldColor:
          Math.random() > 0.4
            ? 'rgba(245, 215, 120, '
            : 'rgba(218, 165, 32, ',
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw elegant sweeping golden wave ribbons (like the stardust trail in mockup)
      // Wave 1
      ctx.save();
      ctx.beginPath();
      const startX = w * 0.42;
      const startY = h * 0.28;
      const cp1x = w * 0.68;
      const cp1y = h * 0.12 + Math.sin(time * 0.8) * 15;
      const cp2x = w * 0.82;
      const cp2y = h * 0.32 + Math.cos(time * 0.6) * 18;
      const endX = w * 1.02;
      const endY = h * 0.18 + Math.sin(time * 0.7) * 12;

      ctx.moveTo(startX, startY);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);

      const grad1 = ctx.createLinearGradient(startX, startY, endX, endY);
      grad1.addColorStop(0, 'rgba(229, 184, 66, 0)');
      grad1.addColorStop(0.3, 'rgba(245, 211, 126, 0.45)');
      grad1.addColorStop(0.7, 'rgba(212, 175, 55, 0.28)');
      grad1.addColorStop(1, 'rgba(229, 184, 66, 0)');

      ctx.strokeStyle = grad1;
      ctx.lineWidth = 3.5;
      ctx.shadowColor = 'rgba(245, 215, 120, 0.6)';
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.restore();

      // Wave 2 - subtle secondary harmonic ribbon
      ctx.save();
      ctx.beginPath();
      const s2X = w * 0.48;
      const s2Y = h * 0.31;
      const cp21x = w * 0.72;
      const cp21y = h * 0.16 + Math.cos(time * 0.9) * 12;
      const cp22x = w * 0.86;
      const cp22y = h * 0.27 + Math.sin(time * 0.5) * 14;
      const e2X = w * 1.04;
      const e2Y = h * 0.22;

      ctx.moveTo(s2X, s2Y);
      ctx.bezierCurveTo(cp21x, cp21y, cp22x, cp22y, e2X, e2Y);

      const grad2 = ctx.createLinearGradient(s2X, s2Y, e2X, e2Y);
      grad2.addColorStop(0, 'rgba(229, 184, 66, 0)');
      grad2.addColorStop(0.5, 'rgba(255, 235, 175, 0.35)');
      grad2.addColorStop(1, 'rgba(212, 175, 55, 0)');

      ctx.strokeStyle = grad2;
      ctx.lineWidth = 1.8;
      ctx.shadowColor = 'rgba(245, 215, 120, 0.4)';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // Draw floating stardust particles along the wave cluster
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around smoothly
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h * 0.8;
        if (p.y > h * 0.8) p.y = 0;

        const currentAlpha =
          p.alpha * (0.6 + 0.4 * Math.sin(time * 2 + p.pulsePhase));

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.goldColor}${Math.max(0, currentAlpha)})`;
        ctx.shadowColor = 'rgba(245, 215, 120, 0.8)';
        ctx.shadowBlur = p.radius * 4;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-85"
      aria-hidden="true"
    />
  );
}
