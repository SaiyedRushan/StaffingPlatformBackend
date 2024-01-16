import { createJob } from "../../services/jobService"
import Job from "../../models/jobModel"
import { v4 as uuidv4 } from "uuid"

jest.mock("uuid")

describe("jobService", () => {
  ;(uuidv4 as jest.Mock).mockReturnValue("mocked-uuid")

  it("should create a new job and add it to the jobs array", () => {
    const title = "Senior Software Engineer"
    const description = "Job description"
    const salaryRange = "$90,000 - $110,000"

    const newJob = createJob({ title, description, salaryRange })

    expect(newJob).toEqual(expect.any(Job))
    expect(uuidv4).toHaveBeenCalled()
    expect(newJob.id).toBe("mocked-uuid")
    expect(newJob.title).toBe(title)
    expect(newJob.description).toBe(description)
    expect(newJob.salaryRange).toBe(salaryRange)
  })
})
