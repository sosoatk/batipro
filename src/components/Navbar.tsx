import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Pourquoi nous", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Processus", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-blur shadow-lg border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold tracking-tight text-primary">
            BâtiPro<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#faq")}
              className="btn-neumorph px-5 py-2.5 text-sm"
            >
              Demander un devis
            </button>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Ouvrir le menu"
          >
            <List size={24} weight="light" />
          </button>
        </div>
      </nav>

      {/* Mobile side panel */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60]" onClick={() => setMenuOpen(false)}>
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 bottom-0 w-72 bg-background shadow-2xl animate-slide-in-right p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end p-2 text-foreground"
              aria-label="Fermer le menu"
            >
              <X size={24} weight="light" />
            </button>
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-lg font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleClick("#faq")}
                className="btn-neumorph px-5 py-3 text-sm mt-4"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
