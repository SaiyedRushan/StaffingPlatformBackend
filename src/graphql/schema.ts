import { GraphQLSchema, GraphQLObjectType } from "graphql"
import { resolvers } from "./resolvers"

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: resolvers.Query,
})

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: resolvers.Mutation,
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})
