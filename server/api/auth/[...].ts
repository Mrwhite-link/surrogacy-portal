import { NuxtAuthHandler } from '#auth'
import Credentials from '@auth/core/providers/credentials'
import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcrypt'

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET || 'dev-secret',

  providers: [
    Credentials({
      name: 'Credentials',
      // 登录表单字段声明（可按需删减或改 label）
      credentials: {
        email:    { label: 'Email',    type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      // 这里用 any，让 TS 不再报错
      async authorize (cred: any) {
        const { email, password } = cred ?? {}
        if (!email || !password) return null

        const user = await prisma.user.findUnique({ where: { email } })
        if (user && await bcrypt.compare(password, user.password))
          return { id: user.id, email: user.email, paid: user.paid }

        return null
      }
    })
  ]
} as any)                // as any 只是为了消除 TS 报红
