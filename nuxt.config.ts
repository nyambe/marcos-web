// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Raleway: true,
      Lora: true,
    },
  },
  content: {
    documentDriven: true,
    navigation: {
      fields: ["tipo", "texto", "destino"],
    },
  },
});
