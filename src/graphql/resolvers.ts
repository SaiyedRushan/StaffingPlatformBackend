import { worker } from "./queries/worker"
import { workers } from "./queries/workers"
import { addWorker } from "./mutations/addWorker"

export const resolvers = {
  Query: {
    worker,
    workers,
  },
  Mutation: {
    addWorker,
  },
}
