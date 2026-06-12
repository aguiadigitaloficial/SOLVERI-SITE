import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0E0C",
        surface: "#1E2420",
        foreground: "#FFFFFF",
        "muted-foreground": "#B0B8B4",
        accent: "#A8E63D",
        "accent-bright": "#D4FF00",
        "accent-foreground": "#0F2017",
      },
      fontFamily: {
        heading: ['"Exo 2"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        button: "5px",
        card: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
