import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Clock, RotateCcw, Star, PlayCircle } from "lucide-react";
import { quizData, QuizQuestion, QuizMode } from "@/data/quizData";
import { useToast } from "@/hooks/use-toast";

export const QuizSection = () => {
  const [quizMode, setQuizMode] = useState<QuizMode | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [isActive, setIsActive] = useState(false);
  const { toast } = useToast();

  const currentQuestions = quizData.slice(0, getQuestionCount());

  function getQuestionCount() {
    switch (quizMode) {
      case 'easy': return 10;
      case 'medium': return 15;
      case 'hard': return 20;
      case 'survival': return quizData.length;
      default: return 10;
    }
  }

  function getTimeLimit() {
    switch (quizMode) {
      case 'easy': return 0; // No timer
      case 'medium': return 30;
      case 'hard': return 15;
      case 'survival': return 10;
      default: return 30;
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0 && quizMode !== 'easy' && !quizCompleted) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleNextQuestion();
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, quizCompleted, quizMode]);

  const startQuiz = (mode: QuizMode) => {
    setQuizMode(mode);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setAnswers(new Array(getQuestionCount()).fill(null));
    setTimeLeft(getTimeLimit());
    setIsActive(true);

    toast({
      title: "Quiz Started! 🚀",
      description: `${mode.charAt(0).toUpperCase() + mode.slice(1)} mode activated`,
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
      
      // In survival mode, end quiz on wrong answer
      if (quizMode === 'survival') {
        setTimeout(() => setQuizCompleted(true), 1500);
        return;
      }
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < currentQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(getTimeLimit());
    } else {
      setQuizCompleted(true);
    }
    setIsActive(false);
    setTimeout(() => setIsActive(true), 100);
  };

  const resetQuiz = () => {
    setQuizMode(null);
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

  if (!quizMode) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <Trophy className="w-20 h-20 text-primary mx-auto animate-pulse-glow" />
            <h2 className="text-5xl font-bold text-transparent bg-gradient-primary bg-clip-text">
              Brand Knowledge Quiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge about India's top brands! Choose your difficulty level and start the challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer bg-green-500/10 border-green-500/20 hover:border-green-500/40" onClick={() => startQuiz('easy')}>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-500">Easy Mode</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>10 Questions</li>
                  <li>No Timer</li>
                  <li>Basic Knowledge</li>
                </ul>
                <Button variant="outline" className="w-full border-green-500/50 hover:bg-green-500/10">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Start Easy
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer bg-blue-500/10 border-blue-500/20 hover:border-blue-500/40" onClick={() => startQuiz('medium')}>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-500">Medium Mode</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>15 Questions</li>
                  <li>30s Timer</li>
                  <li>Mixed Content</li>
                </ul>
                <Button variant="outline" className="w-full border-blue-500/50 hover:bg-blue-500/10">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Start Medium
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer bg-red-500/10 border-red-500/20 hover:border-red-500/40" onClick={() => startQuiz('hard')}>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-red-500">Hard Mode</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>20 Questions</li>
                  <li>15s Timer</li>
                  <li>Expert Level</li>
                </ul>
                <Button variant="outline" className="w-full border-red-500/50 hover:bg-red-500/10">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Start Hard
                </Button>
              </div>
            </Card>

            <Card className="p-6 hover:scale-105 transition-all duration-300 cursor-pointer bg-purple-500/10 border-purple-500/20 hover:border-purple-500/40" onClick={() => startQuiz('survival')}>
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-500">Survival</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Until Wrong</li>
                  <li>10s Timer</li>
                  <li>Ultimate Test</li>
                </ul>
                <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/10">
                  <PlayCircle className="w-4 h-4 mr-2" />
                  Survive!
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const feedback = getPerformanceFeedback();
    const percentage = getScorePercentage();

    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
        <Card className="w-full max-w-2xl bg-card/90 backdrop-blur-glass border border-border/50 shadow-premium">
          <div className="p-8 text-center space-y-8">
            <Trophy className="w-20 h-20 text-primary mx-auto animate-pulse-glow" />
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Quiz Completed!</h2>
              <div className={`text-4xl font-bold ${feedback.color}`}>
                {feedback.text}
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-2">{percentage}%</div>
                <p className="text-muted-foreground">
                  {score} out of {quizMode === 'survival' ? currentQuestion + 1 : currentQuestions.length} questions correct
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={resetQuiz} variant="outline" className="flex-1">
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Different Mode
              </Button>
              <Button onClick={() => startQuiz(quizMode!)} className="flex-1 bg-gradient-primary">
                <Trophy className="w-4 h-4 mr-2" />
                Retry Quiz
              </Button>
            </div>
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
              {quizMode !== 'easy' && (
                <div className="flex items-center space-x-2 text-lg">
                  <Clock className="w-5 h-5" />
                  <span className={`font-bold ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-foreground'}`}>
                    {timeLeft}s
                  </span>
                </div>
              )}
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