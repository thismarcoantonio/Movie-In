const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql')

const movieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: {
    title: !GraphQLString,
    genre: !GraphQLString,
    author: !GraphQLString,
    year: GraphQLInt
  }
})

module.exports = movieType
