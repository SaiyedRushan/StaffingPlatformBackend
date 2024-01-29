import { GraphQLList, GraphQLString } from "graphql"
import { WorkerType } from "../types/workerType"
import { getWorkers } from "../../services/workerService"

export const workers = {
  type: GraphQLList(WorkerType),
  resolve(parent: any, args: any) {
    return getWorkers()
  },
}
