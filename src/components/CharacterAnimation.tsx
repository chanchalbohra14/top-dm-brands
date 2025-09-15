import { Brand } from "@/data/brandData";
import { useState } from "react";

interface CharacterAnimationProps {
  brand: Brand;
  isActive: boolean;
  onClick: () => void;
}

export const CharacterAnimation = ({
  brand,
  isActive,
  onClick,
}: CharacterAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute transition-all duration-1000 cursor-pointer ${
        isActive
          ? "left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-110 z-10"
          : "left-0 top-1/2 transform -translate-y-1/2 scale-75 opacity-30"
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Character Image Container */}
      <div
        className={`relative transition-all duration-500 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      >
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 rounded-full blur-xl transition-opacity duration-500 ${
            isActive
              ? `bg-${brand.color} opacity-30 animate-pulse-glow`
              : "opacity-0"
          }`}
        />

        {/* Character Image */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background shadow-premium">
          <img
            src={brand.character}
            alt={`${brand.name} character`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isActive ? "animate-float" : ""
            }`}
          />
        </div>

        {/* Brand Color Ring */}
        <div
          className={`absolute -inset-2 rounded-full border-2 transition-all duration-500 ${
            isActive
              ? `border-${brand.color} animate-pulse opacity-100`
              : "border-transparent opacity-0"
          }`}
        />

        {/* Movement Trail Effect */}
        {isActive && (
          <div
            className={`absolute left-0 top-1/2 w-full h-0.5 bg-gradient-to-r from-transparent via-${brand.color} to-transparent animate-slide-in-right opacity-50`}
          />
        )}
      </div>

      {/* Character Speech Bubble */}
      {isHovered && (
        <div
          className={`absolute -top-16 left-1/2 transform -translate-x-1/2 bg-card backdrop-blur-glass border border-${brand.color}/30 rounded-lg px-4 py-2 text-sm font-medium animate-fade-in-up shadow-premium`}
        >
          <div className="text-center">
            <span className={`text-${brand.color}`}>{brand.name}</span>
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-${brand.color}/30`}
            />
          </div>
        </div>
      )}
    </div>
  );
};
