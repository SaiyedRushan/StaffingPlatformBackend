import express, { Response, Router } from "express"
import jobRoutes from "./jobRoutes"
import workerRoutes from "./workerRoutes"

const router: Router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Home
 *   description: Home page and welcome message
 */

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Get the welcome message
 *     tags: [Home]
 *     responses:
 *       '200':
 *         description: Welcome message sent successfully
 */
router.get("/", (_, res: Response) => {
  res.send("Welcome to the Jobs & Workers API")
})

router.use("/jobs", jobRoutes)
router.use("/workers", workerRoutes)

export default router
