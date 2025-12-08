import React from 'react';
import { Scan, Smartphone, CheckCircle2, UploadCloud, ArrowRight, Smartphone as SmartphoneIcon, Globe } from 'lucide-react';

const Evaluation: React.FC = () => {
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
            AVALIAÇÃO <br className="md:hidden"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">BIOMECÂNICA ONLINE</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed text-xs md:text-lg max-w-xl mx-auto px-2">
            Minha tecnologia permite analisar sua estrutura corporal e movimento com precisão, direto pelo seu celular.
          </p>
        </div>

        {/* 2. CONTEÚDO PRINCIPAL */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20 mb-12">
          
          {/* VISUAL TECH - O "Scanner" no Celular (RESTAURADO) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-[280px] md:w-[320px] h-[550px] bg-neutral-900 border-[8px] border-neutral-800 rounded-[3rem] shadow-2xl shadow-gold-500/20 overflow-hidden">
               {/* Phone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-xl z-20"></div>
               
               {/* Screen Content */}
               <div className="relative w-full h-full bg-neutral-950 flex flex-col p-6 pt-12">
                  <div className="flex justify-between items-center mb-6">
                     <span className="text-white text-xs font-bold">Protocolo Digital</span>
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>

                  {/* Silhouette Container */}
                  <div className="relative flex-1 bg-neutral-900 rounded-xl border border-white/10 overflow-hidden mb-4">
                     {/* Fake User Silhouette */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <Scan size={120} className="text-white" />
                     </div>
                     
                     {/* Scanning Line Animation */}
                     <div className="absolute left-0 w-full h-[2px] bg-gold-500 shadow-[0_0_15px_#D4AF37] animate-[scan_3s_ease-in-out_infinite] z-10"></div>
                     
                     {/* Data Overlay */}
                     <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex justify-between text-[10px] text-gold-500 font-mono mb-1">
                           <span>SIMETRIA</span>
                           <span>ANALISANDO...</span>
                        </div>
                        <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                           <div className="h-full bg-gold-500 w-2/3 animate-[revealLoop_3s_infinite]"></div>
                        </div>
                     </div>
                  </div>

                  {/* Upload Status */}
                  <div className="space-y-3">
                     <div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-gold-500/30">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                              <span className="text-xs font-bold">1</span>
                           </div>
                           <div className="text-xs">
                              <p className="text-white font-bold">Foto Frente</p>
                              <p className="text-gold-500 text-[10px]">Upload Concluído</p>
                           </div>
                        </div>
                        <CheckCircle2 size={16} className="text-gold-500" />
                     </div>

                     <div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-gold-500/30">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                              <span className="text-xs font-bold">2</span>
                           </div>
                           <div className="text-xs">
                              <p className="text-white font-bold">Foto Perfil</p>
                              <p className="text-gold-500 text-[10px]">Upload Concluído</p>
                           </div>
                        </div>
                        <CheckCircle2 size={16} className="text-gold-500" />
                     </div>

                     <div className="flex items-center justify-between p-3 bg-neutral-900 rounded-lg border border-gold-500/30">
                        <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                              <span className="text-xs font-bold">3</span>
                           </div>
                           <div className="text-xs">
                              <p className="text-white font-bold">Foto Costas</p>
                              <p className="text-gold-500 text-[10px]">Upload Concluído</p>
                           </div>
                        </div>
                        <CheckCircle2 size={16} className="text-gold-500" />
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* TEXTO EXPLICATIVO */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 px-2">
            <div className="pl-4 md:pl-6 border-l-2 border-gold-500 space-y-1">
               <h3 className="text-lg md:text-xl font-bold text-white">Como funciona?</h3>
               <p className="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm">
                  Você recebe um <strong>Guia de Poses</strong> no App. Tira as fotos, envia e eu faço toda a análise.
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
                        Seus dados e fotos ficam em ambiente seguro e criptografado.
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
                        Identifico encurtamentos e desvios que travam seus ganhos.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 3. CTA FINAL REESTRUTURADO (Separado e Hierarquizado) */}
        <div className="flex flex-col items-center justify-center mt-8 md:mt-16 gap-8">
            
            {/* A. BOTÃO PRINCIPAL (Destaque Máximo) */}
            <div className="relative w-full max-w-md text-center">
                <a 
                    href="https://wa.me/5599999999999" 
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

            {/* B. OBJEÇÃO / PROVA SOCIAL (Separado, estilo secundário) */}
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