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
import { startEmailConsumer } from "./kafka/consumers/emailConsumer"
configDotenv()

const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(loggerMiddleware)

// start email consumer
startEmailConsumer()

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.post("/graphql", createHandler({ schema: schema }))

app.get("/", (_, res: Response) => {
  res.send("Welcome, to use the api, please go to /api")
})

app.use("/api", routes)

// connect to database
connectdb()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
