import { ObjectId } from "mongoose"
import Job from "../models/jobModel"
import { checkWorkerExists } from "./workerService"
type JobType = typeof Job

export const createJob = async ({ title, description, salaryRange }: { title: string; description: string; salaryRange: string }) => {
  const newJob = new Job({ title, description, salaryRange })
  await newJob.save()
  return newJob
}

export const updateJob = async (jobId: string, { title, description, salaryRange }: { title?: string; description?: string; salaryRange?: string }): Promise<JobType | null> => {
  return await Job.findByIdAndUpdate(jobId, { title, description, salaryRange }, { new: true })
}

export const deleteJob = async (jobId: string): Promise<JobType | null> => {
  return await Job.findByIdAndDelete(jobId)
}

export const applyForJob = async (jobId: string, workerId: string): Promise<{ success: boolean; error?: string | undefined }> => {
  const job = await Job.findById(jobId)
  if (!job) {
    return { success: false, error: "Job not found" }
  }

  const worker = await checkWorkerExists(workerId)
  if (worker) {
    job.applicants.push(worker._id)
    await job.save()
    return { success: true }
  } else {
    return { success: false, error: "Worker not found" }
  }
}

export const hireWorkerForJob = async (jobId: string, workerId: ObjectId): Promise<{ success: boolean; error?: string }> => {
  const job = await Job.findById(jobId)
  if (!job) {
    return { success: false, error: "Job not found" }
  }
  const worker = job.applicants.find((applicantId) => applicantId === workerId)
  if (!worker) {
    return { success: false, error: "Worker not found among applicants" }
  }
  // set hiredWorker to workerId
  const updatedJob = await Job.findByIdAndUpdate(jobId, { hiredWorker: workerId, isHired: true }, { new: true })
  return { success: true }
}
