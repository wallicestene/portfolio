/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        raised: "var(--raised)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: "var(--font-display)",
        text: "var(--font-text)",
      },
      fontSize: {
        small: "var(--step-small)",
        body: "var(--step-body)",
        lead: "var(--step-lead)",
        head: "var(--step-head)",
        display: "var(--step-display)",
      },
      spacing: {
        margin: "var(--margin)",
        section: "var(--section)",
      },
    },
  },
  plugins: [],
};
