import Worker from "./workerModel"

// when using mongodb, we would be creating a schema here instead
class Job {
  id: string
  title: string
  description: string
  salaryRange: string
  applicants: Worker[] // we could also just store the workerIds here and do a join if it was a relation db
  hiredWorker: Worker | null // we could also just store the workerId here
  isHired: boolean = false

  constructor(id: string, title: string, description: string, salaryRange: string) {
    this.id = id
    this.title = title
    this.description = description
    this.salaryRange = salaryRange
    this.applicants = []
    this.hiredWorker = null
    this.isHired = false
  }

  hireWorker(worker: Worker): void {
    this.hiredWorker = worker
    this.isHired = true
  }
}

export default Job
