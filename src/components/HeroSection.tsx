import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Chantier de construction professionnel"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-tight opacity-0 animate-fade-up"
        >
          Un site aussi solide
          <br />
          que vos fondations
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto font-light opacity-0 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Rénovation et construction réalisées dans les délais, au prix convenu.
          Votre tranquillité d'esprit est notre priorité.
        </p>
        <div className="mt-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#faq"
            className="btn-neumorph inline-block px-8 py-4 text-lg"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Demander mon devis
          </a>
        </div>
      </div>
    </section>
  );
}
