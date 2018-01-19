const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: { type: GraphQLString, resolve: () => 'hello' }
  }
})
