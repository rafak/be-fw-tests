'use strict'

const schemas = require('../schemas/transactions')
const Boom = require('@hapi/boom')

const PER_PAGE = 10

module.exports = [{
    method: 'GET',
    path: '/transactions',
    handler: (request, h) => {
      const db = request.getDb()
      return db.model('payment_service_transactions')
        .findAll({
          where: JSON.parse(request.query.find || '{}'),
          limit: request.query.limit,
          offset: (request.query.page - 1) * PER_PAGE,
          raw: true
        })
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
    path: '/transactions/{id}',
    handler: (request, h) => {
      const db = request.getDb()
      return db.model('payment_service_transactions')
        .findByPk(request.params.id, {raw:true})
        .then(x => x ? ({results: x}) : Boom.notFound('unknown id'))
    },
    options: {
      validate: schemas.get.validate,
      response: {
        schema: schemas.get.response
      }
    },
  }
]