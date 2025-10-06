import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const HowItWorks = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      title: t('howStep1Title'),
      desc: t('howStep1Desc')
    },
    {
      title: t('howStep2Title'),
      desc: t('howStep2Desc')
    },
    {
      title: t('howStep3Title'),
      desc: t('howStep3Desc')
    }
  ];
  
  return (
    <section id="how" className="py-20 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2d4a8f] mb-4">
            {t('howTitle')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Card key={idx} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-[#f45053] text-white rounded-full mb-4 font-bold text-xl">
                  {idx + 1}
                </div>
                <CardTitle className="text-xl font-bold text-[#2d4a8f] mb-2">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {step.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
