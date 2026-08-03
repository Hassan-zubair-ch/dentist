import React from 'react';

export const ProcessRibbon: React.FC = () => {
  const steps = [
    { title: 'Smile Assessment' },
    { title: 'Care Planning' },
    { title: 'Treatment Process' },
    { title: 'Dental Maintenance' },
  ];

  return (
    <div className="w-full max-w-[2500px] mx-auto px-4 md:px-8 lg:px-12 xl:px-16 my-6">
      {/* Striped Background Process Track (Matching Orbix Studio Barcode/Striped pattern) */}
      <div className="relative py-4 px-6 rounded-2xl bg-slate-50 border border-slate-200/60 overflow-hidden flex items-center justify-between">
        {/* Striped Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, #0F172A, #0F172A 2px, transparent 2px, transparent 6px)`,
          }}
        />

        {/* 4 Process Step Labels */}
        <div className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-between">
          {steps.map((step) => (
            <div key={step.title} className="flex justify-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm text-xs font-bold text-slate-800">
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
