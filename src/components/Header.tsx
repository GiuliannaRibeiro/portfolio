import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
            Giulianna Ribeiro
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <SocialLinks />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <LanguageToggle />
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavLinks = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex md:flex-row flex-col md:items-center md:space-x-8 md:space-y-0 space-y-4">
      <a href="#home" className="nav-link">
        {t('nav.home')}
      </a>
      <a href="#about" className="nav-link">
        {t('nav.about')}
      </a>
      <a href="#projects" className="nav-link">
        {t('nav.projects')}
      </a>
      <a href="#contact" className="nav-link">
        {t('nav.contact')}
      </a>
    </div>
  );
};

const SocialLinks = () => (
  <div className="flex space-x-4">
    <a
      href="https://github.com/GiuliannaRibeiro"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <Github size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/giulianna-ribeiro/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <Linkedin size={20} />
    </a>
    <a href="mailto:giuliannaribeiro00@gmail.com" className="social-link">
      <Mail size={20} />
    </a>
  </div>
);

export default Header;