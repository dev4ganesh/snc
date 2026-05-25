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
  Facebook,
} from "lucide-react";
import Button from "../../components/common/Button";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "Interior Design",
    budget: "₹5 Lakhs - ₹15 Lakhs",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct rich whatsapp message template
    const messageText = `*New Project Inquiry - SN Constructions*
----------------------------------------
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Project Type:* ${formData.projectType}
*Target Budget:* ${formData.budget}

*Project Details:*
${formData.message}
----------------------------------------
_Trust the process, we build your dream._`;

    const waNumber = "919154966677"; // Configure WhatsApp number
    const targetWaUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(messageText)}`;

    setWaUrl(targetWaUrl);
    setFormSubmitted(true);

    // Directly attempt to open WhatsApp in a new tab without redirecting our application
    window.open(targetWaUrl, "_blank", "noopener,noreferrer");
  };

  const mapCoordinates = {
    lat: "14.6756° N",
    lng: "77.5924° E",
    alt: "Court Road, Anantapur",
  };

  return (
    <div className="relative w-full">
      {/* 1. Page Header Section */}
      <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1920&q=80"
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
            Reach out to our principal estimators or book a walkthrough in our
            virtual BIM galleries.
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
              We are a passionate team of young professionals taking on the
              challenges of modern construction, planning, and curated
              interiors. Trust the process, we build your dream.
            </p>
          </div>

          {/* Symmetrical list of contacts */}
          <div className="flex flex-col gap-6 font-urbanist">
            <div className="flex gap-4 items-start p-4.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">
                  Anantapur Location
                </h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Court Road, Anantapur 515001, Andhra Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">Advisory Line</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  +91 91549 66677 (Inquiries & Estimations)
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-4.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
              <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-white">
                  Digital Mail Curators
                </h4>
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
            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
              Connect:
            </span>
            <a
              href="https://www.instagram.com/snc__interiors/"
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
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-orange/10 border-2 border-brand-orange flex items-center justify-center text-brand-orange mb-6 animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-montserrat font-extrabold text-xl text-white mb-2">
                  Inquiry Brief Generated!
                </h4>
                <p className="font-urbanist text-gray-400 text-sm max-w-md mb-8 leading-relaxed">
                  We have successfully compiled your project design
                  requirements. Click the button below to safely initiate your
                  chat with our estimating officer on WhatsApp.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange text-white font-montserrat font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-brand-orange/95 active:scale-95 transition-all text-center group"
                  >
                    <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                    Send via WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        projectType: "Interior Design",
                        budget: "₹5 Lakhs - ₹15 Lakhs",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 border border-white/10 hover:border-white/20 text-gray-300 font-montserrat font-semibold text-xs tracking-wider uppercase rounded-xl hover:bg-white/10 active:scale-95 transition-all text-center"
                  >
                    Edit / New Brief
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col gap-6 font-urbanist"
              >
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
                      placeholder="e.g. Ramesh Kumar"
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
                      placeholder="e.g. ramesh@gmail.com"
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
                      placeholder="e.g. +91 91549 66677"
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
                      <option value="Interior Design">Interior Design</option>
                      <option value="Construct a Home / Shop">
                        Construct a Home / Shop
                      </option>
                      <option value="Architectural Planning">
                        Architectural Planning
                      </option>
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
                    <option value="₹5 Lakhs - ₹15 Lakhs">
                      ₹5 Lakhs – ₹15 Lakhs
                    </option>
                    <option value="₹15 Lakhs - ₹35 Lakhs">
                      ₹15 Lakhs – ₹35 Lakhs
                    </option>
                    <option value="₹35 Lakhs - ₹75 Lakhs">
                      ₹35 Lakhs – ₹75 Lakhs
                    </option>
                    <option value="₹75 Lakhs - ₹2 Crores">
                      ₹75 Lakhs – ₹2 Crores
                    </option>
                    <option value="₹2 Crores+">₹2 Crores +</option>
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
                    placeholder="Describe your dream project, dimensional scope, preferred materials, style preferences, etc."
                    className="w-full px-4 py-3 bg-white/5 border border-white/5 hover:border-white/10 rounded-xl text-white placeholder-gray-600 font-urbanist text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange resize-none"
                  />
                </div>

                <div className="mt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full justify-center"
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    Send Brief via WhatsApp
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Google Maps Architectural Placeholder Section */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950 flex flex-col lg:flex-row gap-8 p-6 md:p-8">
          {/* Symmetrical translucent coordinates info block */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between p-6 rounded-xl bg-white/5 border border-white/5 text-left self-stretch">
            <div>
              <span className="font-montserrat text-[10px] tracking-[0.2em] text-brand-orange uppercase font-bold block mb-1">
                Live GEO COORDINATES
              </span>
              <h4 className="font-montserrat font-extrabold text-sm text-white mb-6">
                Court Road, Anantapur
              </h4>

              <div className="flex flex-col gap-4 text-xs font-mono text-gray-400">
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-urbanist mb-0.5">
                    LATITUDE
                  </span>
                  <span className="text-white font-bold">
                    {mapCoordinates.lat}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-urbanist mb-0.5">
                    LONGITUDE
                  </span>
                  <span className="text-white font-bold">
                    {mapCoordinates.lng}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase font-urbanist mb-0.5">
                    LOCATION
                  </span>
                  <span className="text-white font-bold">
                    {mapCoordinates.alt}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-gray-500 font-urbanist">
              Feel free to visit us directly for on-site design discussions.
              Prior appointments are appreciated.
            </div>
          </div>

          {/* Actual Google Maps Embed Element */}
          <div className="w-full lg:w-2/3 h-[350px] rounded-xl overflow-hidden border border-white/5 relative bg-slate-900 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436.59819485929665!2d77.59240486543!3d14.675584690059667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14bd0fd450e4f%3A0xd1aff342aa2de6c5!2sShri%20Nidhi%20Constructions!5e1!3m2!1sen!2sin!4v1779682583068!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(20%) contrast(105%) brightness(95%)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shri Nidhi Constructions Office Location Map"
              className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </section>

      {/* 4. Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/919154966677?text=Hi%20SN%20Constructions,%20I%20would%20like%20to%20know%20more%20about%20your%20design%20and%20construction%20services!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct message SN Constructions on WhatsApp"
        className="fixed bottom-24 right-8 z-40 bg-zinc-950/90 border border-white/15 h-12 pl-4 pr-5 rounded-full flex items-center justify-center gap-2.5 text-xs text-white hover:text-brand-orange cursor-pointer transition-all hover:border-brand-orange shadow-2xl group"
        style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.4)" }}
      >
        <span className="absolute inset-0 bg-brand-orange/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse relative" />
        <MessageCircle className="w-4 h-4 text-brand-orange scale-102" />
        <span className="font-mono tracking-wider font-bold">
          WHATSAPP CHAT ADVISOR
        </span>
      </a>
    </div>
  );
};

export default Contact;
