import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    useCase: '',
    message: '',
    sourceCTA: ''
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e, cta) => {
    e.preventDefault();
    setFormData({ ...formData, sourceCTA: cta });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  
  return (
    <section id="contact" className="py-20 bg-[#2d4a8f]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-white/90">
            {t('contactSubtitle')}
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <p className="text-2xl font-bold text-white mb-4">
              {t('formSuccess')}
            </p>
            <div className="space-y-4">
              <a
                href="#"
                className="block text-white hover:text-[#f45053] transition-colors duration-200 no-print"
              >
                {t('formCalendar')}
              </a>
              <a
                href="#"
                className="block text-white hover:text-[#f45053] transition-colors duration-200 no-print"
              >
                {t('formWhatsApp')}
              </a>
            </div>
          </div>
        ) : (
          <form className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2 text-sm">{t('formName')}</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-sm">{t('formCompany')}</label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => handleChange('company', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  required
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2 text-sm">{t('formEmail')}</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-sm">{t('formPhone')}</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2 text-sm">{t('formCountry')}</label>
                <Input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={(e) => handleChange('country', e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2 text-sm">{t('formUseCase')}</label>
                <Select onValueChange={(value) => handleChange('useCase', value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder={t('formSelectUseCase')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elderly">{t('formUseCaseElderly')}</SelectItem>
                    <SelectItem value="temp">{t('formUseCaseTemp')}</SelectItem>
                    <SelectItem value="coldchain">{t('formUseCaseColdChain')}</SelectItem>
                    <SelectItem value="assets">{t('formUseCaseAssets')}</SelectItem>
                    <SelectItem value="smart">{t('formUseCaseSmart')}</SelectItem>
                    <SelectItem value="other">{t('formUseCaseOther')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-white font-medium mb-2 text-sm">{t('formMessage')}</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-32"
                required
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={(e) => handleSubmit(e, 'book-demo')}
                data-cta="book-demo"
                className="bg-[#f45053] hover:bg-[#d63e41] text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 no-print"
              >
                {t('bookDemo')}
              </Button>
              <Button
                onClick={(e) => handleSubmit(e, 'start-pilot')}
                data-cta="start-pilot"
                variant="outline"
                className="bg-white text-[#2d4a8f] hover:bg-white/90 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 no-print"
              >
                {t('startPilot')}
              </Button>
              <Button
                onClick={(e) => handleSubmit(e, 'become-partner')}
                data-cta="become-partner"
                variant="outline"
                className="bg-white text-[#2d4a8f] hover:bg-white/90 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105 no-print"
              >
                {t('becomePartner')}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
