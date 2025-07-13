// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],

  // ── 模块选项 ──
  auth: {
    origin: process.env.AUTH_ORIGIN || 'http://localhost:3000',
    enableGlobalAppMiddleware: true
  },

  // ── 运行时配置 ──
  runtimeConfig: {
    public: {
      auth: {
        baseURL: '/api/auth'        // OK ✅
      }
    }
  }
})
