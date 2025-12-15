import React from 'react';
import { Star, MapPin, MessageCircle } from 'lucide-react'; // Adicionei o ícone do Whats se quiser usar

const Results: React.FC = () => {
  // Substitua pelo número real do Braga (DD + Número, apenas números)
  const whatsappNumber = "556899377763"; 
  
  // Mensagem personalizada codificada para URL
  const message = encodeURIComponent("Olá Braga, vi as transformações dos seus alunos e quero começar minha evolução.");
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const transformations = [
    {
      id: 1,
      image: '/media/copy1.jpeg',
      type: 'online',
      tag: '100% ONLINE',
      location: 'Tarauaca, AC',
      quote: 'Braga, mesmo me acompanhando de tão longe olha que resultado incrível que alcançamos.'
    },
    {
      id: 2,
      image: '/media/copy2.jpeg',
      type: 'presencial',
      tag: 'AVALIAÇÃO PRESENCIAL',
      location: 'Rio Branco, Acre',
      quote: 'Olhar para trás e ver essa evolução é surreal. Braga, você foi o catalisador dessa mudança e eu só tenho a agradecer pela parceria.'
    },
    {
      id: 3,
      image: '/media/copy3.jpeg',
      type: 'online',
      tag: '100% ONLINE',
      location: 'Rio Branco, AC',
      quote: 'Se eu tinha alguma dúvida de que era possível ter esse nível de resultado com consultoria online, ela acabou hoje. Você superou todas as minhas expectativas, Braga!'
    }
  ];

  return (
    <section id="feedbacks" className="py-16 bg-charcoal relative">
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
              
              {/* TAG DE MODALIDADE */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest shadow-lg ${
                  item.type === 'online' 
                    ? 'bg-black text-gold-500 border border-gold-500' 
                    : 'bg-white text-black border border-white'
                }`}>
                  {item.tag}
                </span>
              </div>

              {/* INFO SEMPRE VISÍVEL */}
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

        {/* CTA FINAL COM LINK DO WHATSAPP */}
        <div className="flex justify-center">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center px-8 py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-1"
          >
            QUERO TER ESSES RESULTADOS
          </a>
        </div>

      </div>
    </section>
  );
};

export default Results;
