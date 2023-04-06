import FormKitTailwind from '@formkit/themes/tailwindcss'

module.exports = {
  //...
  content: [
    // "./content/**/*.{md,vue,html,js,ts,jsx,tsx}",
    // "./pages/**/*.{md,vue,html,js,ts,jsx,tsx}",
    // "./components/**/*.{md,vue,html,js,ts,jsx,tsx}",
    "./node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs"


  ],
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
    FormKitTailwind,
  ],
};
