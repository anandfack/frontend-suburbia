module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
      secondary: "Merriweather Sans",
      accent: "Noto Sans"
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#000",
        secondary: "#FFE400",
        white: "#fff",
        card: "#171717"
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/hero-image.png")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
        recentshow: 'url("/src/assets/img/recent-show.png")'
      },
      dropShadow: {
        primary: "0px 4px 10px rgba(15, 27, 51, 0.05);",
        card: "0px 28px 89px 0px rgba(255, 255, 255, 0.13);"
      },
    },
  },
  plugins: [],
};
