export type QuizMode = 'easy' | 'medium' | 'hard' | 'survival';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const quizData: QuizQuestion[] = [
  {
    question: "What is Zomato's current tagline?",
    options: ["Better food for more people", "Food delivery made easy", "Hungry? Order now", "Your favorite food delivered"],
    correct: 0,
    explanation: "Zomato's tagline 'Better food for more people' reflects their mission to make quality food accessible to everyone.",
    difficulty: "easy"
  },
  {
    question: "Who founded Zomato and in which year?",
    options: ["Deepinder Goyal, 2008", "Pankaj Chaddah, 2010", "Both Deepinder & Pankaj, 2008", "Sachin Bansal, 2007"],
    correct: 2,
    explanation: "Zomato was founded by Deepinder Goyal and Pankaj Chaddah in 2008, originally called 'Foodiebay'.",
    difficulty: "medium"
  },
  {
    question: "What is Amul's famous tagline?",
    options: ["The Taste of India", "Utterly Butterly Delicious", "Pure Milk, Pure Joy", "India's Finest Dairy"],
    correct: 1,
    explanation: "Amul's iconic tagline 'Utterly Butterly Delicious' has been their signature for decades.",
    difficulty: "easy"
  },
  {
    question: "Who is known as the 'Father of the White Revolution' and founded Amul?",
    options: ["Dr. APJ Abdul Kalam", "Dr. Verghese Kurien", "Ratan Tata", "JRD Tata"],
    correct: 1,
    explanation: "Dr. Verghese Kurien, known as the 'Father of the White Revolution', founded Amul in 1946.",
    difficulty: "medium"
  },
  {
    question: "What does Mamaearth's tagline emphasize?",
    options: ["Natural & Organic", "Made Safe for You & Your Family", "Chemical-Free Beauty", "Pure Nature"],
    correct: 1,
    explanation: "Mamaearth's tagline 'Made Safe for You & Your Family' emphasizes their commitment to toxin-free products.",
    difficulty: "easy"
  },
  {
    question: "Who are the founders of Mamaearth?",
    options: ["Varun & Ghazal Alagh", "Ritesh & Sameer Mehta", "Falguni & Shane Peacock", "Ankush & Apoorva"],
    correct: 0,
    explanation: "Mamaearth was founded by the husband-wife duo Varun and Ghazal Alagh in 2016.",
    difficulty: "medium"
  },
  {
    question: "What is Sabyasachi primarily known for?",
    options: ["Western wear", "Indian couture & traditional wear", "Casual clothing", "Sports wear"],
    correct: 1,
    explanation: "Sabyasachi Mukherjee is renowned for redefining Indian couture and traditional wear with modern aesthetics.",
    difficulty: "easy"
  },
  {
    question: "In which year did Sabyasachi Mukherjee start his fashion house?",
    options: ["1995", "1999", "2001", "2003"],
    correct: 1,
    explanation: "Sabyasachi started his fashion house in 1999 from a small studio in Kolkata with just ₹20,000.",
    difficulty: "medium"
  },
  {
    question: "What is Lenskart's main tagline?",
    options: ["Vision for Everyone", "Fashionable Eyewear for Everyone", "Clear Vision, Clear Choice", "See Better, Live Better"],
    correct: 1,
    explanation: "Lenskart's tagline 'Fashionable Eyewear for Everyone' reflects their mission to make eyewear accessible and stylish.",
    difficulty: "easy"
  },
  {
    question: "Who founded Lenskart?",
    options: ["Peyush Bansal", "Amit Chandra", "Ramesh Bafna", "All of the above"],
    correct: 0,
    explanation: "Lenskart was founded by Peyush Bansal in 2010, revolutionizing India's eyewear industry.",
    difficulty: "medium"
  },
  {
    question: "How many cities does Zomato operate in globally?",
    options: ["500+", "750+", "1000+", "1200+"],
    correct: 2,
    explanation: "Zomato operates in over 1000 cities across 25+ countries, making it a truly global food delivery platform.",
    difficulty: "hard"
  },
  {
    question: "What was Zomato originally called when it started?",
    options: ["Foodiebay", "FoodPanda", "FoodMart", "Zomato"],
    correct: 0,
    explanation: "Zomato was originally launched as 'Foodiebay' before rebranding to Zomato.",
    difficulty: "hard"
  },
  {
    question: "How many liters of milk does Amul process daily?",
    options: ["15 million liters", "20 million liters", "24 million liters", "30 million liters"],
    correct: 2,
    explanation: "Amul processes over 24 million liters of milk daily from 3.6 million farmers across India.",
    difficulty: "hard"
  },
  {
    question: "What certification did Mamaearth achieve as the first Indian D2C brand?",
    options: ["ISO 9001", "B-Corp certification", "USDA Organic", "Fair Trade"],
    correct: 1,
    explanation: "Mamaearth became the first Indian D2C brand to achieve B-Corp certification for social and environmental impact.",
    difficulty: "hard"
  },
  {
    question: "Which global celebrities has Sabyasachi dressed?",
    options: ["Oprah Winfrey", "Deepika Padukone", "Priyanka Chopra", "All of the above"],
    correct: 3,
    explanation: "Sabyasachi has dressed numerous global celebrities including Oprah Winfrey, Deepika Padukone, and Priyanka Chopra.",
    difficulty: "medium"
  },
  {
    question: "How many retail stores does Lenskart operate?",
    options: ["1000+", "1200+", "1500+", "2000+"],
    correct: 2,
    explanation: "Lenskart operates over 1500 retail stores across 175+ cities in India.",
    difficulty: "hard"
  },
  {
    question: "When did Zomato go public with its IPO?",
    options: ["June 2021", "July 2021", "August 2021", "September 2021"],
    correct: 1,
    explanation: "Zomato went public in July 2021 with India's largest tech IPO worth ₹9,375 crores.",
    difficulty: "hard"
  },
  {
    question: "What is Amul's annual turnover?",
    options: ["₹45,000 crores", "₹50,000 crores", "₹55,000 crores", "₹60,000 crores"],
    correct: 2,
    explanation: "Amul has an annual turnover of over ₹55,000 crores, making it India's largest food brand.",
    difficulty: "hard"
  },
  {
    question: "In how many cities does Mamaearth serve customers?",
    options: ["200+", "250+", "300+", "350+"],
    correct: 2,
    explanation: "Mamaearth serves customers across 300+ cities in India with their toxin-free products.",
    difficulty: "medium"
  },
  {
    question: "What is Lenskart's current valuation?",
    options: ["$3 billion", "$4 billion", "$5+ billion", "$6 billion"],
    correct: 2,
    explanation: "Lenskart is valued at over $5 billion after their Series G funding, making them one of India's most valuable startups.",
    difficulty: "hard"
  }
];