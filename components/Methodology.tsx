import React, { useEffect, useRef, useState } from 'react';
import { Key, Camera, ClipboardList, Smartphone, MessageCircle, CalendarClock, MapPin } from 'lucide-react';

// Configurações centralizadas
const SCROLL_CONFIG = {
  START_OFFSET: 0.7,
  ACTIVATION_BUFFER: 5,
  TRANSITION_DURATION: 500,
  LINE_WIDTH: 2,
  FINAL_CARD_THRESHOLD: 92, // Quando começar a preencher o card
} as const;

interface Step {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
}

const Methodology: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const finalCardRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      icon: <Key className="w-5 h-5" />,
      title: "Fechando o plano",
      text: "Assim que confirmar sua inscrição, você recebe no e-mail seu login e senha para acessar o MFITPERSONAL, meu App exclusivo de treinos. É por lá que você terá acesso ao plano, vídeos e acompanhamento inicial."
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Avaliação",
      text: (
        <>
          Peço algumas fotos (frente, costas e perfil) em um fundo neutro para analisar seu corpo e criar seu treino sob medida.
          <div className="mt-3 p-3 bg-gold-500/10 border-l-2 border-gold-500 rounded-r-md">
            <p className="text-xs text-gold-400 font-bold flex items-center gap-1 mb-1">
              <MapPin size={12} /> Rio Branco - Acre
            </p>
            <p className="text-xs text-neutral-300">
              Se você for da região, podemos agendar uma avaliação física presencial no consultório.
            </p>
          </div>
        </>
      )
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Anamnese",
      text: "Você responde um questionário rápido sobre rotina, objetivos e particularidades. Assim consigo montar um plano totalmente adaptado à sua vida."
    },
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Entrega dos treinos",
      text: "Em até 3 a 5 dias úteis após a avaliação e confirmação do pagamento, seu treino personalizado fica pronto no App. Cada exercício vem com vídeo explicativo para você executar sem dúvidas."
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Suporte direto",
      text: "Precisa de ajustes no treino? É só me chamar no WhatsApp. Eu acompanho de perto e faço as adaptações necessárias conforme sua evolução."
    },
    {
      icon: <CalendarClock className="w-5 h-5" />,
      title: "Duração",
      text: "Seu treino é renovado a cada 40 dias. Antes de montar o próximo ciclo, conversamos sobre sua experiência anterior pra garantir que você continue evoluindo no caminho certo."
    }
  ];

  // Intersection Observer para animação de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll Progress com throttle otimizado
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const startOffset = windowHeight * SCROLL_CONFIG.START_OFFSET;
            
            let progress = 0;
            if (elementTop < startOffset) {
              const scrolled = startOffset - elementTop;
              progress = (scrolled / elementHeight) * 100;
            }
            
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Inicializa
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Encontra o índice do último step ativo
  const lastActiveStepIndex = steps.reduce((lastIndex, _, index) => {
    const threshold = (index / (steps.length - 1)) * 100;
    return scrollProgress >= threshold - SCROLL_CONFIG.ACTIVATION_BUFFER ? index : lastIndex;
  }, -1);

  // Calcula se começou a preencher o card final
  const isFinalCardActive = scrollProgress >= SCROLL_CONFIG.FINAL_CARD_THRESHOLD;
  
  // Calcula o progresso de preenchimento do card (0 a 100)
  const cardFillProgress = isFinalCardActive 
    ? Math.min(100, ((scrollProgress - SCROLL_CONFIG.FINAL_CARD_THRESHOLD) / (100 - SCROLL_CONFIG.FINAL_CARD_THRESHOLD)) * 100)
    : 0;

  return (
    <section 
      id="methodology" 
      className="py-16 md:py-24 bg-richblack overflow-hidden relative"
      aria-label="Metodologia de Trabalho"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Intro Text */}
        <div className={`mb-12 md:text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">
            O Passo a Passo
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mt-2 mb-4">
            COMO FUNCIONA
          </h2>
          <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Aqui tudo é simples, prático e pensado pra você. Olha só como funciona:
          </p>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1.5 w-48 bg-neutral-800 rounded-full overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-gold-500 to-gold-400 transition-all duration-300 shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                style={{ width: `${scrollProgress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(scrollProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <span className="text-xs text-neutral-500 font-mono tabular-nums min-w-[3ch]">
              {Math.round(scrollProgress)}%
            </span>
          </div>
        </div>

        {/* TIMELINE CONTAINER */}
        <div 
          ref={containerRef} 
          className={`relative md:w-2/3 mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          
          {/* Background Guide Line - Estende até o card */}
          <div 
            className="absolute left-[24px] md:left-[26px] top-4 bg-neutral-800 z-0 rounded-full transition-all duration-500"
            style={{ 
              width: `${SCROLL_CONFIG.LINE_WIDTH}px`,
              height: isFinalCardActive ? 'calc(100% + 100px)' : 'calc(100% - 40px)'
            }}
            aria-hidden="true"
          />
          
          {/* Animated Liquid Fill - Desce até o card e para no topo */}
          <div 
            className="absolute left-[24px] md:left-[26px] top-4 bg-gold-500 z-0 transition-all ease-linear shadow-[0_0_10px_#D4AF37] rounded-full"
            style={{ 
              width: `${SCROLL_CONFIG.LINE_WIDTH}px`,
              height: isFinalCardActive 
                ? `calc(${SCROLL_CONFIG.FINAL_CARD_THRESHOLD}% + 100px)` 
                : `${scrollProgress}%`,
              transitionDuration: isFinalCardActive ? '300ms' : '75ms'
            }}
            aria-hidden="true"
          />

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => {
              const stepProgressThreshold = (index / (steps.length - 1)) * 100;
              const isActive = scrollProgress >= stepProgressThreshold - SCROLL_CONFIG.ACTIVATION_BUFFER;
              const isLastActive = index === lastActiveStepIndex;

              return (
                <div 
                  key={index} 
                  className="flex gap-4 md:gap-6 items-start group"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {/* Icon Bubble */}
                  <div 
                    className={`shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all bg-richblack z-10 ${
                      isActive 
                        ? `border-gold-500 text-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-110 ${isLastActive ? 'animate-pulse' : ''}` 
                        : 'border-neutral-800 text-neutral-600'
                    }`}
                    style={{ transitionDuration: `${SCROLL_CONFIG.TRANSITION_DURATION}ms` }}
                    role="status"
                    aria-label={`Etapa ${index + 1} de ${steps.length}: ${step.title}`}
                  >
                    {step.icon}
                  </div>
                   
                  {/* Content */}
                  <div 
                    className={`transition-all pt-2 ${
                      isActive 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-50 translate-x-2'
                    }`}
                    style={{ transitionDuration: `${SCROLL_CONFIG.TRANSITION_DURATION}ms` }}
                  >
                    <h3 className={`font-heading font-bold text-lg mb-2 transition-colors ${
                      isActive ? 'text-white' : 'text-neutral-500'
                    }`}>
                      {step.title}
                    </h3>
                    <div className="text-neutral-400 text-sm leading-relaxed">
                      {step.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resumo Final - COM EFEITO DE PREENCHIMENTO LÍQUIDO */}
        <div 
          ref={finalCardRef}
          className={`mt-16 relative max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Container do Card com Overflow Hidden para o efeito de preenchimento */}
          <div className="relative overflow-hidden rounded-xl">
            
            {/* Líquido Dourado que Preenche de Baixo pra Cima */}
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold-500/20 via-gold-500/10 to-transparent transition-all duration-300 ease-out"
              style={{
                height: `${cardFillProgress}%`,
                boxShadow: cardFillProgress > 0 
                  ? `0 -${Math.min(20, cardFillProgress / 5)}px ${Math.min(40, cardFillProgress / 2.5)}px rgba(212, 175, 55, ${Math.min(0.3, cardFillProgress / 300)})` 
                  : 'none'
              }}
            />

            {/* Onda Animada no Topo do Líquido */}
            {cardFillProgress > 5 && (
              <div 
                className="absolute left-0 right-0 h-8 pointer-events-none"
                style={{
                  bottom: `${cardFillProgress}%`,
                  background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0.15), transparent)',
                  filter: 'blur(8px)',
                  animation: 'wave 3s ease-in-out infinite'
                }}
              />
            )}

            {/* Borda que brilha conforme preenche */}
            <div 
              className="absolute inset-0 rounded-xl border-2 transition-all duration-500 pointer-events-none"
              style={{
                borderColor: cardFillProgress > 0 
                  ? `rgba(212, 175, 55, ${Math.min(0.6, 0.2 + cardFillProgress / 200)})` 
                  : 'rgba(212, 175, 55, 0.2)',
                boxShadow: cardFillProgress > 20 
                  ? `0 0 ${cardFillProgress / 5}px rgba(212, 175, 55, ${cardFillProgress / 300}),
                     inset 0 0 ${cardFillProgress / 8}px rgba(212, 175, 55, ${cardFillProgress / 500})` 
                  : 'none'
              }}
            />

            {/* Bolhas que sobem quando está preenchendo */}
            {cardFillProgress > 20 && (
              <>
                <div 
                  className="absolute w-2 h-2 bg-gold-500/40 rounded-full animate-bubble-1"
                  style={{ 
                    bottom: '10%', 
                    left: '20%',
                    animationDelay: '0s'
                  }}
                />
                <div 
                  className="absolute w-1.5 h-1.5 bg-gold-500/30 rounded-full animate-bubble-2"
                  style={{ 
                    bottom: '5%', 
                    left: '70%',
                    animationDelay: '1s'
                  }}
                />
                <div 
                  className="absolute w-1 h-1 bg-gold-500/50 rounded-full animate-bubble-1"
                  style={{ 
                    bottom: '15%', 
                    left: '45%',
                    animationDelay: '0.5s'
                  }}
                />
                <div 
                  className="absolute w-2 h-2 bg-gold-500/35 rounded-full animate-bubble-2"
                  style={{ 
                    bottom: '8%', 
                    left: '85%',
                    animationDelay: '1.5s'
                  }}
                />
              </>
            )}

            {/* Conteúdo do Card */}
            <div 
              className="relative bg-neutral-900/50 backdrop-blur-sm p-6 md:text-center transition-all duration-500"
            >
              <p 
                className={`text-white text-sm md:text-base leading-relaxed relative z-10 transition-all duration-500`}
                style={{
                  textShadow: cardFillProgress > 50 
                    ? `0 0 ${cardFillProgress / 20}px rgba(212, 175, 55, ${cardFillProgress / 400})` 
                    : 'none'
                }}
              >
                <span 
                  className="text-gold-500 font-bold mr-2 transition-all duration-500"
                  style={{
                    filter: cardFillProgress > 30 
                      ? `drop-shadow(0 0 ${cardFillProgress / 25}px rgba(212, 175, 55, ${cardFillProgress / 250}))` 
                      : 'none'
                  }}
                >
                  👉 Resumindo:
                </span>
                você terá um treino feito só pra você, acompanhamento de perto e praticidade total. É só dar o primeiro passo e começar sua transformação. 🚀
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Animações CSS Customizadas */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) scaleY(1); }
          50% { transform: translateX(-10px) scaleY(1.2); }
        }

        @keyframes bubble-1 {
          0% { 
            transform: translateY(0) scale(1); 
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) scale(1.1);
            opacity: 0.4;
          }
          100% { 
            transform: translateY(-60px) scale(0.8); 
            opacity: 0;
          }
        }

        @keyframes bubble-2 {
          0% { 
            transform: translateY(0) translateX(0) scale(1); 
            opacity: 0.5;
          }
          50% {
            transform: translateY(-40px) translateX(10px) scale(1.2);
            opacity: 0.3;
          }
          100% { 
            transform: translateY(-80px) translateX(-5px) scale(0.7); 
            opacity: 0;
          }
        }

        .animate-bubble-1 {
          animation: bubble-1 4s ease-in-out infinite;
        }

        .animate-bubble-2 {
          animation: bubble-2 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Methodology;