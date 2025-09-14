import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-hero flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <div className="animate-spin rounded-full h-24 w-24 border-4 border-primary/20 border-t-primary mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">{progress}%</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-primary bg-clip-text animate-pulse-glow">
            Ultimate Indian Brands
          </h1>
          <p className="text-xl text-muted-foreground">Loading Interactive Showcase...</p>
          
          <div className="w-80 bg-secondary rounded-full h-2 mx-auto overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-zomato rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-amul rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-mamaearth rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          <div className="w-3 h-3 bg-sabyasachi rounded-full animate-bounce" style={{ animationDelay: '450ms' }}></div>
          <div className="w-3 h-3 bg-lenskart rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
        </div>
      </div>
    </div>
  );
};