import { useState, useEffect } from "react";
import { BrandCard } from "@/components/BrandCard";
import { CharacterAnimation } from "@/components/CharacterAnimation";
import { brandData } from "@/data/brandData";

export const BrandShowcase = () => {
  const [currentBrand, setCurrentBrand] = useState(0);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showCard) {
        setCurrentBrand(prev => (prev + 1) % brandData.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [showCard]);

  const handleCharacterClick = (brandIndex: number) => {
    setCurrentBrand(brandIndex);
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Brand-specific Background Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-float opacity-30 ${
              currentBrand === 0 ? 'bg-zomato' :
              currentBrand === 1 ? 'bg-amul' :
              currentBrand === 2 ? 'bg-mamaearth' :
              currentBrand === 3 ? 'bg-sabyasachi' :
              'bg-lenskart'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-primary bg-clip-text">
              Meet the Brands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click on any character to discover their brand story, achievements, and fascinating journey
          </p>
        </div>

        {/* Character Animations */}
        <div className="relative h-96 mb-16 overflow-hidden">
          {brandData.map((brand, index) => (
            <CharacterAnimation
              key={index}
              brand={brand}
              isActive={currentBrand === index}
              onClick={() => handleCharacterClick(index)}
            />
          ))}
        </div>

        {/* Brand Navigation Dots */}
        <div className="flex justify-center space-x-4 mb-8">
          {brandData.map((brand, index) => (
            <button
              key={index}
              onClick={() => setCurrentBrand(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentBrand === index
                  ? `bg-${brand.color} scale-125 shadow-lg`
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Current Brand Name */}
        <div className="text-center">
          <h3 className={`text-3xl font-bold text-${brandData[currentBrand]?.color} animate-fade-in-up`}>
            {brandData[currentBrand]?.name}
          </h3>
        </div>
      </div>

      {/* Brand Card Modal */}
      {showCard && (
        <BrandCard
          brand={brandData[currentBrand]}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
};