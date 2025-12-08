import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';

const Feedbacks: React.FC = () => {
  const feedbackImages = [
    "/media/feedback1.png",
    "/media/feedback2.png",
    "/media/feedback3.png",
    "/media/feedback4.png",
    "/media/feedback5.png"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play (3.5 segundos)
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === feedbackImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? feedbackImages.length - 1 : prev - 1));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Lógica para pegar os 3 índices visíveis no Desktop (Anterior, Atual, Próximo)
  const getDesktopIndices = () => {
    const prevIndex = currentSlide === 0 ? feedbackImages.length - 1 : currentSlide - 1;
    const nextIndex = currentSlide === feedbackImages.length - 1 ? 0 : currentSlide + 1;
    return [prevIndex, currentSlide, nextIndex];
  };

  const [prevIdx, currIdx, nextIdx] = getDesktopIndices();

  return (
    <section className="relative w-full bg-black min-h-[850px] md:h-screen overflow-hidden font-sans">
      
      {/* =================================================================================
          BACKGROUND GLOBAL (Compartilhado mas ajustado)
         ================================================================================= */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/7hhG8mxM/Design-sem-nome-(35).png" 
          alt="Feedbacks Background" 
          className="w-full h-full object-cover opacity-40 md:opacity-20" // Menos opacidade no PC para destacar os cards
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/90"></div>
        {/* Spotlights dourados apenas para desktop para dar "clima" */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      {/* =================================================================================
          LAYOUT MOBILE (< md) - Mantido EXATAMENTE como você tinha
         ================================================================================= */}
      <div className="block md:hidden h-full w-full relative">
        {/* Title Mobile */}
        <div className="absolute top-8 left-0 w-full z-10 text-center px-4">
          <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md">
            O que falam do <span className="text-gold-500">Time Braga</span>
          </h3>
          <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        {/* Trainer Image Mobile */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-0 w-full h-[40vh] flex items-start justify-center pointer-events-none">
           <img 
            src="https://i.postimg.cc/MTmYz0cZ/Design-sem-nome-(24).png" 
            alt="Treinador Braga" 
            className="h-full w-auto object-contain object-top"
           />
        </div>

        {/* Carrossel Mobile */}
        <div className="absolute top-[65%] left-0 right-0 z-30 flex flex-col items-center -translate-y-1/2">
          <div className="relative w-[85%] max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-neutral-900 group">
             {feedbackImages.map((src, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                  <img src={src} alt="Feedback" className="w-full h-full object-contain bg-black/40 backdrop-blur-sm" />
                </div>
             ))}

             {/* Controles Mobile */}
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-lg z-50">
                <button onClick={prevSlide} className="text-white hover:text-gold-500"><ChevronLeft size={24} /></button>
                <button onClick={togglePlay} className="text-gold-500 hover:text-white">{isPlaying ? <Pause size={20} /> : <Play size={20} />}</button>
                <button onClick={nextSlide} className="text-white hover:text-gold-500"><ChevronRight size={24} /></button>
             </div>
             
             {/* Dots Mobile */}
             <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-40">
                {feedbackImages.map((_, idx) => (
                    <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentSlide ? 'bg-gold-500 h-3' : 'bg-white/30'}`} />
                ))}
             </div>
          </div>
        </div>

        {/* CTA Mobile */}
        <div className="absolute bottom-4 left-0 w-full z-40 text-center px-6">
           <a href="https://wa.me/5599999999999" className="inline-block w-full px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest rounded-sm text-sm animate-pulse">
             Quero ter esses resultados
           </a>
        </div>
      </div>

      {/* =================================================================================
          LAYOUT DESKTOP (>= md) - O NOVO LAYOUT "BEM GRANDE"
         ================================================================================= */}
      <div className="hidden md:flex flex-col items-center justify-center h-full w-full relative z-20 px-8">
        
        {/* Cabeçalho Desktop */}
        <div className="text-center mb-12 relative">
          <h3 className="text-5xl font-heading font-black text-white mb-4 uppercase tracking-wider drop-shadow-2xl">
            Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Reais</span>
          </h3>
          <p className="text-white/60 text-lg uppercase tracking-[0.3em]">O que os alunos dizem</p>
        </div>

        {/* Container dos 3 Cards Lado a Lado */}
        <div className="w-full max-w-7xl flex items-center justify-center gap-8 perspective-1000 relative">
          
          {/* Botão Prev (Lateral Externa) */}
          <button onClick={prevSlide} className="absolute left-0 z-50 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 group">
             <ChevronLeft size={40} className="text-white group-hover:text-black" />
          </button>

          {/* CARD ESQUERDA (Anterior) */}
          <div className="w-1/4 h-[500px] opacity-40 hover:opacity-60 transition-all duration-500 transform scale-90 blur-[1px] cursor-pointer" onClick={prevSlide}>
             <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
               <div className="absolute inset-0 bg-black/20 z-10"></div>
               <img src={feedbackImages[prevIdx]} alt="Prev" className="w-full h-full object-contain" />
             </div>
          </div>

          {/* CARD CENTRAL (Atual - Destaque) */}
          <div className="w-1/3 h-[600px] z-30 transition-all duration-500 transform scale-100 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
             <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gold-500/50 bg-neutral-900">
                {/* Ícone decorativo */}
                <div className="absolute top-4 right-4 z-20 bg-gold-500 p-2 rounded-full shadow-lg">
                   <Quote size={20} className="text-black fill-current" />
                </div>
                
                <img src={feedbackImages[currIdx]} alt="Current" className="w-full h-full object-contain bg-neutral-950" />
                
                {/* Barra de progresso visual embaixo do card */}
                <div className="absolute bottom-0 left-0 h-1.5 bg-gold-500 transition-all duration-300" 
                     style={{ width: isPlaying ? '100%' : '0%', transitionDuration: '3500ms', transitionTimingFunction: 'linear' }}>
                </div>
             </div>
          </div>

          {/* CARD DIREITA (Próximo) */}
          <div className="w-1/4 h-[500px] opacity-40 hover:opacity-60 transition-all duration-500 transform scale-90 blur-[1px] cursor-pointer" onClick={nextSlide}>
             <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
               <div className="absolute inset-0 bg-black/20 z-10"></div>
               <img src={feedbackImages[nextIdx]} alt="Next" className="w-full h-full object-contain" />
             </div>
          </div>

          {/* Botão Next (Lateral Externa) */}
          <button onClick={nextSlide} className="absolute right-0 z-50 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 group">
             <ChevronRight size={40} className="text-white group-hover:text-black" />
          </button>
        </div>

        {/* Controles e Play/Pause Desktop */}
        <div className="mt-12 flex items-center gap-4">
           <button 
              onClick={togglePlay}
              className="flex items-center gap-2 px-6 py-2 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-black transition-all text-sm uppercase tracking-widest"
           >
              {isPlaying ? <><Pause size={16} /> Pausar Rotação</> : <><Play size={16} /> Continuar Rotação</>}
           </button>
        </div>

        {/* CTA Desktop */}
        <div className="mt-8">
            <a 
              href="https://wa.me/5599999999999"
              className="inline-block px-12 py-5 bg-gold-500 hover:bg-white hover:text-black text-black font-black text-xl uppercase tracking-widest rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-1"
            >
              Quero ser o próximo
            </a>
        </div>

      </div>
    </section>
  );
};

export default Feedbacks;