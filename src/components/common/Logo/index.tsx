import { Link } from "react-router-dom";
import logoSvg from "../../../assets/arka_name-logo.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo = ({
  className = "w-11 h-11",
  showText = true,
}: LogoProps) => {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      {/* Logo Image Wrapper */}
      <div className="relative">
        <img
          src={logoSvg}
          alt="Arka infra & interiors"
          className={`${className} object-contain transition-transform duration-500 group-hover:scale-105`}
          referrerPolicy="no-referrer"
        />
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-[#ff6b00]/15 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tighter uppercase font-montserrat leading-none transition-colors duration-300">
            <span className="text-[#ff6b00]">Arka</span>{" "}
            <span className="text-[#f8fafc]">infra & interiors</span>
          </span>
          <span className="text-[8px] font-bold tracking-[0.25em] text-gray-400 uppercase mt-1 transition-all duration-300 group-hover:text-gray-300">
            Interiors • Plan • Build
          </span>
        </div>
      )}
    </Link>
  );
};
