import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://n8nwebhook.mercattatech.com.br/webhook/mercatta-growth-web", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "WhatsApp Button",
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar para webhook:", error);
    } finally {
      // Redirect to WhatsApp even if webhook fails (e.g. CORS)
      const text = encodeURIComponent(`Olá, meu nome é ${formData.name}.`);
      window.open(`https://wa.me/5514996671196?text=${text}`, "_blank");
      
      // Reset and close
      setFormData({ name: "", phone: "" });
      setOpen(false);
      setIsSubmitting(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[hsl(142,70%,40%)] rounded-full shadow-elevated hover:scale-105 transition-transform"
          aria-label="Fale conosco pelo WhatsApp"
        >
          <span className="absolute -top-8 right-0 bg-white text-[hsl(142,70%,40%)] text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
            WhatsApp
          </span>
          <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,40%)] animate-pulse-ring" />
          <MessageCircle className="w-6 h-6 text-primary-foreground relative z-10" fill="currentColor" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 mb-4 mr-4 bg-background border rounded-lg shadow-xl" align="end" side="top">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-lg">Fale Conosco</h3>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="wa-name">Nome</Label>
            <Input
              id="wa-name"
              placeholder="Seu nome"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wa-phone">Telefone</Label>
            <Input
              id="wa-phone"
              type="tel"
              placeholder="(00) 00000-0000"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <Button type="submit" className="w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,30%)]" disabled={isSubmitting}>
            {isSubmitting ? "Iniciando..." : "Iniciar Conversa"}
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default WhatsAppButton;

