import React from 'react';
import { Star, MapPin } from 'lucide-react';

const Results: React.FC = () => {
  const transformations = [
    {
      id: 1,
      image: '/media/copy1.jpeg',
      type: 'online',
      tag: 'ONLINE',
      location: 'Lisboa, PT',
      quote: 'Segui o plano à risca. O resultado veio em 12 semanas.'
    },
    {
      id: 2,
      image: '/media/copy2.jpeg',
      type: 'presencial',
      tag: 'PRESENCIAL',
      location: 'Recife, PE',
      quote: 'A estratégia certa mudou completamente minha composição corporal.'
    },
    {
      id: 3,
      image: '/media/copy3.jpeg',
      type: 'online',
      tag: 'ONLINE',
      location: 'São Paulo, SP',
      quote: 'Sem desculpas. Apenas execução e orientação precisa.'
    }
  ];

  return (
    <section id="results" className="py-20 bg-charcoal relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 uppercase tracking-tight">
            Contra Fatos<br />
            <span className="text-gold-500">Não Há Argumentos</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Sem promessas mágicas. Apenas a aplicação rigorosa do método.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {transformations.map((item) => (
            <div key={item.id} className="relative bg-black border border-white/10 rounded-sm overflow-hidden shadow-2xl">
              
              {/* IMAGEM (Sempre colorida e visível) */}
              <div className="relative aspect-[4/5] bg-neutral-900">
                <img 
                  src={item.image}
                  alt="Resultado Team Braga" 
                  className="w-full h-full object-cover"
                />
                
                {/* TAG (Sempre visível) */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm ${
                    item.type === 'online' 
                      ? 'bg-gold-500 text-black' 
                      : 'bg-white text-black'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* OVERLAY DE TEXTO (Sempre visível - Gradiente para leitura) */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-5 pt-16 z-20">
                  <div className="flex items-center gap-2 mb-2 opacity-90">
                    <MapPin size={12} className="text-gold-500" />
                    <span className="text-xs text-white font-mono uppercase">{item.location}</span>
                  </div>
                  <p className="text-white text-sm font-medium italic border-l-2 border-gold-500 pl-3 leading-snug mb-2 drop-shadow-md">
                    "{item.quote}"
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={10} className="fill-gold-500 text-gold-500" />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center text-center gap-6 border-t border-white/5 pt-10">
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase">
            Sua transformação começa na decisão
          </h3>
          
          <a 
            href="#planos"
            className="px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Iniciar Protocolo
          </a>
        </div>

      </div>
    </section>
  );
};

export default Results;