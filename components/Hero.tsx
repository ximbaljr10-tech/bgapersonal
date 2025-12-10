import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const Hero: React.FC = () => {

  const scrollToBeforeAfter = () => {
    const section = document.getElementById('before-after');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-screen flex flex-col justify-end pb-20 md:justify-center bg-richblack overflow-hidden font-sans">      
      {/* BACKGROUND & OVERLAYS */}
      <div className="absolute inset-0 z-0">
        {/* Mobile IMG */}
        <img src="/media/hero.png" alt="Background Mobile" className="block md:hidden w-full h-full object-cover"/>
        {/* Desktop IMG */}
        <img src="/media/hero2.png" alt="Background Desktop" className="hidden md:block w-full h-full object-cover object-top"/>
        
        {/* Gradientes sofisticados para leitura */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-5 relative z-20">
        <div className="w-full lg:w-2/3 pt-20 pb-8 md:py-20">          
          
          {/* 1. BADGE SUPERIOR (Minimalista) */}
          <div className="inline-flex items-center gap-2 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <div className="h-[1px] w-8 bg-gold-500"></div>
            <span className="text-gold-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Consultoria Exclusiva
            </span>
          </div>

          {/* 2. TÍTULO MODERNIZADO (Contraste Outline/Solid) */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] text-white mb-8 drop-shadow-xl">
            TREINOS <br/>
            {/* Texto com borda (Stroke) para estilo moderno */}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 md:text-white" style={{ WebkitTextStroke: '0px' }}>
                PERSONALIZADOS
            </span>
            <span className="block text-2xl md:text-4xl text-gold-500 font-bold tracking-widest mt-2 uppercase">
                Para o seu objetivo
            </span>
          </h1>
          
          {/* 3. CARD DE VIDRO (GLASSMORPHISM) */}
          {/* Aqui está a grande mudança de design: Agrupar a info num box moderno */}
          <div className="bg-white/5 border-l-2 border-gold-500 backdrop-blur-md p-5 md:p-8 rounded-r-xl max-w-xl mb-8 shadow-2xl animate-[slideRight_1s_ease-out_0.5s_both]">
             
             {/* Texto Descritivo */}
             <p className="text-neutral-200 text-sm md:text-lg leading-relaxed mb-4 font-light">
                Esqueça fichas genéricas. Meu trabalho começa com uma <strong className="text-white font-bold">avaliação técnica detalhada</strong> para destravar seus resultados.
             </p>

             {/* Separador */}
             <div className="w-full h-[1px] bg-white/10 mb-4"></div>

             {/* A OFERTA (Com destaque visual) */}
             <div className="flex gap-3 items-start">
                <div className="p-1.5 bg-gold-500/20 rounded-full text-gold-400 mt-0.5 animate-pulse">
                    <Zap size={16} fill="currentColor" />
                </div>
                <div>
                    <p className="text-white text-xs md:text-sm font-medium">
                        Temos uma <span className="text-gold-400 font-bold uppercase tracking-wide">condição especial</span> liberada para você hoje.
                    </p>
                    <p className="text-neutral-400 text-[10px] md:text-xs mt-0.5">
                        Clique abaixo para garantir sua vaga no time.
                    </p>
                </div>
             </div>
          </div>

          {/* 4. BOTÕES REESTRUTURADOS */}
          <div className="flex flex-col gap-4 w-full sm:max-w-md animate-[fadeInUp_1s_ease-out_0.8s_both]">
            
            {/* Botão Principal - GRADIENTE E GLOW */}
            <a 
              href="https://wa.me/556881155392?text=Ol%C3%A1!%20Vi%20no%20site%20sobre%20a%20condi%C3%A7%C3%A3o%20especial%20da%20consultoria%20e%20quero%20saber%20mais."
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full group overflow-hidden rounded-lg"
            >
                {/* Background com Gradiente Animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-[length:200%_auto] animate-[gradientPos_3s_linear_infinite]"></div>
                
                {/* Conteúdo do Botão */}
                <div className="relative px-6 py-4 flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <span className="text-black font-black uppercase tracking-widest text-sm md:text-base leading-none">
                            Quero Condição Especial
                        </span>
                        <span className="text-black/70 text-[10px] font-bold mt-1">
                            Falar com o Braga agora
                        </span>
                    </div>
                    <div className="bg-black/10 p-2 rounded-full group-hover:bg-black/20 transition-colors">
                        <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                </div>
            </a>

            {/* Botão Secundário - CLEAN */}
            <button 
              onClick={scrollToBeforeAfter}
              className="w-full px-6 py-3 flex items-center justify-center gap-2 text-white/70 hover:text-white border border-white/10 hover:border-gold-500/50 rounded-lg transition-all text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white/5"
            >
              <span>Ver transformações reais</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>

      {/* STYLES FOR ANIMATIONS */}
      <style>{`
        @keyframes gradientPos {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideRight {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
