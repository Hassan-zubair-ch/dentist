import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAFCFF] text-slate-900 selection:bg-cyan-500 selection:text-white">
        <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={() => setIsBookingOpen(true)} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={() => setIsBookingOpen(true)} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={() => setIsBookingOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<HomePage onOpenBooking={() => setIsBookingOpen(true)} />} />
          </Routes>
        </div>

        <Footer />

        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      </div>
    </Router>
  );
};

export default App;
