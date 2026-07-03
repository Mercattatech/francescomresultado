import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import sophieImg from "@/assets/hero-sophie.webp";
import eiffelHero from "@/assets/eiffel-tower-hero.jpg";
import { Video, Users, UserCheck, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Video,
    title: "Aulas ao VIVO pelo ZOOM",
    text: "Turmas máximo 6 alunos ou aulas individuais, interação 100% na hora com a professora, exatamente como nas aulas presenciais.",
    bg: "bg-coral text-coral-foreground",
  },
  {
    icon: Users,
    title: "Prática Real",
    text: "Pratique na hora com a professora e com outros colegas e viva situações reais.",
    bg: "bg-card text-card-foreground shadow-card",
  },
  {
    icon: UserCheck,
    title: "Você é o Foco",
    text: "A técnica de ensino respeita sua individualidade e sua forma de raciocinar. Metodologia aprimorada constantemente.",
    bg: "bg-cream text-cream-foreground",
  },
  {
    icon: BookOpen,
    title: "Independência",
    text: (
      <>
        Metodologia para você se tornar independente muito rápido{" "}
        <strong>(ler, escrever, escutar e falar)</strong>. Método de entendimento e não de repetição.
      </>
    ),
    bg: "bg-primary text-primary-foreground",
  },
];


const HeroSection = () => (
  <section id="inicio" className="relative">
    {/* Hero: full-width with background image overlay */}
    <div className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={eiffelHero}
          alt="Torre Eiffel ao pôr do sol"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video */}
          <FadeIn>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8KUmdLsH-04?si=yGQZZvos5oj1m7J4"
                title="Vídeo explicativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeIn>

          {/* Right: Headline + CTA */}
          <FadeIn delay={0.1}>
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <img
                  src={sophieImg}
                  alt="Sophie Monginet"
                  className="w-28 h-28 object-cover object-top rounded-full border-4 border-coral shadow-elevated"
                />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-[1.1] mb-6">
                [bra´ziw]<span className="text-coral">!</span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl">Francês com Resultado</span>
              </h1>
              <p className="text-lg text-background/80 leading-relaxed mb-4 max-w-lg">
                Aqui você vai muito além do que aprender francês.{" "}
                <strong className="text-background">Você vive experiências.</strong> É a sua porta de entrada para o mundo da Francofonia.
              </p>
              <p className="text-sm text-background/60 mb-8">
                Francês com Resultado é parte da [bra´ziw]! Idiomas e Intercâmbios. Desde 1999 se conectando com o mundo.
              </p>
              <Link
                to="/contato"
                className="inline-block bg-coral text-coral-foreground font-semibold px-10 py-4 rounded-full shadow-elevated hover:scale-[1.03] transition-all text-lg"
              >
                Quero falar com a Sophie
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>

    {/* Pillar cards: asymmetric colored grid like reference */}
    <div className="container mx-auto px-4 -mt-16 relative z-20 pb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className={`p-6 rounded-2xl h-full ${p.bg}`}>
              <p.icon className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">{p.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
