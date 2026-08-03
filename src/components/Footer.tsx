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
    <footer className="relative bg-slate-50 pt-20 pb-12 overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 space-y-20 relative z-10">
        {/* Newsletter Box Section */}
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Your Smile Matters <br />
              <span className="text-cyan-600">Connect With Us Today</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Join our newsletter to receive the latest oral health tips special offers and clinic updates.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-3 bg-cyan-50 border border-cyan-200 text-cyan-800 p-4 rounded-full text-sm font-bold animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0" />
                <span>Thank you for subscribing to Dentora Newsletter!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 bg-slate-100 p-2 rounded-full border border-slate-200">
                <div className="flex items-center gap-3 px-4 w-full sm:w-auto flex-1 text-slate-400">
                  <Mail className="w-4 h-4 shrink-0" />
                  <input
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-none text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none w-full py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-7 py-3 rounded-full transition-all duration-300 shadow-md shadow-cyan-500/25 shrink-0 text-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns & Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pt-8 border-t border-slate-200">
          {/* Email & Tagline */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                WE'D LOVE TO HELP YOU WITH EASE
              </span>
              <a
                href="mailto:hellodentora@gmail.com"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-cyan-600 transition-colors underline decoration-cyan-400 underline-offset-8"
              >
                hellodentora@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-600 block">Follow Us</span>
              <div className="flex items-center gap-3">
                <a href="#facebook" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#instagram" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#twitter" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href="#youtube" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 text-slate-700 flex items-center justify-center transition-all shadow-sm">
                  <Video className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 text-xs">
            {/* COMPANY */}
            <div className="space-y-4">
              <span className="font-extrabold uppercase tracking-wider text-slate-400 block">COMPANY</span>
              <ul className="space-y-2.5 font-medium text-slate-600">
                <li><Link to="/" className="hover:text-cyan-600 transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-cyan-600 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-cyan-600 transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-cyan-600 transition-colors">Dentist</Link></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-4">
              <span className="font-extrabold uppercase tracking-wider text-slate-400 block">RESOURCES</span>
              <ul className="space-y-2.5 font-medium text-slate-600">
                <li><Link to="/contact" className="hover:text-cyan-600 transition-colors">Contact Us</Link></li>
                <li><Link to="/blog" className="hover:text-cyan-600 transition-colors">Blog</Link></li>
                <li><Link to="/about" className="hover:text-cyan-600 transition-colors">Faq</Link></li>
                <li><Link to="/404" className="hover:text-cyan-600 transition-colors">404 Error</Link></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div className="space-y-4">
              <span className="font-extrabold uppercase tracking-wider text-slate-400 block">LEGAL</span>
              <ul className="space-y-2.5 font-medium text-slate-600">
                <li><a href="#privacy" className="hover:text-cyan-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-cyan-600 transition-colors">Terms and Conditions</a></li>
                <li><a href="#license" className="hover:text-cyan-600 transition-colors">License</a></li>
                <li><a href="#instruction" className="hover:text-cyan-600 transition-colors">Instruction</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
          <p>©2026 All Rights Reserved</p>
          <div className="flex items-center gap-6">
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms & Conditions</a>
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy & Policy</a>
          </div>
        </div>
      </div>

      {/* Giant Typography Watermark Background */}
      <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 text-watermark">
        Dentora
      </div>
    </footer>
  );
};
