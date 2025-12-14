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

  // --- LINK DO WHATSAPP ---
  const whatsappNumber = "556881155392";
  const whatsappMessage = "Ol%C3%A1!%20Quero%20mudar%20de%20vida%20aproveitando%20a%20condi%C3%A7%C3%A3o%20especial%20que%20vi%20no%20site.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-screen flex flex-col justify-end pb-20 md:justify-center bg-richblack overflow-hidden">      
      {/* STYLE INJECTION - ANIMAÇÕES */}
      <style>{`
        /* Animação do Botão Antes/Depois (Slider) */
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

        /* --- NOVA ANIMAÇÃO "RIPPLE" (MULTIPLE RADAR) --- */
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.7; /* Começa visível */
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); /* Dourado */
          }
          70% {
            transform: scale(1);
            opacity: 0; /* Desaparece */
            box-shadow: 0 0 0 20px rgba(212, 175, 55, 0); /* Borda expande e some */
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
          }
        }
        
        @keyframes ripple-wave {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5); /* Expande 50% além do botão */
            opacity: 0;
          }
        }

        .animate-ripple-1 { animation: ripple-wave 2s infinite cubic-bezier(0, 0, 0.2, 1); }
        .animate-ripple-2 { animation: ripple-wave 2s infinite cubic-bezier(0, 0, 0.2, 1) 0.6s; } /* Delay */
        .animate-ripple-3 { animation: ripple-wave 2s infinite cubic-bezier(0, 0, 0.2, 1) 1.2s; } /* Delay maior */
      `}</style>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/media/hero.png" alt="Background Mobile" className="block md:hidden w-full h-full object-cover"/>
        <img src="/media/hero2.png" alt="Background Desktop" className="hidden md:block w-full h-full object-cover object-top"/>
        
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/80 md:via-black/50 md:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-richblack via-richblack/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
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
          
          <p className="text-base md:text-xl text-neutral-200 font-medium max-w-lg leading-relaxed">
            Eu não envio apenas treinos seja online ou presencial. Meu trabalho começa com uma <strong className="text-white">avaliação técnica detalhada</strong> para identificar exatamente o que você precisa.
          </p>

          <div className="max-w-lg bg-black/40 backdrop-blur-md border border-white/10 border-l-4 border-l-gold-500 p-4 rounded-r-lg shadow-lg">
            <p className="text-sm md:text-base text-white font-medium leading-snug drop-shadow-md">
              Para isso, temos uma <span className="text-gold-400 font-bold uppercase">condição especial</span> pra você na nossa consultoria. Clique abaixo e fale conosco.
            </p>
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-8 pt-4 w-full sm:w-auto items-center sm:items-start">
            
            {/* --- BOTÃO COM EFEITO RIPPLE "MULTIPLE RADAR" --- */}
            <div className="relative group w-full sm:w-auto flex justify-center sm:justify-start">
              
              {/* Onda 1 */}
              <div className="absolute top-0 left-0 w-full h-full bg-gold-500/40 rounded-sm animate-ripple-1 z-0"></div>
              {/* Onda 2 (Com atraso) */}
              <div className="absolute top-0 left-0 w-full h-full bg-gold-500/30 rounded-sm animate-ripple-2 z-0"></div>
              {/* Onda 3 (Com mais atraso) */}
              <div className="absolute top-0 left-0 w-full h-full bg-gold-500/20 rounded-sm animate-ripple-3 z-0"></div>

              {/* Botão Físico (Fica por cima das ondas) */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 px-6 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.4)] text-center flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base whitespace-nowrap rounded-sm"
              >
                QUERO A CONDIÇÃO ESPECIAL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Botão 2: Antes e Depois */}
            <button 
              onClick={scrollToBeforeAfter}
              className="relative px-8 py-4 bg-black/60 border border-white/30 text-white font-bold uppercase tracking-widest overflow-hidden group w-full sm:w-auto h-[56px] flex items-center justify-center text-sm md:text-base cursor-pointer hover:border-white/50 transition-colors rounded-sm backdrop-blur-sm"
            >
              <span className="relative z-10 whitespace-nowrap">Ver Antes e Depois</span>
              <div className="absolute inset-0 bg-white z-20 overflow-hidden animate-reveal left-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                     <span className="text-black whitespace-nowrap font-bold tracking-widest uppercase px-8">Ver Antes e Depois</span>
                  </div>
              </div>
              <div className="absolute top-0 bottom-0 w-[2px] bg-gold-500 z-30 shadow-[0_0_10px_#d4af37] animate-slider pointer-events-none"></div>
            </button>
          </div>

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
