import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Check,
  Instagram,
  Linkedin,
  Facebook
} from "lucide-react";
import Button from "../../components/common/Button";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "Residential Estate",
    budget: "$500k - $1M",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate luxurious submission message
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "Residential Estate",
        budget: "$500k - $1M",
        message: ""
      });
    }, 4000);
  };

  const mapCoordinates = {
    lat: "25.7617° N",
    lng: "80.1918° W",
    alt: "Level 54, Core A"
  };

  return (
    <div className="relative w-full">
      
      {/* 1. Page Header Section */}
      <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80"
            alt="Elite architect office meeting space backdrop"
            className="w-full h-full object-cover opacity-15"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          <div className="absolute bottom-1/2 right-1/4 w-80 h-80 rounded-full bg-brand-orange/5 blur-[100px]" />
          <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-blue/5 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
          <span className="font-montserrat text-[10px] tracking-[0.3em] font-extrabold text-brand-orange uppercase block mb-3">
            Get In Touch
          </span>
          <h1 className="font-montserrat font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Initiate Your Conception Brief
          </h1>
          <p className="font-urbanist text-gray-400 text-sm md:text-base max-w-xl mt-3 leading-relaxed">
            Reach out to our principal estimators or book a walkthrough in our virtual BIM galleries.
          </p>
        </div>
      </section>

      {/* 2. Form & Contacts Grid Showcase */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Hand: Company details & core contacts */}
        <div className="lg:col-span-5 flex flex-col gap-10 text-left">
          
          <div className="flex flex-col gap-4">
            <span className="font-montserrat text-xs tracking-[0.3em] font-extrabold text-brand-blue uppercase">
              Our Office
            </span>
            <h2 className="font-montserrat font-bold text-3xl text-white tracking-tight">
              Anantapur Office
            </h2>
            <p className="font-urbanist text-gray-400 text-sm leading-relaxed">
              We are a passionate team of young professionals taking on the challenges of modern construction, planning, and curated interiors. Trust the process, we build your dream.
            </p>
          </div>

          {/* Symmetrical list of contacts */}
          <div className="flex flex-col gap-6 font-urbanist">
            <div className="flex gap-4 items-start p-4.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Anantapur Location</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Court Road, Anantapur 515001, Andhra Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Advisory Lines</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  +91 99000 00000 (General Enquiries) <br />
                  +91 99111 11111 (Direct Estimations)
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Digital Mail Curators</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  shrinidhiconstruction99@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Office Hours</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Monday – Saturday: 09:00 AM – 06:30 PM <br />
                  Sunday: Prior appointments only
                </p>
              </div>
            </div>
          </div>

          {/* Social icons block */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">Connect:</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-orange hover:bg-brand-orange/15 text-gray-400 hover:text-white flex items-center justify-center transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin Company Profile"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-brand-blue hover:bg-brand-blue/15 text-gray-400 hover:text-white flex items-center justify-center transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Right Hand: Glassmorphism contact form */}
        <div className="lg:col-span-12 xl:col-span-7">
          <div className="glassmorphism p-8 md:p-10 rounded-2xl glow-blue relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-blue/5 to-transparent pointer-events-none" />

            <span className="font-montserrat text-xs tracking-[0.25em] text-brand-orange font-bold uppercase block mb-3">
              ENQUIRY INTERNET PROTOCOL
            </span>
            <h3 className="font-montserrat font-bold text-2xl text-white leading-tight mb-8">
              Initiate Project Brief
            </h3>

            {/* Check overlay for success */}
            {formSubmitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 border-2 border-brand-orange flex items-center justify-center text-brand-orange mb-6 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-montserrat font-extrabold text-xl text-white mb-2">
                  Conceptualization Request Logged
                </h4>
                <p className="font-urbanist text-gray-400 text-xs md:text-sm max-w-sm">
                  Our principal estimating officer will reach out directly within the next 4 business hours to organize a virtual BIM walk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 font-urbanist">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      Full Client Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sir Arthur Sterling"
                      className="w-full px-4 py-3 bg-white/5 border border-white/5 hover:border-white/10 rounded-xl text-white placeholder-gray-600 font-urbanist text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      Official Client Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. arthur@sterlingholding.co"
                      className="w-full px-4 py-3 bg-white/5 border border-white/5 hover:border-white/10 rounded-xl text-white placeholder-gray-600 font-urbanist text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      Secure Phone Contact
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 (305) 555-0199"
                      className="w-full px-4 py-3 bg-white/5 border border-white/5 hover:border-white/10 rounded-xl text-white placeholder-gray-600 font-urbanist text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                      Primary Build Discipline
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-950 border border-white/5 hover:border-white/10 rounded-xl text-white font-urbanist text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange [&>option]:bg-slate-900"
                    >
                      <option value="Residential Estate">Residential Estate</option>
                      <option value="Commercial Skyline">Commercial Skyline</option>
                      <option value="Interior Architecture">Interior Architecture</option>
                      <option value="Premium Restoration">Premium Restoration</option>
                      <option value="Bespoke Management">Bespoke Management</option>
                    </select>
                  </div>
                </div>

                {/* Estimate Budget Slider */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Target Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-950 border border-white/5 hover:border-white/10 rounded-xl text-white font-urbanist text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange [&>option]:bg-slate-900"
                  >
                    <option value="$500k - $1M">$500,000 – $1,000,000</option>
                    <option value="$1M - $5M">$1,000,000 – $5,000,000</option>
                    <option value="$5M - $20M">$5,000,000 – $20,000,000</option>
                    <option value="$20M+">$20,000,000 + (Sovereign / Enterprise)</option>
                  </select>
                </div>

                {/* Brief Message details */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Target Concept Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe spatial parameters, geographical anomalies, finish material requests, etc."
                    className="w-full px-4 py-3 bg-white/5 border border-white/5 hover:border-white/10 rounded-xl text-white placeholder-gray-600 font-urbanist text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange resize-none"
                  />
                </div>

                <div className="mt-4">
                  <Button type="submit" variant="primary" className="w-full justify-center" icon={<Send className="w-4 h-4" />}>
                    Secure Log Brief
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

      </section>

      {/* 3. Google Maps Architectural Placeholder Section */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl overflow-hidden bg-slate-950 border border-white/10 p-8 md:p-12 relative flex flex-col justify-end min-h-[350px] shadow-2xl overflow-hidden group">
          
          {/* Faux elegant Blueprint Grid Background Map representation */}
          <div className="absolute inset-0 z-0 bg-[#090e18] opacity-75">
            {/* Visual map design using CSS vector lines */}
            <div className="w-full h-full border border-white/5 grid grid-cols-12 grid-rows-6">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="border-t border-l border-white/[0.02] relative">
                  {i === 24 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {/* Brand location pin pulse */}
                      <span className="absolute w-12 h-12 rounded-full bg-brand-orange/15 border border-brand-orange animate-ping" />
                      <span className="absolute w-4 h-4 bg-brand-orange rounded-full border-2 border-white scale-102 glow-orange" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Symmetrical translucent coordinates info block */}
          <div className="glassmorphism p-6 rounded-xl md:max-w-md relative z-10 text-left border border-white/10">
            <span className="font-montserrat text-[10px] tracking-[0.2em] text-brand-orange uppercase font-bold block mb-1">
              Live GEO COORDINATES
            </span>
            <h4 className="font-montserrat font-extrabold text-sm text-white mb-4">
              Brickell luxury Towers, Miami
            </h4>

            <div className="grid grid-cols-3 gap-4 text-xs font-mono text-gray-400">
              <div>
                <span className="text-[10px] text-gray-500 block uppercase font-urbanist">LATITUDE</span>
                <span className="text-white font-bold">{mapCoordinates.lat}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block uppercase font-urbanist">LONGITUDE</span>
                <span className="text-white font-bold">{mapCoordinates.lng}</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-500 block uppercase font-urbanist">LOCATION</span>
                <span className="text-white font-bold">{mapCoordinates.alt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/18005553223"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct message SN Constructions on WhatsApp"
        className="fixed bottom-24 right-8 z-40 bg-zinc-950/90 border border-white/15 h-12 pl-4 pr-5 rounded-full flex items-center justify-center gap-2.5 text-xs text-white hover:text-brand-orange cursor-pointer transition-all hover:border-brand-orange shadow-2xl group"
        onClick={(e) => {
          e.preventDefault();
          alert("Opening WhatsApp chat with SN Constructions curated assistant. Representative is active.");
        }}
        style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.4)" }}
      >
        <span className="absolute inset-0 bg-brand-orange/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative" />
        <MessageCircle className="w-4 h-4 text-brand-orange scale-102" />
        <span className="font-mono tracking-wider font-bold">WHATSAPP CHAT ADVISOR</span>
      </a>

    </div>
  );
};

export default Contact;
