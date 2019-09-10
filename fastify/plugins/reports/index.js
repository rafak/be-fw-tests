'use strict'

async function registerReports (fastify, options) {
  [
    require('./routes/totals_by_batch'),
    require('./routes/deposit_summary'),
    require('./routes/authorization_summary'),
  ].map(fastify.route.bind(fastify))
}

module.exports = registerReports