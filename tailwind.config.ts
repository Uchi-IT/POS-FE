import type { Config } from "tailwindcss";

const config = {
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
        custom_primary: {
          DEFAULT: "#FB8185",
          25: "#BACFFC",
          50: "#8DAEF3",
          500: "#18469E",
          900: "#2C2C53",
        },
        custom_success: {
          DEFAULT: "#0DC76C",
          50: "#EAFEF4",
          100: "#CDFCE5",
          500: "#0DC76C",
        },
        custom_danger: {
          DEFAULT: "#EA1C24",
          50: "#FFFAFA",
          100: "#FDE5E5",
          500: "#EA1C24",
        },
        custom_neutral: {
          DEFAULT: "#F5F5F5",
          25: "#F5F5F5",
          300: "#A9B1BC",
          500: "#76818F",
          900: "#192434",
        },
        custom_base: {
         DEFAULT: "#FFFFFF",
         50: "#FFFFFF",
         100: "#F9FAFB",
         200: "#F4F6F8",
         900: '#000000',
       },
        custom_secondary: {
          DEFAULT: "#F9D505",
          25: "#E6EFFE",
          50: "#FFF5BA",
          500: "#F9D505",
        },
      },
      fontSize: {
       h1: ['40px', '48px'],
       h2: ['36px', '44px'],
       h3: ['32px', '40px'],
       h4: ['28px', '36px'],
       h5: ['24px', '32px'],
       h6: ['20px', '28px'],
       L10: '10px',
       L12: '12px',
       L14: '14px',
       L16: '16px',
       L18: '18px',
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
