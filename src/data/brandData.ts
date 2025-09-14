import zomatoCharacter from "@/assets/zomato-character.jpg";
import amulCharacter from "@/assets/amul-character.jpg";
import mamaearthCharacter from "@/assets/mamaearth-character.jpg";
import sabyasachiCharacter from "@/assets/sabyasachi-character.jpg";
import lenskartCharacter from "@/assets/lenskart-character.jpg";

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  color: string;
  character: string;
  facts: string[];
  stats: {
    label: string;
    value: string;
  }[];
  miniGame: {
    name: string;
    description: string;
  };
}

export const brandData: Brand[] = [
  {
    id: "zomato",
    name: "Zomato",
    tagline: "Better food for more people",
    color: "zomato",
    character: zomatoCharacter,
    facts: [
      "Founded by Deepinder Goyal and Pankaj Chaddah in 2008 in Gurgaon as 'Foodiebay'",
      "Started as a restaurant discovery platform, evolved into food delivery giant",
      "Operates in 1000+ cities across 25+ countries worldwide",
      "First Indian unicorn to go public with ₹9,375 crore IPO in July 2021",
      "Valued at over $5.4 billion with 200+ million monthly active users",
      "Mission: 'Better food for more people' - democratizing food delivery across India"
    ],
    stats: [
      { label: "Cities Covered", value: "1000+" },
      { label: "Restaurant Partners", value: "200K+" },
      { label: "Monthly Orders", value: "60M+" }
    ],
    miniGame: {
      name: "Delivery Rush",
      description: "Help our delivery partner reach customers on time!"
    }
  },
  {
    id: "amul",
    name: "Amul",
    tagline: "The Taste of India",
    color: "amul",
    character: amulCharacter,
    facts: [
      "Founded by Dr. Verghese Kurien in 1946 during India's White Revolution",
      "Started as a cooperative movement to empower dairy farmers in Gujarat",
      "Processes over 24 million liters of milk daily from 3.6 million farmers",
      "India's largest food brand with ₹55,000+ crore annual turnover",
      "Iconic advertising with the Amul Girl mascot created by Sylvester daCunha",
      "Philosophy: 'Utterly Butterly Delicious' - bringing pure dairy goodness to every home"
    ],
    stats: [
      { label: "Farmer Members", value: "3.6M" },
      { label: "Daily Milk Processing", value: "24M Liters" },
      { label: "Annual Revenue", value: "₹55K Cr" }
    ],
    miniGame: {
      name: "Milk Collection",
      description: "Collect fresh milk from farms across Gujarat!"
    }
  },
  {
    id: "mamaearth",
    name: "Mamaearth",
    tagline: "Made Safe for You & Your Family",
    color: "mamaearth",
    character: mamaearthCharacter,
    facts: [
      "Founded by Varun and Ghazal Alagh in 2016 with Asia's first MadeSafe certified brand",
      "Started after struggling to find safe baby care products for their newborn",
      "Fastest Indian beauty brand to cross ₹1000 crore valuation in 4 years",
      "First Indian D2C brand to achieve B-Corp certification for social impact",
      "Parent company Honasa Consumer went public with ₹1,700 crore IPO in 2023",
      "Vision: 'Goodness Inside' - creating toxin-free products for conscious consumers"
    ],
    stats: [
      { label: "Products", value: "200+" },
      { label: "Cities Served", value: "300+" },
      { label: "Happy Customers", value: "6M+" }
    ],
    miniGame: {
      name: "Ingredient Matching",
      description: "Match natural ingredients with their benefits!"
    }
  },
  {
    id: "sabyasachi",
    name: "Sabyasachi",
    tagline: "Redefining Indian Couture",
    color: "sabyasachi",
    character: sabyasachiCharacter,
    facts: [
      "Founded by Sabyasachi Mukherjee in 1999 from a small Kolkata studio",
      "Started with ₹20,000 investment, now India's most premium fashion house",
      "Dresses Bollywood A-listers and global celebrities from Deepika to Oprah Winfrey",
      "Opened flagship stores in New York, London, and Dubai expanding globally",
      "Brand valuation estimated at ₹1,200+ crores with 30% annual growth",
      "Philosophy: 'Fashion that celebrates Indian heritage while embracing modern aesthetics'"
    ],
    stats: [
      { label: "Global Stores", value: "15+" },
      { label: "Celebrity Clients", value: "500+" },
      { label: "Heritage Crafts", value: "25+" }
    ],
    miniGame: {
      name: "Design Studio",
      description: "Create stunning traditional outfits!"
    }
  },
  {
    id: "lenskart",
    name: "Lenskart",
    tagline: "Fashionable Eyewear for Everyone",
    color: "lenskart",
    character: lenskartCharacter,
    facts: [
      "Founded by Peyush Bansal in 2010, revolutionizing India's eyewear industry",
      "Started online-first model, now operates 1500+ retail stores across 175+ cities",
      "Serves 10+ million customers with AI-powered virtual try-on technology",
      "Valued at $5+ billion after Series G funding, India's largest eyewear retailer",
      "Manufacturing hub in Rajasthan produces 200,000+ frames monthly",
      "Mission: 'Making eyewear affordable and fashionable for every Indian'"
    ],
    stats: [
      { label: "Retail Stores", value: "1500+" },
      { label: "Frame Designs", value: "10K+" },
      { label: "Daily Orders", value: "25K+" }
    ],
    miniGame: {
      name: "Virtual Try-On",
      description: "Help customers find their perfect frames!"
    }
  }
];