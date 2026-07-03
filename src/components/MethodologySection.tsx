import FadeIn from "./FadeIn";
import { CheckCircle, BookOpen, PenTool, FolderOpen, Target, Monitor, Headphones } from "lucide-react";

const sections = [
  {
    title: "Estrutura do Curso",
    icon: BookOpen,
    bg: "bg-card shadow-card",
    items: [
      (
        <>
          <strong>Respeito a lógica e a sequência correta do aprendizado do francês.</strong> Nada de coisas aleatórias. “Ninguém aprende a andar sem antes engatinhar, não é?”
        </>
      ),
      (
        <>
          <strong>Conteúdos pensados</strong> para as principais dificuldades dos brasileiros
        </>
      ),
      (
        <>
          Ensino dos sons através de <strong>muitos exercícios</strong> de leitura e correções na hora
        </>
      ),
      (
        <>
          <strong>Entendimento da estrutura do idioma</strong> para não ficar apenas repetindo frases
        </>
      ),
      (
        <>
          Organização: o sujeito, o pronome, o verbo, etc.; Tudo no lugar certo. <strong>Exatamente como o Francês nativo fala, lê, entende e escreve</strong>
        </>
      ),
      (
        <>
          As correções são feitas na hora <strong>para você não adquirir vícios de linguagem</strong>
        </>
      ),
      (
        <>
          Tudo isto é uma <strong>GARANTIA</strong>. Você se tornará independente muito rápido.
        </>
      ),
    ],
  },
  {
    title: "Muita Prática",
    icon: PenTool,
    bg: "bg-coral text-coral-foreground",
    items: [
      (
        <>
          <strong>Muitos exercícios</strong> para você vencer todos os obstáculos
        </>
      ),
      (
        <>
          Exercícios corrigidos <strong>individualmente</strong>. A prof.ª Sophie vai entender como você raciocina pra te ajudar melhor
        </>
      ),
      (
        <>
          <strong>Muita técnica e didática</strong> que tornam as aulas dinâmicas e eficientes
        </>
      ),
      (
        <>
          Todo conteúdo é aplicado através de <strong>situações reais e cotidianas</strong>
        </>
      ),
      (
        <>
          <strong>Conteúdos já estudados</strong> são sempre relembrados nas aulas posteriores
        </>
      ),
      (
        <>
          Você aprenderá com <strong>sotaques diferentes</strong> para acelerar sua compreensão.
        </>
      ),
    ],
  },
  {
    title: "Material Pedagógico",
    icon: FolderOpen,
    bg: "bg-cream",
    items: [
      (
        <>
          Material em PDF, com áudios explicativos, <strong>desenvolvido pela prof.ª Sophie</strong>
        </>
      ),
      (
        <>
          <strong>Livro de última geração</strong>, de acordo com o Quadro Europeu Comum de Referência para Línguas
        </>
      ),
      (
        <>
          <strong>Plataforma digital</strong> com inúmeras atividades complementares
        </>
      ),
      (
        <>
          Conteúdo no canal do YouTube, blog e <strong>envio semanal de informações culturais e dicas via WhatsApp.</strong>
        </>
      ),
    ],
  },
  {
    title: "Compromisso",
    icon: Target,
    bg: "bg-primary text-primary-foreground",
    items: [
      (
        <>
          <strong>Aprendizado equilibrado</strong> e simultâneo de todas as habilidades: ler, escrever, escutar e falar
        </>
      ),
      (
        <>
          <strong>Orientação</strong> na criação de um cronograma de estudos personalizado
        </>
      ),
      (
        <>
          Responsabilidade com os <strong>SEUS objetivos</strong>
        </>
      ),
      (
        <>
          <strong>Apoio</strong> para viagens, exames de proficiência e entrevistas de trabalho, entre outros
        </>
      ),
      (
        <>
          <strong>Metodologia fruto de mais de 25 anos de experiência</strong>, sempre atualizada com novas técnicas de ensino.
        </>
      ),
    ],
  },
];

const MethodologySection = () => (
  <section id="metodologia" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-4">
          Metodologia
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Sem fórmulas mágicas. Apenas método, dedicação e resultado real.
        </p>
      </FadeIn>

      {/* 2x2 grid of methodology cards with alternating colors */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {sections.map((section, si) => {
          const isLight = si === 0 || si === 2;
          return (
            <FadeIn key={section.title} delay={si * 0.1}>
              <div className={`p-8 md:p-10 rounded-2xl h-full ${section.bg}`}>
                <div className="flex items-center gap-3 mb-6">
                  <section.icon className={`w-8 h-8 ${isLight ? "text-coral" : "opacity-80"}`} />
                  <h3 className="font-display text-2xl font-semibold">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex gap-3 text-sm leading-relaxed">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? "text-coral" : "opacity-70"}`} />
                      <span className="opacity-90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* Como são as aulas + Suporte - side by side */}
      <div className="grid md:grid-cols-2 gap-6">
        <FadeIn>
          <div className="p-8 md:p-10 rounded-2xl bg-mint text-mint-foreground h-full">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-8 h-8 opacity-80" />
              <h3 className="font-display text-2xl font-semibold">Como são as aulas</h3>
            </div>
            <ul className="space-y-3 text-sm leading-relaxed text-mint-foreground">
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                <span>
                  <strong>Ao VIVO pelo ZOOM</strong>, interação 100% na hora com a prof.ª Sophie
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                <span>
                  <strong>Turmas super reduzidas</strong> de 2 horas/aulas por semana, ou pacote de <strong>aulas individuais</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                <span>
                  Cursos <strong>específicos</strong> para exames de proficiência
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                <span>
                  Ambiente descontraído: <strong>Você vai se sentir “em casa”</strong>
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                <span>
                  Tudo pensado <strong>para te deixar muito confortável</strong>, exatamente como nas aulas presenciais.
                </span>
              </li>
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="p-8 md:p-10 rounded-2xl bg-cream h-full">
            <div className="flex items-center gap-3 mb-6">
              <Headphones className="w-8 h-8 text-coral" />
              <h3 className="font-display text-2xl font-semibold text-foreground">Suporte</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span>
                  <strong>7 dias/semana</strong> por WhatsApp
                </span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span>
                  Se tiver que faltar, enviaremos a aula gravada com <strong>todo o suporte</strong>
                </span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default MethodologySection;

