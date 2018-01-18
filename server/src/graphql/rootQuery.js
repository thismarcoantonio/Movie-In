const { GraphQLObjectType , GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'movies',
  fields: {
    viewer: { type: GraphQLString, resolve: () => 'hello' }
  }
})
