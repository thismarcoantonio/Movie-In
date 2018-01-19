const { GraphQLSchema } = require('graphql')

const query = require('./rootQuery')
const mutation = require('./rootMutation')

module.exports = new GraphQLSchema({ query, mutation })
