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
      setCurrentFact(prev => (prev + 1) % brand.facts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [brand.facts.length]);

  const launchMiniGame = () => {
    // Placeholder for mini-game functionality
    alert(`🎮 ${brand.miniGame.name} coming soon! ${brand.miniGame.description}`);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-glass flex items-center justify-center p-4 z-50 animate-fade-in-up">
      <Card className={`w-full max-w-4xl bg-card/90 backdrop-blur-glass border-2 border-${brand.color}/30 shadow-premium animate-scale-bounce relative overflow-hidden`}>
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 hover:bg-destructive/20"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Header Section */}
        <div className={`bg-gradient-${brand.id} p-8 text-white relative overflow-hidden`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 shadow-premium">
              <img
                src={brand.character}
                alt={`${brand.name} character`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-2">{brand.name}</h2>
              <p className="text-xl opacity-90">{brand.tagline}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {brand.stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 bg-secondary/30 rounded-lg transition-all duration-500 ${
                  animatedStats ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`text-3xl font-bold text-${brand.color} mb-2 flex items-center justify-center`}>
                  <TrendingUp className="w-6 h-6 mr-2" />
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Brand Facts Carousel */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-primary" />
              Brand Journey
            </h3>
            <div className="bg-secondary/30 rounded-lg p-6 min-h-[120px] flex items-center">
              <p
                key={currentFact}
                className="text-lg leading-relaxed animate-fade-in-up"
              >
                {brand.facts[currentFact]}
              </p>
            </div>
            
            {/* Fact Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {brand.facts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFact(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentFact === index
                      ? `bg-${brand.color} scale-125`
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mini Game Section */}
          <div className="text-center">
            <Button
              onClick={launchMiniGame}
              className={`bg-gradient-${brand.id} hover:shadow-brand-${brand.id} transition-all duration-300 px-8 py-4 text-lg rounded-full`}
            >
              <Play className="w-5 h-5 mr-2" />
              Play {brand.miniGame.name}
            </Button>
            <p className="text-muted-foreground mt-2 text-sm">
              {brand.miniGame.description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};