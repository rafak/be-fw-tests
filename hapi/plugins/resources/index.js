'use strict'

const path = require('path').posix
const fs = require('fs-extra')
const R = require('ramda')

exports.plugin = {
  pkg: {
    name: 'payments-resources',
    version: require('../../package.json').version
  },
  dependencies: ['payments-models'],
  register: async (server, options) => {
    const routesPath = __dirname + '/routes'
    fs
      .readdirSync(routesPath)
      .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
      })
      .forEach(file => {
        const route = require(path.join(routesPath, file))
        if (R.is(Function, route)) {
          server.route(route(server))
        } else {
          server.route(route)
        }
      });
  }
}