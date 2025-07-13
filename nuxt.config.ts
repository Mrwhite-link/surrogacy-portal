export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],

  auth: {
    origin: process.env.AUTH_ORIGIN,
    enableGlobalAppMiddleware: true,
    baseURL: '/api/auth'          // ← 只有这 3 行
  }
})
