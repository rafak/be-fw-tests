'use strict'

const fastify = require('fastify')({
  logger: true
})

fastify.register(require('../plugins/alias'))
fastify.register(require('../plugins/params'))
fastify.register(require('../plugins/models'), {
  host: 'localhost',
  database: 'test',
  username: 'root',
  password: '',
  dialect: 'mysql'
})
fastify.register(require('../plugins/resources'))
fastify.register(require('../plugins/reports'), {
  prefix: '/reports'
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3003)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()