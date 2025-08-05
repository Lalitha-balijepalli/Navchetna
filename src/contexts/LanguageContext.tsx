import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  languages: Language[];
  t: (key: string) => string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
];

const translations: Record<string, Record<string, string>> = {
  en: {
    'navchetna': 'Navchetna',
    'tagline': 'Empowering Hill and Coastal India',
    'login': 'Login',
    'dashboard': 'Dashboard',
    'services': 'Services',
    'education': 'Education & Skills',
    'healthcare': 'Healthcare & Wellness',
    'employment': 'Employment & Entrepreneurship',
    'safety': 'Women\'s Safety & Empowerment',
    'connectivity': 'Digital Connectivity',
    'logistics': 'Logistics & Market Access',
    'tourism': 'Tourism & Cultural Promotion',
    'helpdesk': 'Unified Helpdesk',
    'welcome': 'Welcome to Navchetna',
    'empowering_communities': 'Empowering rural communities through digital innovation',
    'get_started': 'Get Started',
    'learn_more': 'Learn More',
    'citizens': 'Citizens',
    'admin': 'Admin',
    'facilitator': 'Facilitator',
    'password': 'Password',
    'email': 'Email',
    'signin': 'Sign In',
  },
  hi: {
    'navchetna': 'नवचेतना',
    'tagline': 'पहाड़ी और तटीय भारत को सशक्त बनाना',
    'login': 'लॉगिन',
    'dashboard': 'डैशबोर्ड',
    'services': 'सेवाएं',
    'education': 'शिक्षा और कौशल',
    'healthcare': 'स्वास्थ्य और कल्याण',
    'employment': 'रोजगार और उद्यमिता',
    'safety': 'महिला सुरक्षा और सशक्तिकरण',
    'connectivity': 'डिजिटल कनेक्टिविटी',
    'logistics': 'रसद और बाजार पहुंच',
    'tourism': 'पर्यटन और सांस्कृतिक प्रचार',
    'helpdesk': 'एकीकृत सहायता केंद्र',
    'welcome': 'नवचेतना में आपका स्वागत है',
    'empowering_communities': 'डिजिटल नवाचार के माध्यम से ग्रामीण समुदायों को सशक्त बनाना',
    'get_started': 'शुरू करें',
    'learn_more': 'और जानें',
    'citizens': 'नागरिक',
    'admin': 'एडमिन',
    'facilitator': 'सुविधाकर्ता',
    'password': 'पासवर्ड',
    'email': 'ईमेल',
    'signin': 'साइन इन',
  },
  bn: {
    'navchetna': 'নবচেতনা',
    'tagline': 'পাহাড়ি ও উপকূলীয় ভারতকে ক্ষমতায়ন',
    'login': 'লগইন',
    'dashboard': 'ড্যাশবোর্ড',
    'services': 'সেবাসমূহ',
    'education': 'শিক্ষা ও দক্ষতা',
    'healthcare': 'স্বাস্থ্যসেবা ও কল্যাণ',
    'employment': 'কর্মসংস্থান ও উদ্যোক্তা',
    'safety': 'নারী নিরাপত্তা ও ক্ষমতায়ন',
    'connectivity': 'ডিজিটাল সংযোগ',
    'logistics': 'সরবরাহ ও বাজার প্রবেশ',
    'tourism': 'পর্যটন ও সাংস্কৃতিক প্রচার',
    'helpdesk': 'একীভূত সহায়তা কেন্দ্র',
    'welcome': 'নবচেতনায় স্বাগতম',
    'empowering_communities': 'ডিজিটাল উদ্ভাবনের মাধ্যমে গ্রামীণ সম্প্রদায়ের ক্ষমতায়ন',
    'get_started': 'শুরু করুন',
    'learn_more': 'আরও জানুন',
  },
  mr: {
    'navchetna': 'नवचेतना',
    'tagline': 'डोंगराळ आणि किनारी भारताला सक्षम करणे',
    'login': 'लॉगिन',
    'dashboard': 'डॅशबोर्ड',
    'services': 'सेवा',
    'education': 'शिक्षण आणि कौशल्य',
    'healthcare': 'आरोग्यसेवा आणि कल्याण',
    'employment': 'रोजगार आणि उद्योजकता',
    'safety': 'महिला सुरक्षा आणि सक्षमीकरण',
    'connectivity': 'डिजिटल जोडणी',
    'logistics': 'वाहतूक आणि बाजार प्रवेश',
    'tourism': 'पर्यटन आणि सांस्कृतिक प्रचार',
    'helpdesk': 'एकीकृत मदत केंद्र',
    'welcome': 'नवचेतना मध्ये आपले स्वागत',
    'empowering_communities': 'डिजिटल नवकल्पनेद्वारे ग्रामीण समुदायांचे सक्षमीकरण',
    'get_started': 'सुरुवात करा',
    'learn_more': 'अधिक जाणून घ्या',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    localStorage.setItem('navchetna-language', lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  React.useEffect(() => {
    const savedLang = localStorage.getItem('navchetna-language');
    if (savedLang && languages.find(l => l.code === savedLang)) {
      setCurrentLanguage(savedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};