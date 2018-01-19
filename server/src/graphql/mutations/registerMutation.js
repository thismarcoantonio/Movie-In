const { GraphQLString, GraphQLNonNull } = require('graphql')
const validator = require('validator')
const bcrypt = require('bcrypt-nodejs')

const registerType = require('../types/registerType')
const UserSchema = require('../../mongoose/UserSchema')

module.exports = {
  type: registerType,
  args: {
    email: { type: GraphQLNonNull(GraphQLString) },
    username: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    status: { type: GraphQLString }
  },
  resolve: (parentValue, args) => {

    const user = UserSchema.findOne({ $or: [{ email: args.email }, { username: args.username }] })
      .then(res => {
        const errors = []
        
        if (args.email === null || args.username === null || args.password === null) {
          errors.push({ message: 'All fields must be valid' })
        }
        if (!validator.isEmail(args.email)) {
          errors.push({ message: 'You should provide a valid email' })
        }
        if (!validator.isLength(args.password, { min: 6 }) || !validator.isLength(args.username, { min: 6 })) {
          errors.push({ message: 'Password and username must have a 6 minimum length' })
        }
        if (res) {
          if (res.username === args.username) {
            errors.push({ message: 'A user with this username address already exists' })
          }
          if (res.email === args.email) {
            errors.push({ message: 'A user with this email address already exists' })
          }
        }

        if (errors.length) throw new Error({message: errors})
        
        UserSchema.create({
          email: args.email,
          username: args.username,
          password: bcrypt.hashSync(args.password)
        })

      }).catch(err => { throw new Error(err) })
  }
}
