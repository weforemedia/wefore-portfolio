import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ClientLogos />
      <Testimonials />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
