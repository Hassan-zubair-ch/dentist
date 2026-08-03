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

  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider">
          Dentora Specialty Care
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive Dental <br />
          <span className="text-cyan-600">Services & Treatments</span>
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Explore our range of personalized dental care options powered by state-of-the-art diagnostic technology.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <motion.div
              key={srv.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col justify-between space-y-6 hover:border-cyan-300 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-extrabold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                    {srv.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{srv.desc}</p>

                <ul className="space-y-2 pt-2">
                  {srv.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-slate-900 hover:bg-cyan-500 text-white font-bold py-3.5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-xs"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
