import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 px-4 max-w-7xl mx-auto space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider">
          Get in Touch
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
          Contact <span className="text-cyan-600">Dentora Clinic</span>
        </h1>
        <p className="text-sm text-slate-600">
          Have questions or want to speak with our dental specialists? Send us a message or visit our clinic.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Call Us</span>
                <a href="tel:+18005553368" className="text-base font-extrabold text-slate-900 hover:text-cyan-600">
                  +1 (800) 555-DENTORA
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Email Us</span>
                <a href="mailto:hellodentora@gmail.com" className="text-base font-extrabold text-slate-900 hover:text-cyan-600">
                  hellodentora@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                <p className="text-sm font-bold text-slate-900">
                  742 Evergreen Medical Parkway, Suite 400
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-slate-100 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-cyan-500 mx-auto" />
              <h3 className="text-2xl font-extrabold text-slate-900">Message Sent!</h3>
              <p className="text-sm text-slate-600">
                Thank you for contacting Dentora. Our team will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Send Us a Direct Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <textarea
                rows={4}
                required
                placeholder="Your Message..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-cyan-500/25 transition-all text-sm"
              >
                Send Message Now
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
