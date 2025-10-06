import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Plane, Building, School, Heart } from 'lucide-react';

const Results = () => {
  const { t } = useLanguage();
  
  const cases = [
    {
      icon: Plane,
      title: t('case1Title'),
      metric: t('case1Metric'),
      desc: t('case1Desc')
    },
    {
      icon: Building,
      title: t('case2Title'),
      metric: t('case2Metric'),
      desc: t('case2Desc')
    },
    {
      icon: School,
      title: t('case3Title'),
      metric: t('case3Metric'),
      desc: t('case3Desc')
    },
    {
      icon: Heart,
      title: t('case4Title'),
      metric: t('case4Metric'),
      desc: t('case4Desc')
    }
  ];
  
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2d4a8f] mb-4">
            {t('resultsTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('resultsSubtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 bg-[#f45053]/10 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-[#f45053]" />
                  </div>
                  <CardTitle className="text-lg font-bold text-[#2d4a8f] mb-2">
                    {item.title}
                  </CardTitle>
                  <p className="text-xl font-bold text-[#f45053] mb-2">
                    {item.metric}
                  </p>
                  <CardDescription className="text-gray-600 text-sm">
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Results;
