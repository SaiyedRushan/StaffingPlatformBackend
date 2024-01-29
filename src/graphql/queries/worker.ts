import { GraphQLString } from "graphql"
import { WorkerType } from "../types/workerType"
import { getWorkerById } from "../../services/workerService"

export const worker = {
  type: WorkerType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(parent: any, args: any) {
    const { id } = args
    const worker = getWorkerById(id)
    return worker
  },
}
