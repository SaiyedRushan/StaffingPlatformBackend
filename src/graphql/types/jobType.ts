import { GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLList, GraphQLBoolean } from "graphql"
import { WorkerType } from "./workerType"

export const JobType = new GraphQLObjectType({
  name: "Job",
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    salaryRange: { type: GraphQLNonNull(GraphQLString) },
    applicants: { type: GraphQLList(WorkerType) },
    hiredWorker: { type: WorkerType },
    isHired: { type: GraphQLNonNull(GraphQLBoolean) },
  }),
})
