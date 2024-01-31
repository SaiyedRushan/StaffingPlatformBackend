import { Request, Response } from "express"
import * as jobService from "../../services/jobService"
import * as jobController from "../../controllers/jobController"

jest.mock("../../services/jobService")

describe.skip("jobController", () => {
  const mockRequest = {} as Request
  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should create a job", async () => {
    const requestBody = {
      title: "Senior Backend Engineer",
      description: "Job description",
      salaryRange: "$90000 - $110000",
    }

    ;(jobService.createJob as jest.Mock).mockReturnValueOnce({ id: 1, ...requestBody })
    mockRequest.body = requestBody

    jobController.createJob(mockRequest, mockResponse)
    expect(jobService.createJob).toHaveBeenCalledWith(requestBody)
    expect(mockResponse.status).toHaveBeenCalledWith(201)
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 1, ...requestBody })
  })

  it("should indicate worker has applied for job", async () => {
    const requestBody = {
      workerId: "1",
    }
    const requestParams = { jobId: "1" }

    ;(jobService.applyForJob as jest.Mock).mockReturnValueOnce({ success: true })
    mockRequest.body = requestBody
    mockRequest.params = requestParams

    jobController.applyForJob(mockRequest, mockResponse)
    expect(jobService.applyForJob).toHaveBeenCalledWith(requestParams.jobId, requestBody.workerId)
    expect(mockResponse.json).toHaveBeenCalledWith({ message: "Worker has applied for the job" })
  })

  it("should error worker not found when hiring for job", async () => {
    const requestBody = {
      workerId: "3",
    }
    const requestParams = { jobId: "1" }

    ;(jobService.hireWorkerForJob as jest.Mock).mockReturnValueOnce({ success: false, error: "Worker not found among applicants" })
    mockRequest.body = requestBody
    mockRequest.params = requestParams

    jobController.hireWorkerForJob(mockRequest, mockResponse)
    expect(jobService.hireWorkerForJob).toHaveBeenCalledWith(requestParams.jobId, requestBody.workerId)
    expect(mockResponse.status).toHaveBeenCalledWith(404)
    expect(mockResponse.json).toHaveBeenCalledWith({ error: "Worker not found among applicants" })
  })
})
