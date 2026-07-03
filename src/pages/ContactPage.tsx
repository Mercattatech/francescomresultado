import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { Video, MessageCircle, BookOpen, Sparkles, UserCheck, ChevronDown } from "lucide-react";

const cards = [
  {
    icon: UserCheck,
    title: "Objetivos & Avaliação",
    text: (
      <>
        Você poderá explicar os <strong>seus objetivos</strong> e até <strong>ser avaliado</strong>, caso não seja iniciante
      </>
    ),
  },
  {
    icon: Video,
    title: "Dinâmica & Método",
    text: (
      <>
        Você vai entender a <strong>dinâmica das aulas</strong>, conhecer o <strong>método</strong> e o funcionamento do curso
      </>
    ),
  },
  {
    icon: BookOpen,
    title: "Materiais Didáticos",
    text: (
      <>
        Você vai conhecer os <strong>materiais didáticos</strong>
      </>
    ),
  },
  {
    icon: MessageCircle,
    title: "Tirar Dúvidas",
    text: (
      <>
        Você poderá <strong>tirar todas suas dúvidas</strong> para tomar a <strong>sua decisão</strong>
      </>
    ),
  },
  {
    icon: Sparkles,
    title: "Formulário",
    text: (
      <>
        Gostou? É só <strong>preencher o formulário ao lado</strong>
      </>
    ),
  },
];

const objetivosOptions = [
  { id: "viagem", label: "Viagem" },
  { id: "trabalho", label: "Trabalho" },
  { id: "estudos", label: "Estudos / Intercâmbio" },
  { id: "proficiencia", label: "Exame de proficiência" },
  { id: "cultura", label: "Cultura e lazer" },
  { id: "outro", label: "Outro" },
];

