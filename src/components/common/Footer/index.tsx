import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Button from "../Button";
import { Logo } from "../Logo";
import { useToast } from "../../../context/ToastContext";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { showWhatsAppAdvisorToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    showWhatsAppAdvisorToast("Newsletter subscription feature");
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Dynamic ambient backgrounds */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10">
        {/* Brand Information Column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <Logo />
          <p className="font-urbanist text-gray-400 text-sm leading-relaxed max-w-sm">
            We are a team of passionate young minds taking on the challenges of
            modern building. Guided by structural accuracy and clean design, we
            craft absolute quality across interiors, construction, and planning.
            Trust the process, we build your dream.
          </p>

          {/* Social Profiles */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/snc__interiors/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile Link"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange/20 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin Profile Link"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-blue/20 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile Link"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Link Column 1: Services */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <span className="font-montserrat text-[10px] tracking-[0.3em] font-extrabold text-white uppercase">
            Services
          </span>
          <ul className="flex flex-col gap-3 font-urbanist text-sm">
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-brand-orange transition-colors duration-200"
              >
                Premium Construction
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-brand-orange transition-colors duration-200"
              >
                Bespoke Interiors
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-brand-orange transition-colors duration-200"
              >
                Architectural Planning
              </Link>
            </li>
          </ul>
        </div>

        {/* Link Column 2: Navigations */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <span className="font-montserrat text-[10px] tracking-[0.3em] font-extrabold text-white uppercase">
            Symmetry
          </span>
          <ul className="flex flex-col gap-3 font-urbanist text-sm">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-brand-blue transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-brand-blue transition-colors duration-200"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-brand-blue transition-colors duration-200"
              >
                Featured Portfolios
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-brand-blue transition-colors duration-200"
              >
                Consultation Hub
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact details & newsletter subscription */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <span className="font-montserrat text-[10px] tracking-[0.3em] font-extrabold text-white uppercase">
            Elite Updates
          </span>
          <p className="font-urbanist text-gray-400 text-xs leading-relaxed">
            Subscribe to receive our seasonal architectural briefings and
            finished build portfolios.
          </p>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Enter client email"
                className="w-full px-4 py-2.5 text-xs font-mono bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange"
              />
              <button
                type="submit"
                aria-label="Subscribe Newsletter"
                className="absolute right-2 top-1.5 px-3 py-1 text-[10px] font-montserrat font-bold bg-brand-orange hover:bg-orange-600 text-white rounded-md cursor-pointer transition-colors duration-200"
              >
                Join
              </button>
            </div>
          </form>

          {/* Quick contact vectors list */}
          <div className="flex flex-col gap-2.5 font-urbanist text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
              <span>Court Road, Anantapur 515001</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span>shrinidhiconstruction99@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright and layout section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-urbanist text-gray-500 relative z-10">
        <div>
          © {currentYear} SN Constructions. All physical architectural rights
          reserved.
        </div>
        <div className="flex items-center gap-6">
          <span className="hover:text-white transition-colors duration-200">
            Premium Architectural Showcase Tier-1
          </span>
          <span className="hover:text-white transition-colors duration-200">
            AESTHETIC SYMMETRY ENG™
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
