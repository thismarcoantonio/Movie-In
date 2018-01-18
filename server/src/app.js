const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql')

const mongoose = require('mongoose')

const config = require('./config/config')
const schema = require('./graphql/rootSchema')

// Express Config
const app = express()
app.use(bodyParser.json())
app.use(cors())

// Express Graphql Config
app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))

// Mongoose Config
mongoose.connect(config.db.endpoint)
  .then(() => {
    app.listen(config.port, () => console.log(`
      Server Running on http://localhost:${config.port}
      Checkout GraphiQl on http://localhost:${config.port}/graphql
      MongoDB running at port ${config.db.port}
    `))
  }, err => {
    console.error(`Error at MongoDB ${err}`)
  })
