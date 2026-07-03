import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  ArrowLeft, 
  Sparkles, 
  BookOpen, 
  Globe, 
  Compass, 
  Users,
  Heart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import sophieWelcome from "@/assets/sophie-welcome.png";

const WHATSAPP_URL = "https://wa.me/5514996671196";
const GROUP_URL = "https://chat.whatsapp.com/E3jbGRyNxpvEVRWOfcNslZ";

// Componente para partículas decorativas flutuantes com tipagem estrita
interface FloatingParticleProps {
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  delay: number;
  size?: number;
  top: string;
  left: string;
  duration?: number;
}

const FloatingParticle = ({ icon: Icon, delay, size = 24, top, left, duration = 8 }: FloatingParticleProps) => (
  <motion.div
    initial={{ y: 0, opacity: 0.15 }}
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    style={{ position: "absolute", top, left }}
    className="text-primary/10 pointer-events-none hidden md:block"
  >
    <Icon size={size} />
  </motion.div>
);

const ThankYouPage = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calcula a rotação limite de +/- 10 graus
    const rX = -(mouseY / height) * 20;
    const rY = (mouseX / width) * 20;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Variantes para animação em cascata (staggered)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const whatsappMessageUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(
    "Olá Sophie! Acabei de me inscrever no site e gostaria de agendar nossa conversa para planejar meus estudos de francês."
  )}`;

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden selection:bg-coral/20 selection:text-coral">
      <Navbar />
      <WhatsAppButton />

      {/* Gradientes e Malha de Fundo (Glow Effects) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/12 w-[35vw] h-[35vw] rounded-full bg-cream/80 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/12 w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-coral/5 blur-[160px]" />
      </div>

      {/* Partículas Flutuantes do Tema */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingParticle icon={Sparkles} size={28} top="15%" left="8%" delay={0} duration={7} />
        <FloatingParticle icon={BookOpen} size={32} top="35%" left="5%" delay={1.5} duration={9} />
        <FloatingParticle icon={Globe} size={36} top="20%" left="88%" delay={0.8} duration={8} />
        <FloatingParticle icon={Compass} size={30} top="65%" left="92%" delay={2} duration={10} />
        <FloatingParticle icon={Heart} size={24} top="75%" left="4%" delay={1.2} duration={7.5} />
      </div>

      {/* Conteúdo Principal */}
      <main className="flex-1 z-10 pt-28 pb-20 md:pt-36 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Coluna Esquerda: Imagem com 3D Tilt */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-5 flex flex-col justify-center"
            >
              {/* 3D Tilt Container */}
              <div className="w-full max-w-sm mx-auto lg:max-w-none" style={{ perspective: 1000 }}>
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-elevated bg-cream/40 border border-white/40 p-3 group cursor-pointer transition-all duration-300"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  animate={{
                    rotateX,
                    rotateY,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Elemento de profundidade 3D (Brilho dinâmico na borda) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] z-0">
                    <img
                      src={sophieWelcome}
                      alt="Prof.ª Sophie Monginet"
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                      width={400}
                      height={500}
                      loading="eager"
                    />
                    {/* Flag Badge */}
                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm border border-white/20 flex items-center gap-1.5 z-20">
                      <span className="inline-flex w-2.5 h-2.5 rounded-full bg-blue-600" />
                      <span className="inline-flex w-2.5 h-2.5 rounded-full bg-white border border-gray-100" />
                      <span className="inline-flex w-2.5 h-2.5 rounded-full bg-red-600" />
                      <span>Bonjour !</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Coluna Direita: Conteúdo de Sucesso e CTA */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="bg-cream/70 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/50 shadow-elevated space-y-8">
                {/* Header do Card */}
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint/10 text-mint font-semibold text-xs uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Inscrição Realizada com Sucesso
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
                    Merci,
                  </h1>
                  <p className="text-foreground text-lg font-medium leading-relaxed">
                    Estou muito feliz com o seu interesse em aprender francês!
                  </p>
                </div>

                {/* Conteúdo Principal de Fluxo Contínuo */}
                <div className="space-y-6 text-foreground text-base leading-relaxed">
                  {/* Bloco de Agendamento */}
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      Eu gostaria muito de bater um papo com você, para entender seus objetivos e expectativas em estudar francês.
                    </p>
                    <p className="text-foreground font-semibold text-sm md:text-base leading-relaxed">
                      Vamos agendar? É só nos informar seus dias e horários disponíveis.
                    </p>
                    
                    {/* Botão WhatsApp */}
                    <div className="pt-2">
                      <a
                        href={whatsappMessageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,36%)] text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-sm w-full md:w-auto"
                      >
                        <span className="absolute inset-0 rounded-xl bg-[hsl(142,70%,40%)] animate-pulse-ring opacity-60" />
                        <MessageCircle className="w-4 h-4 shrink-0 relative z-10" fill="currentColor" />
                        <span className="relative z-10 tracking-wide uppercase">FALE CONOSCO - WHATSAPP</span>
                      </a>
                    </div>
                  </div>

                  {/* Bloco de Informações Extras e Exclusividade */}
                  <div className="bg-cream/40 rounded-2xl p-6 border border-white/30 space-y-4 shadow-inner">
                    <p className="font-bold text-foreground text-base">
                      Tenho Certeza que você vai Gostar!
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Essa exclusividade garante uma atenção personalizada e um aprendizado mais eficaz no futuro.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Estou aqui para esclarecer qualquer dúvida e se precisar de mais informações, ficarei feliz em ajudar.
                    </p>
                  </div>

                  {/* Botão Grupo de Novidades como Fechamento */}
                  <div className="pt-2 space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      ENTRE NO NOSSO GRUPO PARA RECEBER MAIS INFORMAÇÕES:
                    </p>
                    <a
                      href={GROUP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-coral hover:bg-coral/95 text-coral-foreground font-bold px-8 py-4 rounded-xl shadow-sm hover:shadow-md transition-all text-sm w-full md:w-auto text-center"
                    >
                      <Users className="w-4 h-4 shrink-0" />
                      Entre no Nosso grupo
                    </a>
                  </div>
                </div>

                {/* Footer do Card */}
                <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row gap-4 justify-between items-center text-center sm:text-left">
                  <div>
                    <p className="font-display text-xl font-bold text-foreground">À bientôt</p>
                    <p className="text-xs text-muted-foreground mt-0.5 font-medium">Prof.ª Sophie Monginet</p>
                  </div>
                  <Link 
                    to="/" 
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para a página inicial
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className="bg-foreground py-6 mt-auto z-10 relative">
        <div className="container mx-auto px-4 text-center text-xs text-background/60 space-y-1">
          <p>© [bra´ziw]! Idiomas e Intercâmbios 2026</p>
          <p className="text-background/50">Tous Droits Réservés • Desde 1999 conectando com o mundo</p>
        </div>
      </footer>
    </div>
  );
};

export default ThankYouPage;
