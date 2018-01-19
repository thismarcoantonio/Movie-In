const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const config = require('./config/config')
const schema = require('./graphql/rootSchema')

// Express Config
const app = express()
app.use(cors())

// Express Graphql Config
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

// Mongoose Config
mongoose.connect(config.db.endpoint)
const db = mongoose.connection

db.on('error', () => console.error(`Error at MongoDB`))
db.once('open', () => app.listen(config.port, () =>
  console.log(`
    Server Running on http://localhost:${config.port}
    Checkout GraphiQl on http://localhost:${config.port}/graphql
    MongoDB running at port ${config.db.port}
  `)
))
