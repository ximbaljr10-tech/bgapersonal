import React, { useState } from 'react';
import { Check, Star, Zap, ShieldCheck, TrendingUp, X, CreditCard, Smartphone, ArrowRight } from 'lucide-react';

// --- CONFIGURAÇÃO ---
const WHATSAPP_NUMBER = "556881155392"; 

// --- ÍCONE CUSTOMIZADO DO WHATSAPP ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

interface PlanData {
  name: string;
  price: number;
  originalLink: string;
}

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');

  const handleOpenModal = (plan: PlanData) => {
    setSelectedPlan(plan);
    setPaymentMethod('card'); 
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleFinishPurchase = () => {
    if (!selectedPlan) return;

    if (paymentMethod === 'pix') {
      const discountedPrice = (selectedPlan.price * 0.95).toFixed(2).replace('.', ',');
      const message = `Olá! Decidi investir na minha melhor versão. Quero contratar o plano *${selectedPlan.name}* via PIX com 5% de desconto (Valor final: R$ ${discountedPrice}). Como prossigo?`;
      
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      window.open(selectedPlan.originalLink, '_blank');
    }
    
    handleCloseModal();
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-900 relative border-t border-white/5 overflow-hidden">
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-backdrop {
          animation: modalFadeIn 0.3s ease-out forwards;
        }
        .animate-modal-content {
          animation: modalScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
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
             Escolha o ativo que vai valorizar sua saúde, estética e autoestima a longo prazo.
          </p>
        </div>

        {/* Container dos Cards - 4 colunas em telas grandes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-6 max-w-[1400px] mx-auto items-start xl:items-stretch">
          
        {/* 3. ANUAL (BEST VALUE) */}
          <div className="w-full relative bg-gradient-to-b from-neutral-800 to-black border-2 border-gold-500 rounded-2xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] z-10 flex flex-col order-3 xl:order-3 transform xl:-translate-y-6 mt-6 xl:mt-0">
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
                     <WhatsAppIcon className="text-gold-500 shrink-0 w-4 h-4 mt-0.5 fill-gold-500" />
                     <span className="text-gold-400">Acesso ao Grupo VIP</span>
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

          {/* 2. SEMESTRAL */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-2 xl:order-2 relative group shadow-lg">
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
                 <li className="flex items-start gap-3 text-sm text-white font-bold">
                     <WhatsAppIcon className="text-gold-500 shrink-0 w-4 h-4 mt-0.5 fill-gold-500" />
                     <span className="text-gold-400">Acesso ao Grupo VIP</span>
                 </li>
             </ul>

             <button 
               onClick={() => handleOpenModal({ name: 'Semestral', price: 997.00, originalLink: 'https://sun.eduzz.com/7WXQ3JKO9A' })}
               className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all cursor-pointer"
             >
                 Selecionar
             </button>
          </div>

        
          {/* 4. TRIMESTRAL */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-4 xl:order-4 relative group shadow-lg">
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
                 <li className="flex items-start gap-3 text-sm text-neutral-600 opacity-60">
                     <X className="text-red-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span className="line-through decoration-red-500/30">Acesso ao Grupo VIP</span>
                 </li>
             </ul>

             <button 
               onClick={() => handleOpenModal({ name: 'Trimestral', price: 697.00, originalLink: 'https://sun.eduzz.com/801E5XNNW7' })}
               className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all cursor-pointer"
             >
                 Selecionar
             </button>
          </div>
    {/* --- 1. MENSAL (NOVO PADRÃO) --- */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-1 xl:order-1 relative group shadow-lg mt-8 xl:mt-0">
             <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
             
             <div className="mb-6 border-b border-white/10 pb-6">
                 <h3 className="text-xl font-bold text-white uppercase tracking-wider">Mensal</h3>
                 <p className="text-neutral-500 text-xs mt-2">Primeiro Passo</p>
             </div>
             
             <div className="mb-6">
                 <div className="flex items-baseline gap-1">
                     <span className="text-lg text-gold-500 font-bold">12x</span>
                     <span className="text-4xl font-heading font-black text-white">26,58</span>
                 </div>
                 <p className="text-neutral-500 text-xs mt-1">ou R$ 257,00 à vista</p>
             </div>

             <ul className="space-y-4 mb-8 grow">
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>1 Mês de Acompanhamento</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Treinos Personalizados</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>App com Vídeos</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Suporte via WhatsApp</span>
                 </li>
             </ul>

             <button 
               onClick={() => handleOpenModal({ name: 'Mensal', price: 167.00, originalLink: 'https://sun.eduzz.com/40Q3NPKQ0B' })}
               className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all cursor-pointer"
             >
                 Selecionar
             </button>
          </div>

        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/5 bg-black/50">
                 <ShieldCheck size={18} className="text-gold-500" />
                 <span className="text-neutral-400 text-xs uppercase tracking-widest">7 dias de garantia incondicional</span>
            </div>
        </div>

      </div>

      {/* --- MODAL DE PAGAMENTO --- */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-modal-backdrop"
            onClick={handleCloseModal}
          ></div>

          <div className="bg-neutral-900 border border-white/10 w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden animate-modal-content">
            
            <div className="p-6 border-b border-white/5 flex justify-between items-start bg-neutral-800/50">
              <div>
                <div className="flex items-center gap-2 text-gold-500 mb-2">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xs font-bold uppercase tracking-wider">Passo Final</span>
                </div>
                <h3 className="text-xl font-bold text-white">Você está quase lá!</h3>
                <p className="text-neutral-400 text-sm mt-1">
                  Selecione a forma de pagamento para o plano <span className="text-white font-semibold">{selectedPlan.name}</span>.
                </p>
              </div>
              <button 
                onClick={handleCloseModal}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <label 
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'card' 
                    ? 'border-gold-500 bg-gold-500/10' 
                    : 'border-white/10 bg-neutral-800 hover:bg-neutral-800/80'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-gold-500' : 'border-neutral-500'}`}>
                  {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Cartão ou Boleto</span>
                    <CreditCard size={18} className="text-neutral-400" />
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">Acesso imediato via checkout seguro.</p>
                </div>
              </label>

              <label 
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                  paymentMethod === 'pix' 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-white/10 bg-neutral-800 hover:bg-neutral-800/80'
                }`}
                onClick={() => setPaymentMethod('pix')}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'pix' ? 'border-green-500' : 'border-neutral-500'}`}>
                  {paymentMethod === 'pix' && <div className="w-2.5 h-2.5 rounded-full bg-green-500" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">PIX <span className="text-green-400 text-xs ml-2 font-normal bg-green-400/10 px-2 py-0.5 rounded">-5% OFF</span></span>
                    <Smartphone size={18} className="text-neutral-400" />
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">Finalize no WhatsApp com desconto.</p>
                </div>
              </label>

            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center justify-between mb-6 text-sm">
                <span className="text-neutral-400">Total a pagar:</span>
                <span className="text-2xl font-bold text-white">
                  R$ {paymentMethod === 'pix' 
                    ? (selectedPlan.price * 0.95).toFixed(2).replace('.', ',') 
                    : selectedPlan.price.toFixed(2).replace('.', ',')
                  }
                </span>
              </div>

              <button 
                onClick={handleFinishPurchase}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                    paymentMethod === 'pix' ? 'bg-green-500 hover:bg-green-400 text-black shadow-green-500/20' : 'bg-gold-500 hover:bg-gold-400 text-black shadow-gold-500/20'
                }`}
              >
                {paymentMethod === 'pix' ? 'Finalizar no WhatsApp' : 'Ir para Pagamento'}
                <ArrowRight size={18} />
              </button>
              
              <p className="text-center text-[10px] text-neutral-500 mt-4">
                Ambiente seguro. Seus dados estão protegidos.
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Pricing;
