/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProducts } from './products.interface'
import { Products } from './products.model'

const createProductIntoDB = async (payload: TProducts) => {
  const result = await Products.create(payload)
  return result
}

const getProductsFromDB = async (query: Record<string, unknown>) => {
  const {
    search = '',
    category
  } = query

  const filter = {} as any
  if (search) filter.name = { $regex: search, $options: 'i' }
  if (category) filter.category = { $regex: category, $options: 'i' }




  const result = await Products.find(filter)
    .sort({createdAt: -1})
  return result
}


export const productServices = {
  createProductIntoDB,
  getProductsFromDB,
}
