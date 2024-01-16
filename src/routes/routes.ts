import express, { Router } from "express"
import jobRoutes from "./jobRoutes"
import workerRoutes from "./workerRoutes"

const router: Router = express.Router()

router.use("/jobs", jobRoutes)
router.use("/workers", workerRoutes)

export default router
