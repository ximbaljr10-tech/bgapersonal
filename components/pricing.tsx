import React, { useState } from 'react';
import { Check, Star, Zap, TrendingUp, X, CreditCard, QrCode, ArrowRight } from 'lucide-react';

// --- 1. Configuração dos Dados (Substitua pelos seus links reais) ---
const PHONE_NUMBER = "5511999999999"; // Coloque seu número aqui (com DDI e DDD)

const plans = [
  {
    id: 'trimestral',
    name: 'TRIMESTRAL',
    price: 297, // Valor numérico para cálculo
    period: '/trimestre',
    features: ['Acesso total', 'Suporte básico', 'Treinos em PDF'],
    checkoutUrl: 'https://seu-checkout.com/trimestral', // Link do gateway (Hotmart, Stripe, etc)
    recommended: false,
  },
  {
    id: 'anual',
    name: 'ANUAL',
    price: 497,
    period: '/ano',
    features: ['Acesso VIP', 'Suporte WhatsApp', 'Mentoria Mensal', 'Brindes Exclusivos'],
    checkoutUrl: 'https://seu-checkout.com/anual',
    recommended: true, // Destaque
  },
  {
    id: 'vitalicio',
    name: 'VITALÍCIO',
    price: 997,
    period: 'pagamento único',
    features: ['Tudo do Anual', 'Acesso Vitalício', 'Grupo Mastermind'],
    checkoutUrl: 'https://seu-checkout.com/vitalicio',
    recommended: false,
  },
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('card');

  // --- Lógica de Abertura do Modal ---
  const handleSelectPlan = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setPaymentMethod('card'); // Resetar para cartão por padrão (ou pix se preferir)
  };

  // --- Lógica de Finalização da Compra ---
  const handleFinishPurchase = () => {
    if (!selectedPlan) return;

    if (paymentMethod === 'pix') {
      // Cálculo do desconto
      const discountedPrice = (selectedPlan.price * 0.95).toFixed(2);
      
      // Mensagem para o WhatsApp
      const message = `Olá! Decidi investir no plano *${selectedPlan.name}*. Quero aproveitar o desconto de 5% via PIX (R$ ${discountedPrice}). Como prossigo?`;
      
      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Redireciona para o Checkout do Gateway
      window.open(selectedPlan.checkoutUrl, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-900 relative border-t border-white/5 font-sans">
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

        {/* Grid de Planos Dinâmico */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6 max-w-7xl mx-auto items-center md:items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={plan.id}
              onClick={() => handleSelectPlan(plan)} // Ação de clique no Card
              className={`w-full bg-black border rounded-2xl p-8 transition-all duration-300 flex flex-col relative group shadow-lg cursor-pointer hover:-translate-y-2
                ${plan.recommended 
                  ? 'border-gold-500 shadow-gold-500/20 order-1 md:order-2 scale-105 z-20' 
                  : 'border-white/10 hover:border-gold-500/30 order-2 md:order-1'
                }
              `}
            >
              {plan.recommended && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black font-bold text-xs py-1 px-3 rounded-full uppercase tracking-wide shadow-lg">
                   Mais Escolhido
                 </div>
              )}

              {/* Título e Preço */}
              <h3 className="text-white font-bold text-xl mb-2">{plan.name}</h3>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-white">R$ {plan.price}</span>
                <span className="text-neutral-500 text-sm mb-1">{plan.period}</span>
              </div>

              {/* Lista de Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check className="text-gold-500 shrink-0 mt-0.5" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide text-sm transition-all
                ${plan.recommended 
                  ? 'bg-gold-500 text-black hover:bg-gold-400' 
                  : 'bg-white/5 text-white hover:bg-white/10'
                }`}>
                Começar Agora
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL DE PAGAMENTO --- */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay Escuro (Backdrop) */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPlan(null)} // Fecha ao clicar fora
          ></div>

          {/* Conteúdo do Modal */}
          <div className="bg-neutral-900 border border-white/10 w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden animate-in fade-in zoom-in duration-200">
            
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
                onClick={() => setSelectedPlan(null)}
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
                    <QrCode size={18} className="text-neutral-400" />
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
