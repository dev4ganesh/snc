import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ArrowRight, Mail } from "lucide-react";
import Button from "../Button";
import { Logo } from "../Logo";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-slate-900/40 backdrop-blur-xl py-4"
            : "bg-white/5 backdrop-blur-md border-b border-white/10 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo Layout */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-urbanist font-semibold tracking-wider transition-colors duration-300 ${
                      isActive ? "text-brand-orange" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                  
                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-line"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-orange to-brand-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Quick Contact Hook Option */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="mailto:shrinidhiconstruction99@gmail.com"
              className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-brand-orange transition-colors duration-300 normal-case"
            >
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              shrinidhiconstruction99@gmail.com
            </a>
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3 h-3 text-brand-orange" />}
              onClick={() => (window.location.hash = "/contact")}
            >
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile Hamburger Drawer Handler */}
          <button
            id="mobile-navigation-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white cursor-pointer focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5 text-brand-orange" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay and Navigation Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 md:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8"
          >
            {/* Background floating glows */}
            <div className="absolute top-1/4 left-1/2 w-72 h-72 rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none -translate-x-1/2" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />

            <div className="flex flex-col gap-6 z-10">
              <span className="text-[10px] uppercase font-montserrat tracking-[0.3em] text-gray-500 font-bold">
                Navigation
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => {
                  const isActive =
                    link.path === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(link.path);

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className={`text-2xl font-montserrat font-extrabold tracking-wide transition-colors ${
                          isActive ? "text-brand-orange" : "text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6 border-t border-white/5 pt-8 z-10"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase font-montserrat tracking-[0.2em] text-gray-500 font-bold">
                  Email Us
                </span>
                <a
                  href="mailto:shrinidhiconstruction99@gmail.com"
                  className="text-base font-mono text-white hover:text-brand-orange transition-colors break-all"
                >
                  shrinidhiconstruction99@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase font-montserrat tracking-[0.2em] text-gray-500 font-bold">
                  Our Office
                </span>
                <p className="text-sm font-urbanist text-gray-400">
                  Court Road, Anantapur 515001, Andhra Pradesh, India
                </p>
              </div>

              <Button
                variant="primary"
                className="w-full justify-center text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact" className="w-full h-full text-center flex items-center justify-center">
                  Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
