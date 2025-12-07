
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const mobileImages = [
    "https://i.postimg.cc/2SWb4CC3/1.png",
    "https://i.postimg.cc/bwnDQqqr/2.png",
    "https://i.postimg.cc/HkMcQTTx/3.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mobileImages.length);
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center bg-richblack overflow-hidden">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        
        {/* Mobile Slideshow Background */}
        <div className="md:hidden absolute inset-0 w-full h-full">
          {mobileImages.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt={`Background Slide ${index + 1}`} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>

        {/* Desktop Background (Static) */}
        <img 
          src="https://i.postimg.cc/bJ2wb8c4/Design-sem-nome-(29).png" 
          alt="Background Desktop" 
          className="hidden md:block w-full h-full object-cover object-top"
        />

        {/* Gradient Overlay: Darker on left, fading to clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Text Content */}
        <div className="w-full lg:w-2/3 space-y-8 pt-20 pb-20 drop-shadow-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-black/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">Consultoria BP Fitness On-line</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold leading-tight text-white drop-shadow-lg">
            TREINOS <span className="text-gold-gradient drop-shadow-sm">PERSONALIZADOS</span> PARA O SEU OBJETIVO
          </h1>
          
          <p className="text-lg md:text-xl text-white font-medium max-w-lg leading-relaxed border-l-2 border-gold-500 pl-4 bg-black/20 p-2 rounded-r-sm backdrop-blur-sm">
            Especialista em glúteos e eliminação de pochete. Junte-se a mais de 
            <strong className="text-gold-400"> 1.500 alunos</strong> que transformaram seus corpos com método validado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/5599999999999"
              className="group relative px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2"
            >
              Quero entrar pro time
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#methodology"
              className="px-8 py-4 border border-white/40 bg-black/20 backdrop-blur-sm hover:border-gold-500 hover:text-gold-500 text-white font-semibold uppercase tracking-widest transition-all duration-300 text-center"
            >
              Como Funciona
            </a>
          </div>

          <div className="pt-8 flex flex-wrap gap-4 text-sm text-white font-medium">
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Avaliação Física Detalhada</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Protocolo Individualizado</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Suporte via WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
