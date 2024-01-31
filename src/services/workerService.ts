import { produceWorkerCreated } from "../kafka/producers/newWorkerProducer"
import WorkerModel from "../models/workerModel"

export const getWorkers = async () => {
  return await WorkerModel.find()
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
