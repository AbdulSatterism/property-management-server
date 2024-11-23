import { Router } from 'express'
import { productControllers } from './product.controller'
import validateRequest from '../../middlewares/validateRequest'
import { productValidations } from './product.validation'

const router = Router()

router.post(
  '/products',
  validateRequest(productValidations.createProductValidation),
  productControllers.createProduct,
)

router.get('/products', productControllers.getProducts)




export const productRoutes = router
