
import React, { useRef, useState, useEffect } from 'react';
import { Quote, ArrowRight, Trophy, Clock, Target } from 'lucide-react';

const Inspiration: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1574680096141-98778bc42438?q=80&w=800&auto=format&fit=crop",
      name: "Mariana Costa",
      tag: "Mãe de 2 filhos",
      pain: "Não tinha tempo",
      result: "Recuperou o corpo de antes da gravidez treinando 40min/dia.",
      quote: "Achava que ser mãe significava abrir mão da minha autoestima. O Braga me provou o contrário."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1609643034861-122e232145e2?q=80&w=800&auto=format&fit=crop",
      name: "Carla Souza",
      tag: "Rotina Corporativa",
      pain: "Vivia cansada",
      result: "Trocou a gordura por massa magra e eliminou a dor nas costas.",
      quote: "Eu usava o cansaço como desculpa. Hoje o treino é o que me dá energia para aguentar o dia."
    },
    {
      id: 3, // ALTERADO AQUI: Removido menção à ansiedade médica
      image: "https://images.unsplash.com/photo-1541338784842-e6198811883e?q=80&w=800&auto=format&fit=crop",
      name: "Bruna Mendes",
      tag: "Estudante de Med.",
      pain: "Rotina instável",
      result: "Definição abdominal mantendo a constância nos plantões.",
      quote: "Eu nunca conseguia seguir nada por causa dos horários loucos. O protocolo flexível me fez parar de desistir."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1627483262769-04d0a140154c?q=80&w=800&auto=format&fit=crop",
      name: "Renata Lins",
      tag: "Iniciante",
      pain: "Vergonha da academia",
      result: "Perdeu 12kg e hoje treina com confiança total.",
      quote: "Eu tinha vergonha de ir treinar. O app me deu a segurança de saber exatamente o que fazer."
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const center = container.scrollLeft + container.offsetWidth / 2;
      const cardWidth = container.children[0].clientWidth; 
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      
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
      
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const targetScroll = (container.children[1] as HTMLElement).offsetLeft - (container.offsetWidth / 2) + ((container.children[1] as HTMLElement).offsetWidth / 2);
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.03),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header - Stronger & Decision Focused */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 opacity-80">
            <div className="h-[1px] w-8 bg-gold-500"></div>
            <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              Histórias Reais
            </span>
            <div className="h-[1px] w-8 bg-gold-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight mb-4">
            ELAS DECIDIRAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-200 to-gold-500">
              MUDAR O JOGO
            </span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed px-4">
            Todas elas tinham uma desculpa válida: falta de tempo, cansaço, vergonha... <br className="hidden md:block" />
            <span className="text-white font-bold">Mas decidiram que o resultado seria maior que a desculpa.</span>
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative w-full max-w-md md:max-w-6xl mx-auto h-[520px] md:h-[550px]">
            
            <div 
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory h-full items-center gap-4 md:gap-8 px-[50vw] md:px-[calc(50%-175px)] no-scrollbar py-4"
                style={{ scrollBehavior: 'smooth' }}
            >
                {slides.map((slide, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div 
                            key={slide.id}
                            className={`
                                relative shrink-0 snap-center transition-all duration-500 ease-out
                                w-[280px] md:w-[350px] 
                                ${isActive ? 'h-[480px] md:h-[500px] scale-100 opacity-100 z-20' : 'h-[380px] md:h-[400px] scale-90 opacity-40 grayscale z-10'}
                            `}
                        >
                            {/* Card Content */}
                            <div className={`
                                w-full h-full rounded-2xl overflow-hidden shadow-2xl relative border bg-neutral-900
                                ${isActive ? 'border-gold-500 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border-white/5'}
                            `}>
                                {/* Image Half */}
                                <div className={`relative w-full ${isActive ? 'h-[55%]' : 'h-full'} transition-all duration-500`}>
                                    <img 
                                        src={slide.image} 
                                        alt={slide.name} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
                                    
                                    {/* Name Overlay (Visible when inactive or active) */}
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <p className="text-white font-heading font-bold text-xl uppercase italic">{slide.name}</p>
                                        <div className="inline-block px-2 py-0.5 bg-gold-500/20 border border-gold-500/30 rounded text-[10px] font-bold text-gold-500 uppercase tracking-wide mt-1">
                                            {slide.tag}
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content Half (Only visible clearly when active) */}
                                <div className={`
                                    p-6 flex flex-col justify-between h-[45%] bg-neutral-900 relative
                                    ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 hidden'}
                                    transition-all duration-500
                                `}>
                                    <div className="space-y-4">
                                        {/* Challenge vs Result */}
                                        <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                                            <div className="mt-1 p-1.5 rounded-full bg-red-500/10 text-red-500">
                                                <Target size={14} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-neutral-500 uppercase font-bold">O Desafio</p>
                                                <p className="text-neutral-300 text-xs leading-snug">"{slide.pain}"</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                                            <div className="mt-1 p-1.5 rounded-full bg-green-500/10 text-green-500">
                                                <Trophy size={14} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-neutral-500 uppercase font-bold">A Conquista</p>
                                                <p className="text-white font-bold text-xs leading-snug">{slide.result}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="mt-4 pt-4 border-t border-white/5 relative">
                                        <Quote size={16} className="text-gold-500/30 absolute -top-2 left-0 fill-gold-500" />
                                        <p className="text-neutral-400 text-xs italic pl-2 pt-1 leading-relaxed">
                                            {slide.quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Swipe Hint */}
             <div className="md:hidden text-center mt-2 flex items-center justify-center gap-2 opacity-50">
                 <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
                 <div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
            </div>
        </div>

        {/* Call to Action - Bridge to Pricing */}
        <div className="mt-8 text-center">
             <a href="#pricing" className="inline-flex items-center gap-3 text-white hover:text-gold-500 transition-colors group px-6 py-3 rounded-full border border-white/10 hover:border-gold-500/50 bg-neutral-900">
                <span className="text-xs uppercase tracking-widest font-bold">Quero começar minha história</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-gold-500" />
             </a>
        </div>

      </div>
    </section>
  );
};

export default Inspiration;
