'use strict'

const path = require('path').posix
const Bluebird = require('bluebird')
const R = require('ramda')
const fs = require('fs-extra')

module.exports = async function (fastify, options) {
  fastify.log.info('registering resources')
  const routesPath = __dirname + '/routes'
  // wrapping to get Bluebird api method like filter, tap, etc.
  const routes = await Bluebird.try(() => {
      return fs.readdir(routesPath)
    })
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== 'index.js') && (file.slice(-3) === '.js');
    })
    .map(file => {
      const route = require(path.join(routesPath, file))
      if (R.is(Array, route)) {
        return R.map(fastify.route.bind(fastify), route)
      }
      return fastify.route(route)
    });
  return routes
}