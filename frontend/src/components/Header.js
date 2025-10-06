import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, switchLanguage, t } = useLanguage();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { key: 'navSolutions', href: '#solutions' },
    { key: 'navHow', href: '#how' },
    { key: 'navSecurity', href: '#security' },
    { key: 'navResults', href: '#results' },
    { key: 'navFeedbacks', href: '#feedbacks' },
    { key: 'navIntegrators', href: '#integrators' },
    { key: 'navFaq', href: '#faq' },
    { key: 'navContact', href: '#contact' },
  ];
  
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2" onClick={(e) => handleNavClick(e, '#hero')}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#2d4a8f"/>
                <text x="20" y="27" fontSize="20" fontWeight="bold" textAnchor="middle" fill="white">E2</text>
              </svg>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-gray-700 hover:text-[#2d4a8f] transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          
          {/* Language Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm font-medium">
              <button
                onClick={() => switchLanguage('en')}
                className={`transition-colors duration-200 ${language === 'en' ? 'text-[#2d4a8f] font-bold' : 'text-gray-500 hover:text-gray-700'}`}
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => switchLanguage('fr')}
                className={`transition-colors duration-200 ${language === 'fr' ? 'text-[#2d4a8f] font-bold' : 'text-gray-500 hover:text-gray-700'}`}
              >
                FR
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#2d4a8f] hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map(item => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#2d4a8f] hover:bg-gray-50 transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
