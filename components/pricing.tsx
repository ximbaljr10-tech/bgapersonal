import React, { useState } from 'react';
import { Check, TrendingUp, X, CreditCard, QrCode, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

// Dados para configuração (Links e Preços)
const PHONE_NUMBER = "5500000000000"; // SEU WHATSAPP AQUI

const plansData = [
  {
    id: 'trimestral',
    title: 'TRIMESTRAL',
    price: '297',
    priceNumber: 297,
    period: '/trimestre',
    description: 'A porta de entrada para sua mudança.',
    features: ['Acesso por 3 meses', 'Treinos em PDF', 'Suporte básico'],
    linkCheckout: 'https://seulink.com/trimestral',
    isHighlight: false
  },
  {
    id: 'anual',
    title: 'ANUAL',
    price: '497',
    priceNumber: 497,
    period: '/ano',
    description: 'O melhor custo-benefício para resultados reais.',
    features: ['Acesso por 1 ano', 'Suporte WhatsApp VIP', 'Mentoria Mensal', 'Análise de Técnica'],
    linkCheckout: 'https://seulink.com/anual',
    isHighlight: true // Esse é o destaque
  },
  {
    id: 'vitalicio',
    title: 'VITALÍCIO',
    price: '997',
    priceNumber: 997,
    period: 'pagamento único',
    description: 'Compromisso definitivo com sua saúde.',
    features: ['Acesso para sempre', 'Grupo Networking', 'Calls individuais', 'Tudo do plano anual'],
    linkCheckout: 'https://seulink.com/vitalicio',
    isHighlight: false
  }
];

const Pricing: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');

  // Função para abrir o modal
  const handleOpenModal = (plan: any) => {
    setSelectedPlan(plan);
    setPaymentMethod('card'); // Reset para cartão ao abrir
  };

  // Função de Finalização
  const handleFinish = () => {
    if (!selectedPlan) return;

    if (paymentMethod === 'pix') {
      // Lógica PIX: Desconto + WhatsApp
      const discounted = (selectedPlan.priceNumber * 0.95).toFixed(2);
      const text = `Olá! Escolhi o plano *${selectedPlan.title}* e quero pagar via PIX com 5% de desconto (R$ ${discounted}). Pode me enviar a chave?`;
      window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    } else {
      // Lógica Cartão: Checkout direto
      window.open(selectedPlan.linkCheckout, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-24 bg-neutral-900 relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header - EXATAMENTE COMO VOCÊ ENVIOU */}
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

        {/* Container dos Cards */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-6 max-w-7xl mx-auto items-center md:items-stretch">
          
          {plansData.map((plan) => (
            <div 
              key={plan.id}
              className={`w-full bg-black border rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col relative group shadow-lg
                ${plan.isHighlight 
                  ? 'border-gold-500 md:-mt-8 md:mb-8 z-20 order-1 md:order-2 bg-neutral-900/50' // Estilo Destaque
                  : 'border-white/10 order-2 md:order-1' // Estilo Padrão (Trimestral/Vitalício)
                }
              `}
            >
               {/* Hover Glow original */}
               <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>

               {/* Badge de Destaque (Só no Anual) */}
               {plan.isHighlight && (
                 <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                   Recomendado
                 </div>
               )}

               <h3 className="text-white text-xl font-bold mb-2">{plan.title}</h3>
               <p className="text-neutral-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>
               
               <div className="mb-6">
                 <span className="text-3xl md:text-4xl font-bold text-white">R$ {plan.price}</span>
                 <span className="text-neutral-500 text-sm ml-2">{plan.period}</span>
               </div>

               <ul className="space-y-4 mb-8 flex-1">
                 {plan.features.map((feature, i) => (
                   <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                     <Check size={16} className="text-gold-500 mt-0.5 shrink-0" />
                     {feature}
                   </li>
                 ))}
               </ul>

               {/* Botão que aciona o Modal */}
               <button 
                onClick={() => handleOpenModal(plan)}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors
                  ${plan.isHighlight 
                    ? 'bg-gold-500 text-black hover:bg-gold-400' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                  }
                `}
               >
                 Escolher Plano
               </button>
            </div>
          ))}

        </div>
      </div>

      {/* --- MODAL DE PAGAMENTO (OVERLAY) --- */}
      {selectedPlan && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setSelectedPlan(null)}
          ></div>

          <div className="relative bg-neutral-900 border border-white/10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {/* Cabeçalho do Modal */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center bg-neutral-800/30">
              <div>
                <h3 className="text-lg font-bold text-white">Quase lá!</h3>
                <p className="text-xs text-neutral-400">Finalizando: <span className="text-gold-500">{selectedPlan.title}</span></p>
              </div>
              <button onClick={() => setSelectedPlan(null)} className="text-neutral-500 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Seleção */}
            <div className="p-6 space-y-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                  paymentMethod === 'card' 
                  ? 'border-gold-500 bg-gold-500/10' 
                  : 'border-white/10 bg-neutral-800 hover:bg-neutral-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard size={20} className={paymentMethod === 'card' ? 'text-gold-500' : 'text-neutral-400'} />
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">Cartão ou Boleto</div>
                    <div className="text-[10px] text-neutral-400">Liberação imediata</div>
                  </div>
                </div>
                {paymentMethod === 'card' && <div className="w-3 h-3 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>}
              </button>

              <button
                onClick={() => setPaymentMethod('pix')}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                  paymentMethod === 'pix' 
                  ? 'border-green-500 bg-green-500/10' 
                  : 'border-white/10 bg-neutral-800 hover:bg-neutral-800/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <QrCode size={20} className={paymentMethod === 'pix' ? 'text-green-500' : 'text-neutral-400'} />
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">PIX <span className="bg-green-500/20 text-green-400 text-[10px] px-1.5 py-0.5 rounded ml-1">-5% OFF</span></div>
                    <div className="text-[10px] text-neutral-400">Finalize no WhatsApp</div>
                  </div>
                </div>
                {paymentMethod === 'pix' && <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>}
              </button>
            </div>

            {/* Footer com Preço e Botão */}
            <div className="p-6 pt-0">
              <div className="flex justify-between items-end mb-4 border-t border-white/5 pt-4">
                <span className="text-xs text-neutral-400">Valor Final:</span>
                <span className={`text-2xl font-bold ${paymentMethod === 'pix' ? 'text-green-400' : 'text-white'}`}>
                  R$ {paymentMethod === 'pix' 
                    ? (selectedPlan.priceNumber * 0.95).toFixed(2).replace('.', ',') 
                    : selectedPlan.priceNumber.toFixed(2).replace('.', ',')
                  }
                </span>
              </div>

              <button 
                onClick={handleFinish}
                className={`w-full py-3.5 rounded-lg font-bold text-sm uppercase flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 ${
                  paymentMethod === 'pix' 
                  ? 'bg-green-600 hover:bg-green-500 text-white' 
                  : 'bg-gold-500 hover:bg-gold-400 text-black'
                }`}
              >
                {paymentMethod === 'pix' ? 'Pedir Chave no WhatsApp' : 'Ir para Pagamento Seguro'}
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
