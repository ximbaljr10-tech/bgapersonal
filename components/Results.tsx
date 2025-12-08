import React from 'react';
import { Star, Globe, MapPin } from 'lucide-react';

const Results: React.FC = () => {
  // Dados simulados para mostrar a variedade de modalidades mantendo o padrão de resultado
  const transformations = [
    {
      id: 1,
      type: 'online',
      label: 'CONSULTORIA 100% ONLINE',
      location: 'Aluno de Portugal 🇵🇹',
      text: 'Moro fora e achei que a distância atrapalharia. O suporte foi tão próximo quanto se estivesse no Brasil.'
    },
    {
      id: 2,
      type: 'presencial',
      label: 'AVALIAÇÃO PRESENCIAL',
      location: 'Atendimento em Consultório',
      text: 'Fiz a avaliação física presencialmente, mas todo o acompanhamento diário seguiu o protocolo digital.'
    },
    {
      id: 3,
      type: 'online',
      label: 'CONSULTORIA 100% ONLINE',
      location: 'Aluno de São Paulo 🇧🇷',
      text: 'A avaliação por vídeo foi mais detalhada do que os personais que eu tive presencialmente na minha academia.'
    }
  ];

  return (
    <section id="results" className="py-20 bg-charcoal relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* TEXTO REESTRUTURADO PARA QUEBRAR OBJEÇÃO DO ONLINE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase">
            O MÉTODO SUPERA A <span className="text-gold-500">DISTÂNCIA</span>
          </h2>
          <p className="text-neutral-400 mt-6 max-w-3xl mx-auto text-lg">
            Muitos perguntam se o acompanhamento Online funciona tanto quanto o Presencial. 
            A resposta está abaixo: <strong className="text-white">o rigor técnico é o mesmo.</strong> A exigência é a mesma. 
            Independentemente se fizermos sua avaliação no consultório ou digitalmente, o resultado final é padrão Team Braga.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {transformations.map((item) => (
            <div key={item.id} className="bg-black p-4 border border-white/5 rounded-sm hover:border-gold-500/30 transition-colors group">
              
              {/* Container da Imagem */}
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-neutral-800">
                <img 
                  src={`https://picsum.photos/400/500?random=${item.id}`} 
                  alt="Antes e Depois Team Braga" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* TAG DE MODALIDADE: AQUI ESTÁ A PROVA VISUAL */}
                <div className={`absolute top-0 left-0 w-full py-2 px-3 text-xs font-bold uppercase tracking-widest text-center shadow-lg backdrop-blur-md
                  ${item.type === 'online' 
                    ? 'bg-gold-500/90 text-black' 
                    : 'bg-white/90 text-black'
                  }`}>
                  {item.label}
                </div>

                {/* Localização / Badge Inferior */}
                <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/80 px-3 py-1 rounded-sm border-l-2 border-gold-500">
                   {item.type === 'online' ? <Globe size={12} className="text-gold-500"/> : <MapPin size={12} className="text-gold-500"/>}
                   <span className="text-[10px] text-white uppercase font-bold tracking-wide">{item.location}</span>
                </div>
              </div>

              {/* Depoimento e Estrelas */}
              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-gold-500 text-gold-500" />)}
              </div>
              <p className="text-sm text-neutral-300 italic leading-relaxed">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        {/* CTA FINAL DE REFORÇO */}
        <div className="bg-gold-500 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)]">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-2 uppercase">
              Não importa onde você está
            </h3>
            <p className="text-black/80 font-medium text-lg">
              Seja em Recife ou do outro lado do mundo, eu tenho o protocolo exato para o seu corpo. Vamos definir seu ponto de partida?
            </p>
          </div>
          
          <a 
            href="https://wa.me/5599999999999"
            className="relative z-10 px-10 py-4 bg-black text-gold-500 font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors shadow-xl shrink-0 whitespace-nowrap border border-black hover:border-gold-500"
          >
            Iniciar Consultoria
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;