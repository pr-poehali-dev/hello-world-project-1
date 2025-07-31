import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ExamplesSection from "@/components/ExamplesSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologySection from "@/components/TechnologySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AdvantagesSection />
      <ExamplesSection />
      <PricingSection />
      <ServicesSection />
      <TechnologySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}