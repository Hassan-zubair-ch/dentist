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
    <footer className="relative bg-[#F9FBFC] pt-20 pb-8 overflow-hidden">
      <div className="max-w-[2500px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10 space-y-16">
        
        {/* Top Row: Headline (Left) & Newsletter (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center border-b border-slate-200/60 pb-16">
          {/* Headline - Left */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-slate-950 tracking-tight leading-[1.05]">
              Your Smile Matters <br />
              Connect With Us Today
            </h2>
          </div>

          {/* Newsletter - Right */}
          <div className="lg:col-span-6 flex lg:justify-end">
            <div className="w-full max-w-md space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Join our newsletter to receive the latest oral health tips special offers and clinic updates.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-3 bg-cyan-50 border border-cyan-200 text-cyan-800 p-3.5 rounded-full text-xs font-bold animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center bg-slate-100 p-1.5 rounded-full shadow-sm w-full">
                  <div className="flex items-center gap-2 px-4 flex-1 text-slate-400">
                    <Mail className="w-4 h-4 shrink-0" />
                    <input
                      type="email"
                      required
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-transparent border-none text-slate-900 placeholder:text-slate-400 text-xs focus:outline-none w-full py-2.5 font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#44BCC9] hover:bg-cyan-500 text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shrink-0 text-[11px] tracking-wide"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Row: Links & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-4 relative z-20 pb-4">
          
          {/* 3 Nav Columns - Left */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 text-[13px]">
            <div className="space-y-5">
              <span className="font-bold uppercase tracking-widest text-slate-400 block text-[10px]">COMPANY</span>
              <ul className="space-y-3 font-semibold text-slate-900">
                <li><Link to="/" className="hover:text-cyan-500 transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-cyan-500 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-cyan-500 transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-cyan-500 transition-colors">Dentist</Link></li>
              </ul>
            </div>

            <div className="space-y-5">
              <span className="font-bold uppercase tracking-widest text-slate-400 block text-[10px]">RESOURCES</span>
              <ul className="space-y-3 font-semibold text-slate-900">
                <li><Link to="/contact" className="hover:text-cyan-500 transition-colors">Contact Us</Link></li>
                <li><Link to="/blog" className="hover:text-cyan-500 transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-cyan-500 transition-colors">Faq</Link></li>
                <li><Link to="/404" className="hover:text-cyan-500 transition-colors">404 Error</Link></li>
              </ul>
            </div>

            <div className="space-y-5">
              <span className="font-bold uppercase tracking-widest text-slate-400 block text-[10px]">LEGAL</span>
              <ul className="space-y-3 font-semibold text-slate-900">
                <li><a href="#privacy" className="hover:text-cyan-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-cyan-500 transition-colors">Terms and Conditions</a></li>
                <li><a href="#license" className="hover:text-cyan-500 transition-colors">License</a></li>
                <li><a href="#instruction" className="hover:text-cyan-500 transition-colors">Instruction</a></li>
              </ul>
            </div>
          </div>

          {/* Contact & Social - Right */}
          <div className="lg:col-span-4 space-y-6 lg:pl-12">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block">
                WED LOVE TO HELP YOU WITH EASE
              </span>
              <a
                href="mailto:hellodentora@gmail.com"
                className="text-xl sm:text-2xl font-semibold text-slate-900 hover:text-cyan-500 transition-colors inline-block border-b-2 border-slate-900 pb-0.5"
              >
                hellodentora@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="text-[13px] font-semibold text-slate-900">Follow Us</span>
              <div className="flex items-center gap-3">
                <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all">
                  <Globe className="w-3.5 h-3.5" />
                </a>
                <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all">
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>
                <a href="#twitter" aria-label="X" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all">
                  <Share2 className="w-3.5 h-3.5" />
                </a>
                <a href="#youtube" aria-label="YouTube" className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-400 hover:text-white text-slate-700 flex items-center justify-center transition-all">
                  <Video className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-slate-500 relative z-20">
          <p>©2026 All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-slate-900 transition-colors">Terms & Conditions</a>
            <a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy & Policy</a>
          </div>
        </div>
      </div>

      {/* Giant Typography Watermark Background (Horizontal at Bottom) */}
      <div 
        className="absolute left-0 right-0 bottom-12 select-none pointer-events-none flex items-end justify-center opacity-[0.03] z-0 overflow-hidden mix-blend-multiply"
      >
        <span 
          className="text-[25vw] leading-[0.7] font-extrabold text-slate-900 tracking-tighter whitespace-nowrap"
        >
          Dentora
        </span>
      </div>
    </footer>
  );
};
