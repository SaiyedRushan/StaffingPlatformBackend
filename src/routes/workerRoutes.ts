import express, { Router } from "express"
import * as workerController from "../controllers/workerController"

/**
 * @swagger
 * tags:
 *   name: Workers
 *   description: API endpoints for managing workers
 */

/**
 * @swagger
 * /api/workers:
 *   post:
 *     summary: Create a new worker
 *     tags: [Workers]
 *     requestBody:
 *       description: Worker object to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               jobTitle:
 *                 type: string
 *               phoneNumber: # This parameter is optional
 *                 type: string
 *     responses:
 *       '201':
 *         description: Worker created successfully
 *       '400':
 *         description: Invalid input data
 */

/**
 * @swagger
 * /api/workers/{workerId}:
 *   put:
 *     summary: Update a worker by ID
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: workerId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the worker to be updated
 *     requestBody:
 *       description: Worker object to be updated
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               jobTitle:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Worker updated successfully
 *       '404':
 *         description: Worker not found
 *       '400':
 *         description: Invalid input data
 */

/**
 * @swagger
 * /api/workers/{workerId}:
 *   delete:
 *     summary: Delete a worker by ID
 *     tags: [Workers]
 *     parameters:
 *       - in: path
 *         name: workerId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the worker to be deleted
 *     responses:
 *       '200':
 *         description: Worker deleted successfully
 *       '404':
 *         description: Worker not found
 */

const router: Router = express.Router()

router.post("/", workerController.createWorker)
router.put("/:workerId", workerController.updateWorker)
router.delete("/:workerId", workerController.deleteWorker)
router.get("/", workerController.getWorkers)

export default router
