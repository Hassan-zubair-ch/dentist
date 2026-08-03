import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const team = [
    {
      name: 'Dr. Daniel Carter',
      role: 'Lead Dental Specialist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      rating: '4.9 (45+ Reviews)',
      exp: '15+ Years',
    },
    {
      name: 'Savannah Nguyen',
      role: 'Medical & Dental Assistant',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      rating: '4.9 (38+ Reviews)',
      exp: '8+ Years',
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Orthodontics Director',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80',
      rating: '5.0 (52+ Reviews)',
      exp: '12+ Years',
    },
  ];

  const stats = [
    { icon: ShieldCheck, value: '100%', label: 'Safety Record' },
    { icon: Award, value: '15k+', label: 'Happy Smiles' },
    { icon: HeartHandshake, value: '24/7', label: 'Patient Support' },
  ];

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 lg:px-12 xl:px-16 max-w-[2500px] mx-auto w-full space-y-32 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">Our Story</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Redefining <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Modern Dentistry
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            We believe that a visit to the dentist should be a relaxing, premium experience. Combining cutting-edge technology with unparalleled comfort, we are changing the way you think about oral health.
          </p>

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

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[800px] w-full rounded-[3rem] overflow-hidden shadow-3xl"
        >
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
            alt="Dentora Clinic Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          
          {/* Floating Glass Stat */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-3xl flex items-center justify-around text-white shadow-2xl"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center space-y-2">
                  <Icon className="w-8 h-8 mx-auto text-cyan-300" />
                  <div className="text-3xl font-extrabold">{stat.value}</div>
                  <div className="text-xs font-medium text-white/70 uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Team Section (Bento Grid) */}
      <section className="space-y-16 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Meet the <span className="text-cyan-600">Experts</span>
          </h2>
          <p className="text-lg text-slate-600">
            Our world-class team of dental professionals is dedicated to providing you with the highest standard of care in a warm, welcoming environment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((doc, idx) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-cyan-100"></div>
              
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg mx-auto transform group-hover:-translate-y-2 transition-transform duration-500">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">{doc.name}</h3>
                <p className="text-sm font-bold text-cyan-600 uppercase tracking-wider">{doc.role}</p>
                
                <div className="flex items-center justify-center gap-4 pt-4 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{doc.rating}</span>
                  </div>
                  <div className="bg-slate-50 px-3 py-1.5 rounded-full">
                    {doc.exp}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
