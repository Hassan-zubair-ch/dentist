import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown, Award, Quote } from 'lucide-react';
import { ScrollFillText } from './ScrollFillText';

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
    <motion.section 
      id="testimonials" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-4 md:px-8 lg:px-12 xl:px-16 w-full max-w-[2500px] mx-auto space-y-24"
    >
      {/* TOP SECTION: Testimonials */}
      <div className="w-full max-w-5xl mx-auto space-y-12">
        {/* Top: Right-aligned photo and arrows */}
        <div className="flex justify-end items-start gap-4">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="w-10 h-10 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
            <img
              src={testimonials[currentSlide].avatar}
              alt="Testimonial Author"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Middle: Centered Huge Quote */}
        <div className="text-center space-y-6 max-w-4xl mx-auto relative px-8">
          <Quote className="w-12 h-12 text-slate-200 fill-slate-100 absolute -top-4 -left-4 z-0" />
          <div className="relative z-10">
            <ScrollFillText text={testimonials[currentSlide].quote} />
          </div>
        </div>

        {/* Bottom: Left-aligned Author Info & Badges */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="inline-block px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
              Testimonial
            </span>
            <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Happy Patient"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Happy Patients</span>
                <span className="text-slate-400 text-[10px] block mt-0.5">2026</span>
              </div>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <h4 className="font-extrabold text-slate-900 text-sm">{testimonials[currentSlide].author}</h4>
            <p className="text-xs text-slate-400 font-medium mt-0.5">{testimonials[currentSlide].role}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: Why Choose Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-12 border-t border-slate-100/50">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-8 lg:pr-8">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Why Choose <br />
            <span className="text-slate-900">Precision Dental?</span>
          </h2>

          <div className="bg-cyan-500 rounded-3xl p-8 text-white shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full ring-2 ring-cyan-300"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
                <img
                  className="w-10 h-10 rounded-full ring-2 ring-cyan-300"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Member"
                />
              </div>
              <span className="text-[11px] font-bold bg-white/20 px-3 py-1 rounded-full">
                3.5K+ join the smiles
              </span>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[11px] font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>Rewards</span>
              </div>
              <p className="text-sm font-medium text-cyan-50 leading-relaxed max-w-sm">
                Maintain your preventive care streak and earn exclusive whitening and cosmetic rewards.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-4 w-3/4">
            <h4 className="text-sm font-bold text-slate-900">Complete Oral Care</h4>
            <div className="rounded-2xl overflow-hidden h-32 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
                alt="Oral Diagnostics"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex justify-end">
            <div className="flex flex-col gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm">
                <ChevronUp className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm">
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6 w-full max-w-md ml-auto">
            <div className="space-y-1">
              <span className="text-5xl font-extrabold text-slate-900">98%</span>
              <p className="text-sm font-semibold text-slate-500">
                Reliable Oral Health Diagnostics
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Mar</span>
                <div className="w-32 h-4 bg-cyan-400 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                <span>Apr</span>
                <div className="w-40 h-4 bg-cyan-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                <span>May</span>
                <div className="w-48 h-4 bg-cyan-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 h-[400px] w-full">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
              alt="Smiling Patient"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
