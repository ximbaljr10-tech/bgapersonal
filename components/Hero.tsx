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
      {/* STYLE INJECTION - CSS DO BOTÃO NEON ADAPTADO */}
      <style>{`
        /* Animações existentes */
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

        /* --- NOVO ESTILO DO BOTÃO NEON FLOW --- */
        .neon-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.5s;
          /* Gradiente Dourado de Fundo */
          background: linear-gradient(to left top, #d4af37 50%, #c5a028 50%); 
          box-shadow: 0px 1px 2px rgba(0,0,0,.2);
        }

        .neon-btn:hover {
          transform: rotate(-3deg) scale(1.1);
          box-shadow: 0px 10px 20px rgba(212, 175, 55, 0.4); /* Sombra Dourada */
          z-index: 50;
        }

        .neon-btn span {
          position: absolute;
          display: block;
        }

        /* Linha Superior */
        .neon-btn span:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 3px;
          background: linear-gradient(to right, transparent, #fff);
          animation: btn-anim1 2s linear infinite;
        }
        @keyframes btn-anim1 {
          0% { left: -100%; }
          50%, 100% { left: 100%; }
        }

        /* Linha Direita */
        .neon-btn span:nth-child(2) {
          top: -100%;
          right: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #fff);
          animation: btn-anim2 2s linear infinite;
          animation-delay: 0.5s;
        }
        @keyframes btn-anim2 {
          0% { top: -100%; }
          50%, 100% { top: 100%; }
        }

        /* Linha Inferior */
        .neon-btn span:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 3px;
          background: linear-gradient(to left, transparent, #fff);
          animation: btn-anim3 2s linear infinite;
          animation-delay: 1s;
        }
        @keyframes btn-anim3 {
          0% { right: -100%; }
          50%, 100% { right: 100%; }
        }

        /* Linha Esquerda */
        .neon-btn span:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to top, transparent, #fff);
          animation: btn-anim4 2s linear infinite;
          animation-delay: 1.5s;
        }
        @keyframes btn-anim4 {
          0% { bottom: -100%; }
          50%, 100% { bottom: 100%; }
        }

        /* Pausa a animação das linhas ao passar o mouse (opcional, conforme seu CSS original) */
        .neon-btn:hover span {
          animation-play-state: paused;
        }
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
            
            {/* --- BOTÃO ESTILO NEON FLOW --- */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn w-full sm:w-auto px-8 py-5 text-black font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 text-sm md:text-base rounded-sm cursor-pointer"
            >
              <span></span> {/* Top Line */}
              <span></span> {/* Right Line */}
              <span></span> {/* Bottom Line */}
              <span></span> {/* Left Line */}
              
              QUERO A CONDIÇÃO ESPECIAL
              <ArrowRight className="w-5 h-5 relative z-10" />
            </a>

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
