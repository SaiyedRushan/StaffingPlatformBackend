import mongoose, { Schema, Document } from "mongoose"

interface Job extends Document {
  title: string
  description: string
  salaryRange: string
  applicants: Schema.Types.ObjectId[]
  hiredWorker: Schema.Types.ObjectId
  isHired: boolean
}

const JobSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  salaryRange: { type: String, required: true },
  applicants: [{ type: Schema.Types.ObjectId, ref: "Worker" }],
  hiredWorker: { type: Schema.Types.ObjectId, ref: "Worker" },
  isHired: { type: Boolean, default: false },
})

export default mongoose.model<Job>("Job", JobSchema)
