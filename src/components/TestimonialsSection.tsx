import { useState, useEffect } from "react";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Marie D.",
    project: "Rénovation appartement 80m² — Paris 11e",
    text: "Travaux livrés en 6 semaines, exactement dans le budget annoncé. L'équipe a été irréprochable du début à la fin.",
    rating: 5,
  },
  {
    name: "Laurent P.",
    project: "Extension maison — Versailles",
    text: "Nous avons gagné 40m² grâce à une extension parfaitement intégrée. Le résultat dépasse nos attentes.",
    rating: 5,
  },
  {
    name: "Sophie & Marc T.",
    project: "Réfection toiture et façade — Nanterre",
    text: "Professionnalisme exemplaire. Le chef de chantier nous tenait informés chaque semaine. Nous recommandons sans hésiter.",
    rating: 5,
  },
  {
    name: "Jean-Claude R.",
    project: "Gros œuvre villa neuve — Fontainebleau",
    text: "De la dalle aux finitions, tout a été réalisé avec soin. Une entreprise sérieuse et à l'écoute.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) =>
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div ref={ref} className="container mx-auto px-6 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-foreground">
          Ils nous font confiance
        </h2>

        <div className="mt-16 max-w-2xl mx-auto text-center relative">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={20} weight="fill" className="text-accent" />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl text-primary-foreground/80 font-light italic leading-relaxed min-h-[80px]">
            « {t.text} »
          </blockquote>
          <p className="mt-6 font-semibold text-primary-foreground">{t.name}</p>
          <p className="text-sm text-primary-foreground/50 mt-1">{t.project}</p>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors"
              aria-label="Précédent"
            >
              <CaretLeft size={18} weight="light" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-accent w-6" : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors"
              aria-label="Suivant"
            >
              <CaretRight size={18} weight="light" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
