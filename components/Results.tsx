import React from 'react';
import { Star, Monitor, Building2, CheckCircle2 } from 'lucide-react';

const Results: React.FC = () => {
  // Transformações Online
  const onlineTransformations = [1, 2, 3];
  
  // Transformações Presenciais
  const presentialTransformations = [4, 5, 6];

  return (
    <section id="results" className="py-20 bg-charcoal relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-900/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            DEFINA SEU <span className="text-gold-500">PONTO DE PARTIDA</span>
          </h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            A excelência técnica do Treinador Braga está disponível em duas modalidades. 
            Escolha como deseja realizar sua avaliação inicial para começarmos o seu projeto.
          </p>
        </div>

        {/* Opções de Avaliação */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Avaliação Digital */}
          <div className="bg-black border border-white/10 rounded-sm p-8 hover:border-gold-500/30 transition-all relative group">
            <div className="absolute -top-3 left-8 bg-gold-500 px-4 py-1 text-xs font-bold text-black uppercase">
              A Mais Escolhida
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold-500/10 rounded-sm flex items-center justify-center">
                <Monitor className="text-gold-500" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Avaliação Digital
              </h3>
            </div>
            
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Ideal para quem quer praticidade e liberdade geográfica. Você envia fotos e vídeos guiados, 
              e eu realizo a análise biomecânica e postural à distância com precisão profissional.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-neutral-300 text-sm">
                <CheckCircle2 size={18} className="text-gold-500 shrink-0 mt-0.5" />
                Análise biomecânica completa por vídeo
              </li>
              <li className="flex items-start gap-2 text-neutral-300 text-sm">
                <CheckCircle2 size={18} className="text-gold-500 shrink-0 mt-0.5" />
                Avaliação postural com protocolo guiado
              </li>
              <li className="flex items-start gap-2 text-neutral-300 text-sm">
                <CheckCircle2 size={18} className="text-gold-500 shrink-0 mt-0.5" />
                Flexibilidade total de horário
              </li>
            </ul>

            <button className="w-full py-3 bg-gold-500 text-black font-bold uppercase tracking-wide hover:bg-gold-600 transition-colors">
              Ver Como Funciona
            </button>
          </div>

          {/* Avaliação Presencial */}
          <div className="bg-black border border-white/10 rounded-sm p-8 hover:border-gold-500/30 transition-all relative group">
            <div className="absolute -top-3 left-8 bg-white px-4 py-1 text-xs font-bold text-black uppercase">
              Experiência VIP
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold-500/10 rounded-sm flex items-center justify-center">
                <Building2 className="text-gold-500" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">
                Avaliação em Consultório
              </h3>
            </div>
            
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Uma experiência clínica completa. Você agenda um horário no meu consultório para 
              realizarmos a avaliação física utilizando equipamentos de alta tecnologia e análise corporal ao vivo.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-neutral-300 text-sm">
                <CheckCircle2 size={18} className="text-gold-500 shrink-0 mt-0.5" />
                Equipamentos de alta tecnologia
              </li>
              <li className="flex items-start gap-2 text-neutral-300 text-sm">
                <CheckCircle2 size={18} className="text-gold-500 shrink-0 mt-0.5" />
                Análise corporal ao vivo
              </li>
              <li className="flex items-start gap-2 text-neutral-300 text-sm">
                <CheckCircle2 size={18} className="text-gold-500 shrink-0 mt-0.5" />
                Experiência clínica personalizada
              </li>
            </ul>

            <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors">
              Ver Detalhes Presenciais
            </button>
          </div>
        </div>

        {/* Divider com mensagem */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-charcoal px-6 text-neutral-400 text-sm uppercase tracking-wider">
              Ainda em dúvida se funciona à distância?
            </span>
          </div>
        </div>

        {/* Título da seção de resultados */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            RESULTADOS <span className="text-gold-500">COMPROVADOS</span>
          </h3>
          <p className="text-neutral-400 max-w-3xl mx-auto">
            Veja transformações reais de alunos acompanhados tanto 100% Online quanto Presencial. 
            <strong className="text-white"> A excelência do método BP Fitness é a mesma, independente da modalidade.</strong>
          </p>
        </div>

        {/* Transformações 100% Online */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center">
              <Monitor className="text-black" size={20} />
            </div>
            <h4 className="text-xl font-heading font-bold text-white">
              Resultados 100% Online
            </h4>
            <div className="flex-1 h-px bg-gradient-to-r from-gold-500/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {onlineTransformations.map((item) => (
              <div key={item} className="bg-black p-4 border border-white/5 rounded-sm hover:border-gold-500/30 transition-colors">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-neutral-800 group">
                  <img 
                    src={`https://picsum.photos/400/500?random=${item}`} 
                    alt="Transformação Online" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-gold-500 px-3 py-1 text-xs text-black uppercase font-bold flex items-center gap-1">
                    <Monitor size={12} />
                    100% Online
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-gold-500 text-gold-500" />)}
                </div>
                <p className="text-sm text-neutral-300 italic">
                  "Eliminei 12kg sem nunca ter pisado no consultório. O acompanhamento online é tão preciso quanto presencial."
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transformações Presenciais */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
              <Building2 className="text-black" size={20} />
            </div>
            <h4 className="text-xl font-heading font-bold text-white">
              Resultados Presenciais
            </h4>
            <div className="flex-1 h-px bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {presentialTransformations.map((item) => (
              <div key={item} className="bg-black p-4 border border-white/5 rounded-sm hover:border-gold-500/30 transition-colors">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-neutral-800 group">
                  <img 
                    src={`https://picsum.photos/400/500?random=${item}`} 
                    alt="Transformação Presencial" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-white px-3 py-1 text-xs text-black uppercase font-bold flex items-center gap-1">
                    <Building2 size={12} />
                    Presencial
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={14} className="fill-gold-500 text-gold-500" />)}
                </div>
                <p className="text-sm text-neutral-300 italic">
                  "A experiência no consultório foi incrível, mas o método é o mesmo. Resultados garantidos!"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-black mb-2">
              PRONTO PARA SUA TRANSFORMAÇÃO?
            </h3>
            <p className="text-black/80 font-medium">
              Escolha sua modalidade e comece hoje. Mesma excelência, mesmos resultados.
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
