import express, { Response } from "express"
import bodyParser from "body-parser"
import { configDotenv } from "dotenv"
import loggerMiddleware from "./middleware/loggerMiddleware"
import routes from "./routes/routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger"
import { createHandler } from "graphql-http/lib/use/express"
import { schema } from "./graphql/schema"
import connectdb from "./config/db"

configDotenv()

const app = express()
const PORT = process.env.PORT || 8080

// middleware to parse json data
app.use(bodyParser.json())
app.use(loggerMiddleware)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.all("/graphql", createHandler({ schema: schema }))

app.get("/", (_, res: Response) => {
  res.send("Welcome, to use the api, please go to /api")
})

app.use("/api", routes)
connectdb()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
