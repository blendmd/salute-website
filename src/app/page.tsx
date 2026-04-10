import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CtaBand } from "@/components/CtaBand";
import { FlowSection } from "@/components/FlowSection";
import { PricingSection } from "@/components/PricingSection";
import { TrustSection } from "@/components/TrustSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <CtaBand />
        <FlowSection />
        <PricingSection />
        <TrustSection />
        <CtaSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
