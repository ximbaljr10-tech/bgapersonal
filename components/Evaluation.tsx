import React, { useState } from 'react';
import { CheckCircle2, UploadCloud, ArrowRight, Globe, Maximize2, X } from 'lucide-react';

const Evaluation: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photoExamples = [
    { src: '/media/frente.jpg', label: 'FRENTE' },
    { src: '/media/costa.jpg', label: 'COSTAS' },
    { src: '/media/Perfildireito.jpg', label: 'PERFIL DIR.' },
    { src: '/media/perfilesquerdo.jpg', label: 'PERFIL ESQ.' },
  ];

  return (
    <section className="py-12 md:py-20 bg-black border-t border-white/5 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 size={12} />
            Protocolo de Avaliação
          </div>
          <h2 className="text-2xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
            AVALIAÇÃO <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">BIOMECÂNICA ONLINE</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed text-xs md:text-lg max-w-xl mx-auto px-2">
            Minha tecnologia permite analisar sua estrutura corporal e movimento com precisão. Basta seguir o guia de fotos abaixo.
          </p>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-12">
          
          {/* GRID DE FOTOS - MOBILE FIRST */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            
            {/* grid-cols-2: Garante 2 fotos por linha no Mobile 
               max-w-[360px]: Garante que o tamanho das fotos seja ideal para visualização
            */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-[360px]">
                {photoExamples.map((photo, index) => (
                    <div 
                        key={index} 
                        // aspect-[9/16]: Formato vertical (Retrato) para não cortar cabeça/pés
                        className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer shadow-lg transition-all active:scale-95 md:hover:border-gold-500/50 md:hover:shadow-gold-500/10 group"
                        onClick={() => setSelectedImage(photo.src)}
                    >
                        {/* Imagem */}
                        <img 
                            src={photo.src} 
                            alt={`Exemplo ${photo.label}`} 
                            className="w-full h-full object-cover opacity-80 md:group-hover:opacity-100 transition-opacity"
                        />
                        
                        {/* Ícone de Expandir (Sempre visível, discreto) */}
                        <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded-full text-white/90 border border-white/10 md:group-hover:bg-gold-500 md:group-hover:text-black transition-colors">
                           <Maximize2 size={12} />
                        </div>

                        {/* Label inferior */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent flex justify-center pointer-events-none">
                            <span className="text-gold-400 text-[9px] font-bold tracking-[0.15em] uppercase shadow-black drop-shadow-md">
                                {photo.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Fundo Decorativo */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold-500/5 blur-[50px] rounded-full pointer-events-none"></div>
          </div>

          {/* TEXTO EXPLICATIVO */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-2">
            <div className="pl-4 md:pl-6 border-l-2 border-gold-500 space-y-1">
               <h3 className="text-lg md:text-xl font-bold text-white">Guia de Fotos Simples</h3>
               <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm">
                  Você não precisa de equipamentos profissionais. Basta pedir para alguém tirar essas 4 fotos em um fundo neutro.
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
                        Seus dados e fotos ficam em ambiente seguro e criptografado para análise do Braga.
                     </p>
                  </div>
               </div>
               
               <div className="flex gap-3 md:gap-4">
                  <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-500">
                     <CheckCircle2 size={18} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm">Correção Postural</h4>
                     <p className="text-neutral-500 text-[11px] md:text-xs mt-1 leading-snug">
                        Com essas fotos, identifico exatamente onde sua postura está travando seus resultados.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="flex flex-col items-center justify-center mt-8 md:mt-16 gap-8">
            <div className="relative w-full max-w-md text-center flex flex-col items-center">
                <span className="text-gold-500 font-bold text-xs md:text-sm uppercase tracking-widest mb-3 animate-pulse">
                   ⚡ Comece agora com uma condição especial
                </span>

                <a 
                   href="https://wa.me/556881155392?text=Gostaria%20de%20garantir%20o%20plano%20on-line%20e%20mandar%20as%20fotos%20para%20avalia%C3%A7%C3%A3o%20com%20garantindo%20a%20condi%C3%A7%C3%A3o%20especial."
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative w-full flex items-center justify-center gap-3 bg-gold-500 text-black font-black uppercase tracking-widest py-4 rounded-lg shadow-[0_0_25px_rgba(212,175,55,0.4)] overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] active:scale-95"
                >
                   <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] animate-[shine_3s_infinite]"></div>
                   <span className="relative z-10 text-sm md:text-base">QUERO MINHA AVALIAÇÃO</span>
                   <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <p className="text-neutral-500 text-[10px] mt-2 flex items-center justify-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                   Análise feita pessoalmente pelo Braga
                </p>
            </div>

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

      {/* MODAL / LIGHTBOX */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-4 right-4 text-white/70 hover:text-gold-500 transition-colors bg-white/5 p-3 rounded-full border border-white/10 z-10 active:bg-white/20"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
                <X size={24} />
            </button>
            <img 
                src={selectedImage} 
                alt="Visualização ampliada" 
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}

      <style>{`
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
