import React, { useState } from 'react';
import { Check, Star, Zap, ShieldCheck, TrendingUp, X, CreditCard, Smartphone } from 'lucide-react';

// --- CONFIGURAÇÃO ---
// Coloque seu número aqui (ex: 5511999999999)
const WHATSAPP_NUMBER = "5511999999999"; 

interface PlanData {
  name: string;
  price: number;
  originalLink: string;
}

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);

  const handleOpenModal = (plan: PlanData) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handlePixPayment = () => {
    if (!selectedPlan) return;
    
    const discountedPrice = (selectedPlan.price * 0.95).toFixed(2).replace('.', ',');
    const message = `Olá! Decidi investir na minha melhor versão. Quero contratar o plano *${selectedPlan.name}* via PIX com 5% de desconto (Valor final: R$ ${discountedPrice}). Como prossigo?`;
    
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    handleCloseModal();
  };

  const handleCardPayment = () => {
    if (!selectedPlan) return;
    window.open(selectedPlan.originalLink, '_blank');
    handleCloseModal();
  };

  // Calcula valor com desconto para mostrar no modal
  const discountValue = selectedPlan ? (selectedPlan.price * 0.95).toFixed(2).replace('.', ',') : '0,00';

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

        {/* Container - Vertical Stack on Mobile, Grid on Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6 max-w-7xl mx-auto items-center md:items-stretch">
          
          {/* 1. TRIMESTRAL */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-2 md:order-1 relative group shadow-lg">
             <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
             
             <div className="mb-6 border-b border-white/10 pb-6">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider">Trimestral</h3>
                 <p className="text-neutral-500 text-xs mt-2">Compromisso Inicial</p>
             </div>
             
             <div className="mb-6">
                 <div className="flex items-baseline gap-1">
                     <span className="text-lg text-gold-500 font-bold">3x</span>
                     <span className="text-4xl font-heading font-black text-white">248,74</span>
                 </div>
                 <p className="text-neutral-500 text-xs mt-1">ou R$ 697,00 à vista</p>
             </div>

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

             <button 
                onClick={() => handleOpenModal({ name: 'Trimestral', price: 697.00, originalLink: 'https://sun.eduzz.com/801E5XNNW7' })}
                className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all cursor-pointer"
             >
                 Selecionar
             </button>
          </div>

          {/* 2. ANUAL (Featured) */}
          <div className="w-full relative bg-gradient-to-b from-neutral-800 to-black border-2 border-gold-500 rounded-2xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] z-10 flex flex-col order-1 md:order-2 transform md:-translate-y-6">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold uppercase px-6 py-2 rounded-full tracking-widest shadow-lg flex items-center gap-2 whitespace-nowrap">
                 <Star size={12} fill="black" /> Melhor Valor
             </div>

             <div className="mb-6 border-b border-gold-500/20 pb-6 mt-2">
                 <h3 className="text-2xl font-bold text-white uppercase tracking-wider text-gold-500">Anual</h3>
                 <p className="text-neutral-400 text-xs mt-2">Transformação Definitiva</p>
             </div>
             
             <div className="mb-6">
                 <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider mb-1 line-through">De R$ 1.797</p>
                 <div className="flex items-baseline gap-1">
                     <span className="text-2xl text-gold-500 font-bold">12x</span>
                     <span className="text-5xl font-heading font-black text-white">154,82</span>
                 </div>
                 <p className="text-neutral-400 text-xs mt-1">ou R$ 1.497,00 à vista</p>
             </div>

             <ul className="space-y-4 mb-8 grow">
                 <li className="flex items-start gap-3 text-sm text-white font-medium">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>12 Meses de Acompanhamento</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-white font-medium">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Treinos Personalizados</span>
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

             <button 
                onClick={() => handleOpenModal({ name: 'Anual', price: 1497.00, originalLink: 'https://sun.eduzz.com/79778NXA9E' })}
                className="block w-full py-4 text-center bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest text-sm rounded shadow-lg hover:shadow-gold-500/20 transition-all transform hover:-translate-y-1 cursor-pointer"
             >
                 Fazer Investimento VIP
             </button>
          </div>

          {/* 3. SEMESTRAL */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-3 md:order-3 relative group shadow-lg">
             <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

             <div className="mb-6 border-b border-white/10 pb-6">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider">Semestral</h3>
                 <p className="text-neutral-500 text-xs mt-2">Equilíbrio Ideal</p>
             </div>
             
             <div className="mb-6">
                 <div className="flex items-baseline gap-1">
                     <span className="text-lg text-gold-500 font-bold">6x</span>
                     <span className="text-4xl font-heading font-black text-white">187,04</span>
                 </div>
                 <p className="text-neutral-500 text-xs mt-1">ou R$ 997,00 à vista</p>
             </div>

             <ul className="space-y-4 mb-8 grow">
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>6 Meses de Acompanhamento</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Treinos Para Sua Rotina</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Suporte via WhatsApp</span>
                 </li>
             </ul>

             <button 
                onClick={() => handleOpenModal({ name: 'Semestral', price: 997.00, originalLink: 'https://sun.eduzz.com/7WXQ3JKO9A' })}
                className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all cursor-pointer"
             >
                 Selecionar
             </button>
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

      {/* --- PAYMENT MODAL --- */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={handleCloseModal}></div>
          
          <div className="relative bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-md p-8 shadow-2xl animate-fade-in-up">
            <button 
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Finalizar Investimento</h3>
              <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-4">
                Plano {selectedPlan.name}
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Você está a um passo de mudar sua vida. <br/> Escolha como prefere começar:
              </p>
            </div>

            <div className="space-y-4">
              {/* Option 1: PIX */}
              <button 
                onClick={handlePixPayment}
                className="group w-full bg-gold-500/10 hover:bg-gold-500 border border-gold-500/50 hover:border-gold-500 p-4 rounded-xl flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gold-500/20 group-hover:bg-black/20 p-2 rounded-lg transition-colors">
                    <Smartphone size={24} className="text-gold-500 group-hover:text-black transition-colors" />
                  </div>
                  <div className="text-left">
                    <span className="block text-white group-hover:text-black font-bold uppercase tracking-wide text-sm transition-colors">
                      Pagar via PIX
                    </span>
                    <span className="block text-gold-500 group-hover:text-black/70 text-xs font-medium transition-colors">
                      Economize 5% (R$ {discountValue})
                    </span>
                  </div>
                </div>
                <div className="bg-gold-500 text-black text-[10px] font-bold px-2 py-1 rounded group-hover:bg-black group-hover:text-gold-500 transition-colors">
                  -5% OFF
                </div>
              </button>

              {/* Option 2: Card/Boleto */}
              <button 
                onClick={handleCardPayment}
                className="group w-full bg-transparent hover:bg-neutral-800 border border-white/10 hover:border-white/30 p-4 rounded-xl flex items-center gap-4 transition-all duration-300"
              >
                 <div className="bg-white/5 group-hover:bg-white/10 p-2 rounded-lg transition-colors">
                    <CreditCard size={24} className="text-neutral-400 group-hover:text-white transition-colors" />
                 </div>
                 <div className="text-left">
                    <span className="block text-neutral-300 group-hover:text-white font-bold uppercase tracking-wide text-sm">
                      Cartão ou Boleto
                    </span>
                    <span className="block text-neutral-500 group-hover:text-neutral-400 text-xs">
                      Checkout seguro via Eduzz
                    </span>
                 </div>
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-neutral-600 text-[10px] uppercase tracking-widest">
                Ambiente Seguro & Criptografado
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Pricing;
