import mongoose from "mongoose"
import { config } from "dotenv"
config()

async function connectDb() {
  try {
    await mongoose.disconnect() // Disconnect all sessions
    await mongoose.connect(process.env.MONGO_URI || "", { dbName: process.env.MONGO_DB_NAME })
    console.log("Connected to database")
  } catch (error) {
    console.error("Error connecting to database: ", error)
  }
}

export default connectDb
