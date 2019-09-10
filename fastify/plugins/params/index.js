'use strict'

const fastifyPlugin = require('fastify-plugin')
const R = require('ramda')

async function registerDefaultParams(fastify, options) {
  fastify.addHook('onRequest', (request, reply, done) => {
    request.query = R.mergeDeepRight({
      find:'{}',
      limit: 10,
      page: 1
    }, request.query)
    return done()
  })
}

module.exports = fastifyPlugin(registerDefaultParams)