import { Request, Response } from "express"
import { Product, UserRepository } from "../db/models/product"
import { ProductDTO } from "../interfaces/ProductDTO"

export const getProducts = async (req: Request, res: Response) => {
  const products = await UserRepository.find()

  return res.json({
    ok: true,
    data: products,
  })
}

export const getProductById = async (req: Request, res: Response) => {
  const id = req.params.id.trim()

  if (!id) {
    return res.status(400).json({
      ok: false,
      data: { message: "Bad request, you must pass an id" },
    })
  }

  const product = await UserRepository.findOneBy({
    id: Number(id),
  })

  if (!product) {
    return res.status(404).json({
      ok: false,
      data: { message: "Product not found" },
    })
  }

  return res.json({
    ok: true,
    data: product,
  })
}

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.id.trim()
  const productDTO: ProductDTO = req.body

  if (!id) {
    return res.status(400).json({
      ok: false,
      data: { message: "Bad request, you must pass an id" },
    })
  }

  const product = await UserRepository.findOneBy({ id: Number(id) })

  if (!product) {
    return res.status(404).json({
      ok: false,
      data: { message: "Product not found" },
    })
  }

  UserRepository.merge({ ...product, ...productDTO })

  return res.json({
    ok: true,
    data: product,
  })
}

export const addProduct = async (req: Request, res: Response) => {
  const productDTO: ProductDTO = req.body

  const productInstance = UserRepository.create(productDTO)

  await UserRepository.save(productInstance)

  return res.json({
    ok: true,
    data: {
      id: productInstance.id,
      title: productInstance.title,
    },
  })
}
