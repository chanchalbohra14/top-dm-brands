import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand Colors
        zomato: {
          DEFAULT: "hsl(var(--zomato))",
          light: "hsl(var(--zomato-light))",
          dark: "hsl(var(--zomato-dark))",
        },
        amul: {
          DEFAULT: "hsl(var(--amul))",
          light: "hsl(var(--amul-light))",
          dark: "hsl(var(--amul-dark))",
        },
        mamaearth: {
          DEFAULT: "hsl(var(--mamaearth))",
          light: "hsl(var(--mamaearth-light))",
          dark: "hsl(var(--mamaearth-dark))",
        },
        sabyasachi: {
          DEFAULT: "hsl(var(--sabyasachi))",
          light: "hsl(var(--sabyasachi-light))",
          dark: "hsl(var(--sabyasachi-dark))",
        },
        lenskart: {
          DEFAULT: "hsl(var(--lenskart))",
          light: "hsl(var(--lenskart-light))",
          dark: "hsl(var(--lenskart-dark))",
        },
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-primary": "var(--gradient-primary)",
        "gradient-zomato": "var(--gradient-zomato)",
        "gradient-amul": "var(--gradient-amul)",
        "gradient-mamaearth": "var(--gradient-mamaearth)",
        "gradient-sabyasachi": "var(--gradient-sabyasachi)",
        "gradient-lenskart": "var(--gradient-lenskart)",
      },
      backdropBlur: {
        glass: "var(--backdrop-blur)",
      },
      boxShadow: {
        premium: "var(--shadow-premium)",
        glow: "var(--shadow-glow)",
        "brand-zomato": "var(--shadow-brand-zomato)",
        "brand-amul": "var(--shadow-brand-amul)",
        "brand-mamaearth": "var(--shadow-brand-mamaearth)",
        "brand-sabyasachi": "var(--shadow-brand-sabyasachi)",
        "brand-lenskart": "var(--shadow-brand-lenskart)",
      },
      transitionTimingFunction: {
        smooth: "var(--transition-smooth)",
        bounce: "var(--transition-bounce)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-bounce": {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "character-walk": {
          "0%": { transform: "translateX(-100px) rotate(-5deg)" },
          "25%": { transform: "translateX(-25px) rotate(2deg)" },
          "50%": { transform: "translateX(25px) rotate(-2deg)" },
          "75%": { transform: "translateX(75px) rotate(1deg)" },
          "100%": { transform: "translateX(100px) rotate(0deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in-left": "slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-bounce":
          "scale-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "character-walk": "character-walk 12s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
