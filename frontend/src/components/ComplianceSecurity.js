import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Lock, FileCheck, Server, Key, Award, Users, Fingerprint } from 'lucide-react';

const ComplianceSecurity = () => {
  const { t } = useLanguage();
  
  const features = [
    { icon: Shield, text: t('complianceFeature1') },
    { icon: Server, text: t('complianceFeature2') },
    { icon: Users, text: t('complianceFeature3') },
    { icon: FileCheck, text: t('complianceFeature4') },
    { icon: Key, text: t('complianceFeature5') },
    { icon: Award, text: t('complianceFeature6') },
    { icon: Lock, text: t('complianceFeature7') },
    { icon: Fingerprint, text: t('complianceFeature8') },
  ];
  
  return (
    <section id="security" className="py-20 bg-[#2d4a8f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('complianceTitle')}
          </h2>
          <p className="text-lg text-white/90">
            {t('complianceDesc')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white font-medium text-sm">{feature.text}</span>
              </div>
            );
          })}
        </div>
        
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 opacity-80">
          {['GDPR', 'ISO 27001', 'SOC 2', 'HIPAA'].map(badge => (
            <div key={badge} className="flex items-center justify-center w-24 h-24 bg-white/10 rounded-lg backdrop-blur-sm">
              <span className="text-white font-bold text-xs">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSecurity;
