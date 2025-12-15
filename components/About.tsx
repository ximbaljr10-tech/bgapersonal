import React from 'react';
import { Instagram, Award, Users, GraduationCap, Medal, Heart } from 'lucide-react';
import { motion } from 'framer-motion'; // Assumindo que você já tem framer-motion, se não, pode remover o motion.div

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Elements subtle */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-900 to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LADO ESQUERDO: A Imagem de Impacto (Antes e Depois ou Foto Profissional) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative group">
              {/* Borda Decorativa Dourada */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900">
                 {/* SUGESTÃO: Use a imagem 'image_e86dd2.jpg' (Militar vs Shape atual) aqui. 
                     Ela mostra disciplina e resultado prático. */}
                <img 
                  src="/media/hero.png" 
                  alt="Cláudio Braga - Transformação" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Badge Flutuante */}
                <div className="absolute bottom-4 right-4 bg-black/90 border border-gold-500/30 p-4 rounded backdrop-blur-sm shadow-2xl">
                    <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Experiência</p>
                    <p className="text-white font-heading font-bold text-xl">DESDE 2013</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: A História e Autoridade */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-gold-500"></span>
                <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">Trajetória & Propósito</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                MUITO MAIS QUE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  APENAS TREINO
                </span>
              </h2>
            </div>

            <p className="text-neutral-400 text-lg leading-relaxed">
              Minha missão vai além da estética. Como <strong>especialista em glúteos e definição abdominal</strong>, 
              eu trago a disciplina da minha formação militar combinada com a ciência da Educação Física para transformar a autoestima de mulheres.
            </p>

            {/* Timeline baseada nas imagens */}
            <div className="space-y-6 border-l border-neutral-800 pl-6 ml-2">
              
              {/* Item 1: Graduação e Militar */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-gold-500"></div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <GraduationCap size={18} className="text-gold-500" />
                  Base Sólida (2013)
                </h3>
                <p className="text-neutral-500 text-sm mt-1">
                  Graduado em Educação Física conciliando plantões do serviço militar. A disciplina inegociável nasceu aqui.
                </p>
              </div>

              {/* Item 2: A Motivação (Filha) */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-gold-500"></div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Heart size={18} className="text-gold-500" />
                  O Combustível (2014)
                </h3>
                <p className="text-neutral-500 text-sm mt-1">
                  O nascimento da minha filha acendeu a chama de crescer profissionalmente. Todo meu esforço é para dar qualidade de vida e exemplo.
                </p>
              </div>

              {/* Item 3: Personal Trainer Elite */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-gold-500"></div>
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Medal size={18} className="text-gold-500" />
                  Especialista (Hoje)
                </h3>
                <p className="text-neutral-500 text-sm mt-1">
                  Atuando como Personal Trainer desde 2016, liderei a transformação de mais de 2.500 vidas através do Time Braga.
                </p>
              </div>

            </div>

            {/* Grid de Estatísticas */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-neutral-900/50 p-4 border border-neutral-800 rounded hover:border-gold-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-gold-500" size={24} />
                  <span className="text-2xl font-bold text-white">+2.500</span>
                </div>
                <p className="text-xs text-neutral-400 uppercase">Vidas Transformadas</p>
              </div>
              
              <div className="bg-neutral-900/50 p-4 border border-neutral-800 rounded hover:border-gold-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-gold-500" size={24} />
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <p className="text-xs text-neutral-400 uppercase">Foco em Estética Fem.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="https://instagram.com/braga.personal" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white bg-neutral-800 hover:bg-neutral-700 px-6 py-3 rounded-full transition-all border border-neutral-700 hover:border-gold-500 group"
              >
                <Instagram size={20} className="text-gold-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium tracking-wide">Acompanhe no Instagram</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
