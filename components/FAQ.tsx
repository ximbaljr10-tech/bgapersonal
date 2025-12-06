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
      question: "A consultoria serve para iniciantes?",
      answer: "Sim! O planejamento é feito 100% baseado no seu nível atual. Se você nunca treinou, começaremos com uma fase de adaptação para garantir que você aprenda os movimentos corretamente."
    },
    {
      question: "Como funciona o envio dos treinos?",
      answer: "Você receberá acesso ao nosso aplicativo exclusivo, onde terá sua ficha completa com vídeos explicativos de cada exercício, contagem de séries e descanso."
    },
    {
      question: "Posso treinar em casa?",
      answer: "Com certeza. Se você não frequenta academia, adapto o treino para ser realizado em casa utilizando o peso do corpo ou acessórios que você possua."
    },
    {
      question: "E se eu tiver dúvidas durante o treino?",
      answer: "Você tem suporte direto via WhatsApp. Pode enviar vídeos executando o exercício para eu corrigir sua postura e técnica."
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