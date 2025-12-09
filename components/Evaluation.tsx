import React, { useState } from 'react';
import { Scan, Smartphone, CheckCircle2, UploadCloud, ArrowRight, Globe, Maximize2, Minimize2 } from 'lucide-react';

// Um componente auxiliar para exibir as fotos com a funcionalidade de zoom/expansão
interface ImageCardProps {
    src: string;
    alt: string;
    label: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, label }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Função para toggle (expandir/desexpandir)
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // O div 'fixed' com o fundo escuro (dimmer) e a imagem expandida (modal)
    // Só é renderizado se isExpanded for true.
    if (isExpanded) {
        return (
            <div 
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
                onClick={toggleExpand} // Clicar em qualquer lugar fecha
            >
                <div className="relative max-w-full max-h-full">
                    <img 
                        src={src} 
                        alt={alt} 
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
                    />
                    <div className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/80 transition">
                        <Minimize2 size={24} />
                    </div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/70 px-4 py-2 rounded-lg text-sm font-bold">
                        {label} - Clique para fechar
                    </div>
                </div>
            </div>
        );
    }

    // A view normal do card no grid
    return (
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg shadow-lg border border-white/10 group">
            {/* Imagem (Portrait) */}
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay com Label e Botão de Expandir */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-3 md:p-4">
                <div className="flex justify-between items-center">
                    <span className="text-white text-xs md:text-sm font-bold uppercase">{label}</span>
                    <button 
                        onClick={toggleExpand}
                        className="text-gold-500 bg-black/50 p-1 rounded-full hover:bg-gold-500 hover:text-black transition-colors"
                        aria-label={`Expandir foto ${label}`}
                    >
                        <Maximize2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};


const Evaluation: React.FC = () => {
  // Lista de imagens para o grid
  const photoExamples = [
    { src: '/media/perfilesquerdo.jpg', alt: 'Perfil Esquerdo', label: 'PERFIL ESQUERDO' },
    { src: '/media/perfilfrente.jpg', alt: 'Perfil Direito', label: 'PERFIL DIREITO' }, // Mantendo 'perfilfrente' para ter 4 fotos
    { src: '/media/frente.jpg', alt: 'Vista Frontal', label: 'FRENTE' },
    { src: '/media/costa.jpg', alt: 'Vista Posterior', label: 'COSTAS' },
  ];

  return (
    <section className="py-12 md:py-20 bg-black border-t border-white/5 relative overflow-hidden font-sans">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 1. HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Smartphone size={12} />
            Via App Exclusivo
          </div>
          <h2 className="text-2xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
            PROTOCOLO <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">DE FOTOS</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed text-xs md:text-lg max-w-xl mx-auto px-2">
            Minha tecnologia permite analisar sua estrutura corporal e movimento com precisão, direto pelo seu celular.
          </p>
        </div>

        {/* 2. CONTEÚDO PRINCIPAL (COM GRID DE FOTOS) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-20 mb-12">
          
          {/* VISUAL TECH - O GRID DE FOTOS SUBSTITUI O CELULAR */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* GRID DE FOTOS (2 por linha, 4 fotos total) */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {photoExamples.map((photo, index) => (
                    <ImageCard 
                        key={index}
                        src={photo.src}
                        alt={photo.alt}
                        label={photo.label}
                    />
                ))}
            </div>
          </div>

          {/* TEXTO EXPLICATIVO */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-2 mt-8 lg:mt-0">
            <div className="pl-4 md:pl-6 border-l-2 border-gold-500 space-y-1">
               <h3 className="text-lg md:text-xl font-bold text-white">Como funciona?</h3>
               <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm">
                  Você recebe um <strong>Guia de Poses e Enquadramento</strong> no App. Tira as fotos exatamente como nos exemplos acima, envia e eu faço toda a análise.
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
                        Suas fotos devem ser em <strong>formato retrato</strong> e com a melhor iluminação possível para garantir a precisão.
                     </p>
                  </div>
               </div>
               <div className="flex gap-3 md:gap-4">
                  <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-500">
                     <Scan size={18} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm">Análise Postural</h4>
                     <p className="text-neutral-500 text-[11px] md:text-xs mt-1 leading-snug">
                        Com base nas 4 vistas, identifico desvios, assimetrias e encurtamentos que travam seus resultados.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 3. CTA FINAL REESTRUTURADO (Sem alterações aqui) */}
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
         @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
         }
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
