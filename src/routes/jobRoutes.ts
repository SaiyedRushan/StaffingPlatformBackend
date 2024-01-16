import express, { Router } from "express"
import * as jobController from "../controllers/jobController"

const router: Router = express.Router()

router.post("/", jobController.createJob)
router.put("/:jobId", jobController.updateJob)
router.delete("/:jobId", jobController.deleteJob)
router.post("/:jobId/apply", jobController.applyForJob)
router.post("/:jobId/hire", jobController.hireWorkerForJob)

export default router
