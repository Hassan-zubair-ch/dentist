import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Testimonial', path: '/#testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <div
        className={`w-full max-w-6xl transition-all duration-500 rounded-full px-6 py-3.5 flex items-center justify-between ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-cyan-950/30 text-white translate-y-1 scale-[0.99]'
            : 'bg-slate-900/80 backdrop-blur-md border border-white/10 text-white shadow-xl'
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8 2 6 5 6 9c0 3.5 1.5 7.5 3 11 1 2.3 3.5 2.3 4.5 0 1.5-3.5 3-7.5 3-11 0-4-2-7-6.5-7z" />
              <path d="M9 10c0-1.5 1.5-3 3-3" opacity="0.6" />
            </svg>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
            Dentora
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-semibold px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/25 group text-sm"
          >
            <span>Book a Call</span>
            <div className="w-6 h-6 rounded-full bg-slate-950/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </div>
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-24 bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-4 text-white animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 px-4 rounded-2xl hover:bg-slate-800 font-medium text-lg flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
