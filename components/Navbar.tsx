import React, { useState, useEffect } from 'react';
import { Menu, X, Dna, Globe } from 'lucide-react';
import { SectionId, Language } from '../types';
import { CONTENT } from '../constants';

interface NavbarProps {
  activeSection: SectionId;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, lang, setLang }) => {
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

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-nu-dark/90 backdrop-blur-md border-slate-800 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection(SectionId.HOME)}>
            <div className={`p-2 rounded-lg mr-3 transition-colors ${scrolled ? 'bg-nu-accent/10' : 'bg-white/10 backdrop-blur-sm'}`}>
              <Dna className={`h-6 w-6 ${scrolled ? 'text-nu-accent' : 'text-white'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
                {content.labName}
              </span>
              <span className={`text-xs font-medium ${scrolled ? 'text-slate-400' : 'text-slate-300 group-hover:text-white transition-colors'}`}>
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
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Language Switch */}
            <div className="w-px h-6 bg-slate-700 mx-3"></div>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 text-slate-300 hover:border-nu-accent hover:text-white transition-all text-xs font-mono"
            >
              <Globe className="w-3 h-3" />
              <span className={lang === 'en' ? 'text-nu-accent font-bold' : ''}>EN</span>
              <span className="text-slate-600">|</span>
              <span className={lang === 'jp' ? 'text-nu-accent font-bold' : ''}>JP</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-2 py-1 rounded border border-slate-700 text-slate-300 text-xs font-mono"
            >
              <span className={lang === 'en' ? 'text-nu-accent' : ''}>EN</span>
              <span className="text-slate-600">/</span>
              <span className={lang === 'jp' ? 'text-nu-accent' : ''}>JP</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                scrolled ? 'text-white hover:bg-slate-800' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 space-y-2">
          {content.nav.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id 
                  ? 'bg-nu-accent/10 text-nu-accent' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
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