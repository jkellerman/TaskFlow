/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border-color))",
        destructive: "hsl(var(--destructive))",
        text: "hsl(var(--text-color))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          lighter: "hsl(var(--secondary-lighter))",
          darker: "hsl(var(--secondary-darker))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          lighter: "hsl(var(--tertiary-lighter))",
          darker: "hsl(var(--tertiary-darker))",
        },
        today: {
          DEFAULT: "hsl(var(--today-text))",
          background: "hsl(var(--today-background))",
          border: "hsl(var(--today-border))",
        },
        tomorrow: {
          DEFAULT: "hsl(var(--tomorrow-text))",
          background: "hsl(var(--tomorrow-background))",
          border: "hsl(var(--tomorrow-border))",
        },
        "future-date": {
          DEFAULT: "hsl(var(--future-date-text))",
          background: "hsl(var(--future-date-background))",
          border: "hsl(var(--future-date-border))",
        },
        "past-date": {
          DEFAULT: "hsl(var(--past-date-text))",
          background: "hsl(var(--past-date-background))",
          border: "hsl(var(--past-date-border))",
        },
      },
    },
  },
  plugins: [],
};
