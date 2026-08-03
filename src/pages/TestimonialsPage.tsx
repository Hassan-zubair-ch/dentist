import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { WhyChooseUs } from '../components/WhyChooseUs';

interface TestimonialsPageProps {
  onOpenBooking?: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  const allTestimonials = [
    {
      id: 1,
      quote: "The level of care at Dentora is unmatched. The 3D scanning technology meant no more messy impressions, and the staff made sure I was comfortable the entire time. Truly a next-generation clinic.",
      author: "Eleanor Pena",
      role: "Patient since 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      quote: "State-of-the-art diagnostics and gentle care transformed my dental experience completely. Highly recommended!",
      author: "Marcus Vance",
      role: "Satisfied Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      quote: "I was extremely anxious about my implant surgery, but Dr. Carter and his team explained every step. The procedure was painless and the results are incredibly natural.",
      author: "Jacob Jones",
      role: "Implant Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      quote: "Best dental clinic I've ever visited. The environment feels like a premium spa rather than a hospital.",
      author: "Arlene McCoy",
      role: "Regular Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      quote: "Laser whitening worked wonders before my wedding. I've never been more confident about my smile. Thank you Dentora!",
      author: "Jane Cooper",
      role: "Cosmetic Patient",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      quote: "From the moment you walk in, you know you are in good hands. The staff is professional, and the doctors are incredibly skilled and empathetic.",
      author: "Wade Warren",
      role: "Patient since 2023",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-20 w-full overflow-hidden">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-[2500px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 space-y-6 pt-12 pb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mx-auto">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">Real Stories</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Smiles transformed. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Lives changed.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Don't just take our word for it. Hear directly from our patients about their experiences and the confidence they've gained at Dentora.
        </p>
      </motion.div>

      {/* Featured Testimonials (Masonry-ish Grid) */}
      <div className="max-w-[2500px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 pb-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
        >
          {allTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="break-inside-avoid relative bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-24 h-24 text-cyan-900" />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg text-slate-700 font-medium leading-relaxed relative z-10 mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-14 h-14 rounded-full object-cover ring-4 ring-cyan-50 group-hover:ring-cyan-100 transition-all"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900">{testimonial.author}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-16"
        >
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-4 bg-slate-900 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 group text-sm md:text-base"
          >
            <span>Start Your Journey</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Include the complex WhyChooseUs section as requested by original component structure, but wrapped in its own container style */}
      <div className="bg-slate-50 py-12 border-t border-slate-200/50">
        <WhyChooseUs />
      </div>
      
    </div>
  );
};
