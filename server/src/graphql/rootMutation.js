const { GraphQLObjectType } = require('graphql')
const loginMutation = require('./mutations/loginMutations')
const registerMutation = require('./mutations/registerMutation')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    loginMutation,
    registerMutation
  }
})
