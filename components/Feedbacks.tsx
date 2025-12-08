import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const Feedbacks: React.FC = () => {
  // --- IMAGENS (PRINTS REAIS) ---
  const feedbackImages = [
    "media/feedback1.png",
    "media/feedback2.png",
    "media/feedback3.png",
    "media/feedback4.png",
    "media/feedback5.png"
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

  return (
    // Reduzi a altura para 850px pois removemos os textos, ficando mais compacto
    <section className="relative w-full bg-black h-[850px] md:h-screen overflow-hidden font-sans">
      
      {/* 1. Background Texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/7hhG8mxM/Design-sem-nome-(35).png" 
          alt="Feedbacks Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      </div>

      {/* 2. Title */}
      <div className="absolute top-8 md:top-12 left-0 w-full z-10 text-center px-4">
        <h3 className="text-xl md:text-4xl font-heading font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md">
          O que falam do <span className="text-gold-500">Time Braga</span>
        </h3>
        <div className="w-16 md:w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
      </div>

      {/* 3. Trainer Image */}
      <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-0 w-full h-[40vh] md:h-[55vh] flex items-start justify-center pointer-events-none">
         <img 
           src="https://i.postimg.cc/MTmYz0cZ/Design-sem-nome-(24).png" 
           alt="Treinador Braga" 
           className="h-full w-auto object-contain object-top opacity-100"
         />
      </div>

      {/* 4. CARROSSEL DE PRINTS (Agora na posição nobre: Cinto/Centro) */}
      <div className="absolute top-[65%] md:top-[55%] left-0 right-0 z-30 flex flex-col items-center -translate-y-1/2">
        
        {/* Container da Imagem - Mantendo proporção Retrato e Largura boa */}
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

            {/* CONTROLES FLUTUANTES (Sobre a imagem, parte inferior) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-lg z-50">
                <button 
                onClick={prevSlide}
                className="text-white hover:text-gold-500 transition-colors active:scale-90"
                >
                <ChevronLeft size={24} />
                </button>

                <button 
                onClick={togglePlay}
                className="text-gold-500 hover:text-white transition-colors active:scale-90"
                >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                </button>

                <button 
                onClick={nextSlide}
                className="text-white hover:text-gold-500 transition-colors active:scale-90"
                >
                <ChevronRight size={24} />
                </button>
            </div>
             
             {/* Indicadores de progresso */}
             <div className="absolute top-4 right-4 flex flex-col gap-1.5 z-40">
                {feedbackImages.map((_, idx) => (
                    <div 
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all shadow-sm ${idx === currentSlide ? 'bg-gold-500 h-3' : 'bg-white/30'}`}
                    />
                ))}
             </div>

        </div>
      </div>

      {/* 5. CTA Button - Logo abaixo */}
      <div className="absolute bottom-1 md:bottom-12 left-0 w-full z-40 text-center px-6">
          <a 
            href="https://wa.me/5599999999999"
            className="inline-block w-full md:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform transform hover:-translate-y-1 text-sm md:text-base animate-pulse"
          >
            Quero ter esses resultados
          </a>
      </div>
    </section>
  );
};

export default Feedbacks;