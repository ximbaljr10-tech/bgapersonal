import React from 'react';
import { Star, Globe, MapPin, Check } from 'lucide-react';

const Results: React.FC = () => {
  const transformations = [
    {
      id: 1,
      type: 'online',
      tag: 'PROTOCOLO DIGITAL',
      sub: 'Aluno em Lisboa, Portugal',
      quote: 'Eu achava que precisava de alguém do meu lado contando repetições. O Braga me provou que eu precisava de planejamento, não de babá.'
    },
    {
      id: 2,
      type: 'presencial',
      tag: 'AVALIAÇÃO PRESENCIAL',
      sub: 'Aluno em Recife, PE',
      quote: 'Fiz a avaliação no consultório, mas a execução do plano foi autônoma. O resultado veio da estratégia, não apenas da visita.'
    },
    {
      id: 3,
      type: 'online',
      tag: 'PROTOCOLO DIGITAL',
      sub: 'Aluno em São Paulo, SP',
      quote: 'A correção por vídeo foi mais técnica do que os personais que tive presencialmente. A distância não escondeu meus erros.'
    }
  ];

  return (
    <section id="results" className="py-24 bg-charcoal relative">
      {/* Background discreto e técnico */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CABEÇALHO "ENGENHARIA SOCIAL" */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            O RESULTADO É A ÚNICA <span className="text-gold-500">CONSTANTE</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            É natural pensar que estar presencialmente gera mais resultado. Mas olhe as fotos abaixo. 
            <span className="text-white font-medium block mt-2">
              Você consegue distinguir quem foi avaliado no meu consultório e quem foi avaliado pelo computador?
            </span>
            A metodologia anula a distância. O que muda é apenas a logística.
          </p>
        </div>

        {/* GRID DE RESULTADOS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {transformations.map((item) => (
            <div key={item.id} className="group relative bg-black border border-neutral-800 hover:border-gold-500/40 transition-all duration-500 rounded-sm flex flex-col">
              
              {/* IMAGEM */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img 
                  src={`https://picsum.photos/400/500?random=${item.id + 20}`} 
                  alt="Transformação Team Braga" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* A ETIQUETA DA VERDADE */}
                {/* Visualmente idênticas para mostrar que têm o mesmo peso */}
                <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm border-l-2 border-gold-500 px-3 py-1">
                  <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest block mb-0.5">
                    Modalidade
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wide">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* CONTEXTO PSICOLÓGICO */}
              <div className="p-6 flex-grow flex flex-col justify-between bg-gradient-to-b from-black to-neutral-900/50">
                <div>
                  <div className="flex items-center gap-2 mb-3 opacity-60">
                    {item.type === 'online' ? <Globe size={14} className="text-gold-500"/> : <MapPin size={14} className="text-gold-500"/>}
                    <span className="text-xs text-white font-medium uppercase tracking-wider">{item.sub}</span>
                  </div>
                  
                  <p className="text-neutral-300 text-sm italic leading-relaxed border-l-2 border-neutral-700 pl-3">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} className="fill-gold-500 text-gold-500" />)}
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">Resultado Validado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA "LÓGICA" */}
        <div className="bg-neutral-900 border border-white/5 p-8 md:p-10 rounded-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">
              A biologia do seu corpo não sabe onde você mora.
            </h3>
            <p className="text-neutral-400 text-sm">
              Ela responde a estímulos corretos. Seja com minha avaliação presencial ou digital, eu garanto o estímulo. Você garante a execução.
            </p>
          </div>
          
          <a 
            href="#planos"
            className="px-8 py-3 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase text-sm tracking-widest transition-colors shrink-0"
          >
            Escolher meu método
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;