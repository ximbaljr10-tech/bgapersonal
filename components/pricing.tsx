
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-richblack relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-500/5 rounded-full blur-[100px]"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-2 block">
            Investimento
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6">
            ESCOLHA SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">PLANO</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
             Essa é a sua chance de conquistar o corpo que sempre quis! <br className="hidden md:block" />
             Escolha a melhor opção para o seu objetivo e vamos juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-center">
          
          {/* PLANO TRIMESTRAL (Left) */}
          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col h-auto md:h-[calc(100%-2rem)]">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Trimestral</h3>
                <p className="text-neutral-500 text-xs mt-1">Compromisso de curto prazo</p>
            </div>
            
            <div className="mb-6 space-y-4 grow">
                <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="text-gold-500 shrink-0 w-5 h-5" />
                    <span>3 Treinos Personalizados</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="text-gold-500 shrink-0 w-5 h-5" />
                    <span>Acesso aos Treinos Complementares do Free Fitness</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="text-gold-500 shrink-0 w-5 h-5" />
                    <span>1 Plano Nutricional Personalizado</span>
                </div>
            </div>

            <div className="pt-6 border-t border-white/10">
                <p className="text-neutral-400 text-xs mb-1">Valor total de R$ 697,00 ou:</p>
                <div className="flex items-end gap-1 mb-1">
                    <span className="text-2xl font-bold text-gold-500">3x</span>
                    <span className="text-4xl font-heading font-black text-white">248,74</span>
                </div>
                <p className="text-neutral-500 text-xs mb-6">no cartão de crédito</p>
                
                <a href="https://wa.me/5599999999999?text=Quero%20o%20plano%20Trimestral" className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all">
                    Comprar Agora
                </a>
            </div>
          </div>

          {/* PLANO ANUAL (Center - Featured) */}
          <div className="relative bg-black border-2 border-gold-500 rounded-2xl p-6 md:p-10 shadow-[0_0_40px_rgba(212,175,55,0.15)] transform md:-translate-y-4 z-10 order-first md:order-none mb-6 md:mb-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-500 text-black text-[10px] font-bold uppercase px-4 py-1 rounded-full tracking-widest shadow-lg flex items-center gap-1 whitespace-nowrap">
                <Star size={10} fill="black" /> Melhor Valor
            </div>

            <div className="mb-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">Anual</h3>
                <p className="text-gold-400 text-sm font-medium">Transformação Definitiva</p>
            </div>
            
            <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                    <div className="p-0.5 bg-gold-500 rounded-full text-black">
                        <Check size={12} strokeWidth={4} />
                    </div>
                    <span>12 Treinos Personalizados</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                    <div className="p-0.5 bg-gold-500 rounded-full text-black">
                        <Check size={12} strokeWidth={4} />
                    </div>
                    <span>Acesso aos Treinos Complementares do Free Fitness</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                    <div className="p-0.5 bg-gold-500 rounded-full text-black">
                        <Check size={12} strokeWidth={4} />
                    </div>
                    <span>1 Plano Nutricional Personalizado</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-white font-medium">
                     <div className="p-0.5 bg-gold-500 rounded-full text-black">
                        <Zap size={12} strokeWidth={4} fill="black" />
                    </div>
                    <span className="text-gold-400">Suporte VIP Prioritário</span>
                </div>
            </div>

            <div className="pt-8 border-t border-gold-500/20">
                <p className="text-neutral-400 text-xs mb-1">De <span className="line-through">R$ 1.797,00</span> por apenas:</p>
                <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl font-bold text-gold-500">12x</span>
                    <span className="text-5xl md:text-6xl font-heading font-black text-white">154,82</span>
                </div>
                <p className="text-neutral-500 text-sm mb-8">ou R$ 1.497,00 à vista</p>
                
                <a href="https://wa.me/5599999999999?text=Quero%20o%20plano%20Anual" className="block w-full py-4 text-center bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest text-sm rounded shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-1">
                    Quero este plano
                </a>
            </div>
          </div>

          {/* PLANO SEMESTRAL (Right) */}
           <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col h-auto md:h-[calc(100%-2rem)]">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Semestral</h3>
                <p className="text-neutral-500 text-xs mt-1">Equilíbrio ideal</p>
            </div>
            
            <div className="mb-6 space-y-4 grow">
                <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="text-gold-500 shrink-0 w-5 h-5" />
                    <span>6 Treinos Personalizados</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="text-gold-500 shrink-0 w-5 h-5" />
                    <span>Acesso aos Treinos Complementares do Free Fitness</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="text-gold-500 shrink-0 w-5 h-5" />
                    <span>1 Plano Nutricional Personalizado</span>
                </div>
            </div>

            <div className="pt-6 border-t border-white/10">
                <p className="text-neutral-400 text-xs mb-1">Valor total de R$ 997,00 ou:</p>
                <div className="flex items-end gap-1 mb-1">
                    <span className="text-2xl font-bold text-gold-500">6x</span>
                    <span className="text-4xl font-heading font-black text-white">187,04</span>
                </div>
                <p className="text-neutral-500 text-xs mb-6">no cartão de crédito</p>
                
                <a href="https://wa.me/5599999999999?text=Quero%20o%20plano%20Semestral" className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all">
                    Comprar Agora
                </a>
            </div>
          </div>

        </div>

        {/* Guarantee Badge */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-neutral-900 border border-white/10 px-6 py-3 rounded-full">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-500">
                    <Check size={16} />
                </div>
                <p className="text-neutral-400 text-xs md:text-sm">Compra segura e garantia de 7 dias.</p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
