import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent } from './ui/card';

const SocialProof = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-[#f5f6f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#2d4a8f] text-center mb-12">
          {t('socialProofTitle')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 italic mb-4">
                {t('quote1')}
              </p>
              <p className="text-sm text-gray-500 font-medium">
                {t('quote1Author')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 italic mb-4">
                {t('quote2')}
              </p>
              <p className="text-sm text-gray-500 font-medium">
                {t('quote2Author')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
