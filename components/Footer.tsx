import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4 tracking-tighter">
          BRAGA <span className="text-gold-500">PERSONAL</span>
        </h2>
        
        <div className="flex justify-center space-x-6 mb-8 text-sm uppercase tracking-widest text-neutral-500">
          <a href="#home" className="hover:text-gold-500 transition-colors">Início</a>
          <a href="#methodology" className="hover:text-gold-500 transition-colors">Metodologia</a>
          <a href="#results" className="hover:text-gold-500 transition-colors">Resultados</a>
        </div>

        <p className="text-neutral-600 text-xs">
          © {new Date().getFullYear()} Consultoria BP Fitness On-line. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;