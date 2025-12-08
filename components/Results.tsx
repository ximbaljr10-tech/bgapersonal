import React from 'react';
import { Star, MapPin, CheckCircle2 } from 'lucide-react';

const Results: React.FC = () => {
  const transformations = [
    {
      id: 1,
      image: '/media/copy1.jpeg',
      type: 'online',
      tag: 'ONLINE',
      location: 'Lisboa, PT',
      quote: 'A liberdade de treinar onde eu quiser, com a segurança de ter um protocolo profissional guiando cada passo.'
    },
    {
      id: 2,
      image: '/media/copy2.jpeg',
      type: 'presencial',
      tag: 'PRESENCIAL',
      location: 'Recife, PE',
      quote: 'Não abro mão do contato presencial. A avaliação no consultório traz um nível de detalhe e confiança impagável.'
    },
    {
      id: 3,
      image: '/media/copy3.jpeg',
      type: 'online',
      tag: 'ONLINE',
      location: 'São Paulo, SP',
      quote: 'Mesmo à distância, o rigor técnico é absoluto. O método funciona porque exige disciplina, não importa o CEP.'
    }
  ];

  return (
    <section id="results" className="py-20 bg-charcoal relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO EQUILIBRADO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-tight">
            FORMATOS DIFERENTES<br />
            <span className="text-gold-500">A MESMA EXIGÊNCIA</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-neutral-300 text-lg leading-relaxed">
              A escolha entre Consultoria Online ou Avaliação Presencial é uma questão de 
              <span className="text-white font-bold"> preferência e estilo de vida</span>, não de qualidade.
            </p>
            <p className="text-neutral-400 mt-4 text-base">
              Quem prioriza o contato "olho no olho" e a experiência clínica, vai ao consultório. 
              Quem precisa de liberdade geográfica, vai de digital. 
              Em ambos os casos, a metodologia aplicada no seu corpo é o <span className="text-gold-500 font-medium">Padrão Team Braga</span>.
            </p>
          </div>
        </div>

        {/* GRID DE RESULTADOS MISTOS */}
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
                
                {/* TAG DE MODALIDADE - Diferenciando com elegância */}
                <div className="absolute top-0 left-0 w-full p-2 bg-gradient-to-b from-black/60 to-transparent">
                  <span className={`text-[10px] font-bold px-3 py-1 uppercase tracking-widest border shadow-lg ${
                    item.type === 'online' 
                      ? 'bg-gold-500 text-black border-gold-500' 
                      : 'bg-white text-black border-white'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                {/* TEXTO - SEMPRE VISÍVEL */}
                <div className="absolute bottom-0 left-0 w-full bg-black/95 p-5 border-t border-gold-500/20">
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

        {/* CTA NEUTRO E PODEROSO */}
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-neutral-400 text-sm mb-6 uppercase tracking-widest">
            Presencialmente ou Online: O foco é a sua evolução
          </p>
          <a 
            href="#planos"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-lg hover:shadow-gold-500/20"
          >
            <CheckCircle2 size={18} />
            Definir meu Ponto de Partida
          </a>
        </div>

      </div>
    </section>
  );
};

export default Results;