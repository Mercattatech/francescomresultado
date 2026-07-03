import { Link } from "react-router-dom";
import { Facebook, Instagram, BookOpen } from "lucide-react";
import FadeIn from "./FadeIn";

const socialLinks = [
  {
    href: "https://www.instagram.com/bra_ziw/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.facebook.com/braziw/",
    label: "Facebook",
    icon: Facebook,
  },
  {
    href: "https://blog.braziw.com.br/",
    label: "Blog",
    icon: BookOpen,
  },
] as const;

interface FooterProps {
  showCTA?: boolean;
}

const Footer = ({ showCTA = true }: FooterProps) => (
  <footer>
    {/* Dark CTA section */}
    {showCTA && (
      <div className="bg-dark text-dark-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Pronto para<br />começar?
            </h2>
            <p className="text-dark-foreground/70 mb-8 text-lg max-w-md mx-auto">
              Cadastre-se para receber o link das aulas e os valores no seu e-mail.
            </p>
            <Link
              to="/contato"
              className="inline-block bg-coral text-coral-foreground font-semibold px-10 py-4 rounded-full shadow-elevated hover:scale-[1.03] transition-all text-lg"
            >
              Fale com a Sophie
            </Link>
          </FadeIn>
        </div>
      </div>
    )}

    {/* Bottom bar */}
    <div className="bg-foreground py-6">
      <div className="container mx-auto px-4 text-center text-xs text-background/50">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
            >
              <Icon className="w-4 h-4 shrink-0" aria-hidden />
              <span>{label}</span>
            </a>
          ))}
        </div>
        © {new Date().getFullYear()} [bra´ziw]! Idiomas e Intercâmbios. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
