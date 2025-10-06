import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Header
    navSolutions: 'Our Solutions',
    navHow: 'How it works',
    navSecurity: 'Compliance & Security',
    navResults: 'Results',
    navFeedbacks: 'Feedbacks',
    navIntegrators: 'Integrators',
    navFaq: 'FAQ',
    navContact: 'Contact',
    
    // Hero
    heroHeadline: 'Real-time care & critical asset visibility.',
    heroSubcopy: 'From elderly activity to hospital assets and cold-chain. Ultra-low-power sensors + a scalable cloud platform.',
    bookDemo: 'Book a Demo',
    startPilot: 'Start a Pilot',
    getOnePager: 'Get the 1-pager (PDF)',
    becomePartner: 'Become a Partner',
    
    // Social Proof
    socialProofTitle: 'Trusted by Leading Organizations',
    quote1: '"E2-Care gave us visibility we never had before. Early detection saved lives."',
    quote1Author: '— Care Home Director, France',
    quote2: '"Compliance audits are now effortless. Export, done. No more spreadsheet hell."',
    quote2Author: '— Pharmacy Chain, Latvia',
    
    // Solutions
    solutionsTitle: 'Our Connected Care Solutions',
    solutionsSubtitle: 'Five pillars for comprehensive monitoring and safety',
    learnMore: 'Learn more',
    
    pillar1Title: 'E2-Care — Elderly Monitoring',
    pillar1Desc: 'Behavioral monitoring via PIR/DOOR/AIR + alerting & daily score. Family and caregivers see deviations early.',
    pillar1Benefit1: 'Early risk detection',
    pillar1Benefit2: 'Fewer silent falls',
    pillar1Benefit3: 'Privacy-first (no cameras)',
    pillar1Benefit4: 'Easy deployment',
    
    pillar2Title: 'E2-Temp & Humidity — Pharmacies & Hospitals',
    pillar2Desc: 'Calibrated sensors + audit-ready logs, alerts on excursions, exportable reports (PDF/CSV), API.',
    pillar2Benefit1: 'Compliance support (GxP best-practices)',
    pillar2Benefit2: 'Reduced product loss',
    pillar2Benefit3: 'Faster audits',
    pillar2Benefit4: 'Exportable reports',
    
    pillar3Title: 'E2-Supply Chain — Cold-Chain',
    pillar3Desc: 'End-to-end temperature + location visibility (BLE sensors + cellular relay), store-and-forward resiliency.',
    pillar3Benefit1: 'Fewer claims',
    pillar3Benefit2: 'Root-cause analysis per leg',
    pillar3Benefit3: 'SLA proofs',
    pillar3Benefit4: 'Store-and-forward resiliency',
    
    pillar4Title: 'E2-Asset Tracking — Hospitals',
    pillar4Desc: 'Track critical assets with room-level presence, usage patterns, maintenance hooks.',
    pillar4Benefit1: 'Time saved',
    pillar4Benefit2: 'Better utilization',
    pillar4Benefit3: 'Loss prevention',
    pillar4Benefit4: 'Room-level accuracy',
    
    pillar5Title: 'Smart Devices for Seniors',
    pillar5Desc: 'Watches, smart pill dispensers, voice-AI (EN/FR/LV/LT/DE/RU).',
    pillar5Benefit1: 'Medication adherence',
    pillar5Benefit2: 'Instant help',
    pillar5Benefit3: 'Peace of mind',
    pillar5Benefit4: 'Direct integration with E2 dashboard',
    
    // How It Works
    howTitle: 'How It Works',
    howStep1Title: 'Install in Minutes',
    howStep1Desc: 'Install the sensors in a few minutes — no complex setup required.',
    howStep2Title: 'Live Data',
    howStep2Desc: 'Data appears live in your dashboard with real-time updates.',
    howStep3Title: 'AI Does the Rest',
    howStep3Desc: 'Our AI layer handles trend detection (health risk patterns), fall-down alerts, reminders (medication), and smart communication with caregivers and family.',
    
    // Compliance & Security
    complianceTitle: 'Compliance & Security',
    complianceDesc: 'Built with privacy and compliance at the core.',
    complianceFeature1: 'GDPR Compliant',
    complianceFeature2: 'EU Hosting',
    complianceFeature3: 'Role-Based Access',
    complianceFeature4: 'Audit Logs',
    complianceFeature5: 'API Keys & Security',
    complianceFeature6: 'GxP Best-Practices',
    complianceFeature7: 'Multi-Tenant Dashboard',
    complianceFeature8: 'SSO (Roadmap)',
    
    // Results
    resultsTitle: 'Results & Use Cases',
    resultsSubtitle: 'Real impact across industries',
    
    case1Title: 'Airport LT',
    case1Metric: '24/7 cold-chain monitoring',
    case1Desc: 'Zero vaccine losses during transport',
    
    case2Title: 'Pharmacies LV',
    case2Metric: '500+ locations',
    case2Desc: 'Audit time reduced by 80%',
    
    case3Title: 'Cities LV / Schools',
    case3Metric: 'Air quality monitoring',
    case3Desc: 'Improved ventilation & health outcomes',
    
    case4Title: 'UK Falls Detection',
    case4Metric: '40% faster response',
    case4Desc: 'Elderly fall detection in care homes',
    
    // Feedbacks
    feedbacksTitle: 'Customer Feedbacks',
    feedbacksSubtitle: 'What our clients say',
    discoverMore: 'Discover more success stories →',
    
    feedback1Title: 'Major Pharmacy Chain, Latvia',
    feedback1Quote: '"Before E2-Temp we manually logged fridge temps twice daily. Audits were stressful paper chases. Now? Click, export PDF, done. We caught 3 fridge failures before they cost us stock. ROI in 4 months."',
    
    feedback2Title: 'City Council, Riga',
    feedback2Quote: '"We deployed E2 air-quality sensors in 12 schools. Parents get a daily AQI score. Teachers adjust ventilation. Sick days dropped 18% the first winter. Data-driven decisions, zero guesswork."',
    
    feedback3Title: 'International Freight Forwarder',
    feedback3Quote: '"Pharma cold-chain from Bulgaria to France: 6 legs, 52 hours. E2-Supply gave us second-by-second temp + GPS. When a reefer failed in transit, we rerouted in 20 min. Claim denied, customer happy."',
    
    feedback4Title: 'Care Home Director, Normandy',
    feedback4Quote: '"E2-Care spotted a resident\'s routine change—bathroom visits doubled, movement at night. We called the family; GP found a UTI early. It would\'ve been a hospital admission. Privacy intact, dignity respected."',
    
    feedback5Title: 'Regional Hospital, Liepāja',
    feedback5Quote: '"We lose €40k/year in \'missing\' infusion pumps. E2-Asset tags + room presence = instant location. First month: found 14 pumps in storage. Utilization up 22%. Payback: 7 months."',
    
    feedback6Title: 'Elderly Living Alone, UK',
    feedback6Quote: '"My son lives abroad. The E2 watch + pill dispenser reminds me to take meds, calls him if I don't move. I press SOS once—he was on a video call in 30 seconds. I'm independent, he's calm."',
    
    feedback7Title: 'Airport Logistics, Vilnius',
    feedback7Quote: '"Vaccine shipments = zero margin for error. E2-Temp sensors in every coolbox, alerts to our phone. 18 months, 2,400 shipments, zero temperature breaches. Regulators love the audit trail."',
    
    // Integrators
    integratorsTitle: 'Integrators & Local Partners',
    integratorsSubtitle: 'Grow with us',
    integratorsDesc: 'We partner with local experts who understand your market. Our integrators handle sales, installation, and L1 support. We provide the platform, APIs, training, and marketing assets. Revenue share models tailored to your region and business model.',
    integratorsTableRegion: 'Region',
    integratorsTableModel: 'Model',
    integratorsTableResponsibilities: 'Responsibilities',
    integratorsTableE2Provides: 'E2 Provides',
    integratorsTableRevenue: 'Revenue Share',
    
    integratorBaltics: 'Baltics',
    integratorBalticsModel: 'JV',
    integratorBalticsResp: 'Sales, local install, L1 support',
    integratorBalticsE2: 'Platform, APIs, L2/L3 support, marketing kit',
    integratorBalticsRevenue: '30–50%',
    
    integratorFrance: 'France',
    integratorFranceModel: 'Integrator',
    integratorFranceResp: 'Presales, deployment',
    integratorFranceE2: 'SaaS, training, white-label assets',
    integratorFranceRevenue: '25–40%',
    
    integratorDACH: 'DACH',
    integratorDACHModel: 'JV',
    integratorDACHResp: 'Bizdev, ops, SLAs',
    integratorDACHE2: 'Hardware supply, platform, partner portal',
    integratorDACHRevenue: '30–50%',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    
    faq1Q: 'How fast can we start?',
    faq1A: 'Pilot in days; full rollout in weeks depending on sites.',
    
    faq2Q: 'Do you support multi-language?',
    faq2A: 'Yes: EN/FR/LV/LT/DE/RU at app level; more on request.',
    
    faq3Q: 'What connectivity?',
    faq3A: 'BLE sensors, Hop/LTE/NB-IoT relays; Wi-Fi where available.',
    
    faq4Q: 'Privacy?',
    faq4A: 'Privacy-first: no cameras; consent and role-based access.',
    
    faq5Q: 'Compliance & audits?',
    faq5A: 'GxP best-practices supported; audit-ready reports; immutable logs.',
    
    faq6Q: 'Integration options?',
    faq6A: 'REST, MQTT, Webhooks; partner portal & white-label.',
    
    // Contact
    contactTitle: 'Ready to Transform Your Care & Asset Monitoring?',
    contactSubtitle: 'Let's discuss your specific needs',
    formName: 'Name',
    formCompany: 'Company',
    formEmail: 'Email',
    formPhone: 'Phone',
    formCountry: 'Country',
    formUseCase: 'Use Case',
    formMessage: 'Message',
    formSelectUseCase: 'Select your use case',
    formUseCaseElderly: 'Elderly Monitoring',
    formUseCaseTemp: 'Temperature & Humidity',
    formUseCaseColdChain: 'Cold-Chain / Supply Chain',
    formUseCaseAssets: 'Asset Tracking',
    formUseCaseSmart: 'Smart Devices',
    formUseCaseOther: 'Other',
    formSuccess: 'Thank you! We'll be in touch soon.',
    formCalendar: 'Add a 20-min call to my calendar',
    formWhatsApp: 'Prefer WhatsApp? Message us',
    
    // Footer
    footerCompany: 'E2 Technologies OÜ — Tallinn, Estonia',
    footerEmail: 'Email',
    footerWebsite: 'Website',
    footerPartners: 'Partners',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',
  },
  fr: {
    // Header
    navSolutions: 'Nos Solutions',
    navHow: 'Comment ça marche',
    navSecurity: 'Conformité & Sécurité',
    navResults: 'Résultats',
    navFeedbacks: 'Retours clients',
    navIntegrators: 'Intégrateurs',
    navFaq: 'FAQ',
    navContact: 'Contact',
    
    // Hero
    heroHeadline: 'Visibilité temps réel pour le care & les actifs critiques.',
    heroSubcopy: 'Du suivi d'activité des seniors aux équipements hospitaliers et à la chaîne du froid. Capteurs ultra-basse consommation + plateforme cloud évolutive.',
    bookDemo: 'Réserver une Démo',
    startPilot: 'Lancer un Pilote',
    getOnePager: 'Obtenir la fiche (PDF)',
    becomePartner: 'Devenir Partenaire',
    
    // Social Proof
    socialProofTitle: 'La confiance des organisations leaders',
    quote1: '"E2-Care nous a donné une visibilité inédite. La détection précoce a sauvé des vies."',
    quote1Author: '— Directrice EHPAD, France',
    quote2: '"Les audits de conformité sont désormais sans effort. Export, terminé. Fini l'enfer des tableurs."',
    quote2Author: '— Chaîne de pharmacies, Lettonie',
    
    // Solutions
    solutionsTitle: 'Nos Solutions de Care Connecté',
    solutionsSubtitle: 'Cinq piliers pour une surveillance complète',
    learnMore: 'En savoir plus',
    
    pillar1Title: 'E2-Care — Monitoring des Seniors',
    pillar1Desc: 'Monitoring comportemental via PIR/DOOR/AIR + alertes & score quotidien. Famille et aidants détectent tôt les écarts.',
    pillar1Benefit1: 'Détection précoce des risques',
    pillar1Benefit2: 'Moins de chutes silencieuses',
    pillar1Benefit3: 'Priorité à la vie privée (pas de caméras)',
    pillar1Benefit4: 'Déploiement facile',
    
    pillar2Title: 'E2-Temp & Humidité — Pharmacies & Hôpitaux',
    pillar2Desc: 'Capteurs étalonnés + journalisation audit-ready, alertes en cas d'excursion, rapports exportables (PDF/CSV), API.',
    pillar2Benefit1: 'Support conformité (bonnes pratiques GxP)',
    pillar2Benefit2: 'Réduction des pertes de produits',
    pillar2Benefit3: 'Audits plus rapides',
    pillar2Benefit4: 'Rapports exportables',
    
    pillar3Title: 'E2-Supply Chain — Chaîne du Froid',
    pillar3Desc: 'Visibilité bout-en-bout température + position (capteurs BLE + relais cellulaire), résilience store-and-forward.',
    pillar3Benefit1: 'Moins de réclamations',
    pillar3Benefit2: 'Analyse de cause racine par étape',
    pillar3Benefit3: 'Preuves SLA',
    pillar3Benefit4: 'Résilience store-and-forward',
    
    pillar4Title: 'E2-Asset Tracking — Hôpitaux',
    pillar4Desc: 'Suivi d'actifs critiques avec présence pièce-niveau, profils d'usage, maintenance intégrée.',
    pillar4Benefit1: 'Gain de temps',
    pillar4Benefit2: 'Meilleure utilisation',
    pillar4Benefit3: 'Prévention des pertes',
    pillar4Benefit4: 'Précision au niveau de la pièce',
    
    pillar5Title: 'Appareils Intelligents pour Seniors',
    pillar5Desc: 'Montres, piluliers, IA vocale (EN/FR/LV/LT/DE/RU).',
    pillar5Benefit1: 'Observance médicamenteuse',
    pillar5Benefit2: 'Aide instantanée',
    pillar5Benefit3: 'Tranquillité d'esprit',
    pillar5Benefit4: 'Intégration directe avec tableau de bord E2',
    
    // How It Works
    howTitle: 'Comment Ça Marche',
    howStep1Title: 'Installation Rapide',
    howStep1Desc: 'Installez les capteurs en quelques minutes — pas de configuration complexe.',
    howStep2Title: 'Données en Direct',
    howStep2Desc: 'Les données apparaissent en direct sur votre tableau de bord avec mises à jour en temps réel.',
    howStep3Title: 'L'IA Fait le Reste',
    howStep3Desc: 'Notre couche d'IA fait le reste : détection de tendances (risques santé), alertes chutes, rappels (prise de pilules) et communication intelligente avec les aidants et la famille.',
    
    // Compliance & Security
    complianceTitle: 'Conformité & Sécurité',
    complianceDesc: 'Conçu avec la confidentialité et la conformité au cœur.',
    complianceFeature1: 'Conforme RGPD',
    complianceFeature2: 'Hébergement UE',
    complianceFeature3: 'Accès Basé sur les Rôles',
    complianceFeature4: 'Journaux d'Audit',
    complianceFeature5: 'Clés API & Sécurité',
    complianceFeature6: 'Bonnes Pratiques GxP',
    complianceFeature7: 'Tableau de Bord Multi-Tenant',
    complianceFeature8: 'SSO (Feuille de Route)',
    
    // Results
    resultsTitle: 'Résultats & Cas d'Usage',
    resultsSubtitle: 'Impact réel dans tous les secteurs',
    
    case1Title: 'Aéroport LT',
    case1Metric: 'Surveillance chaîne du froid 24/7',
    case1Desc: 'Zéro perte de vaccins pendant le transport',
    
    case2Title: 'Pharmacies LV',
    case2Metric: '500+ emplacements',
    case2Desc: 'Temps d'audit réduit de 80%',
    
    case3Title: 'Villes LV / Écoles',
    case3Metric: 'Surveillance qualité de l'air',
    case3Desc: 'Amélioration ventilation & résultats santé',
    
    case4Title: 'Détection Chutes UK',
    case4Metric: 'Réponse 40% plus rapide',
    case4Desc: 'Détection chutes seniors en EHPAD',
    
    // Feedbacks
    feedbacksTitle: 'Retours Clients',
    feedbacksSubtitle: 'Ce que disent nos clients',
    discoverMore: 'Voir plus de retours clients →',
    
    feedback1Title: 'Grande Chaîne de Pharmacies, Lettonie',
    feedback1Quote: '"Avant E2-Temp, nous enregistrions manuellement les températures des frigos deux fois par jour. Les audits étaient stressants. Maintenant ? Clic, export PDF, terminé. Nous avons détecté 3 pannes de frigo avant qu'elles ne nous coûtent du stock. ROI en 4 mois."',
    
    feedback2Title: 'Conseil Municipal, Riga',
    feedback2Quote: '"Nous avons déployé des capteurs de qualité de l'air E2 dans 12 écoles. Les parents reçoivent un score AQI quotidien. Les enseignants ajustent la ventilation. Les jours de maladie ont chuté de 18% le premier hiver. Décisions basées sur les données, zéro supposition."',
    
    feedback3Title: 'Transitaire International',
    feedback3Quote: '"Chaîne du froid pharma de Bulgarie vers France : 6 étapes, 52 heures. E2-Supply nous a donné température + GPS seconde par seconde. Quand un conteneur frigorifique est tombé en panne en transit, nous avons réacheminé en 20 min. Réclamation refusée, client satisfait."',
    
    feedback4Title: 'Directrice EHPAD, Normandie',
    feedback4Quote: '"E2-Care a repéré un changement de routine d'un résident — visites aux toilettes doublées, mouvement la nuit. Nous avons appelé la famille ; le médecin a trouvé une infection urinaire tôt. Ça aurait été une admission à l'hôpital. Vie privée intacte, dignité respectée."',
    
    feedback5Title: 'Hôpital Régional, Liepāja',
    feedback5Quote: '"Nous perdons 40k€/an en pompes à perfusion 'manquantes'. Tags E2-Asset + présence pièce = localisation instantanée. Premier mois : trouvé 14 pompes en stock. Utilisation +22%. Retour sur investissement : 7 mois."',
    
    feedback6Title: 'Senior Vivant Seul, UK',
    feedback6Quote: '"Mon fils vit à l'étranger. La montre E2 + pilulier me rappelle de prendre mes médicaments, l'appelle si je ne bouge pas. J'appuie sur SOS une fois — il était en appel vidéo en 30 secondes. Je suis indépendant, il est calme."',
    
    feedback7Title: 'Logistique Aéroport, Vilnius',
    feedback7Quote: '"Expéditions de vaccins = zéro marge d'erreur. Capteurs E2-Temp dans chaque glacière, alertes sur notre téléphone. 18 mois, 2 400 expéditions, zéro violation de température. Les régulateurs adorent la piste d'audit."',
    
    // Integrators
    integratorsTitle: 'Intégrateurs & Partenaires Locaux',
    integratorsSubtitle: 'Grandissez avec nous',
    integratorsDesc: 'Nous nous associons avec des experts locaux qui comprennent votre marché. Nos intégrateurs gèrent les ventes, l'installation et le support L1. Nous fournissons la plateforme, les API, la formation et les ressources marketing. Modèles de partage des revenus adaptés à votre région et modèle d'affaires.',
    integratorsTableRegion: 'Région',
    integratorsTableModel: 'Modèle',
    integratorsTableResponsibilities: 'Responsabilités',
    integratorsTableE2Provides: 'E2 Fournit',
    integratorsTableRevenue: 'Partage Revenus',
    
    integratorBaltics: 'Baltes',
    integratorBalticsModel: 'JV',
    integratorBalticsResp: 'Ventes, installation locale, support L1',
    integratorBalticsE2: 'Plateforme, API, support L2/L3, kit marketing',
    integratorBalticsRevenue: '30–50%',
    
    integratorFrance: 'France',
    integratorFranceModel: 'Intégrateur',
    integratorFranceResp: 'Avant-vente, déploiement',
    integratorFranceE2: 'SaaS, formation, actifs marque blanche',
    integratorFranceRevenue: '25–40%',
    
    integratorDACH: 'DACH',
    integratorDACHModel: 'JV',
    integratorDACHResp: 'Bizdev, ops, SLA',
    integratorDACHE2: 'Fourniture matériel, plateforme, portail partenaires',
    integratorDACHRevenue: '30–50%',
    
    // FAQ
    faqTitle: 'Questions Fréquemment Posées',
    
    faq1Q: 'En combien de temps peut-on démarrer ?',
    faq1A: 'Pilote en quelques jours ; déploiement complet en quelques semaines selon le nombre de sites.',
    
    faq2Q: 'Supportez-vous plusieurs langues ?',
    faq2A: 'Oui : EN/FR/LV/LT/DE/RU dans l'app ; autres sur demande.',
    
    faq3Q: 'Quelles connectivités ?',
    faq3A: 'Capteurs BLE, relais Hop/LTE/NB-IoT ; Wi-Fi quand disponible.',
    
    faq4Q: 'Vie privée ?',
    faq4A: 'Priorité à la vie privée : pas de caméras ; consentement et accès par rôle.',
    
    faq5Q: 'Conformité & audits ?',
    faq5A: 'Bonnes pratiques GxP ; rapports auditables ; journaux immuables.',
    
    faq6Q: 'Intégrations ?',
    faq6A: 'REST, MQTT, Webhooks ; portail partenaires & marque blanche.',
    
    // Contact
    contactTitle: 'Prêt à Transformer Votre Surveillance Care & Actifs ?',
    contactSubtitle: 'Discutons de vos besoins spécifiques',
    formName: 'Nom',
    formCompany: 'Entreprise',
    formEmail: 'Email',
    formPhone: 'Téléphone',
    formCountry: 'Pays',
    formUseCase: 'Cas d'Usage',
    formMessage: 'Message',
    formSelectUseCase: 'Sélectionnez votre cas d'usage',
    formUseCaseElderly: 'Surveillance Seniors',
    formUseCaseTemp: 'Température & Humidité',
    formUseCaseColdChain: 'Chaîne du Froid / Supply Chain',
    formUseCaseAssets: 'Suivi d'Actifs',
    formUseCaseSmart: 'Appareils Intelligents',
    formUseCaseOther: 'Autre',
    formSuccess: 'Merci ! Nous vous contacterons bientôt.',
    formCalendar: 'Ajouter un appel de 20 min à mon agenda',
    formWhatsApp: 'Préférez WhatsApp ? Écrivez-nous',
    
    // Footer
    footerCompany: 'E2 Technologies OÜ — Tallinn, Estonie',
    footerEmail: 'Email',
    footerWebsite: 'Site web',
    footerPartners: 'Partenaires',
    footerPrivacy: 'Politique de Confidentialité',
    footerTerms: 'Conditions d'Utilisation',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    const stored = localStorage.getItem('e2_lang');
    if (stored === 'en' || stored === 'fr') {
      setLanguage(stored);
    } else {
      setLanguage('en');
    }
  }, []);
  
  const switchLanguage = (lang) => {
    if (lang === 'en' || lang === 'fr') {
      setLanguage(lang);
      localStorage.setItem('e2_lang', lang);
    }
  };
  
  const t = (key) => translations[language][key] || key;
  
  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
