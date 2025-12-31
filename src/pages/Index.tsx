import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseTracker from "@/components/MouseTracker";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Synos | Where AI meets Growth</title>
        <meta name="description" content="Synos connects innovative AI startups with businesses ready to transform. Discover our unique matching platform." />
      </Helmet>
      
      <MouseTracker />
      <Navbar />
      
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;