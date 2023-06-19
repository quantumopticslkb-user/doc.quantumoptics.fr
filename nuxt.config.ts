export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
