import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Evaluation from './components/Evaluation';
import Results from './components/Results';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppSticky from './components/WhatsAppSticky';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-richblack text-offwhite font-sans selection:bg-gold-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Methodology />
        <Evaluation />
        <Results />
        <About />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppSticky />
    </div>
  );
};

export default App;