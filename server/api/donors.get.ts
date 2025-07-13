import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const q = getQuery(event)
  const where: any = {}
  if (q.ageMin) where.age = { gte: Number(q.ageMin) }
  if (q.ageMax) (where.age ||= {}).lte = Number(q.ageMax)
  if (q.heightMin) where.height = { gte: Number(q.heightMin) }
  if (q.heightMax) (where.height ||= {}).lte = Number(q.heightMax)
  if (q.education) where.education = q.education

  const session = event.context.session
  const paid     = session?.user?.paid
  const selectPublic = { id: true, age: true, height: true, education: true }
  const selectFull   = { ...selectPublic, bloodType: true, ethnicity: true, medicalHist: true, images: true }

  return prisma.donor.findMany({
    where,
    select: paid ? selectFull : selectPublic,
    orderBy: { createdAt: 'desc' }
  })
})
