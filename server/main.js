const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
var cors = require('cors')

const schema = buildSchema(`
  type Query {
    hello: String
  }
`) 

const root = {
  hello: () => 'hello world'
}

const app = express()

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(3001, () => console.log('running in http://localhost:3000/graphql'))