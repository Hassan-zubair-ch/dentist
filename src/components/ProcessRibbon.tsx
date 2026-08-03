import React from 'react';
import { Sparkles, CalendarCheck, Stethoscope, ShieldCheck } from 'lucide-react';

export const ProcessRibbon: React.FC = () => {
  const steps = [
    { number: '01', title: 'Smile Assessment', icon: Sparkles },
    { number: '02', title: 'Care Planning', icon: CalendarCheck },
    { number: '03', title: 'Treatment Process', icon: Stethoscope },
    { number: '04', title: 'Dental Maintenance', icon: ShieldCheck },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 -mt-4 mb-16">
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-100 shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`flex items-center gap-4 p-3 transition-transform hover:translate-y-[-2px] ${
                  idx !== 0 ? 'pt-4 md:pt-3' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-sm shrink-0 border border-cyan-100">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-cyan-600">
                    <span>Step {step.number}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                    {step.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
