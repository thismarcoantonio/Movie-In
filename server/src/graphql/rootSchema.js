const { GraphQLSchema } = require('graphql')

const query = require('./rootQuery')
const mutation = require('./rootQuery')

module.exports = new GraphQLSchema({ query })
