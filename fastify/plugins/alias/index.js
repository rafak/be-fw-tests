'use strict'

const fastifyPlugin = require('fastify-plugin')
const url = require('url')

async function registerAliases(fastify, options) {
  // THIS DOES NOT WORK
  // seems like the router already fired here
  fastify.addHook('onRequest', (request, reply, done) => {
    request.log.info('req hook, params:',request.params)
    const u = url.parse(request.raw.url)
    request.raw.url = u.pathname.replace(/^(\/?)(bynd|wtm)_/,'$1').replace(/^(\/?)payments_/,'$1') + (u.search || '') + (u.hash || '')
    return done()
  })
  fastify.addHook('preParsing', (request, reply, done) => {
    request.log.info('preparse, params:',request.params)
    request.log.info('preparse, raw url:',request.raw.url)
    return done()
  })
}

module.exports = fastifyPlugin(registerAliases)