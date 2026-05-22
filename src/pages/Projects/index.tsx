import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, Building, X, CheckSquare, Maximize2 } from "lucide-react";
import { PROJECTS_DATA } from "../../constants";
import { ProjectItem } from "../../types";

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Residential", "Commercial", "Interior", "Renovation"];

  // Filter projects by category selection
  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((proj) => proj.category.toLowerCase() === filter.toLowerCase());

  return (
    <div className="relative w-full">
      
      {/* 1. Page Header Section */}
      <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Skyscraper architectural framework"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-brand-orange/5 blur-[100px]" />
          <div className="absolute bottom-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-blue/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
          <span className="font-montserrat text-[10px] tracking-[0.3em] font-extrabold text-brand-orange uppercase block mb-3">
            Bespoke Portfolio
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Our Landmark Masterworks
          </h1>
          <p className="font-urbanist text-gray-400 text-sm md:text-base max-w-xl mt-3 leading-relaxed">
            Discover a handpicked showcase of high-end estates, commercial towers, and restorations defined by symmetrical design rules.
          </p>
        </div>
      </section>

      {/* 2. Categories Filter Toolbar */}
      <section className="py-8 bg-slate-950 border-b border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-center md:justify-start gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-urbanist text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer focus:outline-none ${
                filter === cat
                  ? "bg-brand-orange text-white shadow-lg glow-orange"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Modern Portfolio Grid and Masonry Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(proj)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 bg-slate-950 cursor-pointer"
              >
                {/* Project Image Zoom */}
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover scale-101 group-hover:scale-106 duration-700 transition-transform opacity-70 group-hover:opacity-85"
                  referrerPolicy="no-referrer"
                />

                {/* Symmetrical shadow layout gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Quick Details Floating Info */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-1 text-[10px] uppercase font-mono tracking-widest bg-brand-orange text-white rounded-full">
                      {proj.category}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-slate-900/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-4 h-4 text-brand-orange" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-montserrat font-extrabold text-xl text-white tracking-tight mb-1.5 group-hover:text-brand-orange transition-colors">
                      {proj.title}
                    </h3>
                    <p className="font-urbanist text-gray-300 text-xs flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                      <span>{proj.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Luxury Project Brief Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-md"
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[680px]"
            >
              {/* Close Button Trigger */}
              <button
                id="btn-close-project-modal"
                aria-label="Close Project Information Modal"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-brand-orange border border-white/10 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Side A: Big Project Image Block */}
              <div className="w-full md:w-1/2 h-48 md:h-full relative shrink-0">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/60 to-slate-900" />
              </div>

              {/* Side B: Project Specifications Details */}
              <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-brand-orange text-white rounded-full">
                      {selectedProject.category}
                    </span>
                    <span className="px-3.5 py-1 text-[10px] font-mono tracking-widest bg-slate-800 text-gray-300 rounded-full">
                      {selectedProject.size}
                    </span>
                  </div>

                  <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-white tracking-tight mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="font-urbanist text-brand-orange text-sm mb-6 font-semibold-mono">
                    Owner: {selectedProject.client}
                  </p>

                  <p className="font-urbanist text-gray-300 text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Highlights Grid checklist */}
                  <div className="mb-6">
                    <h4 className="font-montserrat font-bold text-xs tracking-wider text-white uppercase mb-3.5">
                      Spec highlights
                    </h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-400">
                          <CheckSquare className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span className="leading-tight">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom stats row */}
                <div className="border-t border-white/5 pt-6 mt-6 grid grid-cols-2 gap-4 text-xs font-mono text-gray-500">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    <span className="truncate">{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-blue" />
                    <span>Completed {selectedProject.year}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Projects;
