module.exports = {
  //...
  theme: {
    extend: {
      spacing: {
        small: "8px",
        normal: "16px",
        medium: "32px",
        large: "64px",
        larger: "28rem",
        largest: "32rem",
        giant: "48rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography", "@tailwindcss/line-clamp"),
    require("@headlessui/tailwindcss"),
  ],
};
