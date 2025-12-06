import React from 'react';
import { ScanFace, Smartphone, Video, Camera } from 'lucide-react';

const Evaluation: React.FC = () => {
  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 relative space-y-4">
             {/* Main Video Visual: Trainer Evaluation */}
            <div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-900/10 group">
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center animate-pulse">
                    <Video className="text-gold-500 w-8 h-8" />
                 </div>
              </div>
              <img 
                src="https://picsum.photos/800/600?grayscale&blur=2" 
                alt="Exemplo de Avaliação" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 pt-12">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-10 bg-gold-500"></div>
                    <div>
                        <p className="text-lg text-white font-bold uppercase">Avaliação Física</p>
                        <p className="text-xs text-neutral-300">Análise biomecânica e postural detalhada feita por mim.</p>
                    </div>
                </div>
              </div>
            </div>

            {/* Secondary Visual: Photo Guide */}
            <div className="flex gap-4 p-4 bg-neutral-900/50 border border-white/5 rounded-lg items-center">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center shrink-0">
                    <Camera className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">Guia de Fotos e Vídeos</h4>
                    <p className="text-xs text-neutral-400">Você recebe um vídeo tutorial ensinando exatamente como registrar seu corpo (frente, costas e perfil) para a análise.</p>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                AVALIAÇÃO FÍSICA <span className="text-gold-500">PROFISSIONAL</span>
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Muitos acreditam que a consultoria online perde qualidade na avaliação, mas na <strong>BP Fitness</strong> usamos tecnologia e metodologia visual para garantir precisão, igual ou superior ao presencial.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-gold-500/30 flex items-center justify-center text-gold-500">
                    <Smartphone size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Envio Simples e Rápido</h3>
                  <p className="text-sm text-neutral-400">Através do nosso sistema, você envia seus arquivos de forma segura. O vídeo tutorial garante que suas fotos tenham o padrão correto para análise.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-neutral-900 border border-gold-500/30 flex items-center justify-center text-gold-500">
                    <ScanFace size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Análise de Movimento e Postura</h3>
                  <p className="text-sm text-neutral-400">Eu analiso pessoalmente sua execução e postura, identificando desvios que impedem seus resultados e prescrevendo as correções necessárias.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href="https://wa.me/5599999999999"
                className="inline-flex items-center text-gold-500 font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                Quero fazer minha avaliação
                <span className="ml-2 text-xl">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Evaluation;