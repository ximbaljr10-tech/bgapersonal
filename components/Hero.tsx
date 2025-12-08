import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {

  // --- FUNÇÃO DE ROLAGEM SUAVE ---
  const scrollToBeforeAfter = () => {
    // Procura o elemento com o id "before-after"
    const section = document.getElementById('before-after');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn("Seção 'before-after' não encontrada. Verifique se o ID está correto no outro componente.");
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center bg-richblack overflow-hidden">
      
      {/* INJECT STYLES FOR BUTTON ANIMATION */}
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

      {/* Background Image with Controlled Fade */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background */}
        <img 
          src="https://i.postimg.cc/sgp5bxcm/Gemini-Generated-Image-1za83z1za83z1za8.png" 
          alt="Background Mobile" 
          className="block md:hidden w-full h-full object-cover"
        />
        {/* Desktop Background */}
        <img 
          src="https://i.postimg.cc/bJ2wb8c4/Design-sem-nome-(29).png" 
          alt="Background Desktop" 
          className="hidden md:block w-full h-full object-cover object-top"
        />
        
        {/* 1. Camada Geral levemente escura */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* 2. Gradiente Lateral (Leitura do Texto) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black from-0% via-black/90 via-35% to-transparent to-60%"></div>

        {/* 3. Gradiente Inferior (O Chão Preto) */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-richblack via-richblack/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Text Content */}
        <div className="w-full lg:w-2/3 space-y-8 pt-32 pb-20 drop-shadow-md">
          
          {/* TAG SUPERIOR */}
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
          
          {/* TEXTO DE APOIO */}
          <p className="text-lg md:text-xl text-white font-medium max-w-lg leading-relaxed border-l-2 border-gold-500 pl-4 bg-black/20 p-2 rounded-r-sm backdrop-blur-sm">
            Eu não envio apenas treinos. Seja online ou presencial, meu trabalho começa com uma 
            <strong className="text-gold-400"> avaliação técnica detalhada</strong> para identificar exatamente o que você precisa.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            
            {/* Botão 1: Principal */}
            <a 
              href="https://wa.me/5599999999999"
              className="group relative px-6 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base whitespace-nowrap"
            >
              Quero entrar pro time
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Botão 2: O Reveal (AGORA COM ONCLICK) */}
            <button 
              onClick={scrollToBeforeAfter} // <--- AQUI ESTÁ A CORREÇÃO
              className="relative px-8 py-4 bg-black border border-white/30 text-white font-bold uppercase tracking-widest overflow-hidden group w-full sm:w-auto h-[56px] flex items-center justify-center text-sm md:text-base cursor-pointer hover:border-white/50 transition-colors"
            >
              {/* Texto Base */}
              <span className="relative z-10 whitespace-nowrap">Ver Antes e Depois</span>

              {/* Camada Overlay */}
              <div className="absolute inset-0 bg-white z-20 overflow-hidden animate-reveal left-0">
                 <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <span className="text-black whitespace-nowrap font-bold tracking-widest uppercase px-8">Ver Antes e Depois</span>
                 </div>
              </div>

              {/* O Palitinho Dourado */}
              <div className="absolute top-0 bottom-0 w-[2px] bg-gold-500 z-30 shadow-[0_0_10px_#d4af37] animate-slider"></div>
            </button>
          </div>

          {/* FEATURES / CHECKMARKS */}
          <div className="pt-8 flex flex-wrap gap-4 text-sm text-white font-medium">
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Avaliação Física Detalhada</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Protocolo Individualizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;