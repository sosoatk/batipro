import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Êtes-vous assurés pour les travaux ?",
    a: "Oui, nous disposons d'une assurance décennale et d'une responsabilité civile professionnelle couvrant l'ensemble de nos chantiers.",
  },
  {
    q: "Quelle est votre zone d'intervention ?",
    a: "Nous intervenons principalement en Île-de-France, dans un rayon de 80 km autour de Paris. Pour les projets importants, nous pouvons étudier des déplacements plus lointains.",
  },
  {
    q: "Quel est le délai moyen pour un chantier de rénovation ?",
    a: "Comptez entre 4 et 10 semaines selon l'ampleur du projet. Un planning précis vous est remis dès la signature du devis.",
  },
  {
    q: "Proposez-vous un accompagnement pour les autorisations ?",
    a: "Absolument. Nous vous assistons dans les démarches administratives : permis de construire, déclarations préalables et conformité réglementaire.",
  },
];

export default function FAQSection() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div ref={ref} className="container mx-auto px-6 animate-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Questions fréquentes
        </h2>
        <p className="text-body text-center mt-4 max-w-xl mx-auto">
          Tout ce que vous devez savoir avant de lancer votre projet.
        </p>

        <div className="max-w-2xl mx-auto mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                {faq.q}
                <CaretDown
                  size={18}
                  weight="light"
                  className={`shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"
                }`}
              >
                <p className="text-body text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-primary">
            Prêt à concrétiser votre projet&nbsp;?
          </h3>
          <p className="text-body mt-3 max-w-md mx-auto">
            Contactez-nous dès aujourd'hui et recevez votre devis personnalisé sous 48 heures.
          </p>
          <a
            href="mailto:contact@batipro.fr"
            className="btn-neumorph inline-block px-8 py-4 text-lg mt-8"
          >
            Demander mon devis gratuit
          </a>
        </div>
      </div>
    </section>
  );
}
