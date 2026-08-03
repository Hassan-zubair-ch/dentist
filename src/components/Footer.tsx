import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle2, Globe, MessageCircle, Share2, Video } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#FAFCFF] pt-24 pb-8 overflow-hidden">
      <div className="max-w-[2500px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10 space-y-24">
        
        {/* Top Row: Newsletter (Left) & Contact (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Newsletter - Left */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed font-medium">
              Join our newsletter to receive the latest oral health tips special offers and clinic updates.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-3 bg-cyan-50 border border-cyan-200 text-cyan-800 p-3.5 rounded-full text-xs font-bold animate-in fade-in max-w-md">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-sm max-w-md">
                <div className="flex items-center gap-2 px-4 flex-1 text-slate-400">
                  <Mail className="w-4 h-4 shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-none text-slate-900 placeholder:text-slate-500 text-sm focus:outline-none w-full py-2.5 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-cyan-400/25 shrink-0 text-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Contact & Social - Right */}
          <div className="lg:col-span-7 space-y-6 lg:pl-12">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block">
                WED LOVE TO HELP YOU WITH EASE
              </span>
              <a
                href="mailto:hellodentora@gmail.com"
                className="text-2xl sm:text-4xl font-semibold text-slate-900 hover:text-cyan-500 transition-colors inline-block"
              >
                hellodentora@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <span className="text-sm font-bold text-slate-900">Follow Us</span>
              <div className="flex items-center gap-2">
                <a href="#facebook" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#instagram" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#twitter" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href="#youtube" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <Video className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Headline (Left) & Nav Columns (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Headline - Left */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Your Smile Matters <br />
              Connect With Us Today
            </h2>
          </div>

          {/* 3 Nav Columns - Right */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-6 text-sm lg:pl-12">
            <div className="space-y-6">
              <span className="font-bold uppercase tracking-widest text-slate-400 block text-xs">COMPANY</span>
              <ul className="space-y-4 font-semibold text-slate-900">
                <li><Link to="/" className="hover:text-cyan-500 transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-cyan-500 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-cyan-500 transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-cyan-500 transition-colors">Dentist</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <span className="font-bold uppercase tracking-widest text-slate-400 block text-xs">RESOURCES</span>
              <ul className="space-y-4 font-semibold text-slate-900">
                <li><Link to="/contact" className="hover:text-cyan-500 transition-colors">Contact Us</Link></li>
                <li><Link to="/blog" className="hover:text-cyan-500 transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-cyan-500 transition-colors">FAQ</Link></li>
                <li><Link to="/404" className="hover:text-cyan-500 transition-colors">404 Error</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <span className="font-bold uppercase tracking-widest text-slate-400 block text-xs">LEGAL</span>
              <ul className="space-y-4 font-semibold text-slate-900">
                <li><a href="#privacy" className="hover:text-cyan-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-cyan-500 transition-colors">Terms and Conditions</a></li>
                <li><a href="#license" className="hover:text-cyan-500 transition-colors">License</a></li>
                <li><a href="#instruction" className="hover:text-cyan-500 transition-colors">Instruction</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>©2026. All Rights Reserved</p>
          <div className="flex items-center gap-8">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy & Policy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Giant Typography Watermark Background (Horizontal at Bottom) */}
      <div 
        className="absolute left-0 right-0 bottom-0 select-none pointer-events-none flex items-end justify-center opacity-[0.03] z-0 overflow-hidden mix-blend-multiply"
      >
        <span 
          className="text-[20vw] leading-[0.75] font-extrabold text-slate-900 tracking-tighter whitespace-nowrap"
        >
          Dentora
        </span>
      </div>
    </footer>
  );
};
