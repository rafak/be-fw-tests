'use strict'

const schemas = require('../schemas/batches')
const Boom = require('@hapi/boom')

const PER_PAGE = 10

module.exports = [{
    method: 'GET',
    path: '/batches',
    handler: (request, h) => {
      const db = request.getDb()
      return db.model('payment_service_batches')
        .findAll({
          where: JSON.parse(request.query.find || '{}'),
          include:[{association:'payment_service_transactions', as:'Trans'}],
          nested: true,
          logging: true,
          limit: request.query.limit,
          offset: (request.query.page - 1) * PER_PAGE,
          // raw: true
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
    path: '/batches/{id}',
    handler: (request, h) => {
      const db = request.getDb()
      return db.model('payment_service_batches')
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
      }
    },
  }
]