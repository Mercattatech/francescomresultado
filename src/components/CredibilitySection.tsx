import FadeIn from "./FadeIn";
import { Award, Star, ShieldCheck, Trophy } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stats = [
  { icon: Award, value: "+ de 25 anos", label: "de experiência no ensino do francês.", bg: "bg-coral text-coral-foreground" },
  { icon: Star, value: "+ de centenas", label: "de alunos aprovaram a metodologia", bg: "bg-primary text-primary-foreground" },
  { icon: ShieldCheck, value: "100%", label: "de aprovação dos alunos em exames de proficiência", bg: "bg-mint text-mint-foreground" },
  { icon: Trophy, value: "SuperProf", label: "Uma das melhores professoras avaliadas na plataforma.", bg: "bg-dark text-dark-foreground" },
];

const videoTestimonials: { title: string; youtubeUrl: string }[] = [
  { title: "Depoimento em vídeo 1", youtubeUrl: "https://youtu.be/g3Fxto6GIno?si=6vkqKkkFQbC8PbbQ" },
  { title: "Depoimento em vídeo 2", youtubeUrl: "https://youtu.be/tQOs4tK8VMo?si=-7Hdmom0paAs7JIX" },
  { title: "Depoimento em vídeo 3", youtubeUrl: "https://youtu.be/P3lS3oKjfIU?si=ONjJplST7BX3cKcJ" },
  { title: "Depoimento em vídeo 4", youtubeUrl: "https://youtu.be/tRxGo500ylk?si=H1lMk_aCBvmKlCGj" },
  { title: "Depoimento em vídeo 5", youtubeUrl: "https://youtu.be/7BMKSjzEubg?si=nfdc4TxIewGwRf5x" },
  { title: "Depoimento em vídeo 6", youtubeUrl: "https://youtu.be/raYFvHvR1KU?si=oUTOu1Zv2r3VxEam" },
];

function toYoutubeEmbedSrc(url: string): string {
  const trimmed = url.trim();
  const channelMatch = trimmed.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/);
  if (channelMatch) {
    const uploadsListId = channelMatch[1].replace(/^UC/, "UU");
    return `https://www.youtube.com/embed/videoseries?list=${uploadsListId}`;
  }
  const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) {
    return `https://www.youtube.com/embed/${embedMatch[1]}`;
  }
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  return trimmed;
}

const testimonials = [
  {
    name: "Naiara",
    text: "Sophie é uma professora extremamente competente e atenta às necessidades do aluno! Tive aulas dinâmicas, completas e muito eficazes para melhora do meu francês! Recomendo fortemente!",
  },
  {
    name: "Ana Paula",
    text: "Já fiz aulas com muitos professores em escolas e aulas particulares. Ela é a melhor. Pontual, superdidática, corrige meus erros de gramática e pronúncia.",
  },
  {
    name: "Caio Vinicius",
    text: "Ótima professora precisa de técnica e didática. Muita técnica sem didática fica desinteressante, muita didática sem técnica fica vazia. A Sophie é a união perfeita de técnica e didática. Irretocável.",
  },
  {
    name: "Norte Brasil",
    text: "Sophie é muito didática no ensino da língua francesa. Iniciei totalmente do zero e evolui muito mais do que o esperado nesses oito meses de curso. Ela não se importa em esclarecer as dúvidas quantas vezes for necessário. Está sendo uma excelente experiência. Recomendo Muito!",
  },
  {
    name: "Ana Cristina",
    text: "Nunca tive uma professora de língua estrangeira tão dedicada e comprometida em fazer os alunos aprenderem quanto a Sophie! Ela é capaz de dar atenção individualizada a cada aluno, mesmo quando dá aula para turmas. É atenta para perceber as dificuldades de cada um e prepara materiais didáticos que vão ao encontro de cada necessidade. Procura sempre fazer aulas dinâmicas e interessantes! É uma professora nota mil!! Amei demais ser aluna dela! Super recomendo!!",
  },
  {
    name: "Anna",
    text: "Eu fui aluna da Sophie por mais de um ano e além de ter aprendido muito com ela, tive a oportunidade de fazer um intercâmbio para a França e ela me deu todo o apoio e direcionamento. Entrei no francês sem saber nada e depois de 12 meses cheguei no nível B2 (passei até no DELF). A Sophie me deu uma base excelente de gramática, vocabulário e pronúncia, que não encontrei em outros lugares que estudei depois. Morro de saudades dos cadernos de exercícios, das correções dinâmicas, dos temas das aulas, das risadas e momentos divertidos. Hoje já tenho meu certificado C1 do DALF e a Sophie continua me auxiliando, enviando material, trocando ideias e me ajudando a manter meu francês vivo. Prof.ª nota mil, indico de olhos fechados.",
  },
  {
    name: "Beatriz",
    text: "A Sophie não é apenas uma professora incrível, ela também é uma pessoa maravilhosa! Ela me ajudou a atingir o nível de francês necessário para que eu pudesse fazer meu intercâmbio na França em um prazo super apertado e partindo do zero. Soube me orientar perfeitamente sobre o que era mais importante, com técnicas ótimas de aprendizado! A melhor professora, e amiga, de todas!.",
  },
];


const CredibilitySection = () => (
  <section id="credibilidade" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <FadeIn>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-16 max-w-4xl mx-auto leading-tight">
          A palavra dos alunos é a prova da qualidade e credibilidade
        </h2>
      </FadeIn>

      {/* Stats in colored cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1} className="h-full">
            <div className={`text-center p-10 rounded-2xl h-full flex flex-col items-center justify-start ${s.bg}`}>
              <s.icon className="w-10 h-10 mx-auto mb-4 opacity-80 shrink-0" />
              <p className="font-display text-3xl font-bold">{s.value}</p>
              <p className="text-sm mt-2 opacity-90">{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Vídeos depoimentos — grid 3 colunas × 2 linhas */}
      <FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {videoTestimonials.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl overflow-hidden bg-muted/40 border border-border/60 shadow-sm aspect-video"
            >
              <iframe
                src={toYoutubeEmbedSrc(v.youtubeUrl)}
                title={v.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Depoimentos escritos — carrossel: 1 no mobile, 3 visíveis no desktop */}
      <FadeIn>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-3xl mx-auto relative px-10 md:px-14"
        >
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="basis-full"
              >
                <div className="p-8 rounded-2xl bg-cream border border-border/40 shadow-card h-full min-h-[200px]">
                  <span className="font-display text-4xl text-coral/40 block -mb-2 leading-none">“</span>
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">
                    {t.text}
                  </p>
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="w-4 h-[1px] bg-coral/50 inline-block" />
                    {t.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:left-2 border-border bg-background/90 shadow-sm" />
          <CarouselNext className="right-0 md:right-2 border-border bg-background/90 shadow-sm" />
        </Carousel>
      </FadeIn>
    </div>
  </section>
);

export default CredibilitySection;
