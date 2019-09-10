'use strict'

const R = require('ramda')

exports.plugin = {
  pkg: {
    name: 'generic-aliases',
    version: require('../../package.json').version
  },
  register: async (server, options) => {
    server.ext('onRequest', function (request, h) {
      request.log('info',['in  aliases request ext'])
      const U = request.url
      U.pathname = U.pathname.replace(/^\/(bynd|wtm)_/,'').replace(/^payments_/,'')
      console.log(U.href)
      request.setUrl(U.href)
      return h.continue
    })
  }
}