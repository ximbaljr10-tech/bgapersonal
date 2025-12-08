
import React, { useEffect, useRef, useState } from 'react';
import { Key, Camera, ClipboardList, Smartphone, MessageCircle, CalendarClock, MapPin } from 'lucide-react';

const Methodology: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lógica da Animação "Líquida" (Scroll Progress)
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;

        // Começa a encher quando o topo do elemento chega no meio da tela
        const startOffset = windowHeight * 0.7;
        
        let progress = 0;
        
        if (elementTop < startOffset) {
          // Calcula quanto já rolou dentro da seção
          const scrolled = startOffset - elementTop;
          progress = (scrolled / elementHeight) * 100;
        }

        // Limita entre 0 e 100%
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
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

  return (
    <section id="methodology" className="py-16 md:py-24 bg-richblack overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Intro Text */}
        <div className="mb-12 md:text-center">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">O Passo a Passo</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mt-2 mb-4">
            COMO FUNCIONA
          </h2>
          <p className="text-neutral-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Aqui tudo é simples, prático e pensado pra você. Olha só como funciona:
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div ref={containerRef} className="relative pl-4 md:pl-0 md:w-2/3 mx-auto">
          
          {/* THE LIQUID LINE (Background Guide) */}
          <div className="absolute left-[27px] md:left-[29px] top-4 bottom-10 w-[2px] bg-neutral-800 z-0"></div>
          
          {/* THE LIQUID ANIMATION (Gold Fill) */}
          <div 
            className="absolute left-[27px] md:left-[29px] top-4 w-[2px] bg-gold-500 z-0 transition-all duration-75 ease-linear shadow-[0_0_10px_#D4AF37]"
            style={{ height: `${scrollProgress}%` }}
          ></div>

          <div className="space-y-12 relative z-10">
            {steps.map((step, index) => {
              // Verifica se o "liquido" já passou por este item para acendê-lo
              const stepProgressThreshold = (index / (steps.length - 1)) * 100;
              const isActive = scrollProgress >= stepProgressThreshold - 5; // -5 buffer

              return (
                <div key={index} className="flex gap-6 items-start group">
                   {/* Icon Bubble */}
                   <div 
                      className={`shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive 
                        ? 'bg-black border-gold-500 text-gold-500 shadow-[0_0_20px_rgba(212,175,55,0.3)] scale-110' 
                        : 'bg-neutral-900 border-neutral-800 text-neutral-600'
                      }`}
                   >
                      {step.icon}
                   </div>
                   
                   {/* Content */}
                   <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-2'}`}>
                      <h3 className={`font-heading font-bold text-lg mb-2 transition-colors ${isActive ? 'text-white' : 'text-neutral-500'}`}>
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

        {/* Resumo Final */}
        <div className="mt-16 bg-neutral-900/50 border border-gold-500/20 p-6 rounded-xl md:text-center max-w-3xl mx-auto backdrop-blur-sm">
          <p className="text-white text-sm md:text-base leading-relaxed">
            <span className="text-gold-500 font-bold mr-2">👉 Resumindo:</span>
            você terá um treino feito só pra você, acompanhamento de perto e praticidade total. É só dar o primeiro passo e começar sua transformação. 🚀
          </p>
        </div>

      </div>
    </section>
  );
};

export default Methodology;
