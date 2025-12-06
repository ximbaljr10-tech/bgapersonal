import React from 'react';
import { Instagram, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative border-l-4 border-gold-500 pl-8 py-4">
              <h2 className="text-4xl font-heading font-bold text-white mb-2">
                QUEM É O <br /><span className="text-gold-500">TREINADOR BRAGA?</span>
              </h2>
            </div>
            
            <p className="text-neutral-300 mt-6 leading-relaxed mb-6">
              Sou especialista em treinamento voltado para estética feminina, com foco total em desenvolvimento de glúteos e definição abdominal (eliminar a pochete).
            </p>
            <p className="text-neutral-300 leading-relaxed mb-8">
              Minha missão é levar o acompanhamento de um personal trainer de elite para o seu celular, permitindo que você tenha resultados expressivos treinando onde quiser, com a segurança de um protocolo validado por mais de 1.500 alunos.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-neutral-900 p-4 border-t-2 border-gold-500">
                <Users className="text-gold-500 mb-2 w-8 h-8" />
                <h4 className="text-2xl font-bold text-white">+1.500</h4>
                <p className="text-xs text-neutral-400 uppercase tracking-wider">Alunos Atendidos</p>
              </div>
              <div className="bg-neutral-900 p-4 border-t-2 border-gold-500">
                <Award className="text-gold-500 mb-2 w-8 h-8" />
                <h4 className="text-2xl font-bold text-white">100%</h4>
                <p className="text-xs text-neutral-400 uppercase tracking-wider">Focado em Resultado</p>
              </div>
            </div>

            <a 
              href="https://instagram.com/braga.personal" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors font-bold uppercase tracking-widest text-sm"
            >
              <Instagram size={20} />
              Siga no Instagram
            </a>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
             {/* Profile Image Placeholder */}
            <div className="relative mx-auto w-3/4 aspect-[3/4] bg-neutral-800 rounded-sm overflow-hidden border-2 border-gold-500/20 p-2">
               <div className="w-full h-full bg-black overflow-hidden relative">
                  <img 
                    src="https://picsum.photos/600/800?grayscale" 
                    alt="Treinador Braga" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-6 left-6">
                    <p className="text-gold-500 font-bold tracking-widest uppercase text-sm">Treinador</p>
                    <p className="text-white font-heading font-bold text-2xl">CLÁUDIO BRAGA</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;