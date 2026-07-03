import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import sophieWelcome from "@/assets/sophie-welcome.png";
import { Video, MessageCircle, BookOpen, UserCheck } from "lucide-react";

const cards = [
  {
    icon: UserCheck,
    title: "Objetivos & Avaliação",
    text: (
      <>
        Poderá explicar os <strong>seus objetivos</strong> e até <strong>ser avaliado</strong>, caso não seja iniciante
      </>
    ),
    bg: "bg-coral text-coral-foreground",
  },
  {
    icon: Video,
    title: "Dinâmica & Método",
    text: (
      <>
        Vai entender a <strong>dinâmica das aulas</strong>, conhecer o <strong>método</strong> e o funcionamento do curso
      </>
    ),
    bg: "bg-primary text-primary-foreground",
  },
  {
    icon: BookOpen,
    title: "Materiais Didáticos",
    text: (
      <>
        Vai conhecer os <strong>materiais didáticos</strong>
      </>
    ),
    bg: "bg-cream text-cream-foreground",
  },
  {
    icon: MessageCircle,
    title: "Tirar Dúvidas",
    text: (
      <>
        Poderá tirar <strong>todas suas dúvidas</strong> para tomar a <strong>sua decisão</strong>
      </>
    ),
    bg: "bg-card text-card-foreground shadow-card",
  },
];

const TalkToSophieSection = () => (
  <section id="fale-sophie" className="py-20 md:py-28 bg-cream">
    <div className="container mx-auto px-4">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Fale com a Sophie
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
            Após recebermos seu cadastro, vamos combinar pelo WhatsApp um horário para você bater um papo com a Prof.ª Sophie.
          </p>
          <p className="font-display text-lg md:text-xl font-bold text-red-600">
            Quando você conversar com a prof.ª Sophie, você ....
          </p>
        </div>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className={`p-6 rounded-2xl h-full ${c.bg}`}>
                <c.icon className="w-8 h-8 mb-4 opacity-80" />
                <p className="text-sm leading-relaxed opacity-90">{c.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Sophie image + CTA */}
        <FadeIn delay={0.2}>
          <div className="text-center">
            <img
              src={sophieWelcome}
              alt="Prof.ª Sophie Monginet"
              className="w-80 h-80 object-cover object-top mx-auto mb-8 rounded-2xl"
              loading="lazy"
              width={400}
              height={400}
            />
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
  </section>
);

export default TalkToSophieSection;
