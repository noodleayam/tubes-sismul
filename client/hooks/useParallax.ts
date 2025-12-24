import { useState, useEffect } from 'react';

export function useParallax() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;

      setScrollY(currentScrollY);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Call once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress };
}

export function getParallaxTransform(scrollY: number, speed: number = 0.5) {
  return `translateY(${scrollY * speed}px)`;
}

export function getParallaxOpacity(scrollY: number, start: number, end: number) {
  if (scrollY < start) return 1;
  if (scrollY > end) return 0;
  return 1 - (scrollY - start) / (end - start);
}
