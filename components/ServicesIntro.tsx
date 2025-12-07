import React from 'react';
import { Globe, MapPin, CheckCircle2, Smartphone, ShieldCheck, Zap, Star } from 'lucide-react';

const ServicesIntro: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-richblack overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-gold-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 md:w-[400px] md:h-[400px] bg-gold-500/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section - Otimizado para Mobile */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-2 mb-2">
            <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
            <span className="text-gold-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Padrão de Qualidade Braga
            </span>
            <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
          </div>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-black text-white leading-tight px-2">
            ESCOLHA SUA FORMA DE<br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600">
                ENTRAR PARA O TIME
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            </span>
          </h2>
          
          <p className="text-neutral-400 mt-4 md:mt-6 max-w-2xl mx-auto text-xs md:text-base leading-relaxed px-4">
            Minha metodologia é baseada na individualidade biológica. Seja à distância ou no consultório, 
            você terá um <strong className="text-white">protocolo desenhado exclusivamente</strong> para o seu corpo e objetivo.
          </p>
        </div>

        {/* Cards Container - Layout Mobile-First */}
        <div className="max-w-6xl mx-auto space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
          
          {/* CARD 1: ONLINE - Design Card Moderno */}
          <div className="group relative bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-1">
            
            {/* Header do Card com Ícone Grande */}
            <div className="relative bg-gradient-to-br from-neutral-800/50 to-transparent p-6 md:p-8 border-b border-white/5">
              <div className="absolute top-0 right-0 opacity-5 text-white/50">
                <Smartphone size={120} className="md:block hidden" />
                <Smartphone size={80} className="md:hidden" />
              </div>
              
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-neutral-700 to-neutral-800 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-gold-500/50 transition-all duration-300 shadow-lg">
                  <Smartphone size={24} className="md:w-7 md:h-7" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-1">
                    Consultoria Online
                  </h3>
                  <div className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full px-3 py-1">
                    <Zap className="w-3 h-3 text-gold-500" />
                    <span className="text-[10px] md:text-xs text-gold-500 font-bold tracking-wide uppercase">
                      Metodologia Validada
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                A escolha da maioria dos meus alunos. Utilizo um sistema avançado de análise visual para prescrever seu treino com precisão, onde quer que você esteja. <strong className="text-white">Os resultados são idênticos aos de quem avalia presencialmente</strong>, pois o método de treino é o mesmo.
              </p>

              {/* Lista de Benefícios com Design Moderno */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/20 transition-colors">
                  <div className="shrink-0 w-6 h-6 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <ShieldCheck className="text-gold-500 w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs md:text-sm leading-relaxed">
                    Protocolo validado com +1.500 alunos
                  </span>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/20 transition-colors">
                  <div className="shrink-0 w-6 h-6 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <CheckCircle2 className="text-gold-500 w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs md:text-sm leading-relaxed">
                    Análise biomecânica detalhada por vídeo
                  </span>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-gold-500/20 transition-colors">
                  <div className="shrink-0 w-6 h-6 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <CheckCircle2 className="text-gold-500 w-4 h-4" />
                  </div>
                  <span className="text-neutral-300 text-xs md:text-sm leading-relaxed">
                    Liberdade geográfica total
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <a 
                href="#methodology" 
                className="block w-full py-4 text-center border-2 border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 group-hover:border-gold-500/40"
              >
                Entender como funciona
              </a>
            </div>
          </div>

          {/* CARD 2: PRESENCIAL - Card Premium com Destaque */}
          <div className="group relative bg-gradient-to-br from-neutral-900 via-neutral-900 to-black border-2 border-gold-500/40 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:shadow-[0_0_60px_rgba(212,175,55,0.25)] transition-all duration-500 md:-translate-y-2 hover:-translate-y-3">
            
            {/* Badge Premium */}
            <div className="absolute -top-1 -right-1 md:top-4 md:right-4 z-20">
              <div className="bg-gradient-to-r from-gold-400 to-gold-600 text-black text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 md:px-4 py-1.5 md:py-2 rounded-bl-2xl md:rounded-full shadow-lg">
                ⭐ Experiência Premium
              </div>
            </div>

            {/* Header do Card Premium */}
            <div className="relative bg-gradient-to-br from-gold-500/10 via-neutral-800/50 to-transparent p-6 md:p-8 border-b border-gold-500/20">
              <div className="absolute top-0 right-0 opacity-5 text-gold-500/50">
                <MapPin size={120} className="md:block hidden" />
                <MapPin size={80} className="md:hidden" />
              </div>
              
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-gold-500/20">
                  <MapPin size={24} className="md:w-7 md:h-7" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-1">
                    Híbrida Presencial
                  </h3>
                  <div className="inline-flex items-center gap-1.5 bg-gold-500/20 border border-gold-500/30 rounded-full px-3 py-1">
                    <Star className="w-3 h-3 text-gold-500 fill-gold-500" />
                    <span className="text-[10px] md:text-xs text-gold-400 font-bold tracking-wide uppercase">
                      Experiência em Consultório
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo do Card Premium */}
            <div className="p-6 md:p-8 space-y-6">
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                Uma experiência imersiva para quem está na região. Você agenda um horário no meu consultório para realizarmos a avaliação física com equipamentos clínicos (Adipômetro/Bioimpedância). O planejamento do treino segue pelo App.
              </p>

              {/* Lista de Benefícios Premium */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500/10 transition-colors">
                  <div className="shrink-0 w-6 h-6 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-gold-400 w-4 h-4" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium leading-relaxed">
                    Avaliação física com equipamentos clínicos
                  </span>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500/10 transition-colors">
                  <div className="shrink-0 w-6 h-6 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-gold-400 w-4 h-4" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium leading-relaxed">
                    Análise postural "olho no olho"
                  </span>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gold-500/5 border border-gold-500/20 hover:bg-gold-500/10 transition-colors">
                  <div className="shrink-0 w-6 h-6 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <CheckCircle2 className="text-gold-400 w-4 h-4" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-medium leading-relaxed">
                    Ideal para quem busca contato presencial
                  </span>
                </div>
              </div>

              {/* CTA Button Premium */}
              <a 
                href="#presencial" 
                className="block w-full py-4 text-center bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02]"
              >
                Ver detalhes presenciais
              </a>
            </div>

            {/* Glow Effect Premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-gold-500/5 to-transparent pointer-events-none"></div>
          </div>

        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
