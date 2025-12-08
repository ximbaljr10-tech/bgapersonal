
import React from 'react';
import { Flame, Dumbbell, Sparkles, Zap, Timer, UserCheck, HeartPulse, Moon, CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  // Removido "Zero Estresse" para fechar 8 itens (par) e deixar o grid perfeito
  const benefits = [
    {
      icon: <Flame />,
      title: "Queima de Gordura",
      desc: "Emagrecimento definitivo sem efeito sanfona."
    },
    {
      icon: <Dumbbell />,
      title: "Definição Muscular",
      desc: "Corpo firme, tonificado e estético."
    },
    {
      icon: <Sparkles />,
      title: "Autoestima Alta",
      desc: "Sinta-se poderosa e confiante no espelho."
    },
    {
      icon: <Zap />,
      title: "Energia Total",
      desc: "Mais disposição para o trabalho e rotina."
    },
    {
      icon: <Timer />,
      title: "Treinos Práticos",
      desc: "Rápidos e adaptáveis ao seu dia a dia."
    },
    {
      icon: <UserCheck />,
      title: "Acompanhamento",
      desc: "Você não estará sozinha nessa jornada."
    },
    {
      icon: <HeartPulse />,
      title: "Zero Dores",
      desc: "Fortalecimento que elimina desconfortos."
    },
    {
      icon: <Moon />,
      title: "Sono Reparador",
      desc: "Durma melhor e acorde renovada."
    }
  ];

  return (
    <section className="py-20 bg-richblack relative overflow-hidden">
      
      {/* Background Abstract Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500 to-transparent"></div>
         <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500 to-transparent delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Compacto */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
            Seu Novo Estilo de Vida
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-none">
            O QUE VOCÊ VAI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">CONQUISTAR?</span>
          </h2>
        </div>

        {/* Nova Arquitetura de Grid: Tech HUD Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-neutral-900 overflow-hidden rounded-lg hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Borda Lateral de Destaque */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 shadow-[0_0_10px_#D4AF37]"></div>
              
              {/* Ícone Gigante de Fundo (Marca d'água) */}
              <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-gold-500/10 transition-colors duration-500 transform rotate-12 scale-150 pointer-events-none">
                {React.cloneElement(item.icon as React.ReactElement, { size: 80 })}
              </div>

              <div className="p-4 md:p-6 relative z-10 h-full flex flex-col justify-center">
                <div className="text-gold-500 mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-white font-bold text-sm md:text-lg uppercase leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-[10px] md:text-xs font-medium leading-snug group-hover:text-neutral-300 transition-colors">
                  {item.desc}
                </p>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* Bloco de Destaque Final */}
        <div className="relative">
           {/* Glow Effect Behind */}
           <div className="absolute inset-0 bg-gold-500 blur-[60px] opacity-10 rounded-full"></div>
           
           <div className="relative bg-gradient-to-r from-neutral-900 to-black border border-gold-500/30 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
              <div className="shrink-0">
                 <div className="w-14 h-14 rounded-full bg-gold-500/20 border border-gold-500 flex items-center justify-center animate-pulse">
                    <CheckCircle2 className="text-gold-500 w-8 h-8" />
                 </div>
              </div>
              <div className="text-center md:text-left">
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-2 uppercase">
                    E o melhor: <span className="text-gold-500">Sem dietas malucas!</span>
                 </h3>
                 <p className="text-neutral-400 text-sm md:text-base max-w-2xl">
                    Sem precisar morar na academia. Os treinos são feitos <strong className="text-white">sob medida para você</strong>, considerando sua rotina real e o que traz resultados definitivos.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
