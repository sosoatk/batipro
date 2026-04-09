import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-bold text-primary-foreground">
              BâtiPro<span className="text-accent">.</span>
            </h4>
            <p className="text-primary-foreground/50 text-sm mt-3 font-light leading-relaxed">
              Entreprise de bâtiment spécialisée en rénovation et construction.
              Plus de 15 ans d'expérience au service de vos projets.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a href="tel:+33100000000" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Phone size={16} weight="light" /> 01 00 00 00 00
              </a>
              <a href="mailto:contact@batipro.fr" className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <EnvelopeSimple size={16} weight="light" /> contact@batipro.fr
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <MapPin size={16} weight="light" /> France
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="space-y-2">
              {["Accueil", "Services", "Témoignages", "FAQ"].map((label) => (
                <button
                  key={label}
                  onClick={() =>
                    document
                      .querySelector(`#${label === "Accueil" ? "hero" : label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} BâtiPro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
