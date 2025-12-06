import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppSticky: React.FC = () => {
  return (
    <a
      href="https://wa.me/5599999999999"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-full shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:-translate-y-1 group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      <span className="font-bold text-sm uppercase tracking-wide hidden md:block">Falar com Personal</span>
    </a>
  );
};

export default WhatsAppSticky;