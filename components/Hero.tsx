import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {

  // --- FUNÇÃO DE ROLAGEM SUAVE ---
  const scrollToBeforeAfter = () => {
    const section = document.getElementById('before-after');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Seção 'before-after' não encontrada.");
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-screen flex flex-col justify-end pb-20 md:justify-center bg-richblack overflow-hidden">      
      {/* STYLE INJECTION */}
      <style>{`
        @keyframes revealLoop {
          0% { width: 0%; }
          45% { width: 100%; }
          55% { width: 100%; }
          100% { width: 0%; }
        }
        @keyframes sliderLoop {
          0% { left: 0%; }
          45% { left: 100%; }
          55% { left: 100%; }
          100% { left: 0%; }
        }
        .animate-reveal { animation: revealLoop 4s infinite ease-in-out alternate; }
        .animate-slider { animation: sliderLoop 4s infinite ease-in-out alternate; }
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img 
          src="/media/hero.png" 
          alt="Background Mobile" 
          className="block md:hidden w-full h-full object-cover"
        />
        {/* Desktop Background */}
        <img 
          src="/media/hero2.png" 
          alt="Background Desktop" 
          className="hidden md:block w-full h-full object-cover object-top"
        />
        
        {/* Camadas de Contraste */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/80 md:via-black/50 md:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-richblack via-richblack/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Conteúdo Principal */}
        <div className="w-full lg:w-2/3 space-y-4 md:space-y-6 pt-20 pb-10 md:pt-32 md:pb-20 drop-shadow-md">          
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-black/40 backdrop-blur-sm whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Consultoria Online e Presencial
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold leading-tight text-white drop-shadow-lg">
            TREINOS <span className="text-gold-gradient drop-shadow-sm">PERSONALIZADOS</span> PARA O SEU OBJETIVO
          </h1>
          
          {/* Texto de Apoio (Metodologia) */}
          <p className="text-base md:text-xl text-neutral-200 font-medium max-w-lg leading-relaxed">
            Eu não envio apenas treinos seja online ou presencial, Meu trabalho começa com uma <strong className="text-white">avaliação técnica detalhada</strong> para identificar exatamente o que você precisa.
          </p>

          {/* --- NOVO TEXTO DE CONDIÇÃO ESPECIAL --- */}
          {/* Destaque visual para separar do texto acima e chamar atenção para o botão */}
          <div className="max-w-lg bg-gold-500/10 border-l-4 border-gold-500 p-3 rounded-r-lg backdrop-blur-sm">
            <p className="text-sm md:text-base text-white font-medium leading-snug">
              Para isso, temos uma <span className="text-gold-400 font-bold uppercase">condição especial</span> pra você na nossa consultoria. Clique abaixo e fale conosco.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
            
            {/* Botão 1: Principal - ATUALIZADO */}
            <a 
              href="https://wa.me/556881155392?text=Ol%C3%A1!%20Vi%20no%20site%20sobre%20a%20condi%C3%A7%C3%A3o%20especial%20da%20consultoria%20e%20quero%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base whitespace-nowrap rounded-sm"
            >
              QUERO CONDIÇÃO ESPECIAL
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Botão 2: Antes e Depois */}
            <button 
              onClick={scrollToBeforeAfter}
              className="relative px-8 py-4 bg-black/60 border border-white/30 text-white font-bold uppercase tracking-widest overflow-hidden group w-full sm:w-auto h-[56px] flex items-center justify-center text-sm md:text-base cursor-pointer hover:border-white/50 transition-colors rounded-sm backdrop-blur-sm"
            >
              <span className="relative z-10 whitespace-nowrap">Ver Antes e Depois</span>
              
              {/* Animação do botão */}
              <div className="absolute inset-0 bg-white z-20 overflow-hidden animate-reveal left-0 pointer-events-none">
                 <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-black whitespace-nowrap font-bold tracking-widest uppercase px-8">Ver Antes e Depois</span>
                 </div>
              </div>
              <div className="absolute top-0 bottom-0 w-[2px] bg-gold-500 z-30 shadow-[0_0_10px_#d4af37] animate-slider pointer-events-none"></div>
            </button>
          </div>

          {/* Features */}
          <div className="pt-6 flex flex-wrap gap-3 text-xs md:text-sm text-neutral-300 font-medium opacity-80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold-500 w-4 h-4" />
              <span>Avaliação Física Detalhada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold-500 w-4 h-4" />
              <span>Protocolo Individualizado</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
