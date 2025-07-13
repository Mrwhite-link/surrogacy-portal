// server/utils/prisma.ts
import { PrismaClient } from '@prisma/client'

/**
 * 单例模式：避免热更新时 "PrismaClient already in use"
 */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn']   // 本地调试可关
  })

if (process.env.NODE_ENV !== 'production')
  globalForPrisma.prisma = prisma
