import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const { id }   = event.context.params!
  const session  = event.context.session
  const paid     = session?.user?.paid
  const selectPublic = { id: true, age: true, height: true, education: true }
  const selectFull   = { ...selectPublic, bloodType: true, ethnicity: true, medicalHist: true, images: true }

  return prisma.donor.findUnique({
    where: { id },
    select: paid ? selectFull : selectPublic
  })
})
