module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        lightGold: "#F5E6C8",
        cream: "#FFF8EE",
        softCream: "#FDF6EC",
        lightCream: "#F8F1E7",
        ink: "#1A1A1A"
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        luxury: ["Cormorant Garamond", "serif"]
      },
      boxShadow: {
        gold: "0 20px 70px rgba(212,175,55,0.24)",
        glass: "0 18px 60px rgba(26,26,26,0.10)"
      },
      borderRadius: {
        luxury: "24px"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
