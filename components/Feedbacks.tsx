import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';

const Feedbacks: React.FC = () => {
  // LISTA DE IMAGENS ATUALIZADA
  const feedbackImages = [
    "/media/1.png",
    "/media/2.png",
    "/media/3.png",
    "/media/4.png",
    "/media/feedback1.png",
    "/media/feedback2.png",
    "/media/feedback3.png",
    "/media/feedback5.png",
    "/media/5.png",
    "/media/6.png",
    "/media/7.png",
    "/media/8.png"
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

  // Lógica Desktop (3 cards)
  const getDesktopIndices = () => {
    const prevIndex = currentSlide === 0 ? feedbackImages.length - 1 : currentSlide - 1;
    const nextIndex = currentSlide === feedbackImages.length - 1 ? 0 : currentSlide + 1;
    return [prevIndex, currentSlide, nextIndex];
  };

  const [prevIdx, currIdx, nextIdx] = getDesktopIndices();

  return (
    <section className="relative w-full bg-black min-h-[850px] md:min-h-screen h-auto overflow-x-hidden font-sans flex flex-col justify-center">
      
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/7hhG8mxM/Design-sem-nome-(35).png" 
          alt="Feedbacks Background" 
          className="w-full h-full object-cover opacity-60 fixed-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      </div>

      {/* =================================================================================
          VERSÃO MOBILE (CORRIGIDA - BLOCO ÚNICO)
          ================================================================================= */}
      <div className="block md:hidden w-full h-full absolute inset-0 z-10">
          
          {/* Título */}
          <div className="absolute top-8 left-0 w-full z-10 text-center px-4">
            <h3 className="text-xl font-heading font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md">
              O que falam do <span className="text-gold-500">Time Braga</span>
            </h3>
            <div className="w-16 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          {/* Imagem do Treinador */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-0 w-full h-[40vh] flex items-start justify-center pointer-events-none">
             <img 
               src="https://i.postimg.cc/MTmYz0cZ/Design-sem-nome-(24).png" 
               alt="Treinador Braga" 
               className="h-full w-auto object-contain object-top opacity-100"
             />
          </div>

          {/* --- BLOCO CENTRAL (CARD + BOTÕES) --- */}
          {/* Mude o 'top-[62%]' aqui para subir ou descer TUDO junto */}
          <div className="absolute top-[62%] left-0 right-0 z-30 flex flex-col items-center -translate-y-1/2">
            
            {/* 1. O CARD (IMAGEM) */}
            <div className="relative w-[85%] max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-neutral-900 group">
                 
                 {feedbackImages.map((src, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                      <img 
                        src={src} 
                        alt={`Feedback print ${index + 1}`}
                        className="w-full h-full object-contain bg-black/40 backdrop-blur-sm"
                      />
                    </div>
                 ))}
                 
                 {/* Indicadores (Bolinhas) */}
                 <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-40">
                    {feedbackImages.map((_, idx) => (
                        <div 
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all shadow-sm ${idx === currentSlide ? 'bg-gold-500 h-3' : 'bg-white/30'}`}
                        />
                    ))}
                 </div>
            </div>

            {/* 2. OS CONTROLES (SETINHAS E PLAY) */}
            {/* mt-6 dá o espaço entre o card e os botões */}
            <div className="mt-0 flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-lg z-50">
                <button onClick={prevSlide} className="text-white hover:text-gold-500 transition-colors active:scale-90">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={togglePlay} className="text-gold-500 hover:text-white transition-colors active:scale-90">
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                </button>
                <button onClick={nextSlide} className="text-white hover:text-gold-500 transition-colors active:scale-90">
                  <ChevronRight size={24} />
                </button>
            </div>

          </div>
          {/* --- FIM DO BLOCO CENTRAL --- */}

          {/* Botão CTA Mobile (Fixo no rodapé) - LINK ATUALIZADO */}
          <div className="absolute bottom-6 left-0 w-full z-40 text-center px-6">
              <a 
                href="https://wa.me/556881155392?text=Ol%C3%A1!%20Vi%20os%20resultados%20dos%20seus%20alunos%20e%20tamb%C3%A9m%20quero%20ter%20esses%20resultados."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform transform hover:-translate-y-1 text-sm animate-pulse"
              >
                Quero ter esses resultados
              </a>
          </div>
      </div>

      {/* =================================================================================
          VERSÃO DESKTOP
          ================================================================================= */}
      <div className="hidden md:flex relative z-20 w-full min-h-screen flex-col items-center justify-center px-8 py-24">
        
        {/* Spotlights dourados */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

        {/* Cabeçalho Desktop */}
        <div className="text-center mb-12 relative">
          <h3 className="text-5xl font-heading font-black text-white mb-4 uppercase tracking-wider drop-shadow-2xl">
            Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Reais</span>
          </h3>
          <p className="text-white/60 text-lg uppercase tracking-[0.3em]">O que os alunos dizem</p>
        </div>

        {/* Container 3 Cards */}
        <div className="w-full max-w-7xl flex items-center justify-center gap-8 perspective-1000 relative my-8">
          
          {/* Botão Prev */}
          <button onClick={prevSlide} className="absolute -left-12 xl:left-0 z-50 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 group">
             <ChevronLeft size={40} className="text-white group-hover:text-black" />
          </button>

          {/* CARD ESQUERDA (Prev) */}
          <div className="w-1/4 h-[400px] lg:h-[500px] opacity-40 hover:opacity-60 transition-all duration-500 transform scale-90 blur-[1px] cursor-pointer" onClick={prevSlide}>
             <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
               <div className="absolute inset-0 bg-black/20 z-10"></div>
               <img src={feedbackImages[prevIdx]} alt="Prev" className="w-full h-full object-contain" />
             </div>
          </div>

          {/* CARD CENTRAL (Atual) */}
          <div className="w-1/3 h-[500px] lg:h-[600px] z-30 transition-all duration-500 transform scale-100 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
             <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gold-500/50 bg-neutral-900">
                <div className="absolute top-4 right-4 z-20 bg-gold-500 p-2 rounded-full shadow-lg">
                   <Quote size={20} className="text-black fill-current" />
                </div>
                <img src={feedbackImages[currIdx]} alt="Current" className="w-full h-full object-contain bg-neutral-950" />
                <div className="absolute bottom-0 left-0 h-1.5 bg-gold-500 transition-all duration-300" style={{ width: isPlaying ? '100%' : '0%', transitionDuration: '3500ms', transitionTimingFunction: 'linear' }}></div>
             </div>
          </div>

          {/* CARD DIREITA (Next) */}
          <div className="w-1/4 h-[400px] lg:h-[500px] opacity-40 hover:opacity-60 transition-all duration-500 transform scale-90 blur-[1px] cursor-pointer" onClick={nextSlide}>
             <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
               <div className="absolute inset-0 bg-black/20 z-10"></div>
               <img src={feedbackImages[nextIdx]} alt="Next" className="w-full h-full object-contain" />
             </div>
          </div>

          {/* Botão Next */}
          <button onClick={nextSlide} className="absolute -right-12 xl:right-0 z-50 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-gold-500 hover:text-black hover:border-gold-500 transition-all duration-300 group">
             <ChevronRight size={40} className="text-white group-hover:text-black" />
          </button>
        </div>

        {/* Controles Desktop */}
        <div className="mt-8 flex items-center gap-4">
           <button onClick={togglePlay} className="flex items-center gap-2 px-6 py-2 rounded-full border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-black transition-all text-sm uppercase tracking-widest">
              {isPlaying ? <><Pause size={16} /> Pausar Rotação</> : <><Play size={16} /> Continuar Rotação</>}
           </button>
        </div>

        {/* CTA Desktop - LINK ATUALIZADO */}
        <div className="mt-12 pb-8">
            <a 
              href="https://wa.me/556881155392?text=Ol%C3%A1!%20Vi%20os%20resultados%20dos%20seus%20alunos%20e%20tamb%C3%A9m%20quero%20ter%20esses%20resultados." 
              target="_blank"
              rel="noopener noreferrer"
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