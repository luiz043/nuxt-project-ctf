// https://nuxt.com/docs/api/configuration/nuxt-config
import { option } from "@primeuix/themes/aura/autocomplete";
import Material from "@primeuix/themes/material";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/cyberpunk.css"],
  modules: ["@primevue/nuxt-module"],
  vite: {
    plugins: [tailwindcss()],
  },
  ssr: false,
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Material,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
});
