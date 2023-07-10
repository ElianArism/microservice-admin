import express from "express"
import cors from "cors"
import AppDataSource from "./db/data-source"
import AppRouter from "./routes/router"

const app = express()

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3100",
      "http://localhost:3200",
    ],
  })
)
app.use(express.json())

app.use("/api", AppRouter)

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected")
  })
  .catch((err) => {
    console.log("Internar Server Error")
    console.log(err)
  })

app.listen(3000, () => {
  console.log("app running on port", 3000)
})
