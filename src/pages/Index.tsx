import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/LoadingScreen";
import { HeroSection } from "@/components/HeroSection";
import { ProgressBar } from "@/components/ProgressBar";
import { BrandShowcase } from "@/components/BrandShowcase";
import { QuizSection } from "@/components/QuizSection";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.snap-section');
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (scrollY >= sectionTop - windowHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero text-foreground">
      <ProgressBar currentSection={currentSection} />
      <main className="snap-y snap-mandatory h-screen overflow-y-auto">
        <section id="hero" className="snap-section min-h-screen">
          <HeroSection />
        </section>
        
        <section id="brands" className="snap-section">
          <BrandShowcase />
        </section>
        
        <section id="quiz" className="snap-section min-h-screen">
          <QuizSection />
        </section>
      </main>
      <Toaster />
    </div>
  );
};

export default Index;