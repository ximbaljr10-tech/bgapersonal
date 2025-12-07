
import React, { useState, useEffect } from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  // Typewriter Logic
  const phrases = ["SEU EMAGRECIMENTO", "SUA HIPERTROFIA", "SUA DEFINIÇÃO", "O SEU OBJETIVO"];
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const currentPhrase = phrases[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentPhrase) {
        // Finished typing current phrase
        if (phraseIndex === phrases.length - 1) {
          setIsFinished(true); // Stop at the last phrase
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else if (isDeleting && currentText === "") {
        // Finished deleting
        setIsDeleting(false);
        setPhraseIndex((prev) => prev + 1);
      } else {
        // Typing or Deleting
        const nextText = isDeleting 
          ? currentPhrase.substring(0, currentText.length - 1)
          : currentPhrase.substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, isFinished, phrases]);

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex flex-col justify-center bg-richblack overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/7hhG8mxM/Design-sem-nome-(35).png" 
          alt="Background Mobile" 
          className="block md:hidden w-full h-full object-cover"
        />
        <img 
          src="https://i.postimg.cc/bJ2wb8c4/Design-sem-nome-(29).png" 
          alt="Background Desktop" 
          className="hidden md:block w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black from-0% via-black/90 via-35% to-transparent to-60%"></div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="w-full lg:w-2/3 space-y-8 pt-20 pb-20 drop-shadow-md">
          
          {/* Badge Atualizada */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-black/40 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">
              Consultoria Online e Presencial
            </span>
          </div>

          {/* Título com Typewriter */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold leading-tight text-white drop-shadow-lg min-h-[160px] md:min-h-[220px]">
            TREINOS <span className="text-gold-gradient">PERSONALIZADOS</span> <br/>
            PARA <span className="text-gold-500">{currentText}</span>
            <span className={`inline-block w-1 h-8 md:h-12 lg:h-16 ml-1 bg-gold-500 align-middle ${isFinished ? 'opacity-0' : 'animate-blink'}`}></span>
          </h1>
          
          {/* Texto de Apoio Reformulado */}
          <p className="text-lg md:text-xl text-white font-medium max-w-lg leading-relaxed border-l-2 border-gold-500 pl-4 bg-black/20 p-2 rounded-r-sm backdrop-blur-sm">
            Chega de tentar sozinho. Tenha em mãos a <strong>estratégia exata</strong>, validada e desenhada para o seu corpo. Seja no consultório ou à distância, eu assumo o controle do seu resultado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Botão Scanner (Antes e Depois) */}
            <a 
              href="#before-after"
              className="btn-scanner group relative px-8 py-4 bg-offwhite text-black font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center flex items-center justify-center overflow-hidden rounded-sm"
            >
              {/* Texto Offwhite (Inicial) */}
              <span className="relative z-0 group-hover:opacity-0 transition-opacity duration-300">
                Ver Antes e Depois
              </span>
              
              {/* Texto Gold (Revelado) */}
              <span className="absolute inset-0 z-30 flex items-center justify-center text-black font-black opacity-0 transition-opacity duration-300 animate-[fadeIn_4s_infinite_cubic-bezier(0.45,0,0.55,1)]">
                VER ANTES E DEPOIS
              </span>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap gap-4 text-sm text-white font-medium">
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Metodologia Validada</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Avaliação Especializada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
