import React from 'react';
import { Star, Smartphone, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

const MethodologySection: React.FC = () => {
  // Dados simulados misturando online e presencial para provar que ambos funcionam
  const transformations = [
    {
      id: 1,
      type: 'online',
      label: '100% Online',
      quote: 'Moro na Irlanda e segui o protocolo à risca. A distância não interferiu em nada na cobrança e no resultado.',
      name: 'Carlos M.'
    },
    {
      id: 2,
      type: 'presencial',
      label: 'Presencial VIP',
      quote: 'A avaliação biomecânica no consultório foi um divisor de águas para corrigir minha postura nos treinos.',
      name: 'André S.'
    },
    {
      id: 3,
      type: 'online',
      label: '100% Online',
      quote: 'Eu achava que precisava de alguém do meu lado, mas a análise por vídeo do Braga é mais detalhada que muito personal presencial.',
      name: 'Felipe J.'
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Decorativo Sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
            Defina seu <span className="text-gold-500">Ponto de Partida</span>
          </h2>
          <p className="text-neutral-300 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            A excelência técnica do Treinador Braga está disponível em duas modalidades. 
            Escolha como deseja realizar sua avaliação inicial para começarmos o seu projeto.
          </p>
        </div>

        {/* --- CARDS DE ESCOLHA (ONLINE VS PRESENCIAL) --- */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Card 1: Online (Destaque para Praticidade) */}
          <div className="bg-neutral-900/80 border border-neutral-800 p-8 rounded-sm hover:border-gold-500/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-widest">
              A mais escolhida
            </div>
            
            <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-gold-500 group-hover:scale-110 transition-transform">
              <Smartphone size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Avaliação Digital</h3>
            <p className="text-neutral-400 mb-6 min-h-[80px]">
              Ideal para quem quer praticidade e liberdade geográfica. Você envia fotos e vídeos guiados, e eu realizo a análise biomecânica e postural à distância com precisão profissional.
            </p>
            
            <button className="flex items-center gap-2 text-gold-500 font-bold uppercase text-sm tracking-wider hover:text-white transition-colors">
              Ver como funciona <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 2: Presencial (Destaque para Experiência) */}
          <div className="bg-neutral-900/80 border border-neutral-800 p-8 rounded-sm hover:border-gold-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-6 text-white group-hover:text-gold-500 transition-colors">
              <Building2 size={28} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Avaliação em Consultório</h3>
            <p className="text-neutral-400 mb-6 min-h-[80px]">
              Uma experiência clínica completa. Você agenda um horário no meu consultório para realizarmos a avaliação física utilizando equipamentos de alta tecnologia e análise corporal ao vivo.
            </p>
            
            <button className="flex items-center gap-2 text-white font-bold uppercase text-sm tracking-wider hover:text-gold-500 transition-colors">
              Ver detalhes presenciais <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* --- DIVISOR "A PROVA REAL" --- */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 bg-charcoal text-lg font-medium text-white">
              Ainda em dúvida se funciona à distância?
            </span>
          </div>
          <p className="mt-4 text-neutral-400 text-sm">
            O método é o mesmo. A exigência é a mesma. O resultado é inevitável.
          </p>
        </div>

        {/* --- GRID DE RESULTADOS HÍBRIDOS --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item) => (
            <div key={item.id} className="bg-black border border-white/5 rounded-sm hover:border-gold-500/30 transition-colors flex flex-col h-full">
              
              {/* Área da Imagem */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-800 group">
                <img 
                  src={`https://picsum.photos/400/500?random=${item.id + 10}`} 
                  alt="Antes e Depois Team Braga" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* TAG que diferencia o método, mas mantém o estilo visual igual */}
                <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg ${
                  item.type === 'online' 
                    ? 'bg-gold-500 text-black' 
                    : 'bg-white text-black'
                }`}>
                  {item.label}
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 pt-12">
                   <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={12} className="fill-gold-500 text-gold-500" />)}
                  </div>
                </div>
              </div>

              {/* Área do Texto */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-neutral-300 text-sm italic mb-4 leading-relaxed">"{item.quote}"</p>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <CheckCircle2 size={16} className="text-gold-500" />
                  <span className="text-white text-sm font-bold uppercase">{item.name}</span>
                  <span className="text-neutral-500 text-xs ml-auto">Team Braga</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-16 text-center">
           <a 
            href="#contato"
            className="inline-block border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black px-10 py-4 font-bold uppercase tracking-widest transition-all duration-300"
          >
            Ver Resultados 100% Online
          </a>
        </div>

      </div>
    </section>
  );
};

export default MethodologySection;