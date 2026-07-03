import FadeIn from "./FadeIn";
import { Link } from "react-router-dom";
import { Shuffle, Layers, GraduationCap, Globe, MessageSquare, Gem } from "lucide-react";

const items = [
  {
    icon: Shuffle,
    text: (
      <>
        Cansou de <strong>“pular de galho em galho”</strong> e não atingiu o <strong>SEU objetivo</strong>
      </>
    ),
  },
  {
    icon: Layers,
    text: (
      <>
        Quer aprender da <strong>forma correta, organizada</strong> e entender os <strong>“porquês”</strong> para não ficar apenas repetindo
      </>
    ),
  },
  {
    icon: GraduationCap,
    text: (
      <>
        Procura uma professora séria, com <strong>experiência, comprometida, com didática e técnica de ensino</strong>
      </>
    ),
  },
  {
    icon: Globe,
    text: (
      <>
        Quer se tornar <strong>independente</strong> e aplicar o idioma em qualquer situação com <strong>segurança</strong>
      </>
    ),
  },
  {
    icon: MessageSquare,
    text: (
      <>
        Quer <strong>tirar as dúvidas e conversar</strong> com a professora <strong>na hora</strong>
      </>
    ),
  },
  {
    icon: Gem,
    text: (
      <>
        Quer <strong>investir em qualidade</strong> e não em mágicas (“seja fluente em 6 meses”).
      </>
    ),
  },
];

const cardColors = [
  "bg-coral text-coral-foreground",
  "bg-primary text-primary-foreground",
  "bg-cream text-cream-foreground",
  "bg-mint text-mint-foreground",
  "bg-card shadow-card",
  "bg-coral text-coral-foreground",
];

const ForWhoSection = () => (
  <section id="para-quem" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-16">
          Para quem é o curso
        </h2>
      </FadeIn>

      {/* Colored cards grid like reference */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className={`p-6 rounded-2xl h-full ${cardColors[i]}`}>
              <item.icon className={`w-5 h-5 mb-3 ${i === 2 || i === 4 ? "text-coral" : "opacity-80"}`} />
              <p className={`text-sm leading-relaxed ${i === 2 || i === 4 ? "text-muted-foreground" : "opacity-90"}`}>
                {item.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <div className="text-center">
          <Link
            to="/contato"
            className="inline-block bg-coral text-coral-foreground font-semibold px-10 py-4 rounded-full shadow-card hover:shadow-elevated hover:scale-[1.02] transition-all"
          >
            Quero falar com a Sophie
          </Link>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ForWhoSection;

