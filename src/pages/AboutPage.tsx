import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const team = [
    {
      name: 'Dr. Daniel Carter',
      role: 'Lead Dental Specialist',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      rating: '4.9 (45+ Reviews)',
    },
    {
      name: 'Savannah Nguyen',
      role: 'Medical & Dental Assistant',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      rating: '4.9 (38+ Reviews)',
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Orthodontics Director',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
      rating: '5.0 (52+ Reviews)',
    },
  ];

  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider">
            About Dentora Clinic
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Pioneering Gentle & <br />
            <span className="text-cyan-600">Modern Dental Care</span>
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            At Dentora, we combine compassionate patient care with cutting-edge 3D diagnostic technology to deliver long-lasting, natural smiles in a soothing environment.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="space-y-1">
              <span className="text-3xl font-extrabold text-slate-900">12+</span>
              <p className="text-xs font-medium text-slate-500">Years Excellence</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-extrabold text-slate-900">15k+</span>
              <p className="text-xs font-medium text-slate-500">Happy Smiles</p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-cyan-500/25 transition-all text-sm"
          >
            <span>Book a Call with Doctors</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Dentora Clinic Interior"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
            Meet Our Doctors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Expert Dental Specialists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((doc) => (
            <div
              key={doc.name}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-4 text-center group"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-cyan-100 group-hover:scale-105 transition-transform">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{doc.name}</h3>
                <p className="text-xs font-medium text-slate-500">{doc.role}</p>
                <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-[11px] font-bold mt-2">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{doc.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
