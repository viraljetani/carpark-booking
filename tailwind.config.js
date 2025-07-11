/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(265, 42%, 20.8%)',
          foreground: 'hsl(247, 0.3%, 98.4%)',
        },
        secondary: {
          DEFAULT: 'hsl(247, 0.7%, 96.8%)',
          foreground: 'hsl(265, 42%, 20.8%)',
        },
        muted: {
          DEFAULT: 'hsl(247, 0.7%, 96.8%)',
          foreground: 'hsl(257, 4.6%, 55.4%)',
        },
        accent: {
          DEFAULT: 'hsl(247, 0.7%, 96.8%)',
          foreground: 'hsl(265, 42%, 20.8%)',
        },
        destructive: 'hsl(27.3, 24.5%, 57.7%)',
        border: 'hsl(255.5, 1.3%, 92.9%)',
      },
    },
  },
  plugins: [],
}
