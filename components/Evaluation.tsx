
import React from 'react';
import { Scan, Smartphone, CheckCircle2, UploadCloud, ArrowUpRight } from 'lucide-react';

const Evaluation: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,0.5)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. HEADER - Foco no Digital */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <Smartphone size={12} />
            Via Aplicativo Exclusivo
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
            AVALIAÇÃO <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">BIOMECÂNICA ONLINE</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed text-sm md:text-lg max-w-2xl mx-auto">
            Esqueça as avaliações presenciais demoradas. Nossa tecnologia permite que eu analise sua estrutura corporal e movimento com <strong className="text-white">precisão clínica</strong>, direto pelo seu celular.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* 2. VISUAL TECH - O "Scanner" no Celular */}
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

          {/* 3. CONTEÚDO EXPLICATIVO */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            <div className="pl-6 border-l-2 border-gold-500 space-y-2">
               <h3 className="text-xl font-bold text-white">Como funciona?</h3>
               <p className="text-neutral-400 text-sm leading-relaxed">
                  Você recebe um <strong>Guia de Poses</strong> no App. Basta posicionar o celular, tirar as 3 fotos (frente, costas e perfil) e fazer o upload.
               </p>
            </div>

            <div className="grid gap-6">
               <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-500">
                     <UploadCloud size={20} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm">Envio 100% Digital</h4>
                     <p className="text-neutral-500 text-xs mt-1">
                        Segurança total dos seus dados. As fotos ficam armazenadas em ambiente criptografado e exclusivo para minha análise.
                     </p>
                  </div>
               </div>

               <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-500">
                     <Scan size={20} />
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-sm">Análise Postural Profunda</h4>
                     <p className="text-neutral-500 text-xs mt-1">
                        Eu uso as imagens para traçar linhas de simetria, identificar encurtamentos musculares e desvios posturais que impedem seus resultados.
                     </p>
                  </div>
               </div>
            </div>

            <div className="pt-4">
               <div className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-gold-500/20 px-4 py-2 rounded-lg border border-gold-500/30">
                  <CheckCircle2 size={14} className="text-gold-500" />
                  Mesma precisão do presencial
               </div>
            </div>

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
      `}</style>
    </section>
  );
};

export default Evaluation;
