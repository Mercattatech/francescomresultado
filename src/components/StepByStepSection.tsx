import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { Clipboard, MessageCircle, Mail, FileText, Sparkles } from "lucide-react";

const StepByStepSection = () => (
  <section id="passo-a-passo" className="bg-muted py-20 md:py-28">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
          Passo a passo
        </h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          {
            num: "1.",
            icon: Clipboard,
            title: "Cadastro",
            text: (
              <>
                <strong>Cadastre-se</strong> na página
              </>
            ),
          },
          {
            num: "2.",
            icon: MessageCircle,
            title: "Bate-papo",
            text: (
              <>
                <strong>Agende um bate papo</strong> com a Prof.ª Sophie
              </>
            ),
          },
          {
            num: "3.",
            icon: Mail,
            title: "E-mail",
            text: (
              <>
                <strong>Receba no seu e-mail</strong>: os valores, opções de horários e um link de algumas aulas para você assistir e ter certeza que escolheu o lugar certo
              </>
            ),
          },
          {
            num: "4.",
            icon: FileText,
            title: "Matrícula",
            text: (
              <>
                Gostou? Vamos lhe enviar o <strong>formulário de matrícula</strong>, o seu <strong>contrato</strong> e o <strong>link de pagamento</strong>
              </>
            ),
          },
          {
            num: "5.",
            icon: Sparkles,
            title: "Facilidade",
            text: (
              <>
                <strong>Rápido e simples.</strong> Tudo para facilitar para você.
              </>
            ),
          },
        ].map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="text-center flex flex-col items-center">
              <step.icon className="w-8 h-8 text-coral mb-3 opacity-90" />
              <h3 className="font-display text-xl md:text-2xl font-bold text-coral mb-3">
                {step.num} {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div className="text-center mt-14">
          <Link
            to="/contato"
            className="inline-block bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-full shadow-card hover:shadow-elevated hover:scale-[1.02] transition-all"
          >
            Quero falar com a Sophie
          </Link>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default StepByStepSection;
