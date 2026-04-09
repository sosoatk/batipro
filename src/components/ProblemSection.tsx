import { ShieldCheck, CurrencyEur, Wrench } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const points = [
  {
    icon: ShieldCheck,
    title: "Fiabilité garantie",
    desc: "Chaque chantier est assuré et supervisé par un chef de projet dédié. Zéro mauvaise surprise.",
  },
  {
    icon: CurrencyEur,
    title: "Transparence des prix",
    desc: "Devis détaillé ligne par ligne. Pas de coûts cachés, pas de suppléments imprévus.",
  },
  {
    icon: Wrench,
    title: "Expertise technique",
    desc: "Plus de 15 ans d'expérience sur tous types de projets, du gros œuvre aux finitions haut de gamme.",
  },
];

export default function ProblemSection() {
  const ref = useScrollAnimation();

  return (
    <section id="solution" className="py-24 bg-muted/50">
      <div ref={ref} className="container mx-auto px-6 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Pourquoi nous choisir&nbsp;?
        </h2>
        <p className="text-body text-center mt-4 max-w-xl mx-auto">
          Nous comprenons vos inquiétudes : retards, dépassements de budget, malfaçons.
          C'est exactement ce que nous avons éliminé.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {points.map((p) => (
            <div key={p.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-5">
                <p.icon size={28} weight="light" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-body mt-2 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
