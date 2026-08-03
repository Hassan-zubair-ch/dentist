import React from 'react';
import { WhyChooseUs } from '../components/WhyChooseUs';

interface TestimonialsPageProps {
  onOpenBooking?: () => void; // Optional since it's not currently used, or just omit it from props list below
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
          Patient <span className="text-cyan-500">Testimonials</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Hear from our satisfied patients about their experiences at Precision Dental. We pride ourselves on delivering exceptional care and life-changing smiles.
        </p>
      </div>
      
      <WhyChooseUs />
    </div>
  );
};
