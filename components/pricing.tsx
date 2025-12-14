import React, { useState } from 'react';
import { Check, Star, Zap, ShieldCheck, TrendingUp, X, CreditCard, Smartphone, ArrowRight } from 'lucide-react';

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
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');

  const handleOpenModal = (plan: PlanData) => {
    setSelectedPlan(plan);
    setPaymentMethod('card'); // Reset para cartão ao abrir
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleFinishPurchase = () => {
    if (!selectedPlan) return;

    if (paymentMethod === 'pix') {
      // PIX - Envia para WhatsApp
      const discountedPrice = (selectedPlan.price * 0.95).toFixed(2).replace('.', ',');
      const message = `Olá! Decidi investir na minha melhor versão. Quero contratar o plano *${selectedPlan.name}* via PIX com 5% de desconto (Valor final: R$ ${discountedPrice}). Como prossigo?`;
      
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    } else {
      // Cartão/Boleto - Abre link de pagamento
      window.open(selectedPlan.originalLink, '_blank');
    }
    
    handleCloseModal();
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-900 relative border-t border-white/5">
      {/* Estilos para a animação do Modal */}
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
          
          {/* 1. TRIMESTRAL (Alterado: Order-3 no mobile para ficar por último) */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-3 md:order-1 relative group shadow-lg">
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
                 {/* ITEM GRUPO VIP (NEGATIVO/X VERMELHO) */}
                 <li className="flex items-start gap-3 text-sm text-neutral-600 opacity-60">
                     <X className="text-red-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span className="line-through decoration-red-500/30">Acesso ao Grupo VIP (WhatsApp)</span>
                 </li>
             </ul>

             <button 
                onClick={() => handleOpenModal({ name: 'Trimestral', price: 697.00, originalLink: 'https://sun.eduzz.com/801E5XNNW7' })}
                className="block w-full py-4 text-center border border-white/20 hover:bg-white hover:text-black text-white font-bold uppercase tracking-widest text-xs rounded transition-all cursor-pointer"
             >
                 Selecionar
             </button>
          </div>

          {/* 2. ANUAL (Featured - Order 1 no mobile) */}
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
                     <span>Acesso ao Grupo VIP (WhatsApp)</span>
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

          {/* 3. SEMESTRAL (Alterado: Order-2 no mobile para ficar no meio) */}
          <div className="w-full bg-black border border-white/10 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col order-2 md:order-3 relative group shadow-lg">
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
                 <li className="flex items-start gap-3 text-sm text-neutral-400">
                     <Check className="text-gold-500 shrink-0 w-4 h-4 mt-0.5" />
                     <span>Acesso ao Grupo VIP (WhatsApp)</span>
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

      {/* --- MODAL DE PAGAMENTO --- */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay Escuro (Backdrop) com Animação */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-modal-backdrop"
            onClick={handleCloseModal}
          ></div>

          {/* Conteúdo do Modal com Animação Pop */}
          <div className="bg-neutral-900 border border-white/10 w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden animate-modal-content">
            
            {/* Header Modal */}
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

            {/* Corpo do Modal - Seleção */}
            <div className="p-6 space-y-4">
              
              {/* Opção Cartão / Boleto */}
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

              {/* Opção PIX */}
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

            {/* Footer Modal - Ação */}
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
