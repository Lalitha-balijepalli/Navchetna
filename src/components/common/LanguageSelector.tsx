import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 bg-white"
      >
        <Globe className="h-4 w-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLang?.nativeName || 'English'}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setLanguage(language.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                currentLanguage === language.code
                  ? 'bg-orange-50 text-orange-600 font-medium'
                  : 'text-gray-700'
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{language.nativeName}</span>
                <span className="text-xs text-gray-500">{language.name}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;