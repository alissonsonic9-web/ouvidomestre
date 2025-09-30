import HeroSection from '@/components/landing/HeroSection';
import ModulesSection from '@/components/landing/ModulesSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import PersonasSection from '@/components/landing/PersonasSection';
import BonusesSection from '@/components/landing/BonusesSection';
import PricingSection from '@/components/landing/PricingSection';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <main className="flex-1">
        <HeroSection />
        <ModulesSection />
        <BenefitsSection />
        <PersonasSection />
        <BonusesSection />
        <PricingSection />
        <GuaranteeSection />
      </main>
      <Footer />
    </div>
  );
}
