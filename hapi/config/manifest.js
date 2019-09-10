'use strict';

const Joi = require('@hapi/joi')

module.exports = {
  server: {
    address: '0.0.0.0',
    host: 'localhost',
    port: process.env.PORT || 3001,
    debug: {
      log: ['error', 'info', 'implementation', 'internal'],
      request: ['error', 'implementation', 'internal']
    },
    router: {
      stripTrailingSlash: true
    },
    routes: {
      validate: {
        options: {
          abortEarly: false
        },
        failAction: async (request, h, err) => {
          // request.log(['error'], err)
          throw err
        }
      },
      response: {
        options:{
          allowUnknown: true
        }
      },
      cors: true
    }
  },
  register: {
    plugins: [{
        plugin: '@hapi/good',
        options: {
          ops: {
            interval: 1000
          },
          reporters: {
            console: [{
              module: '@hapi/good-squeeze',
              name: 'Squeeze',
              args: [{
                log: '*',
                response: '*',
                request: '*'
              }]
            }, {
              module: '@hapi/good-console'
            }, 'stdout']
          }
        }
      },
      {
        plugin: 'blipp',
      },
      './aliases',
      {
        plugin: './models',
        options: {
          host: 'localhost',
          database: 'test',
          username: 'root',
          password: '',
          dialect: 'mysql'
        }
      },
      './resources',
      {
        plugin: './reports',
        routes:{
          prefix:'/reports',
        },
        options:{

        }
      },
    ]
  }
}