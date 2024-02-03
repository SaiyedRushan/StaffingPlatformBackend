import { produceWorkerCreated } from "../kafka/producers/newWorkerProducer"
import WorkerModel from "../models/workerModel"
import redisClient from "../config/redis"

export const getWorkers = async () => {
  const cacheKey = "workers"
  let cachedWorkers = await redisClient.get(cacheKey)

  if (cachedWorkers) {
    console.log("Data retrieved from cache")
    return JSON.parse(cachedWorkers)
  } else {
    return new Promise(async (resolve, reject) => {
      // Simulate slow database query
      setTimeout(async () => {
        try {
          const workers = await WorkerModel.find()
          console.log("Data retrieved from database")
          await redisClient.setEx(cacheKey, 3600, JSON.stringify(workers))
          resolve(workers)
        } catch (error) {
          reject(error)
        }
      }, 5000)
    })
  }
}

export const getWorkerById = async (workerId: string) => {
  return await WorkerModel.findById(workerId)
}

export const createWorker = async ({ name, email, phoneNumber }: { name: string; email: string; phoneNumber?: string }) => {
  const newWorker = new WorkerModel({ name, email, phoneNumber })
  console.log("New worker created: ", newWorker)
  await newWorker.save()
  await produceWorkerCreated(newWorker)
  return newWorker
}

export const updateWorker = async (workerId: string, { name, email, phoneNumber }: { name?: string; email?: string; phoneNumber?: string }) => {
  return await WorkerModel.findByIdAndUpdate(workerId, { name, email, phoneNumber }, { new: true })
}

export const deleteWorker = async (workerId: string) => {
  return await WorkerModel.findByIdAndDelete(workerId)
}

export const checkWorkerExists = async (workerId: string) => {
  return await WorkerModel.findById(workerId)
}
