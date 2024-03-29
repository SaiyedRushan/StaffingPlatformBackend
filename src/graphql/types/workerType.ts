import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql"

export const WorkerType = new GraphQLObjectType({
  name: "Worker",
  fields: () => ({
    _id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    phoneNumber: { type: GraphQLString },
  }),
})
