import { GraphQLString } from "graphql"
import { WorkerType } from "../types/workerType"
import { createWorker } from "../../services/workerService"

export const addWorker = {
  type: WorkerType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    const worker = createWorker(args)
    return worker
  },
}
