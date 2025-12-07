
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Feedbacks: React.FC = () => {
  const testimonials = [
    {
      name: "Fernanda Silva",
      stars: 5,
      text: "Eu estou muito satisfeita! Falei mil vezes pro Braga que ele quer me matar, mas o treino é muito bom kkkk.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Juliana Costa",
      stars: 5,
      text: "Indiquei para várias amigas porque amei. Vi muita diferença no meu corpo, vale muito a pena.",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Camila Oliveira",
      stars: 5,
      text: "Treino top demais! Nunca suei tanto na vida. A consultoria online funciona mesmo.",
      image: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ];

  return (
    <section className="relative w-full bg-black h-[850px] md:h-screen overflow-hidden">
      {/* 1. Background Texture */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/7hhG8mxM/Design-sem-nome-(35).png" 
          alt="Feedbacks Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      </div>

      {/* 2. Title - Top Anchored */}
      <div className="absolute top-8 md:top-12 left-0 w-full z-10 text-center px-4">
        <h3 className="text-xl md:text-4xl font-heading font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md">
          O que falam do <span className="text-gold-500">Time Braga</span>
        </h3>
        <div className="w-16 md:w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
      </div>

      {/* 3. Trainer Image - Increased height to overlap with cards */}
      <div className="absolute top-20 md:top-16 left-1/2 -translate-x-1/2 z-0 w-full h-[58vh] md:h-[75vh] flex items-start justify-center pointer-events-none">
         <img 
            src="https://i.postimg.cc/MTmYz0cZ/Design-sem-nome-(24).png" 
            alt="Treinador Braga" 
            className="h-full w-auto object-contain object-top opacity-100"
         />
      </div>

      {/* 4. Feedback Cards - Anchored to overlap waist */}
      <div className="absolute bottom-32 md:bottom-24 left-0 right-0 z-20 flex justify-center">
        <div className="relative w-full max-w-5xl h-[300px] md:h-[400px] flex items-center justify-center [perspective:1000px] transform scale-[0.80] md:scale-100 origin-bottom">
            
            {/* LEFT CARD */}
            <div className="absolute left-[-10px] md:left-4 top-1/2 -translate-y-1/2 w-[160px] md:w-80 bg-neutral-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-10 opacity-90 -rotate-12 scale-90 md:[transform:rotateY(-25deg)_scale(0.9)] transition-all">
                  <div className="flex items-center gap-2 mb-2">
                      <img src={testimonials[0].image} alt={testimonials[0].name} className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gold-500 grayscale" />
                      <div className="overflow-hidden">
                          <p className="text-white font-bold text-[10px] md:text-xs truncate">{testimonials[0].name}</p>
                          <div className="flex text-gold-500">
                              {[...Array(testimonials[0].stars)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                          </div>
                      </div>
                  </div>
                  <p className="text-neutral-300 text-[9px] md:text-xs italic line-clamp-4">"{testimonials[0].text}"</p>
            </div>

            {/* CENTER CARD (HIGHLIGHT) */}
            <div className="relative z-30 w-[200px] md:w-96 bg-black/80 backdrop-blur-xl border border-gold-500 p-5 md:p-8 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.25)] transform translate-y-2 md:translate-y-0">
                  <div className="absolute -top-3 -right-2 bg-gold-500 text-black text-[9px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase">Recente</div>
                  
                  <div className="flex items-center gap-3 mb-3">
                      <img src={testimonials[1].image} alt={testimonials[1].name} className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-gold-500 shadow-lg" />
                      <div>
                          <p className="text-white font-bold text-xs md:text-lg">{testimonials[1].name}</p>
                          <div className="flex text-gold-500 gap-0.5">
                              {[...Array(testimonials[1].stars)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                          </div>
                      </div>
                  </div>
                  <p className="text-neutral-200 text-xs md:text-base italic leading-relaxed">"{testimonials[1].text}"</p>
            </div>

            {/* RIGHT CARD */}
            <div className="absolute right-[-10px] md:right-4 top-1/2 -translate-y-1/2 w-[160px] md:w-80 bg-neutral-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl z-10 opacity-90 rotate-12 scale-90 md:[transform:rotateY(25deg)_scale(0.9)] transition-all">
                  <div className="flex items-center gap-2 mb-2 justify-end">
                      <div className="text-right overflow-hidden">
                          <p className="text-white font-bold text-[10px] md:text-xs truncate">{testimonials[2].name}</p>
                          <div className="flex text-gold-500 justify-end">
                              {[...Array(testimonials[2].stars)].map((_, i) => <Star key={i} size={8} fill="currentColor" />)}
                          </div>
                      </div>
                      <img src={testimonials[2].image} alt={testimonials[2].name} className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gold-500 grayscale" />
                  </div>
                  <p className="text-neutral-300 text-[9px] md:text-xs italic text-right line-clamp-4">"{testimonials[2].text}"</p>
            </div>

        </div>
      </div>

      {/* 5. CTA Button - Anchored Bottom */}
      <div className="absolute bottom-8 md:bottom-10 left-0 w-full z-40 text-center px-6">
          <a 
            href="https://wa.me/5599999999999"
            className="inline-block w-full md:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold uppercase tracking-widest rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform transform hover:-translate-y-1 text-sm md:text-base"
          >
            Quero ter esses resultados
          </a>
      </div>
    </section>
  );
};

export default Feedbacks;
