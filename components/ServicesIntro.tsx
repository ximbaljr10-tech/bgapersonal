
import React from 'react';
import { Globe, MapPin, CheckCircle2, Smartphone, ShieldCheck } from 'lucide-react';

const ServicesIntro: React.FC = () => {
  return (
    <section className="relative py-24 bg-richblack overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold-500 text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Padrão de Qualidade Braga</span>
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white leading-tight">
            ESCOLHA SUA FORMA DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-300 to-gold-600">ENTRAR PARA O TIME.</span>
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            Minha metodologia é baseada na individualidade biológica. Seja à distância ou no consultório, 
            você terá um <strong>protocolo desenhado exclusivamente</strong> para o seu corpo e objetivo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* OPTION 1: ONLINE */}
          <div className="group relative bg-neutral-900 border border-white/10 rounded-xl p-8 hover:border-gold-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col h-full">
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <Globe size={100} />
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white group-hover:text-gold-500 group-hover:border-gold-500 transition-colors">
                    <Smartphone size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase italic">Consultoria Online</h3>
                    <p className="text-xs text-gold-500 font-bold tracking-wider uppercase">Metodologia Validada</p>
                </div>
            </div>

            <p className="text-neutral-400 text-sm mb-8 leading-relaxed flex-grow">
                A escolha da maioria dos meus alunos. Utilizo um sistema avançado de análise visual para prescrever seu treino com precisão, onde quer que você esteja. <strong className="text-white">Os resultados são idênticos aos de quem avalia presencialmente</strong>, pois o método de treino é o mesmo.
            </p>

            <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                    <ShieldCheck className="text-gold-500 w-5 h-5 shrink-0" />
                    <span className="text-neutral-300 text-sm">Protocolo validado com +1.500 alunos</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-500 w-5 h-5 shrink-0" />
                    <span className="text-neutral-300 text-sm">Análise biomecânica detalhada por vídeo</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-gold-500 w-5 h-5 shrink-0" />
                    <span className="text-neutral-300 text-sm">Liberdade geográfica total</span>
                </li>
            </ul>

            <a href="#methodology" className="mt-auto block w-full py-4 text-center border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all rounded-sm">
                Entender como funciona
            </a>
          </div>

          {/* OPTION 2: PRESENCIAL */}
          <div className="group relative bg-gradient-to-b from-neutral-900 to-black border border-gold-500/30 rounded-xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] transition-all duration-300 transform md:-translate-y-4 flex flex-col h-full">
            
            <div className="absolute top-0 right-0 p-4 opacity-5 text-gold-500">
                <MapPin size={100} />
            </div>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-neutral-800 border border-gold-500/50 flex items-center justify-center text-gold-500 shadow-lg shadow-gold-500/10">
                    <MapPin size={28} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase italic">Híbrida Presencial</h3>
                    <p className="text-xs text-gold-500 font-bold tracking-wider uppercase">Experiência em Consultório</p>
                </div>
            </div>

            <p className="text-neutral-400 text-sm mb-8 leading-relaxed flex-grow">
                Uma experiência imersiva para quem está na região. Você agenda um horário no meu consultório para realizarmos a avaliação física com equipamentos clínicos (Adipômetro/Bioimpedância). O planejamento do treino segue pelo App.
            </p>

            <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-white w-5 h-5 shrink-0" />
                    <span className="text-white text-sm font-medium">Avaliação física com equipamentos clínicos</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-white w-5 h-5 shrink-0" />
                    <span className="text-white text-sm font-medium">Análise postural "olho no olho"</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-white w-5 h-5 shrink-0" />
                    <span className="text-white text-sm font-medium">Ideal para quem busca contato presencial</span>
                </li>
            </ul>

            <a href="#presencial" className="mt-auto block w-full py-4 text-center bg-gold-500 text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-400 transition-all rounded-sm shadow-lg shadow-gold-500/20">
                Ver detalhes presenciais
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
