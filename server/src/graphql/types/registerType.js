const {
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const registerType = new GraphQLObjectType({
  name: 'Register',
  fields: {
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    status: { type: GraphQLString }
  }
})

module.exports = registerType
