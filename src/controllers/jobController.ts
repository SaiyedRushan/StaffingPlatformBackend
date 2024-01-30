import { Request, Response } from "express"
import * as jobService from "../services/jobService"

export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, salaryRange } = req.body
    const newJob = await jobService.createJob({ title, description, salaryRange })
    res.status(201).json(newJob)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}

export const updateJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobId = req.params.jobId
    const { title, description, salaryRange } = req.body
    const updatedJob = await jobService.updateJob(jobId, { title, description, salaryRange })
    if (updatedJob) {
      res.json(updatedJob)
    } else {
      res.status(404).json({ error: "Job not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}

export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobId = req.params.jobId
    const deletedJob = await jobService.deleteJob(jobId)
    if (deletedJob) {
      res.json(deletedJob)
    } else {
      res.status(404).json({ error: "Job not found" })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}

export const applyForJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobId = req.params.jobId
    const { workerId } = req.body
    const result = await jobService.applyForJob(jobId, workerId)
    if (result.success) {
      res.json({ message: "Worker has applied for the job" })
    } else {
      res.status(404).json({ error: result.error })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}

export const hireWorkerForJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobId = req.params.jobId
    const { workerId } = req.body
    const result = await jobService.hireWorkerForJob(jobId, workerId)
    if (result.success) {
      res.json({ message: "Worker has been hired for the job" })
    } else {
      res.status(404).json({ error: result.error })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
}
