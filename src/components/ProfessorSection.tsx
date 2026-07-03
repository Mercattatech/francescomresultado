import FadeIn from "./FadeIn";
import sophieImg from "@/assets/sophie-double-thumbs.png";
import { Link } from "react-router-dom";

const ProfessorSection = () => (
  <section id="professora" className="py-0">
    {/* Full-width split: image left, text right */}
    <div className="grid lg:grid-cols-2 min-h-[700px]">
      <div className="relative overflow-hidden min-h-[450px] lg:min-h-0">
        <img
          src={sophieImg}
          alt="Sophie Monginet"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
      </div>
      <div className="bg-cream p-10 lg:p-16 xl:p-20 flex items-center">
        <FadeIn delay={0.1}>
          <div>
            <span className="text-sm font-bold text-coral uppercase tracking-wider mb-4 block">Conheça sua professora</span>
            <h2 className="font-display text-2xl md:text-2xl xl:text-2xl font-regular text-foreground mb-8 leading-[1.15]">
              Salut!
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Como uma típica francesa, quero falar sem rodeios com você: <strong className="text-foreground">“A verdade de como aprender francês”</strong>.
              </p>
              <p>
                Se você acha que aprender francês é complicado, a culpa não é sua. É que muitos cursos ensinam de forma aleatória, com apenas frases para decorar, <strong className="text-foreground">nada organizado</strong>. Além disso, <strong className="text-foreground">não dão prioridade à leitura e a escrita</strong>, deixando você com grandes lacunas. <strong className="text-foreground">O meu curso é totalmente ao contrário</strong>.
              </p>
              <p>
                Não sou apenas nativa; tenho <strong className="text-foreground">sólida formação pedagógica e muita experiência</strong>. Sei exatamente o caminho para te ensinar francês corretamente, de forma prazerosa e descomplicada. Minha metodologia é fruto de muitos anos de experiência, sempre atualizada com novas técnicas de ensino.
              </p>
              <p>
                Sou formada em Marketing, mas sempre fui apaixonada por idiomas e pela educação. Já estudei inglês, alemão, espanhol, português (autodidata) e língua dos sinais. O fato de ter estudado tantos idiomas, <strong className="text-foreground">reforça minha experiência e conhecimento para lhe ensinar francês corretamente</strong>.
              </p>
              <p>
                Iniciei minha formação na Inglaterra, dei aulas em Londres e em Paris, até me apaixonar pelo Brasil. Fui professora em duas <strong className="text-foreground">universidades</strong> e trabalhei como <strong className="text-foreground">tradutora e interprete</strong>. Já são centenas de alunos que alcançaram a fluência em francês, além de que, TODOS os alunos que prestaram os exames de proficiência, <strong className="text-foreground">foram aprovados</strong>.
              </p>
              <p>
                Vamos conversar? <strong className="text-foreground">Será um prazer te conhecer</strong>. É só se cadastrar pelo botão <strong className="text-foreground">“Fale com a Sophie”</strong>
              </p>
              <p>
                Tenho certeza que você vai gostar!
              </p>
            </div>
            <div className="mt-8">
              <p className="font-display text-base italic text-muted-foreground mb-6">
                Au revoir!<br />
                Sophie Monginet
              </p>
              <Link
                to="/contato"
                className="inline-block bg-coral text-coral-foreground font-semibold px-8 py-3.5 rounded-full shadow-card hover:shadow-elevated hover:scale-[1.02] transition-all"
              >
                Fale com a Sophie
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default ProfessorSection;
