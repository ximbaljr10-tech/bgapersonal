
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ServicesIntro from './components/ServicesIntro';
import BeforeAfter from './components/BeforeAfter';
import Methodology from './components/Methodology';
import Presencial from './components/Presencial';
import Evaluation from './components/Evaluation';
import Inspiration from './components/Inspiration';
import Feedbacks from './components/Feedbacks';
import Results from './components/Results';
import Pricing from './components/pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-richblack text-offwhite font-sans selection:bg-gold-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ServicesIntro />
        <Methodology />
        <Inspiration />
        <Evaluation />
        <Presencial />
        <BeforeAfter />
        <Feedbacks />
        <Results />
        <Pricing />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
