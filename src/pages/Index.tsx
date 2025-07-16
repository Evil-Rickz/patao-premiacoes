import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CampaignsSection } from "@/components/CampaignsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CampaignsSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
