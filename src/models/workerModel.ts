import mongoose, { Document, Schema } from "mongoose"

interface IWorker extends Document {
  name: string
  email: string
  phoneNumber?: string
}

const workerSchema = new Schema<IWorker>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
})

const WorkerModel = mongoose.model<IWorker>("Worker", workerSchema)

export default WorkerModel
