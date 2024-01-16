import express from "express"
import bodyParser from "body-parser"
import { configDotenv } from "dotenv"
import loggerMiddleware from "./middleware/loggerMiddleware"
import routes from "./routes/routes"
configDotenv()

const app = express()
const PORT = process.env.PORT || 8080

// middleware to parse json data
app.use(bodyParser.json())
app.use(loggerMiddleware)

app.use("/api", routes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
