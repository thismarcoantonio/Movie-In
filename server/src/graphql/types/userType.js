const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  }
})

module.exports = userType
