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
    <section className="py-16 px-4 max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider">
            <span>Thousands Trust Us for Smiles!</span>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-100">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-1"
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 group"
          >
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
              alt="Dental Office Technology"
              className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            Feature Treatment
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Advanced Dental Care <br />
            <span className="text-cyan-600">for a Healthier Smile</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Join hundreds of patients achieving healthier, brighter smiles through expert dental care and personalized treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-cyan-50/60 rounded-[2.5rem] p-6 sm:p-8 border border-cyan-100 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden bg-blue-100 min-h-[260px] sm:min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Daniel Carter"
                className="w-full h-full object-cover object-top"
              />
              
              <div className="absolute top-3 left-3 w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                  alt="Patient consultation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-3 text-white border border-white/10 shadow-lg">
                <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Mic className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                  <Video className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors">
                  <PhoneOff className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Dr. Daniel Carter</h3>
                  <p className="text-sm font-medium text-slate-500">Lead Dental Specialist</p>
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-cyan-500/25 group text-sm"
              >
                <span>Book Appointment</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 relative rounded-[2.5rem] overflow-hidden min-h-[420px] flex flex-col justify-end p-6 border border-slate-200 shadow-xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
              alt="Advanced Equipment"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

            <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/80 space-y-4">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100 text-slate-800">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Recommended</span>
                  <span className="text-xs font-semibold text-slate-600 block">Checkups per Year</span>
                  <span className="text-2xl font-extrabold text-slate-900 mt-1 block">2 <span className="text-xs font-medium text-slate-500">Visits</span></span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Average</span>
                  <span className="text-xs font-semibold text-slate-600 block">Treatment Time</span>
                  <span className="text-2xl font-extrabold text-slate-900 mt-1 block">40 <span className="text-xs font-medium text-slate-500">Mins</span></span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Today's Appointment Progress</span>
                  <span className="text-cyan-600 font-extrabold">60%</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-4 flex-1 rounded-full transition-all ${
                        i < 11 ? 'bg-cyan-500' : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
