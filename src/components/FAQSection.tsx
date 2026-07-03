import FadeIn from "./FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quando vou falar francês fluentemente?",
    a: (
      <>
        <p className="mb-3">
          Cada um tem uma maneira de interpretar o tal do “fluente”. O interessante é você entender o idioma tranquilamente, ser capaz de se comunicar, ler e escrever bem. Mas sobretudo, encontrar outras palavras para se expressar, ao invés de querer traduzir a palavra que não sabe.
        </p>
        <p className="mb-3">
          A ordem natural do aprendizado de um idioma é identificar os sons das palavras estudadas e depois verbalizar. Da mesma forma que aprendemos quando criança. Sempre você vai entender o “porquê” e como se faz.
        </p>
        <p>
          Dê “tempo ao tempo”. Seja paciente com você; é a melhor dica que posso te dar, o resto vem sozinho. Se você fizer todas as aulas, as atividades necessárias e estiver comprometido, você vai atingir um bom nível muito rápido.
        </p>
      </>
    ),
  },
  {
    q: "Quais são e quanto tempo leva cada nível?",
    a: (
      <>
        <p className="mb-3">
          O CEFR – Quadro Europeu Comum de Referência para Línguas, é um padrão internacionalmente reconhecido para descrever a proficiência em um idioma. Foi determinado um certo número de horas que permitem saber aproximadamente em quanto tempo você vai atingir cada nível, com acompanhamento de um bom professor:
        </p>
        <ul className="list-disc pl-5 mb-3 space-y-1">
          <li><strong>Nível A1:</strong> de 80 a 100 h</li>
          <li><strong>Nível A2:</strong> + de 100 a 120 h</li>
          <li><strong>Nível B1:</strong> + de 150 a 180 h</li>
          <li><strong>Nível B2:</strong> + de 200 a 250 h</li>
        </ul>
        <p>
          Para você ter uma ideia, o nível B2 é o nível mínimo que se exige para você estudar nas universidades estrangeiras que exigem o francês.
        </p>
      </>
    ),
  },
  {
    q: "Como funciona o contrato?",
    a: (
      <>
        <p className="mb-3">
          O contrato é semestral, e você renova a cada semestre de acordo com seu interesse.
        </p>
        <ul className="list-disc pl-5 mb-3 space-y-1">
          <li><strong>1º semestre letivo:</strong> começa no final de janeiro e termina no final de junho.</li>
          <li><strong>2º semestre:</strong> começa na 2ª semana de julho e termina na última semana de novembro.</li>
        </ul>
        <p className="italic text-xs mt-2 opacity-80">
          * Caso você inicie o curso fora deste período, você pagará o semestre proporcionalmente. Nada mais justo, né?
        </p>
      </>
    ),
  },
  {
    q: "Por onde devo participar da aula?",
    a: (
      <>
        <p>
          Pelo computador ou tablet, devido ao tamanho da tela. Pelo telefone não é recomendado.
        </p>
      </>
    ),
  },
  {
    q: "O que acontece se eu perder uma aula?",
    a: (
      <>
        <p className="mb-3">
          Fique tranquilo! É só você avisar com antecedência, que vamos lhe enviar a aula gravada. Se tiver dúvidas depois, estaremos disponíveis para te ajudar.
        </p>
        <p>
          Lembre-se: <strong>COMPROMETIMENTO e REGULARIDADE</strong> é a chave do sucesso!
        </p>
      </>
    ),
  },
  {
    q: "Tem suporte?",
    a: (
      <>
        <p>
          <strong>7 dias/semana</strong> – é só mandar sua dúvida por WhatsApp ou por e-mail que será respondida o mais rápido possível.
        </p>
      </>
    ),
  },
  {
    q: "As aulas têm horário fixo?",
    a: (
      <>
        <p className="mb-3">
          Sua turma (ou aula individual) terá um horário fixo durante a semana. A REGULARIDADE e o COMPROMISSO com os encontros semanais são alguns dos fatores mais importantes para seu sucesso.
        </p>
        <p>
          Não abra mão desse compromisso e não agende outro compromisso no mesmo horário da aula. Esse é seu horário, é o seu momento.
        </p>
      </>
    ),
  },
  {
    q: "Como funciona o ZOOM?",
    a: (
      <>
        <p className="mb-3">
          Todos podem conversar em tempo real com a professora e com os colegas. Como são apenas 7 alunos na sala de aula, a interação é realmente como uma aula presencial.
        </p>
        <p>
          Não haverá custo para utilização do ZOOM. Apenas você tem que instalar o aplicativo e informaremos o número da sala e senha para você acessar a aula.
        </p>
      </>
    ),
  },
  {
    q: "Como faço para cancelar o curso?",
    a: (
      <>
        <p className="mb-3">
          Durante o seu 1º contrato, você tem as primeiras <strong>08 horas/aulas de garantia incondicional</strong>. Neste período, o reembolso será de 100% do valor do curso. Após este período, o cancelamento se faz conforme as regras do contrato.
        </p>
        <p>
          A partir do seu 2º contrato, os cancelamentos se fazem conforme as regras do contrato.
        </p>
      </>
    ),
  },
];

const FAQSection = () => (
  <section id="perguntas" className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-3xl">
      <FadeIn>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
          Perguntas frequentes
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl bg-cream px-6 border-none">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  </section>
);

export default FAQSection;
