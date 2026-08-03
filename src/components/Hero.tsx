import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ChevronLeft, ChevronRight, ArrowUpRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('Dental Checkup');
  const [activeSlide, setActiveSlide] = useState(1);

  const tabs = ['Dental Checkup', 'Teeth Cleaning', 'Tooth Filling', 'Gum Treatment', 'Retainers'];

  return (
    <section className="relative pt-28 pb-12 px-4 max-w-7xl mx-auto">
      <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-950 text-white min-h-[640px] lg:min-h-[720px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
            alt="Family-Friendly Dental Care"
            className="w-full h-full object-cover object-center opacity-65 scale-105 hover:scale-100 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/30" />
        </div>

        <div className="relative z-10 max-w-2xl mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Family-Friendly <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">
                Dental Care
              </span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed font-normal">
              Permanent natural-looking solutions to replace missing teeth and restore confident healthy smiles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-7 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 transform hover:-translate-y-0.5 active:translate-y-0 group text-base"
            >
              <span>Book a Appointment</span>
              <div className="w-8 h-8 rounded-full bg-slate-950/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </div>
            </button>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Patient"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Patient"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                  alt="Patient"
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <p className="text-slate-300 text-[11px]">3,500+ Happy Patients</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 lg:col-span-5 bg-slate-900/85 backdrop-blur-xl border border-slate-700/60 p-4 rounded-3xl flex items-center gap-4 shadow-2xl hover:border-cyan-500/50 transition-colors"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 group">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80"
                alt="Procedure preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-snug line-clamp-2">
                Restore natural healthy confident dental growth.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-xs font-medium text-amber-400 border border-slate-700">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <span>4.9 [Rating]</span>
                </div>
                <button className="w-8 h-8 rounded-full bg-cyan-500/20 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-6 lg:col-span-7 flex flex-wrap gap-2 justify-start md:justify-end items-center"
          >
            {tabs.map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-white text-slate-950 shadow-lg shadow-white/10 scale-105'
                      : 'bg-slate-900/70 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </motion.div>
        </div>

        <div className="relative z-10 pt-6 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Your Teeth Our Scalence</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-300">
              Preview <strong className="text-white">0{activeSlide}</strong> / 08 Next
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActiveSlide((prev) => (prev > 1 ? prev - 1 : 8))}
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveSlide((prev) => (prev < 8 ? prev + 1 : 1))}
                className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span>Scroll for More</span>
            <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
