import React, { useEffect, useRef } from 'react';
import { Flame, Dumbbell, Sparkles, Zap, Timer, UserCheck, HeartPulse, Moon, CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const benefits = [
    { Icon: Flame, title: "Queima de Gordura", desc: "Emagrecimento definitivo sem efeito sanfona." },
    { Icon: Dumbbell, title: "Definição Muscular", desc: "Corpo firme, tonificado e estético." },
    { Icon: Sparkles, title: "Autoestima Alta", desc: "Sinta-se poderosa e confiante no espelho." },
    { Icon: Zap, title: "Energia Total", desc: "Mais disposição para o trabalho e rotina." },
    { Icon: Timer, title: "Treinos Práticos", desc: "Rápidos e adaptáveis ao seu dia a dia." },
    { Icon: UserCheck, title: "Acompanhamento", desc: "Você não estará sozinha nessa jornada." },
    { Icon: HeartPulse, title: "Zero Dores", desc: "Fortalecimento que elimina desconfortos." },
    { Icon: Moon, title: "Sono Reparador", desc: "Durma melhor e acorde renovada." }
  ];

  // Lógica para animar apenas quando aparecer na tela (Scroll Trigger)
  useEffect(() => {
    const options = {
      threshold: 0.1, // Dispara quando 10% do item estiver visível
      rootMargin: "0px 0px -50px 0px" // Um pequeno recuo para não disparar muito cedo
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerRef.current?.unobserve(entry.target); // Para de observar depois que animou (anima só 1 vez)
        }
      });
    }, options);

    const elements = document.querySelectorAll('.scroll-animate-item');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-20 bg-richblack relative overflow-hidden">
      
      {/* CSS CUSTOMIZADO PARA O EFEITO DE SCROLL */}
      <style>{`
        .scroll-animate-item {
          opacity: 0;
          transform: translateX(-50px); /* Começa recuado para a esquerda */
          transition: opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          will-change: opacity, transform;
        }

        .scroll-animate-item.is-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

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

        {/* LISTA DE BENEFÍCIOS */}
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-6 mb-16">
          {benefits.map((item, index) => (
            <div 
              key={index}
              // Adicionamos um pequeno delay baseado no index para criar efeito cascata se vários aparecerem juntos
              style={{ transitionDelay: `${index % 4 * 100}ms` }} 
              className={`
                scroll-animate-item group relative overflow-hidden transition-all duration-300
                
                /* --- ESTILOS MOBILE (Visual de Fita/Ribbon) --- */
                w-full flex items-center bg-neutral-900/90 backdrop-blur-sm border-y border-white/5 shadow-lg
                
                /* Altura fixa para parecer fita e Borda Esquerda Grossa Dourada */
                h-24 pl-5 border-l-[6px] border-l-gold-500 rounded-r-xl
                
                /* --- ESTILOS DESKTOP (Reset para Card normal) --- */
                lg:w-auto lg:h-auto lg:block lg:rounded-lg lg:border-4 lg:border-transparent lg:border-l-0 lg:bg-neutral-900 lg:hover:-translate-y-1 lg:pl-0
              `}
            >
              
              {/* Borda Dourada Desktop (Hover) */}
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-gold-500 shadow-[0_0_10px_#D4AF37] transition-opacity opacity-70 group-hover:opacity-100"></div>
              
              {/* Ícone Gigante de Fundo (Marca d'água) */}
              <div className="absolute -right-6 -bottom-6 text-white/5 group-hover:text-gold-500/10 transition-colors duration-500 transform rotate-12 scale-150 pointer-events-none lg:-right-4 lg:-bottom-4">
                <item.Icon size={90} />
              </div>

              {/* Conteúdo Interno */}
              <div className="relative z-10 w-full h-full flex items-center lg:flex-col lg:items-start lg:justify-center lg:p-6 pr-4">
                
                {/* Ícone Principal */}
                <div className="text-gold-500 shrink-0 mr-5 lg:mr-0 lg:mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  {/* Aumentei levemente o ícone mobile para 32px */}
                  <item.Icon size={32} className="lg:w-8 lg:h-8" /> 
                </div>

                {/* Textos */}
                <div className="flex-1">
                  {/* Fonte aumentada: text-base (16px) no mobile, text-xl no desktop */}
                  <h3 className="text-white font-bold text-base md:text-xl uppercase leading-tight mb-1">
                    {item.title}
                  </h3>
                  {/* Fonte aumentada: text-xs (12px) e cor um pouco mais clara */}
                  <p className="text-neutral-400 text-xs md:text-sm font-medium leading-snug group-hover:text-neutral-300 transition-colors lg:line-clamp-none">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Brilho ao passar o mouse/dedo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>

        {/* Bloco de Destaque Final */}
        <div className="relative scroll-animate-item">
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
                    E o melhor: <span className="text-gold-500">Sem Treinos Intermináveis, Logos, ou Extensos!</span>
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