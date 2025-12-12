
import React from 'react';
import { Check, Star, Zap, ShieldCheck, TrendingUp } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-900 relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - Investment Theme */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4 bg-gold-500/10 border border-gold-500/20 px-4 py-1.5 rounded-full">
            <TrendingUp size={14} className="text-gold-500" />
            <span className="text-gold-500 font-bold uppercase tracking-widest text-[10px]">
              Alto Retorno
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
            SELECIONE SEU <span className="text-gold-500">INVESTIMENTO</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
             Escolha o ativo que vai valorizar sua saúde, estética e autoestima a longo prazo. O melhor momento para começar é agora.
          </p>
        </div>

        {/* Container - Vertical Stack on Mobile (Architecture Style), Grid on Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6 max-w-7xl mx-auto items-center md:items-stretch">
          
          {/* 1. TRIMESTRAL (Entry Level) 
              Mobile Order: 2 (Show after Annual)
              Desktop Order: 1 (Left)
          */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-2 md:order-1 relative group shadow-lg">
             {/* Hover Glow */}
             <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
             
             <div className="mb-6 border-b border-white/10 pb-6">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider">Trimestral</h3>
                 <p className="text-neutral-500 text-xs mt-2">Compromisso Inicial</p>
             </div>
             
             {/* Prices */}
             <div className="mb-6">
                 <div className="flex items-baseline gap-1">
                     <span className="text-lg text-gold-500 font-bold">3x</span>
                     <span className="text-4xl font-heading font-black text-white">248,74</span>
                 </div>
                 <p className="text-neutral-500 text-xs mt-1">ou R$ 697,00 à vista</p>
             </div>

             {/* Features */}
             <ul className="space-y-4 mb-8 grow">
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>3 Meses de Acompanhamento</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Protocolo de Treino Full</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Suporte via WhatsApp</span>
                 </li>
             </ul>

             {/* Button */}
             <a href="https://wa.me/5599999999999?text=Quero%20o%20plano%20Trimestral" className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all">
                 Selecionar
             </a>
          </div>

          {/* 2. ANUAL (Featured - Gold) 
              Mobile Order: 1 (First - Best Investment)
              Desktop Order: 2 (Center)
          */}
          <div className="w-full relative bg-gradient-to-b from-neutral-800 to-black border-2 border-gold-500 rounded-2xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] z-10 flex flex-col order-1 md:order-2 transform md:-translate-y-6">
             {/* Badge */}
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold uppercase px-6 py-2 rounded-full tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap">
                 <Star size={12} fill="black" /> Melhor Valor
             </div>

             <div className="mb-6 border-b border-gold-500/20 pb-6 mt-2">
                 <h3 className="text-2xl font-bold text-white uppercase tracking-wider text-gold-500">Anual</h3>
                 <p className="text-neutral-400 text-xs mt-2">Transformação Definitiva</p>
             </div>
             
             {/* Prices */}
             <div className="mb-6">
                 <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider mb-1 line-through">De R$ 1.797</p>
                 <div className="flex items-baseline gap-1">
                     <span className="text-2xl text-gold-500 font-bold">12x</span>
                     <span className="text-5xl font-heading font-black text-white">154,82</span>
                 </div>
                 <p className="text-neutral-400 text-xs mt-1">ou R$ 1.497,00 à vista</p>
             </div>

             {/* Features */}
             <ul className="space-y-4 mb-8 grow">
                 <li className="flex items-start gap-3 text-sm text-white font-medium">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>12 Meses de Acompanhamento</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-white font-medium">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Treino + Nutricional</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-white font-medium">
                     <Zap className="text-gold-500 shrink-0 w-4 h-4 mt-0.5 fill-gold-500" />
                     <span className="text-gold-400">Prioridade Máxima no Suporte</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-white font-medium">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Acesso Vitalício à Comunidade</span>
                 </li>
             </ul>

             {/* Button */}
             <a href="https://sun.eduzz.com/79778NXA9E" className="block w-full py-4 text-center bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:shadow-gold-500/20 transition-all transform hover:-translate-y-1">
                 Fazer Investimento VIP
             </a>
          </div>

          {/* 3. SEMESTRAL 
              Mobile Order: 3 (Last)
              Desktop Order: 3 (Right)
          */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-3 md:order-3 relative group shadow-lg">
              {/* Hover Glow */}
             <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

             <div className="mb-6 border-b border-white/10 pb-6">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider">Semestral</h3>
                 <p className="text-neutral-500 text-xs mt-2">Equilíbrio Ideal</p>
             </div>
             
             {/* Prices */}
             <div className="mb-6">
                 <div className="flex items-baseline gap-1">
                     <span className="text-lg text-gold-500 font-bold">6x</span>
                     <span className="text-4xl font-heading font-black text-white">187,04</span>
                 </div>
                 <p className="text-neutral-500 text-xs mt-1">ou R$ 997,00 à vista</p>
             </div>

             {/* Features */}
             <ul className="space-y-4 mb-8 grow">
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>6 Meses de Acompanhamento</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>1 Nutricional Bônus</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Suporte via WhatsApp</span>
                 </li>
             </ul>

             {/* Button */}
             <a href="https://sun.eduzz.com/7WXQ3JKO9A" className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all">
                 Selecionar
             </a>
          </div>

        </div>

        {/* Guarantee Compact */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/5 bg-black/50">
                 <ShieldCheck size={18} className="text-gold-500" />
                 <span className="text-neutral-400 text-xs uppercase tracking-widest">7 dias de garantia incondicional</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
