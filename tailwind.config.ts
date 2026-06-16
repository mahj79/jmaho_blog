import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#000000",
        foreground: "#FFFFFF",
        muted: "rgba(255, 255, 255, 0.6)",
        border: "rgba(255, 255, 255, 0.2)",
      },
      letterSpacing: {
        display: "-0.06em",
      },
      lineHeight: {
        display: "0.9",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 12vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.06em" }],
        "display-lg": ["clamp(2rem, 6vw, 4.5rem)", { lineHeight: "0.9", letterSpacing: "-0.05em" }],
        "display-md": ["clamp(1.5rem, 4vw, 3rem)", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
      },
      maxWidth: {
        site: "1400px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
