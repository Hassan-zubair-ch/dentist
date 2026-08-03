import React from 'react';
import { Hero } from '../components/Hero';
import { ProcessRibbon } from '../components/ProcessRibbon';
import { StatsSpecialist } from '../components/StatsSpecialist';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { BlogSection } from '../components/BlogSection';

interface HomePageProps {
  onOpenBooking: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  return (
    <main className="min-h-screen space-y-4">
      <Hero onOpenBooking={onOpenBooking} />
      <ProcessRibbon />
      <StatsSpecialist onOpenBooking={onOpenBooking} />
      <WhyChooseUs />
      <BlogSection />
    </main>
  );
};
