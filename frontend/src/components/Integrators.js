import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const Integrators = () => {
  const { t } = useLanguage();
  
  const handlePartnerClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="integrators" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2d4a8f] mb-4">
            {t('integratorsTitle')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('integratorsSubtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('integratorsDesc')}
            </p>
            <Button
              onClick={handlePartnerClick}
              data-cta="become-partner"
              className="bg-[#f45053] hover:bg-[#d63e41] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 no-print"
            >
              {t('becomePartner')}
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#2d4a8f] text-white">
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('integratorsTableRegion')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('integratorsTableModel')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('integratorsTableResponsibilities')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('integratorsTableE2Provides')}</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">{t('integratorsTableRevenue')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{t('integratorBaltics')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorBalticsModel')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorBalticsResp')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorBalticsE2')}</td>
                  <td className="px-4 py-3 text-sm font-medium text-[#2d4a8f]">{t('integratorBalticsRevenue')}</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{t('integratorFrance')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorFranceModel')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorFranceResp')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorFranceE2')}</td>
                  <td className="px-4 py-3 text-sm font-medium text-[#2d4a8f]">{t('integratorFranceRevenue')}</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{t('integratorDACH')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorDACHModel')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorDACHResp')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{t('integratorDACHE2')}</td>
                  <td className="px-4 py-3 text-sm font-medium text-[#2d4a8f]">{t('integratorDACHRevenue')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrators;
