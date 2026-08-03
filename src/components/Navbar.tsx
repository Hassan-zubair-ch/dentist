import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  variant?: 'floating' | 'transparent';
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, variant = 'floating' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
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

  const renderLogo = () => (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-105 ${variant === 'transparent' ? 'bg-white text-slate-950' : 'bg-cyan-400 text-slate-950 shadow-cyan-400/30'}`}>
        <svg
          className="w-4 h-4 fill-current text-slate-950"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C8 2 6 5 6 9c0 3.5 1.5 7.5 3 11 1 2.3 3.5 2.3 4.5 0 1.5-3.5 3-7.5 3-11 0-4-2-7-6.5-7z" />
        </svg>
      </div>
      <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1">
        Dentora
        <span className={`inline-block w-1.5 h-1.5 rounded-full ${variant === 'transparent' ? 'bg-white' : 'bg-cyan-400'}`}></span>
      </span>
    </Link>
  );

  const renderNavLinks = () => (
    <nav className={`hidden md:flex items-center gap-1 p-1 rounded-full text-xs font-medium ${variant === 'transparent' ? 'bg-white/10 backdrop-blur-md' : 'bg-white/5 border border-white/10'}`}>
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
              isActive
                ? 'bg-white text-slate-950 font-bold shadow-md'
                : 'text-slate-200 hover:text-white hover:bg-white/10'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );

  const renderButton = () => (
    <div className="hidden sm:flex items-center gap-3">
      <button
        onClick={onOpenBooking}
        className={`flex items-center gap-2 font-bold px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 group text-xs shadow-lg ${variant === 'transparent' ? 'bg-white text-slate-950 hover:bg-slate-100' : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-400/25'}`}
      >
        <span>Book a Call</span>
        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5 ${variant === 'transparent' ? 'bg-slate-100' : 'bg-slate-950/20'}`}>
          <ArrowRight className="w-3 h-3 text-slate-950" />
        </div>
      </button>
    </div>
  );

  if (variant === 'transparent') {
    return (
      <header className="relative z-50 flex items-center justify-between w-full pb-8">
        {renderLogo()}
        {renderNavLinks()}
        {renderButton()}
        
        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Drawer (Transparent Variant) */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-16 bg-[#0D1520]/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-4 text-white animate-in fade-in slide-in-from-top-4">
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
              className="mt-2 w-full py-3.5 bg-white text-slate-950 font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>
    );
  }

  if (location.pathname === '/' && variant !== 'transparent') {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <div
        className={`w-full max-w-5xl transition-all duration-500 rounded-full px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0D1520]/95 backdrop-blur-2xl border border-slate-700/60 shadow-2xl shadow-cyan-950/40 text-white scale-[0.99]'
            : 'bg-[#0D1520]/85 backdrop-blur-xl border border-white/15 text-white shadow-2xl'
        }`}
      >
        {renderLogo()}
        {renderNavLinks()}
        {renderButton()}

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[#0D1520]/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-4 text-white animate-in fade-in slide-in-from-top-4">
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
            className="mt-2 w-full py-3.5 bg-cyan-400 text-slate-950 font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-400/30"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
