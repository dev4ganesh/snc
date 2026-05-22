import React from "react";
import { motion } from "motion/react";

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute w-24 h-24 border-2 border-transparent border-t-brand-orange border-b-brand-blue rounded-full"
        />
        
        {/* Animated inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute w-20 h-20 border border-transparent border-r-white border-l-white/20 rounded-full"
        />

        {/* Brand visual text inside */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.95, 1, 0.95] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex items-center justify-center font-montserrat font-bold tracking-widest text-white text-lg z-10"
        >
          SN
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <span className="font-montserrat text-xs tracking-[0.3em] text-white uppercase font-bold">
          SN CONSTRUCTIONS
        </span>
        <p className="font-urbanist text-gray-500 text-xs mt-1 tracking-wide">
          Architectural Symmetry & Structural Integrity
        </p>
      </motion.div>
    </div>
  );
};

export default Loader;
