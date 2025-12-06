import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Metodologia', href: '#methodology' },
    { name: 'Resultados', href: '#results' },
    { name: 'Sobre', href: '#about' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-heading font-bold tracking-tighter">
          BRAGA <span className="text-gold-500">PERSONAL</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold uppercase tracking-widest hover:text-gold-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5599999999999" // Replace with actual number
            className="px-6 py-2 bg-gold-500 text-black font-bold uppercase text-xs tracking-widest hover:bg-gold-400 transition-transform transform hover:scale-105 rounded-sm"
          >
            Começar Agora
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gold-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-gold-900/30 shadow-xl">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center text-offwhite hover:text-gold-500 font-semibold uppercase"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="https://wa.me/5599999999999" 
              className="w-full text-center py-3 bg-gold-gradient text-black font-bold uppercase"
            >
              Falar com o Braga
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;