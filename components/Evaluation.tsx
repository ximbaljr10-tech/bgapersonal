import React, { useState } from 'react';
import { CheckCircle2, UploadCloud, ArrowRight, Globe, Maximize2, X } from 'lucide-react';

const Evaluation: React.FC = () => {
  // Estado para controlar qual imagem está expandida (null se nenhuma)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Array com os dados das fotos para facilitar o map
  // IMPORTANTE: Certifique-se que as imagens na pasta /media/ são fotos altas (retrato)
  const photoExamples = [
    { src: '/media/frente.jpg', label: 'FRENTE' },
    { src: '/media/costa.jpg', label: 'COSTAS' },
    { src: '/media/perfildireito.jpg', label: 'PERFIL DIR.' },
    { src: '/media/perfilesquerdo.jpg', label: 'PERFIL ESQ.' },
  ];

  return (
    <section className="py-12 md:py-20 bg-black border-t border-white/5 relative overflow-hidden font-sans">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 1. HEADER */}
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

        {/* 2. CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-12">
          
          {/* VISUAL TECH - GRID DE FOTOS */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            
            {/* Grid Container - 2 colunas, largura controlada para não ficar gigante */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-[360px]">
                {photoExamples.map((photo, index) => (
                    <div 
                        key={index} 
                        // MUDANÇA AQUI: aspect-[9/16] é bem mais alto (formato de tela de celular em pé) para não cortar cabeça/pés
                        className="relative aspect-[9/16] rounded-xl overflow-hidden border border-white/10 bg-neutral-950 cursor-pointer shadow-lg transition-all hover:border-gold-500/50 hover:shadow-gold-500/10"
                        onClick={() => setSelectedImage(photo.src)}
                    >
                        {/* Imagem */}
                        <img 
                            src={photo.src} 
                            alt={`Exemplo ${photo.label}`} 
                            // object-cover garante que preenche tudo, mas o aspect-9/16 garante que é alto o suficiente
                            className="w-full h-full object-cover opacity-70 transition-opacity duration-300 hover:opacity-100"
                        />
                        
                        {/* Overlay Gradiente para facilitar leitura */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none"></div>

                        {/* NOVO: Indicador Central de Expandir (Sempre visível para mobile) */}
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none opacity-80">
                           <div className="bg-neutral-900/80 backdrop-blur-md p-2 rounded-full border border-gold-500/30 text-gold-500 mb-1 shadow-lg">
                              <Maximize2 size={16} />
                           </div>
                           <span className="text-[8px] text-white font-bold uppercase tracking-widest bg-neutral-900/80 px-1.5 py-0.5 rounded-sm border border-white/5">
                              Expandir
                           </span>
                        </div>

                        {/* Label inferior */}
                        <div className="absolute bottom-2 left-2 right-2 flex justify-center pointer-events-none z-30">
                            <span className="text-gold-400 text-[9px] font-bold tracking-[0.15em] bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-gold-500/10 w-full text-center">
                                {photo.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorativo de fundo atrás das fotos */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold-500/5 blur-[50px] rounded-full pointer-events-none"></div>
          </div>

          {/* TEXTO EXPLICATIVO (Mantido igual) */}
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

        {/* 3. CTA FINAL (Mantido igual) */}
        <div className="flex flex-col items-center justify-center mt-8 md:mt-16 gap-8">
            <div className="relative w-full max-w-md text-center flex flex-col items-center">
                <span className="text-gold-500 font-bold text-xs md:text-sm uppercase tracking-widest mb-3 animate-pulse">
                   ⚡ Comece agora com uma condição especial
                </span>

                <a 
                   href="https://wa.me/556881155392?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20minha%20avalia%C3%A7%C3%A3o%20biomec%C3%A2nica%20online%20com%20a%20condi%C3%A7%C3%A3o%20especial." 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group relative w-full flex items-center justify-center gap-3 bg-gold-500 text-black font-black uppercase tracking-widest py-4 rounded-lg shadow-[0_0_25px_rgba(212,175,55,0.4)] overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(212,175,55,0.6)]"
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

      {/* --- MODAL / LIGHTBOX (EXPANDIR IMAGEM) --- */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            {/* Botão Fechar */}
            <button 
                className="absolute top-4 right-4 text-white/70 hover:text-gold-500 transition-colors bg-white/5 p-2 rounded-full border border-white/10 z-10"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
                <X size={24} />
            </button>
            
            {/* Imagem Expandida */}
            <img 
                src={selectedImage} 
                alt="Visualização ampliada" 
                // object-contain garante que a imagem inteira apareça na tela cheia sem cortes
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} // Evita fechar se clicar na imagem
            />
            
            <p className="absolute bottom-8 text-white/50 text-xs font-bold uppercase tracking-widest pointer-events-none animate-pulse">
                Toque fora para fechar
            </p>
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
