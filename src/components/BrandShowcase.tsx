import { useState, useEffect } from "react";
import { BrandCard } from "@/components/BrandCard";
import { CharacterAnimation } from "@/components/CharacterAnimation";
import { brandData } from "@/data/brandData";

export const BrandShowcase = () => {
  const [currentBrand, setCurrentBrand] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [viewedBrands, setViewedBrands] = useState<Set<number>>(new Set());
  const [allBrandsViewed, setAllBrandsViewed] = useState(false);

  // Function to scroll to quiz section with smooth animation
  const scrollToQuizSection = () => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleCharacterClick = (brandIndex: number) => {
    setCurrentBrand(brandIndex);
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
    
    // Mark current brand as viewed
    setViewedBrands(prev => new Set([...prev, currentBrand]));
    
    // Check if all brands have been viewed after closing
    const updatedViewedBrands = new Set([...viewedBrands, currentBrand]);
    if (updatedViewedBrands.size === brandData.length) {
      setAllBrandsViewed(true);
      // Scroll to quiz section immediately
      scrollToQuizSection();
    }
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
            {allBrandsViewed 
              ? "All brands viewed! Scroll down to take the quiz and test your knowledge."
              : `Click on any character to discover their brand story, achievements, and fascinating journey. ${viewedBrands.size}/${brandData.length} viewed`
            }
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
              className={`w-4 h-4 rounded-full transition-all duration-300 relative ${
                currentBrand === index
                  ? `bg-${brand.color} scale-125 shadow-lg`
                  : viewedBrands.has(index)
                  ? `bg-${brand.color} opacity-60`
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            >
              {viewedBrands.has(index) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Current Brand Name */}
        <div className="text-center">
          <h3 className={`text-3xl font-bold text-${brandData[currentBrand]?.color} animate-fade-in-up`}>
            {brandData[currentBrand]?.name}
          </h3>
          {!allBrandsViewed && (
            <div className="mt-4">
              <div className="w-full max-w-md mx-auto bg-muted/30 rounded-full h-2">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(viewedBrands.size / brandData.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Progress: {viewedBrands.size} of {brandData.length} brands discovered
              </p>
            </div>
          )}
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