const ContactPage = () => {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+55");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    objetivo: [] as string[],
    outroObjetivo: "",
    iniciante: "",
    dispostoInvestir: "",
  });
  const [errorObjetivo, setErrorObjetivo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatWhatsApp = (value: string) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length === 0) return "";
    if (digits.length <= 2) {
      return `(${digits}`;
    }
    if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    if (countryCode === "+55") {
      if (inputVal === "" || inputVal === "(") {
        setFormData({ ...formData, whatsapp: "" });
      } else {
        setFormData({ ...formData, whatsapp: formatWhatsApp(inputVal) });
      }
    } else {
      setFormData({ ...formData, whatsapp: inputVal });
    }
  };

  const handleObjetivoChange = (id: string, checked: boolean) => {
    setFormData((prev) => {
      const newObjetivos = checked
        ? [...prev.objetivo, id]
        : prev.objetivo.filter((item) => item !== id);
      return { ...prev, objetivo: newObjetivos };
    });
    setErrorObjetivo(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.objetivo.length === 0) {
      setErrorObjetivo(true);
      return;
    }
    setErrorObjetivo(false);
    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        whatsapp_completo: `${countryCode} ${formData.whatsapp}`,
        countryCode,
      };

      const response = await fetch("https://n8nwebhook.mercattatech.com.br/webhook/mercatta-growth-web", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Com no-cors, a resposta é opaca, então response.ok sempre será false.
      // Omitimos a verificação de response.ok para evitar logs desnecessários de erro.
    } catch (err) {
      console.error("Erro na requisição do webhook:", err);
    } finally {
      setIsSubmitting(false);
      // Redireciona diretamente para a nova página de obrigado premium
      navigate("/obrigado");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />
      <section className="pt-24 pb-16 md:pt-32">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12 max-w-xl mx-auto">
              Cadastre-se e agende um bate papo com a Prof.ª Sophie
            </h1>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Form */}
            <FadeIn>
              <div className="p-8 rounded-2xl shadow-elevated bg-card">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Preencha os dados para contato
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Nome *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">WhatsApp (selecione o país) *</label>
                    <div className="flex gap-2">
                      <div className="relative w-[180px] shrink-0">
                        <select
                          value={countryCode}
                          onChange={(e) => {
                            setCountryCode(e.target.value);
                            setFormData({ ...formData, whatsapp: "" });
                          }}
                          className="w-full pl-4 pr-10 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none cursor-pointer font-medium"
                        >
                          <option value="+55">BR Brasil (+55)</option>
                          <option value="+33">FR França (+33)</option>
                          <option value="+351">PT Portugal (+351)</option>
                          <option value="+49">DE Alemanha (+49)</option>
                          <option value="+244">AO Angola (+244)</option>
                          <option value="+54">AR Argentina (+54)</option>
                          <option value="+61">AU Austrália (+61)</option>
                          <option value="+32">BE Bélgica (+32)</option>
                          <option value="+591">BO Bolívia (+591)</option>
                          <option value="+238">CV Cabo Verde (+238)</option>
                          <option value="+1">CA Canadá (+1)</option>
                          <option value="+56">CL Chile (+56)</option>
                          <option value="+57">CO Colômbia (+57)</option>
                          <option value="+240">GQ Guiné Equatorial (+240)</option>
                          <option value="+245">GW Guiné-Bissau (+245)</option>
                          <option value="+594">GF Guiana Francesa (+594)</option>
                          <option value="+593">EC Equador (+593)</option>
                          <option value="+34">ES Espanha (+34)</option>
                          <option value="+1">US EUA (+1)</option>
                          <option value="+353">IE Irlanda (+353)</option>
                          <option value="+39">IT Itália (+39)</option>
                          <option value="+81">JP Japão (+81)</option>
                          <option value="+352">LU Luxemburgo (+352)</option>
                          <option value="+853">MO Macau (+853)</option>
                          <option value="+52">MX México (+52)</option>
                          <option value="+258">MZ Moçambique (+258)</option>
                          <option value="+64">NZ Nova Zelândia (+64)</option>
                          <option value="+31">NL Países Baixos (+31)</option>
                          <option value="+595">PY Paraguai (+595)</option>
                          <option value="+51">PE Peru (+51)</option>
                          <option value="+44">GB Reino Unido (+44)</option>
                          <option value="+239">ST São Tomé e Príncipe (+239)</option>
                          <option value="+41">CH Suíça (+41)</option>
                          <option value="+670">TL Timor-Leste (+670)</option>
                          <option value="+598">UY Uruguai (+598)</option>
                          <option value="+58">VE Venezuela (+58)</option>
                          <option value="+0">Outro país</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground pointer-events-none" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={handleWhatsappChange}
                        className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all font-medium"
                        placeholder="("
                      />
                    </div>
                  </div>

                  {/* Campo de Objetivos com Múltipla Escolha */}
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-2">
                      Objetivos (Selecione um ou mais) *
                    </label>
                    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-xl border ${errorObjetivo ? "border-destructive bg-destructive/5" : "border-transparent"}`}>
                      {objetivosOptions.map((opt) => (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all select-none text-sm ${
                            formData.objetivo.includes(opt.id)
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-input bg-background hover:bg-muted/50 text-foreground"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.objetivo.includes(opt.id)}
                            onChange={(e) => handleObjetivoChange(opt.id, e.target.checked)}
                            className="rounded border-input text-primary focus:ring-primary/30 w-4 h-4"
                          />
                          <span className="font-medium">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                    {errorObjetivo && (
                      <p className="text-destructive text-xs mt-1.5 font-medium">
                        Por favor, selecione pelo menos um objetivo.
                      </p>
                    )}

                    {formData.objetivo.includes("outro") && (
                      <div className="mt-3 animate-accordion-down">
                        <label className="text-xs font-semibold text-muted-foreground block mb-1">
                          Qual o seu outro objetivo? *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.outroObjetivo}
                          onChange={(e) => setFormData({ ...formData, outroObjetivo: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                          placeholder="Ex: preparação para entrevista, lazer, etc."
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Você é iniciante no Francês? *</label>
                    <select
                      required
                      value={formData.iniciante}
                      onChange={(e) => setFormData({ ...formData, iniciante: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      <option value="">Selecione</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1.5">Você está disposto(a) a investir até R$ 320,00/mês, em um curso de francês de altíssima qualidade? *</label>
                    <select
                      required
                      value={formData.dispostoInvestir}
                      onChange={(e) => setFormData({ ...formData, dispostoInvestir: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    >
                      <option value="">Selecione</option>
                      <option value="sim">Sim</option>
                      <option value="nao">Não</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-md shadow-card hover:shadow-elevated hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Enviando..." : "Quero falar com a Sophie"}
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Info cards */}
            <div className="space-y-4">
              <FadeIn delay={0.05}>
                <p className="font-display text-lg md:text-xl font-bold text-red-600 mb-2">
                  Quando você conversar com a prof.ª Sophie, você ....
                </p>
              </FadeIn>
              {cards.map((c, i) => (
                <FadeIn key={c.title} delay={(i + 1) * 0.1}>
                  <div className="flex gap-4 p-5 rounded-xl shadow-card bg-card">
                    <c.icon className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">{c.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer showCTA={false} />
    </div>
  );
};

export default ContactPage;
