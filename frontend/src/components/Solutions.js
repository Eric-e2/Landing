import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';
import { HeartPulse, ThermometerSun, PackageSearch, Box, Watch } from 'lucide-react';

const Solutions = () => {
  const { t } = useLanguage();
  
  const pillars = [
    {
      id: 'pillar-care',
      icon: HeartPulse,
      title: t('pillar1Title'),
      desc: t('pillar1Desc'),
      benefits: [t('pillar1Benefit1'), t('pillar1Benefit2'), t('pillar1Benefit3'), t('pillar1Benefit4')]
    },
    {
      id: 'pillar-temp',
      icon: ThermometerSun,
      title: t('pillar2Title'),
      desc: t('pillar2Desc'),
      benefits: [t('pillar2Benefit1'), t('pillar2Benefit2'), t('pillar2Benefit3'), t('pillar2Benefit4')]
    },
    {
      id: 'pillar-supply',
      icon: PackageSearch,
      title: t('pillar3Title'),
      desc: t('pillar3Desc'),
      benefits: [t('pillar3Benefit1'), t('pillar3Benefit2'), t('pillar3Benefit3'), t('pillar3Benefit4')]
    },
    {
      id: 'pillar-assets',
      icon: Box,
      title: t('pillar4Title'),
      desc: t('pillar4Desc'),
      benefits: [t('pillar4Benefit1'), t('pillar4Benefit2'), t('pillar4Benefit3'), t('pillar4Benefit4')]
    },
    {
      id: 'pillar-smart',
      icon: Watch,
      title: t('pillar5Title'),
      desc: t('pillar5Desc'),
      benefits: [t('pillar5Benefit1'), t('pillar5Benefit2'), t('pillar5Benefit3'), t('pillar5Benefit4')]
    }
  ];
  
  const handleLearnMore = (id) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2d4a8f] mb-4">
            {t('solutionsTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('solutionsSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card key={idx} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 bg-[#2d4a8f]/10 rounded-lg mb-4">
                    <Icon className="w-8 h-8 text-[#2d4a8f]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#2d4a8f] mb-2">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pillar.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#f45053] mr-2">•</span>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => handleLearnMore(pillar.id)}
                    variant="outline"
                    className="w-full border-[#2d4a8f] text-[#2d4a8f] hover:bg-[#2d4a8f] hover:text-white transition-colors duration-300 no-print"
                  >
                    {t('learnMore')}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
