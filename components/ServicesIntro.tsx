
import React from 'react';
import { Globe, MapPin, Check, Smartphone } from 'lucide-react';

const ServicesIntro: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[500px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 border border-gold-500/30 rounded-full bg-gold-500/10 backdrop-blur-md mb-4">
            <span className="text-gold-400 text-xs font-bold uppercase tracking-[0.2em]">O Método Braga</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight">
            ESCOLHA O SEU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-300 to-gold-600 drop-shadow-sm">NÍVEL DE ACESSO</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* CARD 1: ONLINE */}
          <div className="group relative bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-black rounded-2xl border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-black/50 group-hover:shadow-gold-500/20 group-hover:border-gold-500/30 transition-all">
                <Globe className="text-white group-hover:text-gold-400 transition-colors w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-black text-white uppercase italic tracking-wide mb-2">
                Consultoria <span className="text-gold-500">Global</span>
              </h3>
              <p className="text-neutral-400 text-sm mb-6 max-w-xs">
                Liberdade total. Avaliação via fotos/vídeos e protocolo 100% digital.
              </p>

              <div className="w-full bg-black/40 rounded-xl p-4 border border-white/5 mb-6 text-left space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-green-500" />
                  </div>
                  <span className="text-neutral-300 text-xs font-bold uppercase">Avaliação Digital Guiada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-green-500" />
                  </div>
                  <span className="text-neutral-300 text-xs font-bold uppercase">App Exclusivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-green-500" />
                  </div>
                  <span className="text-neutral-300 text-xs font-bold uppercase">Atende qualquer país</span>
                </div>
              </div>

              <a href="#methodology" className="w-full py-4 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 hover:border-gold-500 rounded-lg text-white font-bold uppercase tracking-widest text-xs transition-all duration-300">
                Selecionar Online
              </a>
            </div>
          </div>

          {/* CARD 2: PRESENCIAL (HIGHLIGHT) */}
          <div className="group relative bg-gradient-to-b from-neutral-900 to-black border border-gold-500/30 rounded-2xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.1)] hover:shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-all duration-300 transform scale-100 md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-gold-500 text-black text-[10px] font-black px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-widest">
              Experiência VIP
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-neutral-800 rounded-2xl border border-gold-500/50 flex items-center justify-center mb-6 shadow-xl shadow-gold-500/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-500/10 animate-pulse"></div>
                <MapPin className="text-gold-500 w-8 h-8 relative z-10" />
              </div>
              
              <h3 className="text-2xl font-black text-white uppercase italic tracking-wide mb-2">
                Híbrida <span className="text-gold-500">Presencial</span>
              </h3>
              <p className="text-neutral-400 text-sm mb-6 max-w-xs">
                Precisão clínica. Você vem ao consultório para a avaliação física profissional.
              </p>

              <div className="w-full bg-neutral-900 rounded-xl p-4 border border-gold-500/20 mb-6 text-left space-y-3">
                 <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-gold-500" />
                  </div>
                  <span className="text-white text-xs font-bold uppercase">Avaliação no Consultório</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-gold-500" />
                  </div>
                  <span className="text-white text-xs font-bold uppercase">Medidas com Adipômetro</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-gold-500" />
                  </div>
                  <span className="text-white text-xs font-bold uppercase">Análise Postural Ao Vivo</span>
                </div>
              </div>

              <a href="#presencial" className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest text-xs rounded-lg shadow-lg shadow-gold-500/20 transition-all duration-300">
                Selecionar Híbrida
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
