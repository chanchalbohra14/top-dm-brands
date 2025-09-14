import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Clock, RotateCcw, PlayCircle } from "lucide-react";
import { quizData, QuizQuestion } from "@/data/quizData";
import { useToast } from "@/hooks/use-toast";

export const QuizSection = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [isActive, setIsActive] = useState(false);
  const { toast } = useToast();

  const currentQuestions = quizData.slice(0, 15); // Fixed 15 questions

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0 && !quizCompleted) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleNextQuestion();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, quizCompleted]);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setAnswers(new Array(15).fill(null));
    setTimeLeft(30);
    setIsActive(true);

    toast({
      title: "Quiz Started! 🚀",
      description: "Test your brand knowledge!",
    });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    const isCorrect = answerIndex === currentQuestions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(score + 1);
      toast({
        title: "Correct! 🎉",
        description: currentQuestions[currentQuestion].explanation,
      });
    } else {
      toast({
        title: "Oops! 😅",
        description: currentQuestions[currentQuestion].explanation,
        variant: "destructive",
      });
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < currentQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
    setIsActive(false);
    setTimeout(() => setIsActive(true), 100);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setAnswers([]);
    setTimeLeft(30);
    setIsActive(false);
  };

  const getScorePercentage = () => {
    return Math.round((score / currentQuestions.length) * 100);
  };

  const getPerformanceFeedback = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return { text: "Exceptional! 🏆", color: "text-primary" };
    if (percentage >= 75) return { text: "Excellent! 🌟", color: "text-green-500" };
    if (percentage >= 60) return { text: "Good Job! 👍", color: "text-blue-500" };
    if (percentage >= 40) return { text: "Keep Learning! 📚", color: "text-yellow-500" };
    return { text: "Try Again! 💪", color: "text-red-500" };
  };

  if (!quizStarted || quizCompleted) {
    const feedback = quizCompleted ? getPerformanceFeedback() : null;
    const percentage = quizCompleted ? getScorePercentage() : 0;

    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl bg-card/90 backdrop-blur-glass border border-border/50 shadow-premium">
          <div className="p-8 text-center space-y-8">
            <Trophy className="w-20 h-20 text-primary mx-auto animate-pulse-glow" />
            
            {!quizCompleted ? (
              <>
                <div className="space-y-6">
                  <h2 className="text-5xl font-bold text-transparent bg-gradient-primary bg-clip-text">
                    Brand Knowledge Quiz
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Test your knowledge about India's top brands! 15 questions with 30 seconds each.
                  </p>
                </div>

                <Button onClick={startQuiz} className="bg-gradient-primary text-lg px-8 py-4">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Quiz
                </Button>
              </>
            ) : (
              <>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Quiz Completed!</h2>
                  <div className={`text-4xl font-bold ${feedback?.color}`}>
                    {feedback?.text}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
                    <p className="text-muted-foreground">
                      {score} out of {currentQuestions.length} questions correct
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{percentage}%</span>
                    </div>
                    <Progress value={percentage} className="h-3" />
                  </div>
                </div>

                <Button onClick={resetQuiz} className="bg-gradient-primary">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
              </>
            )}
          </div>
        </Card>
      </div>
    );
  }

  const question = currentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      <Card className="w-full max-w-3xl bg-card/90 backdrop-blur-glass border border-border/50 shadow-premium">
        <div className="p-8">
          {/* Quiz Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-primary">
                {currentQuestion + 1} / {currentQuestions.length}
              </div>
              <div className="flex items-center space-x-2 text-lg">
                <Clock className="w-5 h-5" />
                <span className={`font-bold ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-foreground'}`}>
                  {timeLeft}s
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Score</div>
              <div className="text-xl font-bold text-primary">{score}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold leading-relaxed">{question.question}</h3>

            {/* Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {question.options.map((option, index) => {
                let buttonClass = "p-4 text-left transition-all duration-300 border-2 min-h-[60px] flex items-center justify-center";
                
                if (selectedAnswer !== null) {
                  if (index === question.correct) {
                    buttonClass += " bg-green-500/20 border-green-500 text-green-300";
                  } else if (index === selectedAnswer && index !== question.correct) {
                    buttonClass += " bg-red-500/20 border-red-500 text-red-300";
                  } else {
                    buttonClass += " bg-muted/50 border-muted text-muted-foreground";
                  }
                } else {
                  buttonClass += " border-border hover:border-primary/50 hover:bg-primary/5";
                }

                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <span className="text-center w-full">{option}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};