
import React from 'react';
import { Flame, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const Presencial: React.FC = () => {
  return (
    <section id="presencial" className="py-20 bg-richblack relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative rounded-sm overflow-hidden border-2 border-gold-500/10 shadow-2xl">
              <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Treino Presencial com Braga" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-gold-500 p-6 rounded-sm shadow-xl hidden md:block">
              <p className="text-black font-bold text-3xl font-heading">1:1</p>
              <p className="text-black text-xs font-bold uppercase tracking-widest">Atendimento VIP</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="mb-8">
              <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">Experiência VIP</span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white mt-2 leading-tight">
                PERSONAL TRAINER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">PRESENCIAL</span>
              </h2>
              <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
                Para quem não aceita nada menos que o máximo. No presencial, eu assumo o controle total do seu treino. Você não precisa pensar em contar repetições, montar barras ou calcular descanso. 
                <span className="text-white font-bold"> Sua única tarefa é treinar até o limite.</span>
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-neutral-800 rounded-sm flex items-center justify-center border border-white/5">
                  <ShieldCheck className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Segurança Total</h4>
                  <p className="text-neutral-400 text-sm">Leve seu corpo ao extremo sem risco de lesão. Eu cuido da sua postura em cada milímetro do movimento.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-neutral-800 rounded-sm flex items-center justify-center border border-white/5">
                  <Flame className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Intensidade Real</h4>
                  <p className="text-neutral-400 text-sm">Você acha que treina pesado? Ao meu lado, você vai descobrir que seu corpo aguenta muito mais do que sua mente imagina.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-neutral-800 rounded-sm flex items-center justify-center border border-white/5">
                  <TrendingUp className="text-gold-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Ajuste Fino Diário</h4>
                  <p className="text-neutral-400 text-sm">Não existe "dia ruim". Eu adapto o treino na hora dependendo de como você está se sentindo, garantindo 100% de aproveitamento.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://wa.me/5599999999999"
                className="inline-block w-full text-center md:w-auto px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors shadow-lg"
              >
                Consultar Disponibilidade de Horário
              </a>
              <p className="text-neutral-500 text-xs mt-3 text-center md:text-left">
                * Vagas extremamente limitadas devido à agenda.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Presencial;
