import { Wall, HouseLine, PaintBrush } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Wall,
    title: "Maçonnerie & Gros Œuvre",
    desc: "Fondations, murs porteurs, dalles et structures. Nous construisons sur des bases solides pour des projets durables.",
  },
  {
    icon: HouseLine,
    title: "Rénovation Complète",
    desc: "De la démolition à la livraison, nous transformons votre espace de vie selon vos envies et votre budget.",
  },
  {
    icon: PaintBrush,
    title: "Finitions — Peinture & Sols",
    desc: "Peinture décorative, pose de carrelage, parquet et revêtements. Le souci du détail pour un résultat impeccable.",
  },
];

export default function ServicesSection() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-24">
      <div ref={ref} className="container mx-auto px-6 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Nos expertises
        </h2>
        <p className="text-body text-center mt-4 max-w-xl mx-auto">
          Trois pôles de compétences pour couvrir l'ensemble de votre projet.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="glass-card p-8 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <s.icon size={28} weight="light" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-body mt-3 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
