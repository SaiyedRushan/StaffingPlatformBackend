import express, { Response, Router } from "express"
import jobRoutes from "./jobRoutes"
import workerRoutes from "./workerRoutes"

const router: Router = express.Router()

router.get("/", (_, res: Response) => {
  res.send("Welcome to the Jobs & Workers API")
})

router.use("/jobs", jobRoutes)
router.use("/workers", workerRoutes)

export default router
