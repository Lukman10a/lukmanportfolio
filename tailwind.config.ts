import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": {
        max: "1400px",
      },
      xl: {
        max: "1279px",
      },
      lg: {
        max: "1023px",
      },
      "2md": {
        max: "950px",
      },
      md: {
        max: "767px",
      },
      sm: {
        max: "639px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "reveal-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(80%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "reveal-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-80%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "bg-position": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },

        "content-blur": {
          "0%": {
            filter: "blur(0.3rem)",
          },
          "100%": {
            filter: "blur(0)",
          },
        },
        "marquee-x": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        "marquee-y": {
          from: {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(calc(-100% - var(--gap)))",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        trail: {
          "0%": {
            "--angle": "0deg",
          },
          "100%": {
            "--angle": "360deg",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "marquee-horizontal": "marquee-x var(--duration) infinite linear",
        "marquee-vertical": "marquee-y var(--duration) linear infinite",
        "fade-in-up": "fadeInUp 0.7s ease-in-out forwards",
        trail: "trail var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
