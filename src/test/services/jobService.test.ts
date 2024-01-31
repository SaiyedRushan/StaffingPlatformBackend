import { createJob } from "../../services/jobService"
import Job from "../../models/jobModel"

describe.skip("jobService", () => {
  it("should create a new job and add it to the jobs array", async () => {
    const title = "Senior Software Engineer"
    const description = "Job description"
    const salaryRange = "$90,000 - $110,000"

    const newJob = await createJob({ title, description, salaryRange })

    expect(newJob).toEqual(expect.any(Job))
    expect(newJob.title).toBe(title)
    expect(newJob.description).toBe(description)
    expect(newJob.salaryRange).toBe(salaryRange)
  })

  it("should save the new job to the database", async () => {
    const title = "Senior Software Engineer"
    const description = "Job description"
    const salaryRange = "$90,000 - $110,000"

    const newJob = await createJob({ title, description, salaryRange })

    const savedJob = await Job.findOne({ title })

    expect(savedJob).toEqual(expect.any(Job))
    expect(savedJob?.title).toBe(title)
    expect(savedJob?.description).toBe(description)
    expect(savedJob?.salaryRange).toBe(salaryRange)
  })
})
