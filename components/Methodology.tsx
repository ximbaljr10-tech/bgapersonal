
import React from 'react';
import { ClipboardList, Dumbbell, MessageCircle, Trophy } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5 md:w-6 md:h-6" />,
      stepLabel: "Passo 01",
      title: "Avaliação Completa",
      description: "Tudo começa com uma análise detalhada. Você envia vídeos e fotos (frente, costas e perfil) para analisarmos sua postura e composição corporal, garantindo segurança e eficiência."
    },
    {
      icon: <Dumbbell className="w-5 h-5 md:w-6 md:h-6" />,
      stepLabel: "Passo 02",
      title: "Protocolo de Treino",
      description: "Com base na avaliação, monto seu planejamento estratégico focado no seu objetivo (hipertrofia, emagrecimento, glúteos) e na sua disponibilidade de tempo."
    },
    {
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />,
      stepLabel: "Passo 03",
      title: "Suporte e Feedback",
      description: "Não é apenas uma ficha de treino. Você terá acompanhamento para ajustes, correção de movimentos através de vídeos e suporte direto para tirar dúvidas."
    },
    {
      icon: <Trophy className="w-5 h-5 md:w-6 md:h-6" />,
      stepLabel: "Passo 04",
      title: "Evolução Constante",
      description: "Periodicamente reavaliamos seus resultados e ajustamos a intensidade e volume do treino para garantir que você nunca estagne."
    }
  ];

  return (
    <section id="methodology" className="py-16 bg-richblack overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-gold-500 font-bold tracking-widest uppercase text-xs">O Método Braga</span>
            <h2 className="text-3xl font-heading font-black text-white mt-1">
              COMO FUNCIONA
            </h2>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-white/10 mx-8 mb-2"></div>
          <p className="text-neutral-500 text-xs md:text-sm max-w-xs text-right hidden md:block">
            Passo a passo simples e eficiente para você começar hoje.
          </p>
        </div>

        {/* MOBILE ARCHITECTURE: Vertical Timeline */}
        <div className="md:hidden relative border-l border-white/10 ml-4 space-y-10 pb-4">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8">
               {/* Timeline Node (Icon) */}
               <div className="absolute -left-[21px] top-0 bg-richblack p-1">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-gold-500/30 text-gold-500 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    {step.icon}
                  </div>
               </div>
               
               {/* Content */}
               <div className="pt-1">
                  <span className="text-gold-500 text-[10px] font-bold uppercase tracking-widest block mb-1">
                    {step.stepLabel}
                  </span>
                  <h3 className="text-white font-heading font-bold text-lg mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
               </div>
            </div>
          ))}
        </div>

        {/* DESKTOP ARCHITECTURE: Grid Cards (Mantido como solicitado) */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/50 border border-white/5 p-6 rounded-xl relative group hover:bg-neutral-900 transition-colors hover:border-gold-500/30"
            >
              {/* Number Background */}
              <div className="absolute top-2 right-4 text-[4rem] font-black text-white/5 group-hover:text-gold-500/10 transition-colors leading-none select-none">
                {index + 1}
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-black border border-gold-500/20 rounded-lg flex items-center justify-center text-gold-500 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 font-heading pr-8">{step.title}</h3>
                
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-6 w-8 h-[2px] bg-white/5 z-0"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;
