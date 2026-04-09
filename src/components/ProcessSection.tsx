import { FileText, CalendarCheck, Key } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: FileText,
    num: "01",
    title: "Devis gratuit sous 48h",
    desc: "Décrivez votre projet et recevez une estimation détaillée et sans engagement en deux jours ouvrés.",
  },
  {
    icon: CalendarCheck,
    num: "02",
    title: "Planification du chantier",
    desc: "Nous établissons ensemble un planning précis, avec des jalons clairs et un suivi hebdomadaire.",
  },
  {
    icon: Key,
    num: "03",
    title: "Livraison clé en main",
    desc: "Réception des travaux, nettoyage complet et remise des clés. Vous n'avez plus qu'à profiter.",
  },
];

export default function ProcessSection() {
  const ref = useScrollAnimation();

  return (
    <section id="process" className="py-24 bg-muted/50">
      <div ref={ref} className="container mx-auto px-6 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Comment ça marche&nbsp;?
        </h2>
        <p className="text-body text-center mt-4 max-w-xl mx-auto">
          Un processus simple en 3 étapes pour des travaux sans stress.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground text-xl font-bold mb-6 relative z-10">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-body mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
