import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const COOKIE_COUNT = 40;

interface CookieData {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotationDir: number;
  sway: number;
}

function Cookie({ x, delay, duration, size, rotationDir, sway, id, onPop }: CookieData & { onPop: (id: number) => void }) {
  // Parallax effect: smaller cookies are pushed to the background
  const isBackground = size < 45;

  return (
    <motion.img
      src="/cookie.svg"
      alt="Cookie"
      onClick={() => onPop(id)}
      className={`absolute top-0 cursor-pointer drop-shadow-md hover:brightness-110 active:scale-95 touch-none select-none ${
        isBackground ? 'blur-[1.5px] opacity-70 z-0' : 'opacity-100 z-10'
      }`}
      style={{ left: `${x}vw`, width: size, height: size }}
      initial={{ y: -150, x: 0, rotate: 0 }}
      animate={{ 
        y: '120vh', 
        x: [0, sway, -sway, 0], 
        rotate: 360 * rotationDir 
      }}
      exit={{
        scale: 1.5,
        opacity: 0,
        filter: "blur(5px)",
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      transition={{
        y: { duration: duration, repeat: Infinity, delay: delay, ease: 'linear' },
        x: { duration: duration * 0.8, repeat: Infinity, delay: delay, ease: 'easeInOut' },
        rotate: { duration: duration * 1.5, repeat: Infinity, delay: delay, ease: 'linear' },
      }}
    />
  );
}

export function AnimatedBackground() {
  const [cookies, setCookies] = useState<CookieData[]>([]);

  useEffect(() => {
    // Generate random cookies on mount
    const newCookies = Array.from({ length: COOKIE_COUNT }).map((_, i) => {
      const size = 30 + Math.random() * 60; // Random size between 30px and 90px
      // Tie duration to size for parallax: larger cookies fall faster
      const duration = 10 - (size / 90) * 6; 
      
      return {
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration,
        size,
        rotationDir: Math.random() > 0.5 ? 1 : -1,
        sway: (Math.random() - 0.5) * 60 // Sway horizontally
      };
    });
    setCookies(newCookies);
  }, []);

  const handlePop = (id: number) => {
    setCookies(prev => prev.filter(cookie => cookie.id !== id));
  };

  return (
    <div className="fixed inset-0 w-full h-screen bg-gorb-bg overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 pointer-events-auto">
        <AnimatePresence>
          {cookies.map(cookie => (
            <Cookie key={cookie.id} {...cookie} onPop={handlePop} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
