import React, { useState } from 'react';
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
    <section id="testimonials" className="py-20 px-4 max-w-7xl mx-auto space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why Choose <br />
                <span className="text-slate-900">Precision Dental?</span>
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              <button className="w-8 h-8 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 text-slate-700 flex items-center justify-center transition-all">
                <ChevronUp className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 text-slate-700 flex items-center justify-center transition-all">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-4">
              <div className="space-y-1">
                <span className="text-3xl font-extrabold text-slate-900">98%</span>
                <p className="text-xs font-semibold text-slate-500">
                  Reliable Oral Health Diagnostics
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Mar</span>
                  <div className="w-24 h-3 bg-cyan-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>Apr</span>
                  <div className="w-28 h-3 bg-cyan-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>May</span>
                  <div className="w-32 h-3 bg-cyan-600 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 h-56 sm:h-auto">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                alt="Smiling Patient"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-cyan-500 rounded-3xl p-6 text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img
                    className="w-7 h-7 rounded-full ring-2 ring-cyan-300"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Member"
                  />
                  <img
                    className="w-7 h-7 rounded-full ring-2 ring-cyan-300"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="Member"
                  />
                </div>
                <span className="text-[10px] font-bold bg-white/20 px-2.5 py-0.5 rounded-full">
                  3.5K+ join the smiles
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">
                  <Award className="w-3 h-3" />
                  <span>Rewards</span>
                </div>
                <p className="text-xs font-medium text-cyan-50 leading-relaxed">
                  Maintain your preventive care streak and earn exclusive whitening and cosmetic rewards.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-xl space-y-3">
              <h4 className="text-sm font-bold text-slate-900">Complete Oral Care</h4>
              <div className="rounded-2xl overflow-hidden h-28 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
                  alt="Oral Diagnostics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8 pl-0 lg:pl-6 pt-4 lg:pt-0">
          <div className="flex justify-between items-start">
            <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
                alt="Doctor Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
                className="w-8 h-8 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
                className="w-8 h-8 rounded-full border border-slate-200 hover:bg-cyan-500 hover:text-white text-slate-700 flex items-center justify-center transition-all"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <Quote className="w-10 h-10 text-slate-300 fill-slate-200" />
            <ScrollFillText text={testimonials[currentSlide].quote} />

            <div className="pt-2">
              <h4 className="font-extrabold text-slate-900 text-sm">{testimonials[currentSlide].author}</h4>
              <p className="text-xs text-slate-400 font-medium">{testimonials[currentSlide].role}</p>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
              Testimonial
            </span>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-slate-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt="Happy Patient"
                className="w-10 h-10 rounded-xl object-cover"
              />
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
