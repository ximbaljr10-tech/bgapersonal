import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Placeholder - In production use actual photo of Braga */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Treinador Braga na academia" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-richblack via-richblack/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
            <span className="text-gold-400 text-xs font-bold uppercase tracking-widest">Consultoria BP Fitness On-line</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight text-white">
            TREINOS <span className="text-gold-gradient">PERSONALIZADOS</span> PARA O SEU OBJETIVO
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-300 font-light max-w-lg leading-relaxed border-l-2 border-gold-500 pl-4">
            Especialista em glúteos e eliminação de pochete. Junte-se a mais de 
            <strong className="text-white"> 1.500 alunos</strong> que transformaram seus corpos com método validado.
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
              className="px-8 py-4 border border-white/20 hover:border-gold-500 hover:text-gold-500 text-white font-semibold uppercase tracking-widest transition-all duration-300 text-center"
            >
              Como Funciona
            </a>
          </div>

          <div className="pt-8 flex flex-wrap gap-4 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Avaliação Física Detalhada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-gold-500 w-5 h-5" />
              <span>Protocolo Individualizado</span>
            </div>
            <div className="flex items-center gap-2">
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