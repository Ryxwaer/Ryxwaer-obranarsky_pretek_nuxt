import { randomBytes } from 'crypto';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@i2d/nuxt-pdf-frame'],

  css: [
    '@/assets/css/global.css',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/input.css'
  },
  compatibilityDate: '2024-08-27',
})