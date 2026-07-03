import FadeIn from "./FadeIn";
import curadoriaImg from "@/assets/curadoria-sophie.webp";
import { Heart } from "lucide-react";

const ProcessSection = () => (
  <section className="py-0">
    {/* Curadoria - split layout with cream background */}
    <div className="grid lg:grid-cols-2 min-h-[500px]">
      {/* Imagem: no mobile aparece primeiro; no desktop aparece à direita (order-2) */}
      <div className="relative overflow-hidden min-h-[400px] lg:min-h-0 lg:order-2">
        <img src={curadoriaImg} alt="Sophie" className="absolute inset-0 w-full h-full object-cover object-top" />
      </div>
      
      {/* Texto: no mobile aparece depois; no desktop aparece à esquerda (order-1) */}
      <div className="bg-cream p-12 lg:p-20 flex items-center lg:order-1">
        <FadeIn>
          <div>
            <Heart className="w-10 h-10 text-coral mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream-foreground mb-6">
              Curadoria dos<br />seus interesses
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você diz pra gente seus <strong className="text-foreground">interesses e objetivos</strong> e assim marcaremos um horário com a professora para vocês baterem um papo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tudo isto para já criar uma conexão com você.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default ProcessSection;
