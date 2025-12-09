import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-gold-500' : 'text-white group-hover:text-gold-400'}`}>
          {question}
        </span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold-500' : 'text-neutral-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-neutral-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como recebo acesso aos treinos após a compra?",
      answer: "Assim que confirmar sua inscrição, você recebe no e-mail seu login e senha para acessar o MFITPERSONAL. É através deste app exclusivo que você terá acesso ao seu plano, vídeos explicativos e acompanhamento."
    },
    {
      question: "Como funciona a avaliação física?",
      answer: "Para consultoria online, peço fotos (frente, costas e perfil) em fundo neutro para análise corporal. Se você for de Rio Branco (Acre), podemos agendar uma avaliação física presencial no consultório."
    },
    {
      question: "O treino é adaptado à minha rotina?",
      answer: "Sim! Através da Anamnese, você responderá um questionário rápido sobre sua rotina, objetivos e particularidades. Com isso, monto um plano totalmente adaptado à sua vida."
    },
    {
      question: "Qual o prazo para receber meu treino?",
      answer: "Em até 3 a 5 dias úteis após a avaliação e confirmação do pagamento. Seu treino ficará pronto no App e cada exercício possui vídeo explicativo para você executar sem dúvidas."
    },
    {
      question: "Tenho suporte se precisar de ajustes?",
      answer: "Com certeza. Você tem suporte direto via WhatsApp. Eu acompanho de perto e faço as adaptações necessárias conforme sua evolução e feedback."
    },
    {
      question: "Como funciona a renovação do treino?",
      answer: "Seu treino é renovado a cada 30 dias. Antes de montar o próximo ciclo, conversamos sobre sua experiência anterior para garantir que você continue evoluindo no caminho certo."
    }
  ];

  return (
    <section className="py-20 bg-charcoal">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-white">
            PERGUNTAS <span className="text-gold-500">FREQUENTES</span>
          </h2>
        </div>
        
        <div className="bg-black/50 p-8 rounded-sm border border-white/5">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;