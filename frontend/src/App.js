import React from 'react';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Solutions from './components/Solutions';
import HowItWorks from './components/HowItWorks';
import ComplianceSecurity from './components/ComplianceSecurity';
import Results from './components/Results';
import Feedbacks from './components/Feedbacks';
import Integrators from './components/Integrators';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Hero />
        <SocialProof />
        <Solutions />
        <HowItWorks />
        <ComplianceSecurity />
        <Results />
        <Feedbacks />
        <Integrators />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
