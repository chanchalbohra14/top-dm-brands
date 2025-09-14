interface ProgressBarProps {
  currentSection: number;
}

export const ProgressBar = ({ currentSection }: ProgressBarProps) => {
  const totalSections = 3;
  const progress = ((currentSection + 1) / totalSections) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-secondary/30 z-50">
      <div 
        className="h-full bg-gradient-primary transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};