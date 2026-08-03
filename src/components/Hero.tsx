import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronLeft, ChevronRight, ArrowUpRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('Dental Checkup');
  const [activeSlide, setActiveSlide] = useState(1);

  const row1Tabs = ['Dental Checkup', 'Teeth Cleaning'];
  const row2Tabs = ['Tooth Filling', 'Gum Treatment', 'Retainers'];

  return (
    <section className="relative pt-6 pb-6 px-4 max-w-7xl mx-auto">
      {/* Dark Outer Hero Box Container (Matching Orbix Design) */}
      <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0D1520] text-white min-h-[640px] lg:min-h-[700px] flex flex-col justify-between p-6 sm:p-10 border border-slate-800 shadow-2xl">
        {/* Background Dental Patient Image (Right Aligned Close Up) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=80"
            alt="Family-Friendly Dental Patient Care"
            className="w-full h-full object-cover object-[75%_center] opacity-90"
          />
          {/* Precise gradient overlay: Dark background fade on the left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1520] via-[#0D1520]/80 to-transparent w-full md:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1520] via-transparent to-[#0D1520]/60" />
        </div>

        {/* Floating Header Inside Hero Container */}
        <div className="relative z-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0D1520]">
              <svg
                className="w-4 h-4 fill-current text-[#0D1520]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C8 2 6 5 6 9c0 3.5 1.5 7.5 3 11 1 2.3 3.5 2.3 4.5 0 1.5-3.5 3-7.5 3-11 0-4-2-7-6.5-7z" />
              </svg>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">Dentora</span>
          </div>

          {/* Center Glass Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-xs font-medium">
            <a href="/" className="bg-white text-slate-900 px-4 py-1.5 rounded-full font-bold shadow-sm">
              Home
            </a>
            <a href="/services" className="text-slate-200 hover:text-white px-3 py-1.5 rounded-full">
              Services
            </a>
            <a href="/about" className="text-slate-200 hover:text-white px-3 py-1.5 rounded-full">
              About Us
            </a>
            <a href="#testimonials" className="text-slate-200 hover:text-white px-3 py-1.5 rounded-full">
              Testimonial
            </a>
            <a href="/contact" className="text-slate-200 hover:text-white px-3 py-1.5 rounded-full">
              Contact
            </a>
          </nav>

          {/* Right Action Button */}
          <button
            onClick={onOpenBooking}
            className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-2.5 rounded-full text-xs transition-all shadow-md hover:scale-105 active:scale-95"
          >
            Book a Call
          </button>
        </div>

        {/* Main Hero Headline & Subtitle */}
        <div className="relative z-10 max-w-xl mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
              Family-Friendly <br />
              <span className="text-white">Dental Care</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-normal">
              Permanent natural-looking solutions to replace missing teeth and restore confident healthy smiles.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-950 font-bold px-5 py-3 rounded-full text-xs transition-all duration-300 shadow-xl group"
              >
                <span>Book a Appointment</span>
                <div className="w-6 h-6 rounded-full bg-cyan-500 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive Overlays (Bottom Left Card & Bottom Right Tags) */}
        <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          {/* Sub-Widget Left: Dark Glass Card overlaying dental photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 lg:col-span-5 bg-slate-900/85 backdrop-blur-xl border border-white/10 p-3.5 rounded-2xl space-y-3 shadow-2xl max-w-xs"
          >
            <div className="relative rounded-xl overflow-hidden h-28 bg-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=400&q=80"
                alt="Procedure preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>

            <p className="text-xs font-medium text-slate-200 leading-snug">
              Restore natural healthy confident dental growth.
            </p>

            <div className="flex items-center justify-between pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-[11px] font-bold text-amber-400">
                <Star className="w-3 h-3 fill-amber-400" />
                <span>4.9 [Rating]</span>
              </div>
              <button className="w-7 h-7 rounded-full bg-white/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 flex items-center justify-center transition-all">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Sub-Widget Right: Service Pill Tags (Row 1 & Row 2 matching Orbix layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-6 lg:col-span-7 flex flex-col items-start md:items-end gap-2"
          >
            <div className="flex flex-wrap gap-2">
              {row1Tabs.map((tab) => {
                const isSelected = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-white text-slate-950 shadow-md'
                        : 'bg-slate-900/80 backdrop-blur-md text-slate-200 hover:bg-slate-800 border border-white/10'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              {row2Tabs.map((tab) => {
                const isSelected = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-white text-slate-950 shadow-md'
                        : 'bg-slate-900/80 backdrop-blur-md text-slate-200 hover:bg-slate-800 border border-white/10'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Strip (Preview 01/08 & Scroll for More) */}
        <div className="relative z-10 pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <div className="font-medium">Your Teeth Our Scalence</div>

          <div className="flex items-center gap-3">
            <span>
              Preview <strong className="text-white">0{activeSlide}</strong> / 08 Next
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveSlide((prev) => (prev > 1 ? prev - 1 : 8))}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev < 8 ? prev + 1 : 1))}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-400">
            <span>Scroll for More</span>
            <div className="w-10 h-0.5 bg-white/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
