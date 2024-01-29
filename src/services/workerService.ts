import Worker from "../models/workerModel"
import { v4 as uuidv4 } from "uuid"

// temp storage for workers, would use a database in real life
const workers: Worker[] = [
  new Worker(uuidv4(), "John Doe", "john@example.com", "1234567890"),
  new Worker(uuidv4(), "Jane Smith", "jane@example.com", "9876543210"),
  new Worker(uuidv4(), "Michael Johnson", "michael@example.com", "5555555555"),
]

export const getWorkers = (): Worker[] => {
  return workers
}

export const getWorkerById = (workerId: string): Worker | null => {
  const worker = workers.find((worker) => worker.id === workerId)
  return worker || null
}

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
