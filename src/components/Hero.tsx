import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
        {t('home.me')}
        <span className="text-indigo-600">Giulianna Ribeiro</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {t('home.description')}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="btn-primary"
          >
            {t('home.btnViewMyWork')}
          </a>
          <a
            href="#contact"
            className="btn-secondary"
          >
            {t('home.btnGetInTouch')}
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-gray-400 hover:text-gray-600" size={32} />
      </a>
    </section>
  );
};

export default Hero;