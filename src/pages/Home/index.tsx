import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Shield,
  Zap,
  PenTool,
  Compass,
  Star,
  Activity,
  Award,
  Users,
  CheckCircle,
  Building2,
  Calendar,
  MapPin,
} from "lucide-react";
import Button from "../../components/common/Button";
import {
  SERVICES_DATA,
  PROJECTS_DATA,
  TESTIMONIALS_DATA,
} from "../../constants";

export const Home: React.FC = () => {
  // Stagger animation variations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full">
      {/* 1. Cinematic Full-Screen Hero Section */}
      <section className="relative h-[calc(100vh-88px)] min-h-[600px] w-full flex items-center bg-slate-950 overflow-hidden">
        {/* Cinematic Backdrop Image overlaid with precise gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="SN Luxury Architecture Backdrop"
            className="w-full h-full object-cover opacity-35 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          {/* Symmetrical Dual Brand Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          {/* Subtle floating radial brand color halos */}
          <div className="absolute top-1/4 -left-12 w-96 h-96 rounded-full bg-brand-orange/10 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-12 w-96 h-96 rounded-full bg-brand-blue/10 blur-[120px]" />
        </div>

        {/* Hero Core Copy & Card CTA */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
          {/* Lead Copy Panel */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-6 w-fit backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f8fafc]">
                Young Minds, Bold Challenges
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl sm:text-6xl md:text-7.5xl font-bold leading-[0.95] tracking-tighter"
            >
              Trust The Process. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#0d6efd] to-[#ff6b00]">
                We Build Your Dream.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-urbanist text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mb-10"
            >
              We are a group of passionate, driven young professionals taking on
              the challenge of modern architecture. Delivering meticulous
              craftsmanship across interiors, construction, and planning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap items-center gap-6 mt-4"
            >
              <Link to="/projects">
                <button className="px-10 py-5 bg-[#ff6b00] text-white rounded-xl font-bold uppercase text-sm tracking-widest hover:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all cursor-pointer">
                  Explore Projects
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-10 py-5 bg-white/5 border border-white/20 backdrop-blur-md rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-white/10 transition-all cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Quick Glancy Metrics Card Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="glassmorphism p-8 rounded-2xl glow-orange">
              <span className="font-montserrat text-xs tracking-[0.25em] text-brand-orange font-bold uppercase block mb-3">
                PROJECT STATUS REAL-TIME
              </span>
              <h3 className="font-montserrat font-bold text-xl text-white leading-tight mb-6">
                Active Landmark Delivery
              </h3>

              <div className="flex flex-col gap-5 font-urbanist">
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-brand-orange/10 text-brand-orange">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">
                        2 BHk Duplex villa
                      </span>
                      <span className="text-xs font-mono text-brand-orange font-semibold">
                        94% Done
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="bg-brand-orange h-full w-[94%]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-brand-blue/10 text-brand-blue">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-white">
                        Harmony city
                      </span>
                      <span className="text-xs font-mono text-brand-blue font-semibold">
                        72% Done
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full mt-2 overflow-hidden">
                      <div className="bg-brand-blue h-full w-[72%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 font-mono">
                <span>EST: MIAMI & SINGAPORE</span>
                <span className="flex items-center gap-1.5 text-brand-blue">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" />
                  ONLINE SECURE TELEMETRY
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Introduction Symmetrical Row */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] border border-white/10 glow-orange">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80"
                alt="Construction Management Precision"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-6 glassmorphism p-5 rounded-xl z-20 hidden sm:block max-w-[200px] border border-white/10">
              <span className="font-montserrat font-extrabold text-3xl text-brand-orange block">
                2+
              </span>
              <span className="font-urbanist text-xs text-gray-300 font-bold tracking-wide mt-1 block">
                Years of Dynamic Craftsmanship
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-orange uppercase">
              Elite Engineering Standard
            </span>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
              We Design and Engineer High-End Architectural Ecosystems
            </h2>
            <p className="font-urbanist text-gray-400 text-sm md:text-base leading-relaxed">
              At Arka infra & interiors, we believe a build is a legacy. We
              collaborate with internationally acclaimed architects, premium
              material artisans, and precise structural planners to execute
              bespoke concepts that are visually arresting yet structurally
              immortal.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">
                    Full-Stack Delivery
                  </h4>
                  <p className="font-urbanist text-xs text-gray-400 mt-1">
                    From blueprint planning to absolute structural handover.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">
                    Parametric Costing
                  </h4>
                  <p className="font-urbanist text-xs text-gray-400 mt-1">
                    Airtight material procurement with zero safety compromise.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-white/5 pt-6">
              <Link to="/about">
                <Button
                  variant="outline"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4 text-brand-orange" />}
                >
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Services Fast-Access Showcase */}
      <section className="py-24 bg-slate-900/45 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-4 text-left">
              <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-blue uppercase">
                What We Craft
              </span>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
                Our Primary Building Disciplines
              </h2>
            </div>
            <Link to="/services">
              <Button
                variant="outline"
                icon={<ArrowRight className="w-4 h-4 text-brand-orange" />}
              >
                All Services
              </Button>
            </Link>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES_DATA.slice(0, 3).map((svc) => (
              <motion.div
                key={svc.id}
                variants={itemVariants}
                className="glassmorphism p-8 rounded-2xl group hover:border-brand-orange/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Micro background gradient glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="p-3.5 rounded-xl bg-slate-950 border border-white/5 w-fit group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 mb-6">
                  {svc.id === "residential" && (
                    <Building2 className="w-6 h-6 text-brand-orange group-hover:text-white" />
                  )}
                  {svc.id === "commercial" && (
                    <Activity className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  )}
                  {svc.id === "interior" && (
                    <PenTool className="w-6 h-6 text-brand-orange group-hover:text-white" />
                  )}
                </div>

                <h3 className="font-montserrat font-bold text-lg text-white mb-3 group-hover:text-brand-orange transition-colors">
                  {svc.title}
                </h3>
                <p className="font-urbanist text-gray-400 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>

                <ul className="flex flex-col gap-2.5 border-t border-white/5 pt-5 mb-6">
                  {svc.benefits.slice(0, 2).map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs font-urbanist text-gray-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-orange" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/services"
                  className="font-mono text-xs tracking-wider text-brand-orange flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>EXPLORE SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Why Choose Us (Symmetry Philosophy Metrics) */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Brand values list */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-orange uppercase">
            The SN Philosophy
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
            How We Safeguard and Honor Your Capital Investments
          </h2>
          <p className="font-urbanist text-gray-400 text-sm md:text-base leading-relaxed">
            Construction is a high-stake commitment. We design our
            organizational process around mitigating risks, managing supply
            chains precisely, and ensuring total transparency during the entire
            implementation lifecycle.
          </p>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange h-fit shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">
                  Full Post-Build Bulletproof Warranty
                </h4>
                <p className="font-urbanist text-sm text-gray-400 mt-1">
                  Our materials and structural methods undergo stress
                  assessments, backed by our 15-year comprehensive warranty
                  coverage, ensuring peace of mind.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue h-fit shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">
                  LEED Golden Green Credentials
                </h4>
                <p className="font-urbanist text-sm text-gray-400 mt-1">
                  We formulate low-emission, highly thermal-efficient layout
                  frames, lowering heating and cooling bills by up to 35% across
                  real estates.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white h-fit shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">
                  BIM Parametric Holograph Blueprints
                </h4>
                <p className="font-urbanist text-sm text-gray-400 mt-1">
                  Walk through your residential build in virtual reality with
                  exact light simulations, ensuring changes are finalized before
                  materials are ordered.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Showcase image layout with floating stats overlay */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-[4/3] glow-blue">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80"
              alt="Elite Architectural Blueprint Review"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Dark glass cover */}
            <div className="absolute inset-0 bg-slate-950/20" />
          </div>

          {/* Floating Live Telemetry Statistics Card */}
          <div className="absolute -left-6 bottom-6 glassmorphism p-6 rounded-xl hidden sm:block border border-white/10 max-w-[280px]">
            <span className="font-montserrat text-[10px] tracking-wider text-brand-blue uppercase font-bold block mb-4">
              PERFORMANCE SPECS
            </span>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="font-montserrat text-2xl font-extrabold text-white">
                  100%
                </span>
                <span className="font-urbanist text-[11px] text-gray-400 block mt-1">
                  On-Time Handover
                </span>
              </div>
              <div>
                <span className="font-montserrat text-2xl font-extrabold text-white">
                  0
                </span>
                <span className="font-urbanist text-[11px] text-gray-400 block mt-1">
                  Safety Incidents
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Highlight Featured Projects Row */}
      <section className="py-24 bg-slate-900/45 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="flex flex-col gap-4 text-left">
              <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-orange uppercase">
                Curated Showcase
              </span>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
                Our Landmark Masterworks
              </h2>
            </div>
            <Link to="/projects">
              <Button variant="outline">View All Portfolios</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS_DATA.slice(0, 3).map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 cursor-pointer bg-slate-950"
              >
                {/* Project Image */}
                <img
                  src={proj.imageUrl}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />

                {/* Symmetrical Gradient Cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Quick Info Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-center">
                    <span className="px-3.5 py-1 text-[10px] font-mono tracking-widest bg-brand-orange text-white rounded-full">
                      {proj.category}
                    </span>
                    <span className="font-mono text-xs text-brand-blue font-bold tracking-widest">
                      {proj.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-montserrat font-extrabold text-xl text-white tracking-tight mb-1 group-hover:text-brand-orange transition-colors">
                      {proj.title}
                    </h3>
                    <p className="font-urbanist text-gray-300 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-blue shrink-0" />
                      <span>{proj.location}</span>
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10 hidden group-hover:flex items-center justify-between text-xs text-brand-orange">
                      <span className="font-mono tracking-wider font-semibold">
                        VIEW PORTFOLIO
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Static Animated Statistics Counters */}
      <section className="py-20 relative bg-slate-950 border-b border-white/5 overflow-hidden">
        {/* Floating gradient colors */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-extrabold text-4xl sm:text-5xl text-brand-orange">
              25+
            </span>
            <span className="font-urbanist text-xs tracking-wider text-gray-400 font-bold uppercase mt-1">
              PROUD COMPLETED BUILDS
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white">
              38+
            </span>
            <span className="font-urbanist text-xs tracking-wider text-gray-400 font-bold uppercase mt-1">
              ELITE CRAFT SPECIALISTS
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-extrabold text-4xl sm:text-5xl text-brand-blue">
              2+
            </span>
            <span className="font-urbanist text-xs tracking-wider text-gray-400 font-bold uppercase mt-1">
              YEARS ACTIVE & DRIVEN
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white">
              100%
            </span>
            <span className="font-urbanist text-xs tracking-wider text-gray-400 font-bold uppercase mt-1">
              DREAM DELIVERY SATISFACTION
            </span>
          </div>
        </div>
      </section>

      {/* 7. Beautiful Static Testimonials section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center flex flex-col items-center gap-4 mb-16">
          <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-blue uppercase">
            Client Voices
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-tight">
            Trust Formulated Through Execution
          </h2>
          <p className="font-urbanist text-gray-400 text-sm max-w-lg">
            We partner with discerning private families, corporate assets
            developers, and elite managers globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glassmorphism p-8 rounded-2xl flex flex-col justify-between border border-white/5 relative"
            >
              <div className="absolute top-6 right-8 text-6xl text-white/5 font-serif pointer-events-none">
                “
              </div>

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-brand-orange mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-orange" />
                  ))}
                </div>

                <p className="font-urbanist text-gray-300 text-sm leading-relaxed italic mb-8">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-blue/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-white">
                    {t.name}
                  </h4>
                  <span className="font-urbanist text-xs text-gray-400 block mt-0.5">
                    {t.role},{" "}
                    <span className="text-brand-orange">{t.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Bold Premium CTA Banner Section */}
      <section className="py-24 relative bg-slate-950 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Futuristic Building Facade"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-orange/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl text-left flex flex-col gap-6">
            <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-orange uppercase">
              Ready to Manifest?
            </span>
            <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Let's Co-Create Your Next Landmark Masterwork
            </h2>
            <p className="font-urbanist text-gray-300 text-sm md:text-base leading-relaxed">
              Connect with our principal estimator and managing spatial
              designer. We provide full high-definition parametric costing grids
              and conceptual blueprint layouts.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Private Consult
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Browse Disciplines
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
