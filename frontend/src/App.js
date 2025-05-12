import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import WebFont from 'webfontloader';

// CSS imports
import './App.css';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Page sections
import HeroSection from './components/sections/HeroSection';
import WhySolaceVR from './components/sections/WhySolaceVR';
import ProductsSection from './components/sections/ProductsSection';
import CaseStudiesSection from './components/sections/CaseStudiesSection';
import ResearchSection from './components/sections/ResearchSection';
import PressSection from './components/sections/PressSection';
import ContactSection from './components/sections/ContactSection';

// Common components
import NewsletterPopup from './components/common/NewsletterPopup';
import CookieBanner from './components/common/CookieBanner';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import NotFound from './components/pages/NotFound';

function App() {
  useEffect(() => {
    // Load fonts
    WebFont.load({
      google: {
        families: ['Inter:300,400,600,800', 'Poppins:300,400,600,800']
      }
    });
  }, []);

  // Main homepage component
  const HomePage = () => (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <WhySolaceVR />
        <ProductsSection />
        <CaseStudiesSection />
        <ResearchSection />
        <PressSection />
        <ContactSection />
      </main>

      <Footer />
      
      <NewsletterPopup />
      <CookieBanner />
      <ScrollToTop />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
