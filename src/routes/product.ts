import { Router } from "express"
import { getProducts } from "../controllers/product"

const ProductRoutes = Router()

ProductRoutes.get("/", getProducts)

export default ProductRoutes
