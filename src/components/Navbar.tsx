import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Metodologia", href: "/#metodologia" },
  { label: "A sua Professora", href: "/#professora" },
  { label: "Passo a passo", href: "/#passo-a-passo" },
  { label: "Para Quem É", href: "/#para-quem" },
  { label: "Perguntas", href: "/#perguntas" },
  { label: "Fale com a Sophie", href: "/contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/#inicio" className="font-display text-lg font-bold text-foreground tracking-tight">
          [bra´ziw]<span className="text-coral">!</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-xs font-medium text-muted-foreground hover:text-coral transition-colors uppercase tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5514996671196"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-coral text-coral-foreground text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all hover:scale-[1.02] uppercase tracking-wider text-center"
          >
            Contato
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5514996671196"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block bg-coral text-coral-foreground text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
