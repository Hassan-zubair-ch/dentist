import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 lg:px-12 xl:px-16 max-w-[2500px] mx-auto w-full min-h-screen overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
        
        {/* Left Side: Text and Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12 z-10"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span className="text-cyan-700 text-xs font-bold uppercase tracking-widest">Get in Touch</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Let's create your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                Perfect Smile.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Whether you need to book an appointment or simply have a question about our services, our dedicated team is here to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl space-y-4 group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Call Us 24/7</span>
                <a href="tel:+18005553368" className="text-lg font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  +1 (800) 555-DENT
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl space-y-4 group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Email Us</span>
                <a href="mailto:hello@dentora.com" className="text-lg font-extrabold text-slate-900 group-hover:text-cyan-600 transition-colors">
                  hello@dentora.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl space-y-4 group transition-all sm:col-span-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Visit Our Clinic</span>
                <p className="text-lg font-extrabold text-slate-900">
                  742 Evergreen Medical Parkway, Suite 400 <br /> New York, NY 10012
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Form / Map (Immersive Image base) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative h-full min-h-[600px] lg:min-h-[800px] w-full rounded-[3rem] overflow-hidden shadow-3xl bg-slate-900 p-8 flex items-center justify-center"
        >
          {/* Abstract dark background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-slate-900 to-slate-900"></div>

          <div className="relative z-10 w-full max-w-lg bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12 text-cyan-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-slate-900">Message Received!</h3>
                  <p className="text-base text-slate-600">
                    Thank you for reaching out. One of our specialists will get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-3 rounded-full transition-colors text-sm"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 mb-8">
                  <h3 className="text-3xl font-extrabold text-slate-900">Drop us a line</h3>
                  <p className="text-sm text-slate-500 font-medium">We usually reply within 2 hours during business days.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all resize-none font-medium placeholder:text-slate-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-cyan-600 text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-cyan-500/25 group"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
