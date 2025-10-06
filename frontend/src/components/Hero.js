import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const Hero = () => {
  const { t } = useLanguage();
  
  const handleCTAClick = (cta) => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handlePDFClick = () => {
    window.print();
  };
  
  return (
    <section id="hero" className="relative pt-24 pb-16 bg-gradient-to-br from-white via-[#f5f6f8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            {t('heroHeadline')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            {t('heroSubcopy')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => handleCTAClick('book-demo')}
              data-cta="book-demo"
              className="bg-[#f45053] hover:bg-[#d63e41] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 no-print"
            >
              {t('bookDemo')}
            </Button>
            <Button
              onClick={() => handleCTAClick('start-pilot')}
              data-cta="start-pilot"
              variant="outline"
              className="border-2 border-[#2d4a8f] text-[#2d4a8f] hover:bg-[#2d4a8f] hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 no-print"
            >
              {t('startPilot')}
            </Button>
            <Button
              onClick={handlePDFClick}
              data-cta="get-pdf"
              variant="ghost"
              className="text-[#2d4a8f] hover:bg-[#2d4a8f]/10 px-8 py-6 text-lg rounded-lg transition-all duration-300 no-print"
            >
              {t('getOnePager')}
            </Button>
          </div>
          
          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="flex items-center justify-center w-36 h-10 bg-gray-300 rounded" style={{ filter: 'grayscale(100%)' }}>
                <span className="text-xs text-gray-600">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
