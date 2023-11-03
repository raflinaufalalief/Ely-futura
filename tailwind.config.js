/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Poppins: " 'Poppins' , sans-serif",
    },

    screens: {
      mobile: { min: "300px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      tablet: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      Sdesktop: "1024px",
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/hero.jpg')",
        "profile-bg": "url('/assets/bg-profile.jpg')",
        "heo-bg": "url('/assets/heo.jpg')",
        "contact-bg": "url('/assets/contact.jpg')",
      },

      colors: {
        primary: "#24305E",
        secondary: "#737373",
        desc: "#F1F6F9",
        bg: "#14274E",
        accent: "#F76C6C",
        dark: "#F1F6F9",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
