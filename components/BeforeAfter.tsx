
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, GripVertical, Layers } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCase, setActiveCase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const cases = [
    {
      before: "https://i.postimg.cc/Th8jzDWP/1.png",
      after: "https://i.postimg.cc/7bv1F2TH/2.png",
      label: "Emagrecimento"
    },
    {
      before: "https://i.postimg.cc/14x0kqNR/3.png",
      after: "https://i.postimg.cc/xqrGwzbT/4.png",
      label: "Emagrecimento"
    },
    {
      before: "https://i.postimg.cc/V5y9xCbM/5.png",
      after: "https://i.postimg.cc/9z3P67qZ/6.png",
      label: "Emagrecimento e Definição"
    }
  ];

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const nextCase = () => {
    setSliderPosition(50); // Reset slider
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  return (
    <section id="before-after" className="py-20 bg-black relative border-b border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-white mb-2">
            TRANSFORMAÇÕES <span className="text-gold-500">REAIS</span>
          </h2>
          <p className="text-neutral-400 text-sm">Arraste para ver o resultado do Método Braga</p>
        </div>

        {/* Comparison Area */}
        <div className="max-w-md md:max-w-2xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-video rounded-xl overflow-hidden border-2 border-gold-500/30 cursor-ew-resize select-none shadow-[0_0_30px_rgba(212,175,55,0.1)]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* Image After (Background - Full) */}
            <div className="absolute inset-0">
               <img 
                src={cases[activeCase].after} 
                alt="Depois" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-gold-500 text-black font-bold text-xs px-2 py-1 rounded-sm z-10">
                DEPOIS
              </div>
            </div>

            {/* Image Before (Clipped on top) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img 
                src={cases[activeCase].before} 
                alt="Antes" 
                className="w-full h-full object-cover pointer-events-none"
              />
               <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-xs px-2 py-1 rounded-sm z-10">
                ANTES
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gold-500 cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-lg border-2 border-black">
                <GripVertical size={16} className="text-black" />
              </div>
            </div>
            
            {/* Overlay Info (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 pointer-events-none z-10">
               <p className="text-white font-bold text-lg uppercase drop-shadow-md">{cases[activeCase].label}</p>
            </div>
          </div>

          {/* Controls Footer - ALIGNED PERFECTLY */}
          <div className="mt-6 flex items-center justify-between w-full gap-4">
            {/* Counter Card */}
            <div className="flex-1 flex items-center gap-3 bg-neutral-900 border border-white/10 px-4 h-14 rounded-lg">
              <Layers className="text-gold-500 w-5 h-5 shrink-0" />
              <div className="flex flex-col justify-center">
                <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider leading-tight">Caso</span>
                <span className="text-white font-bold text-sm leading-tight">
                  {activeCase + 1} <span className="text-neutral-600">/ {cases.length}</span>
                </span>
              </div>
            </div>

            {/* Next Button */}
            <button 
              onClick={nextCase}
              className="flex-1 flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black px-4 h-14 rounded-lg font-bold uppercase text-xs md:text-sm tracking-wider transition-all active:scale-95 whitespace-nowrap"
            >
              Próximo Resultado
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;
