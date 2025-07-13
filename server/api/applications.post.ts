import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  await prisma.application.create({ data: body })
  return { ok: true }
})
