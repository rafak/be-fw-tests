'use strict'

const path = require('path').posix
const fs = require('fs-extra')
const R = require('ramda')

exports.plugin = {
  pkg: {
    name: 'payments-reports',
    version: require('../../package.json').version
  },
  dependencies: ['payments-models'],
  register: async (server, options) => {
    server.route([
      require('./routes/totals_by_batch'),
      require('./routes/deposit_summary'),
      require('./routes/authorization_summary'),
    ])
  }
}