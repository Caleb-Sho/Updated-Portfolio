import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        ui: ["Syne", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8CB7A",
          dark: "#9A7A2E",
          muted: "rgba(201,168,76,0.15)",
        },
        obsidian: {
          DEFAULT: "#070707",
          mid: "#0E0E0E",
          light: "#161616",
          surface: "#1C1C1C",
        },
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-slower": "pulse 7s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2s linear infinite",
        "draw-line": "drawLine 1.5s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold":
          "linear-gradient(135deg, #C9A84C 0%, #E8CB7A 50%, #C9A84C 100%)",
        "gradient-gold-subtle":
          "linear-gradient(135deg, rgba(201,168,76,0.1) 0%, rgba(232,203,122,0.05) 100%)",
        "mesh-dark":
          "radial-gradient(at 40% 20%, rgba(201,168,76,0.05) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(201,168,76,0.03) 0px, transparent 50%)",
        "noise-overlay": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        gold: "0 0 30px rgba(201,168,76,0.15), 0 0 60px rgba(201,168,76,0.05)",
        "gold-sm": "0 0 15px rgba(201,168,76,0.2)",
        "gold-lg": "0 0 60px rgba(201,168,76,0.2), 0 0 100px rgba(201,168,76,0.1)",
        "inner-gold": "inset 0 0 30px rgba(201,168,76,0.05)",
        dark: "0 25px 60px rgba(0,0,0,0.5)",
        "card-hover": "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.1)",
      },
      borderColor: {
        gold: "#C9A84C",
        "gold-subtle": "rgba(201,168,76,0.15)",
        "gold-faint": "rgba(201,168,76,0.08)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
