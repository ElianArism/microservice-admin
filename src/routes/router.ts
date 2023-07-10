import { Router } from "express"
import ProductRoutes from "./product"

const AppRouter = Router()

AppRouter.get("/products", ProductRoutes)

export default AppRouter
