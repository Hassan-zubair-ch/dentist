import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Video, Mic, PhoneOff } from 'lucide-react';

interface StatsSpecialistProps {
  onOpenBooking: () => void;
}

export const StatsSpecialist: React.FC<StatsSpecialistProps> = ({ onOpenBooking }) => {
  const stats = [
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '2k+', label: 'Smiles Transformed' },
    { value: '4.9*', label: 'Customer Rating' },
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto space-y-20">
      {/* 1. About Us Statement Section (Directly under Process Ribbon) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        {/* Left: About Us Badge & 2 Team Thumbnails */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              About Us
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Doctor Specialist Male"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                alt="Doctor Specialist Female"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Large Headline Quote */}
        <div className="lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]"
          >
            We deliver personalized dental treatments with modern{' '}
            <span className="text-slate-400 font-normal">
              technology and gentle care ensuring healthy confident smiles for every patient.
            </span>
          </motion.h2>
        </div>
      </div>

      {/* 2. Top Row: Patient Photo Left + Equipment & Analytics Progress Card Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Patient Photo Left */}
        <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-slate-100 min-h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
            alt="Patient dental checkup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Equipment Image & Floating Analytics Progress Widget Right */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-end p-6 border border-slate-100 shadow-xl group">
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
            alt="Advanced Equipment"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

          {/* Floating White Progress Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/80 space-y-3">
            <div className="grid grid-cols-2 gap-4 pb-3 border-b border-slate-100 text-slate-800">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Recommended</span>
                <span className="text-xs font-semibold text-slate-500 block">Checkups per Year</span>
                <span className="text-xl font-extrabold text-slate-900 mt-0.5 block">
                  2 <span className="text-xs font-medium text-slate-500">Visits</span>
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Average</span>
                <span className="text-xs font-semibold text-slate-500 block">Treatment Time</span>
                <span className="text-xl font-extrabold text-slate-900 mt-0.5 block">
                  40 <span className="text-xs font-medium text-slate-500">Mins</span>
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>Today's Appointment Progress</span>
                <span className="text-cyan-600 font-extrabold">60%</span>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-3 flex-1 rounded-full transition-all ${
                      i < 10 ? 'bg-cyan-500' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Row: Stats & Feature Headline Left + Dr. Daniel Carter Card Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
        {/* Left Column: Stats & Feature Treatment Headline */}
        <div className="lg:col-span-6 space-y-8">
          {/* Stats Bar */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-slate-400 tracking-wider block">
              Thousands Trust Us for Smiles!
            </span>

            <div className="grid grid-cols-3 gap-6 pt-2 border-t border-slate-100">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-1"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Feature Treatment Banner */}
          <div className="space-y-4 pt-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              Feature Treatment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Advanced Dental Care <br />
              <span className="text-slate-900">for a Healthier Smile</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md">
              Join hundreds of patients achieving healthier, brighter smiles through expert dental care and personalized treatments.
            </p>
          </div>
        </div>

        {/* Right Column: Dr. Daniel Carter Doctor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 bg-blue-50/60 rounded-[2.5rem] p-6 border border-blue-100 shadow-xl space-y-6"
        >
          {/* Doctor Video Frame */}
          <div className="relative rounded-2xl overflow-hidden bg-blue-100 h-64 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Daniel Carter"
              className="w-full h-full object-cover object-top"
            />
            
            {/* Inset Patient Consultation Thumbnail */}
            <div className="absolute top-3 left-3 w-14 h-14 rounded-xl overflow-hidden border-2 border-white shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Patient consultation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Call Controls Overlay */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-white border border-white/10 shadow-lg">
              <button className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <Mic className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <Video className="w-3.5 h-3.5" />
              </button>
              <button className="w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center">
                <PhoneOff className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Dr. Daniel Carter</h3>
                <p className="text-xs font-medium text-slate-500">Lead Dental Specialist</p>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold text-amber-700">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.9 [45+ reviews]</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Join hundreds of patients achieving healthier, brighter smiles through expert dental care and personalized treatments.
            </p>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-cyan-500/25 group text-xs"
            >
              <span>Book Appointment</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
