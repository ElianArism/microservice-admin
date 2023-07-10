import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import AppDataSource from "../data-source"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  image!: string

  @Column({ default: 0 })
  likes!: number
}

export const UserRepository = AppDataSource.getRepository(Product)
