import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import ScrollToTop from "../../components/common/ScrollToTop";
import Loader from "../../components/common/Loader";

export const MainLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Elegant simulation of loading luxury content on initial mount
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route action
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#1f2937] text-white selection:bg-brand-orange selection:text-white flex flex-col overflow-x-hidden">
      {/* Immersive UI ambient layout blur glows */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#0d6efd] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ff6b00] rounded-full blur-[150px]" />
      </div>

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="app-initial-loader" />
        ) : (
          <div key="app-rendered-layout" className="relative z-10 flex flex-col min-h-screen w-full">
            {/* Top Navigation */}
            <Navbar />

            {/* Structured Page Entrance Container */}
            <main className="flex-grow pt-[88px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Outlet />
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Elite Footer */}
            <Footer />

            {/* Active Utilities */}
            <ScrollToTop />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
