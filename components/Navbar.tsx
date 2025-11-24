import React, { useState, useEffect } from 'react';
import { Menu, X, Dna, Globe, Sun, Moon, Clock } from 'lucide-react';
import { SectionId, Language, ThemeMode } from '../types';
import { CONTENT } from '../constants';

interface NavbarProps {
  activeSection: SectionId;
  lang: Language;
  setLang: (lang: Language) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, lang, setLang, themeMode, setThemeMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const content = CONTENT[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'jp' : 'en');
  };

  const cycleTheme = () => {
    if (themeMode === 'dark') setThemeMode('light');
    else if (themeMode === 'light') setThemeMode('auto');
    else setThemeMode('dark');
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-nu-dark/90 backdrop-blur-md border-nu-border py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection(SectionId.HOME)}>
            <div className={`p-2 rounded-lg mr-3 transition-colors ${scrolled ? 'bg-nu-accent/10' : 'bg-nu-surface/10 backdrop-blur-sm'}`}>
              <Dna className={`h-6 w-6 ${scrolled ? 'text-nu-accent' : 'text-nu-text'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none tracking-tight ${scrolled ? 'text-nu-text' : 'text-nu-text'}`}>
                {content.labName}
              </span>
              <span className={`text-xs font-medium ${scrolled ? 'text-nu-textMuted' : 'text-nu-textMuted group-hover:text-nu-text transition-colors'}`}>
                {content.labSubtitle}
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {content.nav.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === link.id 
                    ? 'bg-nu-accent text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]' 
                    : 'text-nu-textMuted hover:text-nu-text hover:bg-nu-surface/20'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="w-px h-6 bg-nu-border mx-3"></div>
            
            {/* Theme Switch */}
            <button
              onClick={cycleTheme}
              className="p-2 rounded-full text-nu-textMuted hover:text-nu-text hover:bg-nu-surface/20 transition-all"
              title={`Theme: ${themeMode}`}
            >
              {themeMode === 'dark' && <Moon className="w-4 h-4" />}
              {themeMode === 'light' && <Sun className="w-4 h-4" />}
              {themeMode === 'auto' && <Clock className="w-4 h-4" />}
            </button>

            {/* Language Switch */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-nu-border text-nu-textMuted hover:border-nu-accent hover:text-nu-text transition-all text-xs font-mono ml-2"
            >
              <Globe className="w-3 h-3" />
              <span className={lang === 'en' ? 'text-nu-accent font-bold' : ''}>EN</span>
              <span className="text-nu-textMuted">|</span>
              <span className={lang === 'jp' ? 'text-nu-accent font-bold' : ''}>JP</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={cycleTheme}
              className="p-2 rounded-full text-nu-textMuted hover:text-nu-text hover:bg-nu-surface/20 transition-all"
            >
              {themeMode === 'dark' && <Moon className="w-4 h-4" />}
              {themeMode === 'light' && <Sun className="w-4 h-4" />}
              {themeMode === 'auto' && <Clock className="w-4 h-4" />}
            </button>

             <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-2 py-1 rounded border border-nu-border text-nu-textMuted text-xs font-mono"
            >
              <span className={lang === 'en' ? 'text-nu-accent' : ''}>EN</span>
              <span className="text-nu-textMuted">/</span>
              <span className={lang === 'jp' ? 'text-nu-accent' : ''}>JP</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled ? 'text-nu-text hover:bg-nu-surface' : 'text-nu-text hover:bg-nu-surface/20'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-nu-dark border-b border-nu-border shadow-xl transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-2">
          {content.nav.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id 
                  ? 'bg-nu-accent/10 text-nu-accent' 
                  : 'text-nu-textMuted hover:bg-nu-surface hover:text-nu-text'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;