import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language, switchLanguage, t } = useLanguage();
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">E2 Technologies</h3>
            <p className="text-sm text-gray-400 mb-2">{t('footerCompany')}</p>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="text-gray-400">{t('footerEmail')}: </span>
                <a href="mailto:contact@e2.dev" className="hover:text-[#f45053] transition-colors duration-200">contact@e2.dev</a>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">{t('footerWebsite')}: </span>
                <a href="https://www.e2.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#f45053] transition-colors duration-200">www.e2.dev</a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#solutions" onClick={(e) => handleNavClick(e, '#solutions')} className="text-sm text-gray-400 hover:text-[#f45053] transition-colors duration-200">
                  {t('navSolutions')}
                </a>
              </li>
              <li>
                <a href="#integrators" onClick={(e) => handleNavClick(e, '#integrators')} className="text-sm text-gray-400 hover:text-[#f45053] transition-colors duration-200">
                  {t('footerPartners')}
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-sm text-gray-400 hover:text-[#f45053] transition-colors duration-200">
                  {t('navContact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#f45053] transition-colors duration-200">
                  {t('footerPrivacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#f45053] transition-colors duration-200">
                  {t('footerTerms')}
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-400">Language:</span>
              <button
                onClick={() => switchLanguage('en')}
                className={`transition-colors duration-200 ${language === 'en' ? 'text-[#f45053] font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => switchLanguage('fr')}
                className={`transition-colors duration-200 ${language === 'fr' ? 'text-[#f45053] font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} E2 Technologies OÜ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
