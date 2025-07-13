// nuxt.d.ts
import { ModuleOptions } from '@sidebase/nuxt-auth'

declare module 'nuxt/schema' {
  /** 这里扩展运行时配置的类型 */
  interface RuntimeConfig {
    public: {
      auth: {
        baseURL: string            // 👈 你自己的字段
      }
    }
  }

  /** （可选）把顶层 auth 模块选项也补上类型 */
  interface NuxtConfig {
    auth?: Partial<ModuleOptions>
  }
}

export {}  // 让这个文件成为模块
