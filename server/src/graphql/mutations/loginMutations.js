const { GraphQLString } = require('graphql')
const userType = require('../types/userType')

module.exports = {
  type: userType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve: (parentValue, args) => {
    return {
      username: args.username,
      password: args.password
    }
  }
}
