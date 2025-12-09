import React from 'react';
import { Ruler, Activity, Eye, CalendarCheck, Smartphone, MapPin } from 'lucide-react';

const Presencial: React.FC = () => {
  return (
    <section id="presencial" className="relative py-24 bg-richblack overflow-hidden">
      
      {/* 1. ATMOSPHERE & LIGHTING */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none"></div>
      
      {/* 2. BACKGROUND TYPOGRAPHY (Watermark) */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h2 className="text-[150px] md:text-[300px] font-heading font-black text-white whitespace-nowrap leading-none text-center select-none">
          HÍBRIDA
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* TEXT CONTENT (Lado Esquerdo) */}
          <div className="w-full lg:w-1/2">
            
            {/* Tag de Luxo */}
            <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/5 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
               <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shadow-[0_0_10px_#D4AF37]"></div>
               <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Avaliação Presencial</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-[0.9] drop-shadow-2xl">
              PRECISÃO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700">CIRÚRGICA.</span>
            </h2>
            
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-10 border-l-4 border-gold-500 pl-6 bg-gradient-to-r from-white/5 to-transparent py-2 rounded-r-lg">
              Esta modalidade une o melhor dos dois mundos: a inteligência do nosso aplicativo de treino com a precisão milimétrica da coleta de dados feita pessoalmente por mim.
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Item 1 */}
               <div className="group bg-neutral-900/80 border border-white/5 p-5 rounded-xl hover:border-gold-500/50 transition-all duration-300 hover:bg-neutral-800/80">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500 group-hover:scale-110 transition-transform">
                        <Ruler size={20} />
                     </div>
                     <h4 className="text-white font-bold uppercase text-xs tracking-wider">Adipometria + Perimetria</h4>
                  </div>
                  <p className="text-neutral-500 text-[11px] leading-snug group-hover:text-neutral-300">Medição exata da espessura das dobras cutâneas feita por mim.</p>
               </div>

               {/* Item 3 */}
               <div className="group bg-neutral-900/80 border border-white/5 p-5 rounded-xl hover:border-gold-500/50 transition-all duration-300 hover:bg-neutral-800/80">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500 group-hover:scale-110 transition-transform">
                        <Eye size={20} />
                     </div>
                     <h4 className="text-white font-bold uppercase text-xs tracking-wider">Olho no Olho</h4>
                  </div>
                  <p className="text-neutral-500 text-[11px] leading-snug group-hover:text-neutral-300">Análise postural ao vivo para identificar desvios invisíveis.</p>
               </div>

               {/* Item 4 */}
               <div className="group bg-neutral-900/80 border border-white/5 p-5 rounded-xl hover:border-gold-500/50 transition-all duration-300 hover:bg-neutral-800/80">
                  <div className="flex items-center gap-3 mb-2">
                     <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500 group-hover:scale-110 transition-transform">
                        <Smartphone size={20} />
                     </div>
                     <h4 className="text-white font-bold uppercase text-xs tracking-wider">App Premium</h4>
                  </div>
                  <p className="text-neutral-500 text-[11px] leading-snug group-hover:text-neutral-300">Seu planejamento completo disponível na palma da sua mão 24h por dia.</p>
               </div>
            </div>
            {/* FIM DA COLUNA DE TEXTO - BOTÃO REMOVIDO DAQUI */}
          </div>

          {/* VISUAL SIDE (Lado Direito) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
             
             {/* Wrapper da Imagem */}
             <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 group">
               
               {/* Image Source Atualizado */}
               <img 
                  src="/media/foto1.png" 
                  alt="Consultório Premium" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
               />

               {/* Floating "Notification" Badge */}
               <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-xl border border-gold-500/30 p-3 rounded-lg shadow-2xl flex items-center justify-between z-20">
                  <div>
                     <div className="flex items-center gap-1.5 mb-0.5">
                        <MapPin size={10} className="text-gold-500" />
                        <span className="text-gold-500 text-[9px] font-bold uppercase tracking-wider">Rio Branco - Acre</span>
                     </div>
                     <p className="text-white font-bold text-sm">AGENDA ABERTA</p>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-green-500/50 flex items-center justify-center bg-green-500/10 animate-pulse">
                     <div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
                  </div>
               </div>

               {/* Decorative Elements (Cantoneiras) */}
               <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold-500/30 rounded-tr-3xl pointer-events-none"></div>
               <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold-500/30 rounded-bl-3xl pointer-events-none"></div>
             </div>

             {/* CTA BUTTON - LINK ATUALIZADO */}
             <a 
              href="https://wa.me/556881155392?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20presencial%20no%20consult%C3%B3rio."
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-black uppercase tracking-widest rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1"
            >
              <CalendarCheck size={20} strokeWidth={2.5} />
              <span>Agendar no Consultório</span>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Presencial;