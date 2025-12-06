import React from 'react';
import { ClipboardList, Dumbbell, MessageCircle, Trophy } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-10 h-10 text-black" />,
      title: "1. Avaliação Completa",
      description: "Tudo começa com uma análise detalhada. Você envia vídeos e fotos (frente, costas e perfil) para analisarmos sua postura e composição corporal, garantindo segurança e eficiência."
    },
    {
      icon: <Dumbbell className="w-10 h-10 text-black" />,
      title: "2. Protocolo de Treino",
      description: "Com base na avaliação, monto seu planejamento estratégico focado no seu objetivo (hipertrofia, emagrecimento, glúteos) e na sua disponibilidade de tempo."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-black" />,
      title: "3. Suporte e Feedback",
      description: "Não é apenas uma ficha de treino. Você terá acompanhamento para ajustes, correção de movimentos através de vídeos e suporte direto para tirar dúvidas."
    },
    {
      icon: <Trophy className="w-10 h-10 text-black" />,
      title: "4. Evolução Constante",
      description: "Periodicamente reavaliamos seus resultados e ajustamos a intensidade e volume do treino para garantir que você nunca estagne."
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Passo a Passo</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 text-white">
            COMO FUNCIONA A <br /><span className="text-gold-500">CONSULTORIA ONLINE</span>
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group bg-neutral-900 border border-white/5 p-8 hover:border-gold-500/50 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-heading font-black text-6xl text-white group-hover:text-gold-500 transition-colors">
                0{index + 1}
              </div>
              
              <div className="w-16 h-16 bg-gold-500 rounded-sm flex items-center justify-center mb-6 shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-heading">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;