module.exports = {
  port: process.env.PORT || 3001,
  db: {
    endpoint: process.env.DB_URI || 'mongodb://localhost:27017/local',
    port: process.env.DB_PORT || 27017
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
