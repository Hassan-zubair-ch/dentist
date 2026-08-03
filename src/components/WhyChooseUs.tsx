import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, BarChart3, Quote, Smile } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        'We deliver personalized dental treatments modern technology and gentle care ensuring healthy confident smiles for every patient.',
      author: 'Savannah Nguyen',
      role: 'Medical Assistant',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      quote:
        'State-of-the-art diagnostics and gentle care transformed my dental experience completely. Highly recommended!',
      author: 'Marcus Vance',
      role: 'Satisfied Patient',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <br />
            <span className="text-cyan-600">Precision Dental?</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
            className="w-11 h-11 rounded-full border border-slate-200 hover:border-cyan-500 bg-white text-slate-700 hover:text-cyan-600 flex items-center justify-center transition-all shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
            className="w-11 h-11 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center transition-all shadow-md shadow-cyan-500/25"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-xl flex flex-col justify-between space-y-4 group"
        >
          <h3 className="text-lg font-bold text-slate-900 leading-snug">
            Complete Oral Care Solutions
          </h3>
          <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
              alt="3D Oral Diagnostics"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-6 lg:col-span-4 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-3xl p-6 text-white shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full ring-2 ring-teal-400"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Member"
              />
              <img
                className="w-8 h-8 rounded-full ring-2 ring-teal-400"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Member"
              />
              <img
                className="w-8 h-8 rounded-full ring-2 ring-teal-400"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                alt="Member"
              />
            </div>
            <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
              3.5K+ join the smiles
            </span>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>Rewards</span>
            </div>
            <p className="text-sm font-medium text-cyan-50 leading-relaxed pt-1">
              Maintain your preventive care streak and earn exclusive whitening and cosmetic rewards.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-12 lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-100 shadow-xl flex flex-col justify-between space-y-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-3xl font-extrabold text-slate-900">98%</span>
              <p className="text-xs font-semibold text-slate-500 mt-1">
                Reliable Oral Health Diagnostics
              </p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
          </div>

          <div className="flex items-end justify-between gap-3 h-24 pt-4 border-t border-slate-100">
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-cyan-400 rounded-t-xl h-12"></div>
              <span className="text-[11px] font-bold text-slate-400">Mar</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-cyan-500 rounded-t-xl h-16"></div>
              <span className="text-[11px] font-bold text-slate-400">Apr</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-cyan-600 rounded-t-xl h-20"></div>
              <span className="text-[11px] font-bold text-slate-400">May</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/70 rounded-[2.5rem] p-6 sm:p-10 border border-slate-100">
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[300px] shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
            alt="Patient smile care"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <Quote className="w-12 h-12 text-cyan-400 opacity-60" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-relaxed italic">
              "{testimonials[currentSlide].quote}"
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
            <div className="flex items-center gap-3">
              <img
                src={testimonials[currentSlide].avatar}
                alt={testimonials[currentSlide].author}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-cyan-500/20"
              />
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{testimonials[currentSlide].author}</h4>
                <p className="text-xs text-slate-500 font-medium">{testimonials[currentSlide].role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <div className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center">
                <Smile className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Happy Patients</span>
                <span className="text-slate-400 text-[10px]">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
