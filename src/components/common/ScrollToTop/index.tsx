import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate visible position
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // SVG parameters for progress ring
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="btn-scroll-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-white/10 text-brand-orange hover:text-white transition-colors group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-orange"
          style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.5)" }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Progress circle stroke indicator */}
          <svg className="absolute w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r={radius}
              stroke="url(#progress-gradient)"
              strokeWidth="2.5"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b00" />
                <stop offset="100%" stopColor="#0d6efd" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Arrow Up Icon */}
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
