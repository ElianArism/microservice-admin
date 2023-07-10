import { DataSource } from "typeorm"
import { ENV } from "../../env"

const AppDataSource = new DataSource({
  type: "mariadb",
  host: "127.0.0.1",
  port: 3306,
  username: ENV.username,
  password: ENV.password,
  database: ENV.database,
  entities: ["src/models/*.ts"],
  logging: true,
  synchronize: true,
})

AppDataSource.createEntityManager

export default AppDataSource
