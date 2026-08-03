import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Shield, HeartPulse, Stethoscope, Smile } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const servicesList = [
    {
      title: 'Preventive Dental Checkups',
      icon: Sparkles,
      price: '$99 / Visit',
      desc: 'Comprehensive digital oral scanning, professional cleaning, and diagnostic evaluation to keep your smile healthy.',
      features: ['Full mouth X-rays', 'Plaque & tartar removal', 'Oral cancer screening', 'Personalized oral plan'],
    },
    {
      title: 'Laser Teeth Whitening',
      icon: Smile,
      price: '$249 / Session',
      desc: 'Advanced light-activated cosmetic whitening treatment to restore your radiant smile up to 8 shades brighter.',
      features: ['Pain-free LED technology', 'Enamel safety guarantee', 'Long-lasting 12-month result', 'Includes take-home kit'],
    },
    {
      title: 'Precision Dental Implants',
      icon: Shield,
      price: '$1,200 / Tooth',
      desc: 'Permanent, natural-looking tooth replacements crafted with biocompatible titanium and porcelain crowns.',
      features: ['Lifetime durability', '3D computer-guided placement', 'Natural appearance', 'Restores full chew function'],
    },
    {
      title: 'Periodontal & Gum Care',
      icon: HeartPulse,
      price: '$180 / Session',
      desc: 'Gentle deep cleaning and scaling therapy designed to eliminate gum disease and promote tissue regeneration.',
      features: ['Deep scaling & root planing', 'Antibacterial therapy', 'Bleeding reduction', 'Gingival health check'],
    },
    {
      title: 'Invisalign & Orthodontics',
      icon: Stethoscope,
      price: '$2,800 Full Plan',
      desc: 'Clear, invisible aligner trays tailored to align teeth comfortably without traditional metal braces.',
      features: ['Custom 3D aligner sets', 'Removable & comfortable', 'Progress monitoring', 'Retainers included'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)', 
      transition: { duration: 0.8 } 
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 lg:px-12 xl:px-16 max-w-[2500px] mx-auto w-full space-y-20 overflow-hidden">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto space-y-6 pt-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mx-auto">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">Dentora Specialty Care</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Comprehensive Dental <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
            Services & Treatments
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Explore our range of personalized dental care options powered by state-of-the-art diagnostic technology for a pain-free experience.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
      >
        {servicesList.map((srv) => {
          const Icon = srv.icon;
          return (
            <motion.div
              variants={itemVariants}
              key={srv.title}
              className="group relative bg-white rounded-[3rem] p-8 sm:p-10 border border-slate-100 shadow-xl hover:shadow-2xl flex flex-col justify-between space-y-8 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-50 rounded-bl-[120px] -z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-cyan-100"></div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-3xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-cyan-600 transition-colors shadow-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-extrabold text-cyan-700 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-100">
                    {srv.price}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                </div>

                <ul className="space-y-3 pt-4 border-t border-slate-100">
                  {srv.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-slate-900 group-hover:bg-cyan-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 text-sm shadow-xl hover:shadow-cyan-500/25 relative overflow-hidden"
              >
                <span className="relative z-10">Book This Service</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
