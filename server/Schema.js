const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} = require('graphql/type')

const todo = require('../../mongo/mongoose')

var todoType = new GraphQLObjectType({
  name: 'todo',
  description: 'todo item',
  fields: () => ({
    itemId: {
      type: (GraphQLInt),
      description: 'The id of the todo.'
    },
    item: {
      type: GraphQLString,
      description: 'The name of the todo.'
    },
    completed: {
      type: GraphQLBoolean,
      description: 'Completed todo? '
    }
  })
})

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      todo: {
        type: new GraphQLList(todoType),
        args: {
          itemId: {
            name: 'itemId',
            type: new GraphQLNonNull(GraphQLInt)
          }
        },
        resolve: (root, { itemId }, source, fieldASTs) => new Promise((resolve, reject) => todo.find({ itemId }, (err, todos) => err ? reject(err) : resolve(todos)))
      }
    }
  })
})
module.exports = schema
