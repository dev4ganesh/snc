import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Palette,
  Wrench,
  Compass,
  Briefcase,
  Layers,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Hammer,
  ShieldAlert,
  Sliders,
  Award,
} from "lucide-react";
import Button from "../../components/common/Button";
import { SERVICES_DATA } from "../../constants";
import { useToast } from "../../context/ToastContext";

export const Services: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const { showWhatsAppAdvisorToast } = useToast();

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const steps = [
    {
      num: "01",
      title: "Parametric Briefing",
      desc: "Our modelers capture spatial bounds, target dimensions, raw lighting vectors, and material expectations.",
    },
    {
      num: "02",
      title: "Holographic Mocking",
      desc: "We generate comprehensive, virtual bim environments so you can walk through the layout directly before build.",
    },
    {
      num: "03",
      title: "Airtight Cost-Design",
      desc: "Bespoke materials procurement schedules are locked down, mitigating scope inflation completely.",
    },
    {
      num: "04",
      title: "Pragmatic Engineering",
      desc: "Our elite tier-1 contractors concrete, reinforce, frame, and seal utilizing advanced safety standards.",
    },
  ];

  const faqs = [
    {
      q: "Does Arka infra & interiors handle building permits and local municipal approvals?",
      a: "Yes. Our team handles the entire local municipal clearance process, town planning approvals, zoning compliance, and structural clearances to validate your design plans rapidly and legally.",
    },
    {
      q: "How does the 15-year comprehensive building warranty work?",
      a: "Our structures undergo strict moisture sensors, core stress, and thermal envelope audits during construction. We back our labor, concrete foundation, moisture barrier, framing, and timber joins with a signed 15-year comprehensive structural warranty.",
    },
    {
      q: "What is your approach to cost overrun and scope management?",
      a: "Before signing build agreements, we provide fully detailed parametric costing schedules with guaranteed maximum price (GMP) covenants. This shields our clients from intermediate inflation, supply fluctuations, and labor anomalies.",
    },
    {
      q: "Can we source custom global fittings and rare marble layouts?",
      a: "We have exclusive material corridors in Carrara, Italy (for premium marble), Bavaria, Germany (for high-end triple glazing systems), and solid wood suppliers in Kyoto, Japan. Our logistics team handles duty clearance, specialized shipping, and professional local masonry installation.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* 1. Page Header Section */}
      <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1920&q=80"
            alt="Advanced construction schematics blueprint"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute bottom-1/2 right-1/4 w-80 h-80 rounded-full bg-brand-orange/5 blur-[100px]" />
          <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-blue/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
          <span className="font-montserrat text-[10px] tracking-[0.3em] font-extrabold text-brand-blue uppercase block mb-3">
            Elite Capabilities
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Our Premium Building Disciplines
          </h1>
          <p className="font-urbanist text-gray-400 text-sm md:text-base max-w-xl mt-3 leading-relaxed">
            From the initial deep parametric blueprinting phase to final bespoke
            millwork finishes, we deliver structural excellence.
          </p>
        </div>
      </section>

      {/* 2. Structured Services Premium Cards Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((svc) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glassmorphism p-8 rounded-2xl border border-white/5 group hover:border-brand-orange/30 hover:glow-orange transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Soft background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="p-4 rounded-xl bg-slate-950 border border-white/5 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all w-fit mb-6">
                  {svc.id === "residential" && (
                    <Building2 className="w-6 h-6 text-brand-orange group-hover:text-white" />
                  )}
                  {svc.id === "commercial" && (
                    <Layers className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  )}
                  {svc.id === "interior" && (
                    <Palette className="w-6 h-6 text-brand-orange group-hover:text-white" />
                  )}
                  {svc.id === "renovation" && (
                    <Wrench className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  )}
                  {svc.id === "architecture" && (
                    <Compass className="w-6 h-6 text-brand-orange group-hover:text-white" />
                  )}
                  {svc.id === "project-management" && (
                    <Briefcase className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  )}
                </div>

                <h3 className="font-montserrat font-bold text-xl text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {svc.title}
                </h3>
                <p className="font-urbanist text-gray-400 text-sm leading-relaxed mb-6">
                  {svc.longDescription}
                </p>

                {/* Benefits checkpoints */}
                <ul className="flex flex-col gap-3 border-t border-white/5 pt-6 mb-8">
                  {svc.benefits.map((b, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs font-urbanist text-gray-300 leading-tight"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-brand-orange hover:text-white transition-colors group/link"
                >
                  <span>BOOK AN ESTIMATE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The 4-Step Structural Handover Framework */}
      <section className="py-24 bg-slate-900/40 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center flex flex-col items-center gap-4 mb-20">
            <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-orange uppercase">
              The Protocol
            </span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
              Symmetrical Delivery Framework
            </h2>
            <p className="font-urbanist text-gray-400 text-sm max-w-md">
              From signature conception to physical key handover, each step is
              strictly audited.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((st, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 text-left p-6 rounded-xl bg-slate-950/30 border border-white/5 relative"
              >
                <span className="font-montserrat font-extrabold text-4xl text-brand-orange/20 block absolute right-6 top-4">
                  {st.num}
                </span>

                <h4 className="font-montserrat font-extrabold text-base text-white tracking-wide mt-4">
                  {st.title}
                </h4>
                <p className="font-urbanist text-gray-400 text-xs md:text-sm leading-relaxed mt-2">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Expandable FAQ Accordion Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 md:px-12 text-left">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-blue uppercase">
            Briefings
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
            Frequently Asked Queries
          </h2>
          <p className="font-urbanist text-gray-400 text-sm max-w-md">
            Everything a developer or private builder should verify before
            initiating layout construction.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFAQ === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/5 bg-slate-950/30 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors cursor-pointer focus:outline-none"
                >
                  <span className="font-montserrat font-bold text-sm md:text-base text-white flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-orange shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-orange" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="font-urbanist text-gray-400 text-xs md:text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Custom CTA banner */}
      <section className="py-20 bg-slate-950 border-t border-white/5 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-xl mx-auto px-6 relative z-10 flex flex-col gap-6">
          <h2 className="font-montserrat font-bold text-3xl text-white tracking-tight">
            Download Core Materials Booklet
          </h2>
          <p className="font-urbanist text-gray-400 text-sm">
            Access our private materials catalog mapping imported woods, Carrara
            marbles, sustainable cement bonds, and security glazed framework
            details.
          </p>

          <div className="flex justify-center gap-4 mt-2">
            <Button
              variant="secondary"
              onClick={() =>
                showWhatsAppAdvisorToast("Materials Booklet download")
              }
            >
              Request Booklet PDF
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
