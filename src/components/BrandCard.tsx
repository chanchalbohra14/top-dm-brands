import { Brand } from "@/data/brandData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Play, Trophy, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

interface BrandCardProps {
  brand: Brand;
  onClose: () => void;
}

export const BrandCard = ({ brand, onClose }: BrandCardProps) => {
  const [animatedStats, setAnimatedStats] = useState(false);
  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % brand.facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [brand.facts.length]);

  const launchMiniGame = () => {
    // Placeholder for mini-game functionality
    alert(
      `🎮 ${brand.miniGame.name} coming soon! ${brand.miniGame.description}`
    );
  };

  return (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-glass flex items-center justify-center p-4 z-50 animate-fade-in-up"
      onClick={onClose}
    >
      <Card
        className={`w-full max-w-7xl bg-card/90 backdrop-blur-glass border-2 border-${brand.color}/30 shadow-premium animate-scale-bounce relative overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-50 hover:bg-destructive/20 bg-destructive/10 hover:bg-destructive/30 transition-all duration-200 min-w-[40px] min-h-[40px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Header Section */}
        <div
          className={`bg-gradient-${brand.id} p-4 text-white relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center space-x-3">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/20 shadow-premium">
              <img
                src={brand.character}
                alt={`${brand.name} character`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-0">{brand.name}</h2>
              <p className="text-base opacity-90">{brand.tagline}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          {/* Statistics */}
         

          {/* Brand Facts */}
          <div className="mb-4">
            <h3 className="text-lg font-bold mb-2 flex items-center">
              <Trophy className="w-4 h-4 mr-2 text-primary" />
              Brand Journey
            </h3>
            <div className="bg-secondary/30 rounded-lg p-3">
              <ul className="space-y-1">
                {brand.facts.map((fact, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span
                      className={`text-${brand.color} text-sm font-bold mt-0.5`}
                    >
                      •
                    </span>
                    <span className="text-xs leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mini Game Section */}
          <div className="text-center">
            <Button
              onClick={launchMiniGame}
              className={`bg-gradient-${brand.id} hover:shadow-brand-${brand.id} transition-all duration-300 px-4 py-2 text-sm rounded-full`}
            >
              <Play className="w-3 h-3 mr-1" />
              Play {brand.miniGame.name}
            </Button>
            <p className="text-muted-foreground mt-1 text-xs">
              {brand.miniGame.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
