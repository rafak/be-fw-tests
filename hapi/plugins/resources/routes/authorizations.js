'use strict'

const schemas = require('../schemas/authorizations')
const Boom = require('@hapi/boom')

const PER_PAGE = 10

module.exports = [{
    method: 'GET',
    path: '/authorizations',
    handler: (request, h) => {
      const db = request.getDb()
      return db.model('payment_service_authorizations')
        .findAll({
          where: JSON.parse(request.query.find || '{}'),
          limit: request.query.limit,
          offset: (request.query.page - 1) * PER_PAGE,
          raw: true
        })
        .tap(x=>request.log('info', x))
        .then(x => ({
          results: x
        }))
    },
    options: {
      validate: schemas.list.validate,
      response: {
        schema: schemas.list.response
      }
    },
  },
  {
    method: 'GET',
    path: '/authorizations/{id}',
    handler: (request, h) => {
      const db = request.getDb()
      return db.model('payment_service_authorizations')
        .findByPk(request.params.id, {
          raw: true
        })
        .then(x => x ? ({
          results: x
        }) : Boom.notFound('unknown id'))
    },
    options: {
      validate: schemas.get.validate,
      response: {
        schema: schemas.get.response
      },
      rules:{
        abc:'xyz'
      }
    },
  }
]