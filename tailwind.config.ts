import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./app/**/*.{ts,tsx,mdx}",
    "./src/**/*.{ts,tsx,mdx}",
    "./src/app/(auth)/signup/SignUpForm.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "hsl(var(--primary))", // Добавлено
        input: "hsl(var(--input))", // Добавлено
        ring: "hsl(var(--ring))", // Добавлено
        red: {
          500: "#EF4444", // Добавлено для красного цвета
        },
      },
    },
  },
  plugins: [],
};
export default config;
