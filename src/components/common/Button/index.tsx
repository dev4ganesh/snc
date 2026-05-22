import React from "react";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-urbanist font-semibold tracking-wide rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeStyles = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };

  const variantStyles = {
    primary: "bg-[#ff6b00] text-white hover:bg-orange-600 shadow-lg glow-orange hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:-translate-y-0.5",
    secondary: "bg-[#0d6efd] text-white hover:bg-blue-600 shadow-lg glow-blue hover:shadow-[0_0_30px_rgba(13,110,253,0.4)] hover:-translate-y-0.5",
    outline: "bg-white/5 border border-white/20 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/35",
    white: "bg-white text-slate-900 hover:bg-[#ff6b00] hover:text-white shadow-xl"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
      </span>
      {/* Absolute background visual glaze effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-shimmer pointer-events-none" />
    </motion.button>
  );
};

export default Button;
