
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesIntro: React.FC = () => {
  return (
    <section className="relative py-12 md:py-20 bg-richblack overflow-hidden">
      {/* Background Effects (Subtler) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Compacto */}
        <div className="text-center mb-8 md:mb-12 space-y-3">
          <div className="inline-flex items-center bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5">
            <span className="text-gold-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              O Método é Único
            </span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-heading font-black text-white leading-tight">
            DEFINA SEU <br />
            PONTO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">PARTIDA</span>
          </h2>
          
          <p className="text-neutral-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed px-4">
            A excelência técnica do Treinador Braga está disponível em duas modalidades. <strong className="text-white">Escolha como deseja realizar sua avaliação inicial</strong> para começarmos o seu projeto.
          </p>
        </div>

        {/* Cards Container - Grid Compacto */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* CARD 1: AVALIAÇÃO DIGITAL */}
          <a href="#methodology" className="group relative bg-neutral-900/60 border border-white/10 hover:border-gold-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/10 flex flex-col">
            <div className="p-5 md:p-6 flex flex-col h-full relative z-10">
              
              {/* Topo do Card */}
              <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight leading-none mb-2">
                      Avaliação Digital
                    </h3>
                    <div className="inline-block border border-gold-500/30 rounded px-2 py-0.5">
                       <span className="text-[10px] text-gold-500 font-bold uppercase tracking-wider">A mais escolhida</span>
                    </div>
                </div>
              </div>

              {/* Texto */}
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 grow">
                Ideal para quem quer praticidade e liberdade geográfica. Você envia fotos e vídeos guiados, e eu realizo a análise biomecânica e postural à distância com precisão profissional.
              </p>

              {/* Botão Link */}
              <div className="flex items-center text-gold-500 text-xs font-bold uppercase tracking-widest gap-2 group-hover:gap-3 transition-all mt-auto">
                Ver como funciona
                <ArrowRight size={14} />
              </div>
            </div>
            
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </a>

          {/* CARD 2: AVALIAÇÃO PRESENCIAL */}
          <a href="#presencial" className="group relative bg-neutral-900/60 border border-white/10 hover:border-gold-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/10 flex flex-col">
            <div className="p-5 md:p-6 flex flex-col h-full relative z-10">
              
              {/* Topo do Card */}
              <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight leading-none mb-2">
                      Avaliação em Consultório
                    </h3>
                    <div className="inline-block border border-gold-500/30 rounded px-2 py-0.5">
                       <span className="text-[10px] text-gold-500 font-bold uppercase tracking-wider">Experiência VIP</span>
                    </div>
                </div>
              </div>

              {/* Texto */}
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 grow">
                Uma experiência clínica completa. Você agenda um horário no meu consultório para realizarmos a avaliação física utilizando equipamentos de alta tecnologia e análise corporal ao vivo.
              </p>

              {/* Botão Link */}
              <div className="flex items-center text-gold-500 text-xs font-bold uppercase tracking-widest gap-2 group-hover:gap-3 transition-all mt-auto">
                Ver detalhes presenciais
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
