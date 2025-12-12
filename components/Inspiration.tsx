
import React, { useRef, useState, useEffect } from 'react';
import { Quote, ArrowRight, Trophy, Target, ChevronRight } from 'lucide-react';

const Inspiration: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasStartedAutoPlay, setHasStartedAutoPlay] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const slides = [
    {
      id: 1,
      image: "media/change1.jpeg",
      name: "Mariana Costa",
      tag: "Mãe de 2 filhos",
      pain: "Sem tempo",
      result: "Recuperou corpo pré-gravidez.",
      quote: "Achava que ser mãe significava abrir mão da minha autoestima. O Braga me provou o contrário."
    },
    {
      id: 2,
      image: "media/change2.jpeg",
      name: "Carla Souza",
      tag: "Rotina Corporativa",
      pain: "Vivia cansada",
      result: "Trocou gordura por massa magra.",
      quote: "Eu usava o cansaço como desculpa. Hoje o treino é o que me dá energia para aguentar o dia."
    },
    {
      id: 3,
      image: "media/change4.jpeg",
      name: "Bruna Mendes",
      tag: "Estudante de Med.",
      pain: "Rotina louca",
      result: "Definição mantendo constância.",
      quote: "Eu nunca conseguia seguir nada por causa dos horários. O protocolo flexível me salvou."
    },
    {
      id: 4,
      image: "media/change3.jpeg",
      name: "Renata Lins",
      tag: "Iniciante",
      pain: "Vergonha",
      result: "-12kg com confiança total.",
      quote: "Eu tinha vergonha de ir treinar. O app me deu a segurança de saber exatamente o que fazer."
    },
     {
      id: 5,
      image: "media/change5.jpeg",
      name: "Renata Lins",
      tag: "Iniciante",
      pain: "Vergonha",
      result: "-12kg com confiança total.",
      quote: "Eu tinha vergonha de ir treinar. O app me deu a segurança de saber exatamente o que fazer."
    },
     {
      id: 6,
      image: "media/change6.jpeg",
      name: "Renata Lins",
      tag: "Iniciante",
      pain: "Vergonha",
      result: "-12kg com confiança total.",
      quote: "Eu tinha vergonha de ir treinar. O app me deu a segurança de saber exatamente o que fazer."
    },
  ];

  // 1. Detectar visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 2. Lógica de Timer
  useEffect(() => {
    if (!isInView || isInteracting) return;

    const delay = hasStartedAutoPlay ? 7000 : 3000;

    const timeout = setTimeout(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= slides.length) {
        nextIndex = 0;
      }
      scrollToIndex(nextIndex);
      setHasStartedAutoPlay(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, hasStartedAutoPlay, activeIndex, isInteracting]);


  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.children;
      
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const scrollLeft = card.offsetLeft - (container.offsetWidth / 2) + (card.offsetWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const center = container.scrollLeft + container.offsetWidth / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      Array.from(container.children).forEach((child, index) => {
        const childCenter = (child as HTMLElement).offsetLeft + (child as HTMLElement).offsetWidth / 2;
        const distance = Math.abs(center - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });
      
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
        setHasStartedAutoPlay(true);
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/5"
    >
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.03),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-2 opacity-80">
            <div className="h-[1px] w-8 bg-gold-500"></div>
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              Histórias Reais
            </span>
            <div className="h-[1px] w-8 bg-gold-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-2">
            ELAS DECIDIRAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-500">
              MUDAR O JOGO
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full">
            
            <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onMouseDown={() => setIsInteracting(true)}
                onMouseUp={() => setIsInteracting(false)}
                onTouchStart={() => setIsInteracting(true)}
                onTouchEnd={() => setIsInteracting(false)}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-8 md:px-[calc(50%-170px)] py-4 no-scrollbar scroll-smooth items-start"
            >
                {slides.map((slide, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div 
                            key={slide.id}
                            className={`
                                relative shrink-0 snap-center transition-all duration-500 ease-out
                                w-[300px] md:w-[340px]
                                ${isActive ? 'scale-100 opacity-100 z-20' : 'scale-95 opacity-50 blur-[1px] z-10'}
                            `}
                        >
                            {/* Card Container */}
                            <div className={`
                                w-full bg-neutral-900 rounded-2xl overflow-hidden border transition-all duration-500 shadow-xl flex flex-col
                                ${isActive ? 'border-gold-500/40 shadow-[0_0_25px_rgba(212,175,55,0.1)]' : 'border-white/5'}
                            `}>
                                
                                {/* 1. FOTO TOTALMENTE LIMPA (Aspect Ratio 4:5 Instagram) */}
                                <div className="relative w-full aspect-[4/5] bg-neutral-950">
                                    <img 
                                        src={slide.image} 
                                        alt={slide.name} 
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Apenas uma borda sutil embaixo para separar do texto */}
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
                                </div>

                                {/* 2. ÁREA DE INFORMAÇÕES (Embaixo da Foto) */}
                                <div className="p-5 flex flex-col gap-4 relative bg-neutral-900">
                                    
                                    {/* Header do Card */}
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-white font-heading font-bold text-lg uppercase italic leading-none">{slide.name}</h3>
                                            <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest mt-1 block">
                                                {slide.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Grid Desafio/Conquista */}
                                    <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5">
                                        <div>
                                            <div className="flex items-center gap-1.5 mb-1 text-red-500/80">
                                                <Target size={12} />
                                                <span className="text-[9px] uppercase font-bold tracking-wider">Desafio</span>
                                            </div>
                                            <p className="text-neutral-400 text-[11px] leading-tight font-medium line-clamp-2">"{slide.pain}"</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-1.5 mb-1 text-green-500">
                                                <Trophy size={12} />
                                                <span className="text-[9px] uppercase font-bold tracking-wider">Conquista</span>
                                            </div>
                                            <p className="text-white text-[11px] leading-tight font-bold line-clamp-2">{slide.result}</p>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="relative bg-black/30 p-3 rounded border border-white/5">
                                        <Quote size={12} className="text-gold-500 absolute top-2 left-2 opacity-50" />
                                        <p className="text-neutral-300 text-[11px] italic leading-relaxed pl-4">
                                            {slide.quote}
                                        </p>
                                    </div>

                                    {/* BARRA DE TIMER (No rodapé do card) */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
                                        <div 
                                            className="h-full bg-gold-500 ease-linear"
                                            style={{ 
                                                width: isActive && isInView && !isInteracting ? '100%' : '0%',
                                                transitionProperty: 'width',
                                                transitionDuration: isActive && isInView && !isInteracting 
                                                    ? (hasStartedAutoPlay ? '7000ms' : '3000ms') 
                                                    : '0ms'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Hint de Swipe */}
             <div className="flex items-center justify-center gap-2 mt-6 opacity-40 animate-pulse">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">Arraste para o lado</span>
                <ChevronRight size={14} className="text-gold-500" />
            </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
             <a href="#pricing" className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-gold-500/30 pb-1 hover:border-white">
                Quero ser o próximo resultado
                <ArrowRight size={14} />
             </a>
        </div>

      </div>
    </section>
  );
};

export default Inspiration;

