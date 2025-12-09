import React from 'react';
import { Scan, UploadCloud, ArrowRight, Globe, Maximize, Minimize } from 'lucide-react';

// Componente para o Modal/Expansão (usando useState para simular a lógica)
const PhotoGuideCard: React.FC<{ src: string, title: string, description: string }> = ({ src, title, description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Se expandido, renderiza um modal/overlay simples para demonstrar a funcionalidade
  if (isExpanded) {
    return (
      <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={toggleExpand}>
        <div className="relative bg-neutral-900 rounded-xl max-w-sm w-full h-[90vh] md:h-[80vh] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
          <img
            src={src}
            alt={title}
            className="w-full h-full object-contain"
          />
          <button
            onClick={toggleExpand}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-50"
          >
            <Minimize size={20} />
          </button>
        </div>
      </div>
    );
  }

  // Visualização normal (card)
  return (
    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-neutral-900 border border-white/10 shadow-lg group">
      {/* Imagem (simulada via background ou caminho da media) */}
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02] opacity-80"
      />
      
      {/* Overlay com Texto e Botão de Expandir */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3 md:p-4">
        <h4 className="text-white text-xs md:text-sm font-bold leading-none mb-1">{title}</h4>
        <p className="text-gold-400 text-[10px] md:text-xs font-medium mb-2">{description}</p>
        
        <button
          onClick={toggleExpand}
          className="absolute top-2 right-2 p-1 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
        >
          <Maximize size={12} />
        </button>
      </div>
    </div>
  );
};


const Evaluation: React.FC = () => {
  // Dados das fotos conforme solicitado
  const photoExamples = [
    { src: 'media/perfil-direito.jpg', title: '1. Perfil Direito', description: 'Posição Lateral, braços ao lado.' },
    { src: 'media/perfil-esquerdo.jpg', title: '2. Perfil Esquerdo', description: 'Posição Lateral, braços ao lado.' },
    { src: 'media/frente.jpg', title: '3. Vista Frontal', description: 'Músculos relaxados, posição neutra.' },
    { src: 'media/costas.jpg', title: '4. Vista Posterior', description: 'Músculos relaxados, posição neutra.' },
  ];

  return (
    <section className="py-12 md:py-20 bg-black border-t border-white/5 relative overflow-hidden font-sans">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 1. HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <UploadCloud size={12} />
            Protocolo Digital
          </div>
          <h2 className="text-2xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
            AVALIAÇÃO <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">BIOMECÂNICA ONLINE</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed text-xs md:text-lg max-w-xl mx-auto px-2">
            Minha tecnologia permite analisar sua estrutura corporal e movimento com precisão, com um **guia visual** simples de seguir.
          </p>
        </div>

        {/* 2. CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-12">
          
          {/* VISUAL TECH - O GUIA DE FOTOS */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {photoExamples.map((photo, index) => (
                <PhotoGuideCard 
                  key={index} 
                  src={photo.src} 
                  title={photo.title} 
                  description={photo.description}
                />
              ))}
              <p className="col-span-2 text-center text-neutral-500 text-[10px] mt-2">
                 *Clique na foto para expandir e ver o detalhe.
              </p>
            </div>
          </div>

          {/* TEXTO EXPLICATIVO */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-2 order-2 lg:order-2">
            <div className="pl-4 md:pl-6 border-l-2 border-gold-500 space-y-1">
               <h3 className="text-lg md:text-xl font-bold text-white">Como funciona?</h3>
               <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm">
                  Você utiliza o guia visual acima para tirar as fotos nas poses corretas. Envia as 4 imagens e eu faço toda a análise biomecânica.
               </p>
            </div>
            <div className="grid gap-4 md:gap-6">
               <div className="flex gap-3 md:gap-4">
                  <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-500">
                     <UploadCloud size={18} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm">Envio 100% Digital</h4>
                     <p className="text-neutral-500 text-[11px] md:text-xs mt-1 leading-snug">
                        Suas fotos são o ponto de partida para a minha análise de assimetrias.
                     </p>
                  </div>
               </div>
               <div className="flex gap-3 md:gap-4">
                  <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-500">
                     <Scan size={18} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm">Análise Postural Profunda</h4>
                     <p className="text-neutral-500 text-[11px] md:text-xs mt-1 leading-snug">
                        Identifico encurtamentos e desvios que travam seus ganhos e causam lesões.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 3. CTA FINAL REESTRUTURADO */}
        <div className="flex flex-col items-center justify-center mt-8 md:mt-16 gap-8">
            
            {/* A. BOTÃO PRINCIPAL COM TEXTO ACIMA */}
            <div className="relative w-full max-w-md text-center flex flex-col items-center">
                
                {/* --- NOVO TEXTO DE CONDIÇÃO ESPECIAL --- */}
                <span className="text-gold-500 font-bold text-xs md:text-sm uppercase tracking-widest mb-3 animate-pulse">
                   ⚡ Comece agora com uma condição especial
                </span>

                <a 
                   href="https://wa.me/556881155392?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20minha%20avalia%C3%A7%C3%A3o%20biomec%C3%A2nica%20online%20com%20a%20condi%C3%A7%C3%A3o%20especial." 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative w-full flex items-center justify-center gap-3 bg-gold-500 text-black font-black uppercase tracking-widest py-4 rounded-lg shadow-[0_0_25px_rgba(212,175,55,0.4)] overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]"
                >
                   {/* Efeito Shine */}
                   <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-[shine_3s_infinite]"></div>
                   
                   <span className="relative z-10 text-sm md:text-base">QUERO MINHA AVALIAÇÃO</span>
                   <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <p className="text-neutral-500 text-[10px] mt-2 flex items-center justify-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                   Análise feita pessoalmente pelo Braga
                </p>
            </div>

            {/* B. OBJEÇÃO / PROVA SOCIAL */}
            <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-5 max-w-lg w-full text-center">
                <h4 className="text-white font-bold text-sm mb-1">
                   Ainda em dúvida se funciona à distância?
                </h4>
                <p className="text-neutral-400 text-xs mb-4">
                   Veja transformações reais de alunos acompanhados 100% Online.
                </p>
                
                <a 
                  href="#feedbacks" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-gold-500 transition-colors text-xs font-bold uppercase tracking-wider group border-b border-transparent hover:border-gold-500 pb-0.5"
                >
                  <Globe size={14} />
                  Ver Resultados 100% Online
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

        </div>

      </div>

      <style>{`
         /* Mantive apenas a animação de brilho para o botão, já que a de 'scan' não é mais necessária */
         @keyframes shine {
            0% { left: -100%; }
            20% { left: 100%; }
            100% { left: 100%; }
         }
      `}</style>
    </section>
  );
};

export default Evaluation;
