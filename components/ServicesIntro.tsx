
import React from 'react';
import { Globe, MapPin, Zap } from 'lucide-react';

const ServicesIntro: React.FC = () => {
  return (
    <section className="relative py-20 bg-neutral-900 border-b border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6">
            DUAS FORMAS DE TREINAR, <br />
            <span className="text-gold-gradient">A MESMA EXCELÊNCIA</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Não importa se você está do outro lado do mundo ou treinando ao meu lado. 
            O que muda é a logística, mas o <strong className="text-white">Método Braga</strong> e a exigência por resultados são inegociáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card Online */}
          <div className="group relative bg-black p-8 md:p-12 border border-white/5 rounded-sm hover:border-gold-500/40 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <Globe size={120} className="text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-6 border border-gold-500/20 group-hover:scale-110 transition-transform">
                <Globe className="text-gold-500 w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                Consultoria <span className="text-gold-500">Online</span>
              </h3>
              
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Liberdade para treinar onde e quando quiser, com meu planejamento estratégico na palma da sua mão. Ideal para quem busca autonomia sem abrir mão de um protocolo profissional.
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <Zap size={14} className="text-gold-500" /> App Exclusivo
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <Zap size={14} className="text-gold-500" /> Análise de vídeos
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <Zap size={14} className="text-gold-500" /> Custo-benefício imbatível
                </li>
              </ul>

              <a href="#methodology" className="text-gold-500 text-sm font-bold uppercase tracking-widest border-b border-gold-500/30 pb-1 hover:text-white hover:border-white transition-colors">
                Entenda como funciona
              </a>
            </div>
          </div>

          {/* Card Presencial */}
          <div className="group relative bg-black p-8 md:p-12 border border-white/5 rounded-sm hover:border-gold-500/40 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
              <MapPin size={120} className="text-white" />
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-neutral-800 rounded-full flex items-center justify-center mb-6 border border-gold-500/20 group-hover:scale-110 transition-transform">
                <MapPin className="text-gold-500 w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                Personal <span className="text-gold-500">Presencial</span>
              </h3>
              
              <p className="text-neutral-400 mb-6 leading-relaxed">
                A experiência VIP definitiva. Eu estarei ao seu lado ajustando cada repetição, controlando a carga e garantindo que você chegue à falha real com segurança total.
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <Zap size={14} className="text-gold-500" /> Correção em tempo real
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <Zap size={14} className="text-gold-500" /> Motivação e "Spotter"
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-300">
                  <Zap size={14} className="text-gold-500" /> Vagas limitadas (VIP)
                </li>
              </ul>

              <a href="#presencial" className="text-gold-500 text-sm font-bold uppercase tracking-widest border-b border-gold-500/30 pb-1 hover:text-white hover:border-white transition-colors">
                Saiba mais abaixo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
