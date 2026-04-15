import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import AboutSection from "@/components/AboutSection";
import GovernanceSection from "@/components/GovernanceSection";
import BeneficiariesSection from "@/components/BeneficiariesSection";
import ContactSection, { Footer } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  if (loading) {
    return <LoadingScreen onComplete={handleComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <AboutSection />
      <GovernanceSection />
      <BeneficiariesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
