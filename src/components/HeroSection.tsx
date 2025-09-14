import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Trophy } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full animate-float opacity-20 ${
              i % 5 === 0
                ? "bg-zomato"
                : i % 5 === 1
                ? "bg-amul"
                : i % 5 === 2
                ? "bg-mamaearth"
                : i % 5 === 3
                ? "bg-sabyasachi"
                : "bg-lenskart"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-12 px-6 max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block text-transparent bg-gradient-primary bg-clip-text animate-glow">
              Ultimate Indian
            </span>
            <span
              className="block text-transparent bg-gradient-primary bg-clip-text animate-glow"
              style={{ animationDelay: "0.5s" }}
            >
              Brands Showcase
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the stories, characters, and magic behind India's most
            beloved brands through interactive experiences
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-full"
            onClick={() => scrollToSection("brands")}
          >
            <Play className="w-5 h-5 mr-2" />
            Start Journey
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 rounded-full backdrop-blur-glass"
            onClick={() => scrollToSection("quiz")}
          >
            <Trophy className="w-5 h-5 mr-2" />
            Jump to Quiz
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary/70" />
        </div>
      </div>
    </div>
  );
};
