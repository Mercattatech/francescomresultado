import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSection";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import MethodologySection from "@/components/MethodologySection";
import ProfessorSection from "@/components/ProfessorSection";
import CredibilitySection from "@/components/CredibilitySection";
import ForWhoSection from "@/components/ForWhoSection";
import FAQSection from "@/components/FAQSection";
import TalkToSophieSection from "@/components/TalkToSophieSection";
import StepByStepSection from "@/components/StepByStepSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <WhatsAppButton />
    <AnimatedSection>
      <HeroSection />
    </AnimatedSection>
    <AnimatedSection>
      <MethodologySection />
    </AnimatedSection>
    <AnimatedSection>
      <ProcessSection />
    </AnimatedSection>
    <AnimatedSection>
      <ProfessorSection />
    </AnimatedSection>
    <AnimatedSection>
      <CredibilitySection />
    </AnimatedSection>
    <AnimatedSection>
      <ForWhoSection />
    </AnimatedSection>
    <AnimatedSection>
      <TalkToSophieSection />
    </AnimatedSection>
    <AnimatedSection>
      <StepByStepSection />
    </AnimatedSection>
    <AnimatedSection>
      <FAQSection />
    </AnimatedSection>
    <AnimatedSection>
      <Footer />
    </AnimatedSection>
  </div>
);

export default Index;
