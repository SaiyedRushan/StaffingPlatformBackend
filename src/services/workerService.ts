import Worker from "../models/workerModel"
import { v4 as uuidv4 } from "uuid"

// temp storage for workers, would use a database in real life
const workers: Worker[] = []

export const createWorker = ({ name, email, phoneNumber }: { name: string; email: string; phoneNumber?: string }): Worker => {
  const newWorker = new Worker(uuidv4(), name, email, phoneNumber)
  workers.push(newWorker)
  return newWorker
}

export const updateWorker = (workerId: string, { name, email, phoneNumber }: { name?: string; email?: string; phoneNumber?: string }): Worker | null => {
  const worker = workers.find((worker) => worker.id === workerId)
  if (worker) {
    worker.name = name || worker.name
    worker.email = email || worker.email
    worker.phoneNumber = phoneNumber || worker.phoneNumber
    return worker
  }
  return null
}

export const deleteWorker = (workerId: string): Worker | null => {
  const index = workers.findIndex((worker) => worker.id === workerId)
  if (index !== -1) {
    const deletedWorker = workers.splice(index, 1)
    return deletedWorker[0]
  }
  return null
}

export const checkWorkerExists = (workerId: string): Worker | undefined => {
  const worker = workers.find((worker) => worker.id === workerId)
  return worker
}
