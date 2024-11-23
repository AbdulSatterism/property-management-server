import { z } from 'zod'

const createProductValidation = z.object({
  body: z.object({
    name: z.string(),
    category: z.string(),
    rating: z.number(),
    price: z.number(),
    image: z.string(),
    available: z.boolean(),
  }),
})


export const productValidations = {
  createProductValidation
}
