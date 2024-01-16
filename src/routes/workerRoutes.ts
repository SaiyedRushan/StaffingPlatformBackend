import express, { Router } from "express"
import * as workerController from "../controllers/workerController"

const router: Router = express.Router()

router.post("/", workerController.createWorker)
router.put("/:workerId", workerController.updateWorker)
router.delete("/:workerId", workerController.deleteWorker)

export default router
