
import React from 'react';
import { Ruler, Activity, Eye, CalendarCheck, Smartphone } from 'lucide-react';

const Presencial: React.FC = () => {
  return (
    <section id="presencial" className="relative py-24 bg-charcoal overflow-hidden">
      {/* Background Image Darkened */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&w=1200&auto=format&fit=crop" 
          alt="Consultório Dark" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
               <span className="w-12 h-[2px] bg-gold-500"></span>
               <span className="text-gold-500 font-bold tracking-[0.3em] uppercase text-xs">Avaliação Presencial</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-none">
              PRECISÃO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">CIRÚRGICA.</span>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6">
              Esta modalidade une o melhor dos dois mundos: a inteligência do nosso aplicativo de treino com a precisão milimétrica da coleta de dados feita pessoalmente por mim.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Feature Box 1 */}
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                  <Ruler className="text-gold-500 mb-3 w-6 h-6" />
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Adipometria Clínica</h4>
                  <p className="text-neutral-500 text-xs">Medição exata da espessura das dobras cutâneas feita por mim.</p>
               </div>

               {/* Feature Box 2 */}
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                  <Activity className="text-gold-500 mb-3 w-6 h-6" />
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Bioimpedância</h4>
                  <p className="text-neutral-500 text-xs">Análise tecnológica da sua composição corporal (água, músculo, gordura).</p>
               </div>
               
               {/* Feature Box 3 */}
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                  <Eye className="text-gold-500 mb-3 w-6 h-6" />
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Olho no Olho</h4>
                  <p className="text-neutral-500 text-xs">Análise postural ao vivo para identificar desvios invisíveis.</p>
               </div>

               {/* Feature Box 4 */}
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                  <Smartphone className="text-gold-500 mb-3 w-6 h-6" />
                  <h4 className="text-white font-bold uppercase text-sm mb-1">Acesso Premium ao App</h4>
                  <p className="text-neutral-500 text-xs">Seu planejamento completo disponível na palma da sua mão 24h por dia.</p>
               </div>
            </div>

            <div className="mt-10">
               <a 
                href="https://wa.me/5599999999999"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-500 text-black font-black uppercase tracking-widest rounded-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <CalendarCheck size={20} />
                Agendar Avaliação
              </a>
            </div>
          </div>

          {/* Visual Side - Mobile First Aesthetic */}
          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
             <div className="relative aspect-[4/5] md:aspect-square bg-neutral-900 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <img 
                   src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Avaliação Física"
                   className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* HUD Overlay Element */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border-l-4 border-gold-500 rounded-r-lg">
                   <p className="text-gold-500 text-[10px] font-bold uppercase tracking-widest mb-1">Status</p>
                   <p className="text-white font-heading font-bold text-xl">AGENDA ABERTA</p>
                   <p className="text-neutral-400 text-xs mt-1">Vagas limitadas para avaliação presencial este mês.</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Presencial;
