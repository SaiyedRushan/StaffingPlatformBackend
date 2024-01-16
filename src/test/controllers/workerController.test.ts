import { Request, Response } from "express"
import * as workerService from "../../services/workerService"
import { createWorker, updateWorker, deleteWorker } from "../../controllers/workerController"

jest.mock("../../services/workerService")

describe("workerController", () => {
  const mockRequest = {} as Request
  const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("should create a worker", async () => {
    const requestBody = {
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
    }

    ;(workerService.createWorker as jest.Mock).mockReturnValueOnce({ id: 1, ...requestBody })
    mockRequest.body = requestBody

    createWorker(mockRequest, mockResponse)
    expect(workerService.createWorker).toHaveBeenCalledWith(requestBody)
    expect(mockResponse.status).toHaveBeenCalledWith(201)
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 1, ...requestBody })
  })

  it("should error worker not found", async () => {
    const requestBody = {
      name: "Updated name",
      email: "updated@email.com",
      phoneNumber: "0987654321",
    }
    const requestParams = { workerId: "3" }

    ;(workerService.updateWorker as jest.Mock).mockReturnValueOnce(null)
    mockRequest.body = requestBody
    mockRequest.params = requestParams

    updateWorker(mockRequest, mockResponse)
    expect(workerService.updateWorker).toHaveBeenCalledWith(requestParams.workerId, requestBody)
    expect(mockResponse.status).toHaveBeenCalledWith(404)
    expect(mockResponse.json).toHaveBeenCalledWith({ error: "Worker not found" })
  })

  it("should delete a worker", async () => {
    const requestParams = { workerId: "1" }

    ;(workerService.deleteWorker as jest.Mock).mockReturnValueOnce({ id: 1, name: "John Doe", email: "john@example.com", phoneNumber: "1234567890" })
    mockRequest.params = requestParams

    deleteWorker(mockRequest, mockResponse)
    expect(workerService.deleteWorker).toHaveBeenCalledWith(requestParams.workerId)
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 1, name: "John Doe", email: "john@example.com", phoneNumber: "1234567890" })
  })
})
