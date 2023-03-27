module.exports = {
  //...
  theme: {
    extend: {
      spacing: {
        small: "8px",
        normal: "16px",
        medium: "32px",
        large: "64px",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography", "@tailwindcss/line-clamp"),
  ],
};
