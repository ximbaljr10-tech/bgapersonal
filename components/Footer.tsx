import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 text-center flex flex-col items-center">
        <div className="mb-6">
            <img 
                src="https://i.postimg.cc/SQ31xdjK/Design-sem-nome-(23).png" 
                alt="Braga Personal Logo" 
                className="h-20 w-auto object-contain mx-auto"
            />
        </div>
        
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