import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronRight, GripVertical, Hand } from 'lucide-react'; // Removi 'Layers' pois não será mais usado

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCase, setActiveCase] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [ripples, setRipples] = useState<{x: number, y: number, id: number}[]>([]);
  
  // Estado para controlar a animação automática
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartPos = useRef({ x: 0, y: 0 });
  const touchDirection = useRef<'horizontal' | 'vertical' | null>(null);

  const cases = [
    {
      before: "/media/before5.png",
      after: "/media/after5.png",
      label: "Definição"
    },
    {
      before: "https://i.postimg.cc/14x0kqNR/3.png",
      after: "https://i.postimg.cc/xqrGwzbT/4.png",
      label: "Emagrecimento"
    },
    {
      before: "https://i.postimg.cc/Th8jzDWP/1.png",
      after: "https://i.postimg.cc/7bv1F2TH/2.png",
      label: "Emagrecimento"
    }
  ];

  // --- LÓGICA DE AUTO-ANIMAÇÃO (DEMO MODE) ---
  useEffect(() => {
    const animate = () => {
      if (isAutoPlaying && !isDragging && !isLoading) {
        const time = Date.now() / 1500; 
        const newPos = 50 + Math.sin(time) * 30; 
        setSliderPosition(newPos);
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isAutoPlaying, isDragging, isLoading]);

  // Função chamada quando o usuário INTERAGE (toca ou clica)
  const handleInteractionStart = () => {
    setIsAutoPlaying(false);
    setIsDragging(true);
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
  };

  // Função chamada quando o usuário SOLTA
  const handleInteractionEnd = () => {
    setIsDragging(false);
    if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 4000);
  };

  // --- LÓGICA DE MOVIMENTO E CLIQUE (MANTIDA) ---

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;
    createRipple(e);
    setIsLoading(true);
    
    setIsAutoPlaying(false);

    setTimeout(() => {
      setSliderPosition(50);
      setActiveCase((prev) => (prev + 1) % cases.length);
    }, 100);

    setTimeout(() => {
      setIsLoading(false);
      handleInteractionEnd(); 
    }, 2000);
  };

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current && !isLoading) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  }, [isLoading]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isLoading) {
        e.preventDefault();
        handleMove(e.clientX);
      }
    };
    const handleMouseUp = () => {
      if (isDragging) handleInteractionEnd();
    };
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMove, isLoading]);

  const onTouchStart = (e: React.TouchEvent) => {
    if (isLoading) return;
    touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    touchDirection.current = null;
    handleInteractionStart();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isLoading) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    if (!touchDirection.current) {
      const diffX = Math.abs(currentX - touchStartPos.current.x);
      const diffY = Math.abs(currentY - touchStartPos.current.y);
      if (diffX > 5 || diffY > 5) touchDirection.current = diffX > diffY ? 'horizontal' : 'vertical';
    }
    if (touchDirection.current === 'horizontal') {
      if (e.cancelable) e.preventDefault(); 
      handleMove(currentX);
    } 
  };

  return (
    <section id="before-after" className="py-20 bg-black relative border-b border-white/5 overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <style>{`
        @keyframes ripple-animation {
          0% { transform: scale(0); opacity: 0.6; }
          100% { transform: scale(4); opacity: 0; }
        }
        .animate-ripple { animation: ripple-animation 0.6s linear; }

        @keyframes shine-sweep {
          0% { transform: translateX(-100%) skewX(-12deg); }
          20% { transform: translateX(200%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine-interval {
          animation: shine-sweep 3s infinite ease-in-out;
        }

        @keyframes arrow-bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-call-arrow {
          animation: arrow-bounce-x 1s infinite ease-in-out;
        }
        
        @keyframes hand-nudge {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-5px) scale(0.95); }
        }
        .animate-hand { animation: hand-nudge 2s infinite ease-in-out; }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER TEXT */}
        <div className="mb-10 text-left md:text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white mb-4 leading-tight">
            ELAS SEGUIRAM O PROTOCOLO. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 block md:inline mt-1 md:mt-0">
              VOCÊ ESTÁ PREPARADA?
            </span>
          </h2>

          <div className="space-y-3">
             <p className="text-neutral-300 text-sm md:text-lg leading-relaxed font-medium">
               Cada transformação começou com uma decisão. Pessoas comuns que confiaram no processo e aplicaram sem negociar.
             </p>
             <p className="text-white text-sm md:text-lg leading-relaxed font-bold border-l-4 border-gold-500 pl-4 md:border-none md:pl-0">
               A única diferença entre elas e você é que elas já começaram.
             </p>
          </div>
        </div>

        {/* COMPONENTE DO SLIDER */}
        <div className="max-w-md md:max-w-2xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-video rounded-xl overflow-hidden border-2 border-gold-500/30 cursor-ew-resize select-none shadow-[0_0_30px_rgba(212,175,55,0.1)] touch-pan-y"
            onMouseDown={(e) => { !isLoading && handleInteractionStart(); !isLoading && setIsDragging(true); }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={handleInteractionEnd}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
          >
            {/* LOADING OVERLAY */}
            {isLoading && (
              <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center animate-fadeIn">
                <div className="relative">
                  <img src="https://i.postimg.cc/SQ31xdjK/Design-sem-nome-(23).png" alt="Loading" className="w-24 h-24 object-contain animate-pulse" />
                  <div className="absolute inset-0 bg-gold-500 blur-[40px] opacity-20 rounded-full"></div>
                </div>
                <p className="text-gold-500 text-xs font-bold tracking-widest mt-4 animate-pulse">CARREGANDO RESULTADO...</p>
              </div>
            )}

            {/* IMAGENS */}
            <div className="absolute inset-0">
               <img src={cases[activeCase].after} alt="Depois" className="w-full h-full object-cover pointer-events-none" />
               <div className="absolute top-4 right-4 bg-gold-500 text-black font-bold text-xs px-2 py-1 rounded-sm z-10">DEPOIS</div>
            </div>

            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}>
              <img src={cases[activeCase].before} alt="Antes" className="w-full h-full object-cover pointer-events-none" />
               <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-xs px-2 py-1 rounded-sm z-10">ANTES</div>
            </div>

            {/* SLIDER HANDLE */}
            <div 
              className={`absolute top-0 bottom-0 w-1 bg-gold-500 cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="relative w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-lg border-2 border-black">
                <GripVertical size={16} className="text-black" />
                
                {isAutoPlaying && !isLoading && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none animate-hand z-30 drop-shadow-lg">
                      <Hand className="text-white fill-white/20 rotate-12 w-8 h-8 md:w-10 md:h-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" strokeWidth={1.5} />
                  </div>
                )}

              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 pointer-events-none z-10">
               <p className="text-white font-bold text-lg uppercase drop-shadow-md">{cases[activeCase].label}</p>
            </div>
          </div>

      
          {/* CONTROLES ATUALIZADOS */}
          <div className="mt-6 w-full">
            <button 
              onClick={handleNextClick}
              disabled={isLoading}
              // mudei de flex-1 para w-full para preencher todo o espaço
              className="relative w-full overflow-hidden flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black px-4 h-14 rounded-lg font-bold uppercase text-xs md:text-sm tracking-wider transition-all disabled:opacity-80 active:scale-95 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
            >
              {!isLoading && (
                <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg] animate-shine-interval"></div>
                </div>
              )}

              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/40 rounded-full pointer-events-none animate-ripple z-0"
                  style={{ left: ripple.x, top: ripple.y, width: '10px', height: '10px', transform: 'translate(-50%, -50%)' }}
                />
              ))}

              <span className="relative z-30 flex items-center gap-2 whitespace-nowrap">
                {/* Texto alterado conforme feedback */}
                {isLoading ? 'Carregando...' : 'RESULTADOS REAIS'}
                {!isLoading && (
                  <div className="animate-call-arrow">
                    <ChevronRight size={18} />
                  </div>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
