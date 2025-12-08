import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

const Results: React.FC = () => {
  const transformations = [
    {
      id: 1,
      image: '/media/copy1.jpeg',
      type: 'online',
      tag: '100% ONLINE',
      location: 'Lisboa, PT',
      quote: 'Achava que precisava de alguém do meu lado. Estava errado. A análise de vídeo corrigiu erros que 3 anos de personal presencial não viram.'
    },
    {
      id: 2,
      image: '/media/copy2.jpeg',
      type: 'presencial',
      tag: 'PRESENCIAL',
      location: 'Recife, PE',
      quote: 'A avaliação foi no consultório, mas o que mudou meu corpo foi seguir o protocolo diário. A visita é ótima, o método é o que funciona.'
    },
    {
      id: 3,
      image: '/media/copy3.jpeg',
      type: 'online',
      tag: '100% ONLINE',
      location: 'São Paulo, SP',
      quote: 'A distância é irrelevante. O protocolo chegou no meu celular, eu executei na academia do prédio, e o resultado está aí.'
    }
  ];

  return (
    <section id="results" className="py-20 bg-charcoal relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* A RESPOSTA LÓGICA PARA O BOTÃO ANTERIOR */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-6 uppercase">
            A Biologia não muda<br/>
            <span className="text-gold-500">Conforme o CEP</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-black/40 border-l-4 border-gold-500 p-6 text-left">
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
              Você clicou para saber se funciona à distância. A resposta é técnica: <strong>Seu músculo não sabe se eu estou do seu lado ou te vendo por uma tela.</strong> Ele responde a estímulo mecânico e dieta calculada. 
            </p>
            <p className="text-white mt-4 font-bold">
              O Presencial é uma experiência. O Online é a mesma ciência. O resultado é idêntico:
            </p>
          </div>
        </div>

        {/* GRID DE PROVAS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {transformations.map((item) => (
            <div key={item.id} className="relative bg-black rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              
              {/* FOTO */}
              <div className="relative aspect-[4/5] bg-neutral-900">
                <img 
                  src={item.image}
                  alt="Resultado Team Braga" 
                  className="w-full h-full object-cover"
                />
                
                {/* TAG DE MODALIDADE - Clara e visível */}
                <div className="absolute top-0 left-0 w-full p-2 bg-gradient-to-b from-black/80 to-transparent">
                  <span className={`text-[10px] font-bold px-3 py-1 uppercase tracking-widest border ${
                    item.type === 'online' 
                      ? 'bg-gold-500 text-black border-gold-500' 
                      : 'bg-white text-black border-white'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* TEXTO - O que mata a objeção (Sempre visível no mobile) */}
                <div className="absolute bottom-0 left-0 w-full bg-black/95 p-5 border-t border-gold-500/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin size={12} className="text-gold-500" />
                      <span className="text-[10px] text-neutral-400 font-mono uppercase">{item.location}</span>
                    </div>
                    <div className="flex gap-0.5">
                       {[1, 2, 3, 4, 5].map(star => <Star key={star} size={8} className="fill-gold-500 text-gold-500" />)}
                    </div>
                  </div>
                  
                  <p className="text-neutral-200 text-sm font-medium leading-snug">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTEXTO FINAL: "Vi que funciona, e agora?" */}
        <div className="text-center">
          <p className="text-neutral-400 text-sm mb-6">
            O método foi validado em centenas de alunos, presencialmente e online.
          </p>
          <a 
            href="#planos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            <CheckCircle2 size={18} />
            Quero ter esse resultado
          </a>
        </div>

      </div>
    </section>
  );
};

export default Results;