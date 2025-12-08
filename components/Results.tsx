import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

const Results: React.FC = () => {
  const transformations = [
    {
      id: 1,
      image: '/media/copy1.jpeg',
      type: '100% Online',
      tag: 'ONLINE', // Simples e direto
      location: 'Lisboa, PT',
      quote: 'Liberdade geográfica com rigor técnico. Treino onde quero, com a supervisão de elite.'
    },
    {
      id: 2,
      image: '/media/copy2.jpeg',
      type: ' Avaliação Presencial',
      tag: 'PRESENCIAL', // Destacando a experiência
      location: 'Recife, PE',
      quote: 'A experiência clínica no consultório trouxe o ajuste fino que meu corpo precisava.'
    },
    {
      id: 3,
      image: '/media/copy3.jpeg',
      type: '100% Online',
      tag: 'ONLINE',
      location: 'São Paulo, SP',
      quote: 'O protocolo chega no app e eu executo. Sem burocracia, apenas resultado.'
    }
  ];

  return (
    <section id="results" className="py-16 bg-charcoal relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO CURTO E DIRETO */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white uppercase tracking-tight leading-tight">
            O Método é <span className="text-gold-500">Soberano</span>
          </h2>
          <p className="text-neutral-400 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Não importa se é no meu consultório ou à distância. O que transforma seu corpo é a estratégia, não a localização.
          </p>
        </div>

        {/* GRID MOBILE FIRST */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {transformations.map((item) => (
            <div key={item.id} className="relative bg-black rounded-sm overflow-hidden border border-white/10 shadow-2xl h-[400px] md:h-auto">
              
              {/* FOTO */}
              <img 
                src={item.image}
                alt="Resultado Team Braga" 
                className="w-full h-full object-cover"
              />
              
              {/* TAG DE MODALIDADE (Sem confusão) */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-lg ${
                  item.type === 'online' 
                    ? 'bg-black text-gold-500 border border-gold-500' // Contraste alto pro Online
                    : 'bg-white text-black border border-white' // Clean pro Presencial
                }`}>
                  {item.tag}
                </span>
              </div>

              {/* INFO SEMPRE VISÍVEL (Legibilidade perfeita no mobile) */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/90 to-transparent p-5 pt-16 z-20">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={12} className="text-gold-500" />
                  <span className="text-[10px] text-neutral-300 font-mono uppercase">{item.location}</span>
                </div>
                
                <p className="text-white text-sm font-medium leading-snug drop-shadow-md">
                  "{item.quote}"
                </p>
                
                <div className="flex gap-0.5 mt-3">
                   {[1, 2, 3, 4, 5].map(star => <Star key={star} size={10} className="fill-gold-500 text-gold-500" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="flex justify-center">
          <a 
            href="#planos"
            className="w-full md:w-auto text-center px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Escolher meu Formato
          </a>
        </div>

      </div>
    </section>
  );
};

export default Results;