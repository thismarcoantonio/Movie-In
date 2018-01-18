const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const mongoose = require('mongoose')

const cors = require('cors')

const schema = require('./graphql/Schemas/Schema') 


const app = express()

mongoose.connect('mongodb://localhost:27017/local')
const db = mongoose.connection
db.once('open', () => console.log( '+++Connected to mongoose'))

app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(3001, () => console.log('running in http://localhost:3000/graphql'))