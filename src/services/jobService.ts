import Job from "../models/jobModel"
import { v4 as uuidv4 } from "uuid"
import { checkWorkerExists } from "./workerService"

// temp storage for jobs, would use a database in real life
const jobs: Job[] = []

export const createJob = ({ title, description, salaryRange }: { title: string; description: string; salaryRange: string }): Job => {
  const newJob = new Job(uuidv4(), title, description, salaryRange)
  jobs.push(newJob)
  return newJob
}

export const updateJob = (jobId: string, { title, description, salaryRange }: { title?: string; description?: string; salaryRange?: string }): Job | null => {
  const job = jobs.find((job) => job.id === jobId) // when using mongodb, we'd use findOneAndUpdate or save
  if (job) {
    job.title = title || job.title
    job.description = description || job.description
    job.salaryRange = salaryRange || job.salaryRange
    return job
  }
  return null
}

export const deleteJob = (jobId: string): Job | null => {
  const index = jobs.findIndex((job) => job.id === jobId)
  if (index !== -1) {
    const deletedJob = jobs.splice(index, 1)
    return deletedJob[0]
  }
  return null
}

export const applyForJob = (jobId: string, workerId: string): { success: boolean; error?: string } => {
  const job = jobs.find((job) => job.id === jobId)
  if (!job) {
    return { success: false, error: "Job not found" }
  }

  const worker = checkWorkerExists(workerId)
  if (worker) {
    job.applicants.push(worker)
    return { success: true }
  } else {
    return { success: false, error: "Worker not found" }
  }
}

export const hireWorkerForJob = (jobId: string, workerId: string): { success: boolean; error?: string } => {
  const job = jobs.find((job) => job.id === jobId)
  if (!job) {
    return { success: false, error: "Job not found" }
  }
  const worker = job.applicants.find((applicant) => applicant.id === workerId)
  if (!worker) {
    return { success: false, error: "Worker not found among applicants" }
  }
  job.hireWorker(worker)
  job.applicants = job.applicants.filter((applicant) => applicant.id !== workerId)
  return { success: true }
}
