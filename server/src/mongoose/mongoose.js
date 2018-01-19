const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  itemId: Number,
  item: String,
  completed: Boolean
}, { collection: 'TodoList' })

const todo = mongoose.model('todo', schema)

module.exports = todo
