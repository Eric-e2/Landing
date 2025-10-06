import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Feedbacks = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  
  const feedbacks = [
    {
      icon: '🌡️',
      title: t('feedback1Title'),
      quote: t('feedback1Quote')
    },
    {
      icon: '💨',
      title: t('feedback2Title'),
      quote: t('feedback2Quote')
    },
    {
      icon: '📦',
      title: t('feedback3Title'),
      quote: t('feedback3Quote')
    },
    {
      icon: '👵',
      title: t('feedback4Title'),
      quote: t('feedback4Quote')
    },
    {
      icon: '🏫',
      title: t('feedback5Title'),
      quote: t('feedback5Quote')
    },
    {
      icon: '🚑',
      title: t('feedback6Title'),
      quote: t('feedback6Quote')
    },
    {
      icon: '✈️',
      title: t('feedback7Title'),
      quote: t('feedback7Quote')
    }
  ];
  
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, feedbacks.length]);
  
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 300;
      const gap = 16;
      scrollContainerRef.current.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % feedbacks.length);
  };
  
  return (
    <section id="feedbacks" className="py-20 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2d4a8f] mb-4">
            {t('feedbacksTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('feedbacksSubtitle')}
          </p>
        </div>
        
        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors duration-200 no-print"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-[#2d4a8f]" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors duration-200 no-print"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-[#2d4a8f]" />
          </button>
          
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
              {feedbacks.map((feedback, idx) => (
                <Card key={idx} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0" style={{ width: '300px' }}>
                  <CardHeader>
                    <div className="text-3xl mb-2">{feedback.icon}</div>
                    <CardTitle className="text-lg font-bold text-[#2d4a8f] mb-3">
                      {feedback.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feedback.quote}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="text-[#2d4a8f] hover:text-[#f45053] font-medium transition-colors duration-200 no-print"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('discoverMore')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
