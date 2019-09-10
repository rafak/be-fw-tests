'use strict'

const fastifyPlugin = require('fastify-plugin')

async function registerReports(fastify, options) {
  return [
    require('./routes/totals_by_batch'),
    require('./routes/deposit_summary'),
    require('./routes/authorization_summary'),
  ].map(fastify.route.bind(fastify))
}

module.exports = fastifyPlugin(registerReports)