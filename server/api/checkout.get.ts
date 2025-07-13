import Stripe from 'stripe'
import { getServerSession } from '#auth'
import { prisma } from '~/server/utils/prisma'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  if (!session?.user) throw createError({ statusCode: 401 })

  const checkout = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
      price_data: {
        currency: 'usd',
        unit_amount: 1000,
        product_data: { name: 'Donor Full Access' }
      },
      quantity: 1
    }],
    success_url: `${process.env.AUTH_ORIGIN}/payment/success`,
    cancel_url: `${process.env.AUTH_ORIGIN}/payment`
  })
  return checkout
})
