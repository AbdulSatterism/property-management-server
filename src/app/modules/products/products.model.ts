import { model, Schema } from 'mongoose'
import { TProducts } from './products.interface'

const productSchema = new Schema<TProducts>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
   
    image: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const Products = model<TProducts>('Products', productSchema)
