import React from 'react';
import { Star } from 'lucide-react';

const Results: React.FC = () => {
  // Placeholder data for transformations
  const transformations = [1, 2, 3];

  return (
    <section id="results" className="py-20 bg-charcoal relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            RESULTADOS <span className="text-gold-500">REAIS</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Não é mágica, é método. Veja o que acontece quando você segue o protocolo BP Fitness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {transformations.map((item) => (
            <div key={item} className="bg-black p-4 border border-white/5 rounded-sm hover:border-gold-500/30 transition-colors">
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-neutral-800 group">
                {/* Visual split for Before/After */}
                <img 
                  src={`https://picsum.photos/400/500?random=${item}`} 
                  alt="Antes e Depois" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-xs text-white uppercase font-bold">Time Braga</div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-gold-500 text-gold-500" />)}
              </div>
              <p className="text-sm text-neutral-300 italic">"Consegui eliminar a pochete que me incomodava há anos em apenas 3 meses de consultoria."</p>
            </div>
          ))}
        </div>

        <div className="bg-gold-500 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-2">
              PRONTO PARA SUA TRANSFORMAÇÃO?
            </h3>
            <p className="text-black/80 font-medium">
              Pare de perder tempo com treinos genéricos. Tenha um especialista cuidando do seu resultado.
            </p>
          </div>
          
          <a 
            href="https://wa.me/5599999999999"
            className="relative z-10 px-8 py-4 bg-black text-gold-500 font-bold uppercase tracking-widest hover:bg-neutral-900 transition-colors shadow-xl shrink-0 whitespace-nowrap"
          >
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;