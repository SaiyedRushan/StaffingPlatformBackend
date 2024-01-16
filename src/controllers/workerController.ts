import { Request, Response } from "express"
import * as workerService from "../services/workerService"

export const createWorker = (req: Request, res: Response): void => {
  try {
    const { name, email, phoneNumber } = req.body
    const newWorker = workerService.createWorker({ name, email, phoneNumber })
    res.status(201).json(newWorker)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}

export const updateWorker = (req: Request, res: Response): void => {
  try {
    const workerId = req.params.workerId
    const { name, email, phoneNumber } = req.body
    const updatedWorker = workerService.updateWorker(workerId, { name, email, phoneNumber })
    if (updatedWorker) {
      res.json(updatedWorker)
    } else {
      res.status(404).json({ error: "Worker not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}

export const deleteWorker = (req: Request, res: Response): void => {
  try {
    const workerId = req.params.workerId
    const deletedWorker = workerService.deleteWorker(workerId)
    if (deletedWorker) {
      res.json(deletedWorker)
    } else {
      res.status(404).json({ error: "Worker not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}
