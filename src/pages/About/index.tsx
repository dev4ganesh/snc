import React from "react";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Award,
  Linkedin,
  MapPin,
  Users,
  History,
} from "lucide-react";
import { TIMELINE_DATA, TEAM_DATA } from "../../constants";

export const About: React.FC = () => {
  return (
    <div className="relative w-full">
      {/* A. Cinematic Page Header Banner */}
      <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
            alt="Tower Building Structural Review"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-brand-orange/5 blur-[100px]" />
          <div className="absolute bottom-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-blue/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
          <span className="font-montserrat text-[10px] tracking-[0.3em] font-extrabold text-brand-orange uppercase block mb-3">
            Trust the Process
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            We Build Your Dream
          </h1>
          <p className="font-urbanist text-gray-400 text-sm md:text-base max-w-xl mt-3 leading-relaxed">
            We are a group of passionate young professionals who co-founded SN
            Constructions 2 years back. Making high-integrity design real across
            interiors, construction, and planning.
          </p>
        </div>
      </section>

      {/* B. Core Company Story & Symmetrical Details */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left text column */}
        <div className="flex flex-col gap-6 text-left">
          <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-blue uppercase">
            Sincere Handcrafted Spaces
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
            Harsha's Vision to Redefine Building Standards
          </h2>
          <p className="font-urbanist text-gray-400 text-sm md:text-base leading-relaxed">
            Starting SN Constructions just 2 years back, our young team set out
            with a bold vision. We realized that clients deserve absolute
            collaboration, flawless communication, and superior craftsmanship.
            We focus on physical excellence across interiors, planning, and
            structural construction.
          </p>
          <p className="font-urbanist text-gray-400 text-sm md:text-base leading-relaxed">
            We don't believe in old, slow, rigid workflows. As young innovators
            taking on this challenge, we leverage modern modeling, pristine
            material choices, and tight timelines. Our philosophy is absolute:
            Trust the process, we build your dream.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-8 mt-4">
            <div>
              <span className="font-montserrat text-3xl font-extrabold text-brand-orange block">
                2+
              </span>
              <span className="font-urbanist text-[11px] text-gray-500 uppercase font-bold block mt-1 tracking-wider">
                Years Active
              </span>
            </div>
            <div>
              <span className="font-montserrat text-3xl font-extrabold text-white block">
                100%
              </span>
              <span className="font-urbanist text-[11px] text-gray-500 uppercase font-bold block mt-1 tracking-wider">
                Dream Delivery
              </span>
            </div>
            <div>
              <span className="font-montserrat text-3xl font-extrabold text-brand-blue block">
                25+
              </span>
              <span className="font-urbanist text-[11px] text-gray-500 uppercase font-bold block mt-1 tracking-wider">
                Projects Completed
              </span>
            </div>
          </div>
        </div>

        {/* Right high-contrast image overlapping visual setup */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 glow-orange relative z-10">
            <img
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80"
              alt="High end luxury building design review"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>

          <div className="absolute -bottom-8 -left-8 rounded-2xl overflow-hidden aspect-square w-48 border border-white/10 hidden sm:block z-20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=400&h=400&q=80"
              alt="Luxury masonry stones close up"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* C. Mission, Vision, Values Symmetrical Cards */}
      <section className="py-24 bg-slate-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glassmorphism p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-orange/5 to-transparent" />
            <div className="p-3.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange w-fit mb-6">
              <Target className="w-6 h-6" />
            </div>

            <h3 className="font-montserrat font-bold text-xl text-white mb-3">
              Our Structural Mission
            </h3>
            <p className="font-urbanist text-gray-400 text-sm leading-relaxed">
              We engineer uncompromising physical frameworks using parametric
              modeling, premium raw materials, carbon-conscious energy loops,
              and master builders. We treat construction not as raw assembly,
              but as structural arts and protective investment stewardship.
            </p>
          </div>

          <div className="glassmorphism p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-blue/5 to-transparent" />
            <div className="p-3.5 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue w-fit mb-6">
              <Eye className="w-6 h-6" />
            </div>

            <h3 className="font-montserrat font-bold text-xl text-white mb-3">
              Our Spatial Vision
            </h3>
            <p className="font-urbanist text-gray-400 text-sm leading-relaxed">
              To remain a global, pristine symbol of luxury building, where the
              signature of SN Constructions signals absolute trust, aesthetic
              dominance, sustainable carbon neutrality, and lifetime structural
              safety in high-end real estates.
            </p>
          </div>
        </div>
      </section>

      {/* D. Vertical Timeline Section */}
      <section className="py-24 max-w-5xl mx-auto px-6 md:px-12 text-center text-left">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-orange uppercase">
            Chronology
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
            How Absolute Integrity Accumulates
          </h2>
          <p className="font-urbanist text-gray-400 text-sm max-w-md">
            Our historical achievements representing years of physical creation
            and architectural innovation.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-12">
          {TIMELINE_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Floating year badge on the left for desktop */}
              <div className="absolute -left-[5.5rem] md:-left-44 top-0.5 hidden sm:flex justify-end w-24 pr-4">
                <span className="font-montserrat font-extrabold text-2xl text-brand-orange group-hover:text-white transition-colors duration-200">
                  {item.year}
                </span>
              </div>

              {/* Glowing anchor point */}
              <div className="absolute -left-[2.55rem] md:-left-[3.55rem] top-2.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-brand-orange z-10 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors duration-300" />

              {/* Mobile micro-badge */}
              <span className="sm:hidden font-montserrat font-extrabold text-lg text-brand-orange block mb-1">
                {item.year}
              </span>

              <h3 className="font-montserrat font-bold text-lg text-white mb-2">
                {item.title}
              </h3>
              <p className="font-urbanist text-gray-400 text-sm leading-relaxed max-w-xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* E. Elite Leadership Team Grid */}
      <section className="py-24 bg-slate-900/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex flex-col items-center gap-4 mb-16">
            <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-blue uppercase">
              The Curators
            </span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
              Elite Architectural Directors
            </h2>
            <p className="font-urbanist text-gray-400 text-sm max-w-md">
              Led by visionary command delivering high-integrity architectural
              design, professional planning, and premium builds.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {TEAM_DATA.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col gap-4 text-left w-full max-w-[300px]"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] border border-white/5 bg-slate-950">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 scale-102 group-hover:scale-106 opacity-85 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Brand Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* Profile Social Link Hover */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-slate-900/70 border border-white/10 hover:bg-brand-orange text-white p-2.5 rounded-full backdrop-blur-md transition-colors"
                      aria-label="Linkedin profile link"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <div>
                  <h4 className="font-montserrat font-bold text-sm text-white group-hover:text-brand-orange transition-colors">
                    {member.name}
                  </h4>
                  <span className="font-urbanist text-xs text-gray-400 mt-1 block">
                    {member.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
