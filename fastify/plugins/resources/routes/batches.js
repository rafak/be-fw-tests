'use strict'

const PER_PAGE = 10

module.exports = [{
    method: 'GET',
    path: '/batches',
    handler: (request, reply) => {
      const db = request.getDb()
      return db.model('payment_service_batches')
        .findAll({
          where: JSON.parse(request.query.find),
          limit: +request.query.limit,
          offset: (request.query.page - 1) * PER_PAGE,
          include: ['payment_service_transactions'],
          nested: true,
          logging: true,
        })
        .then(x => ({
          results: x
        }))
    },
  },
  {
    method: 'GET',
    path: '/batches/{id}',
    handler: (request, reply) => {
      const db = request.getDb()
      return db.model('payment_service_batches')
        .findByPk(request.params.id, {
          raw: true
        })
        .then(x => x ? ({
          results: x
        }) : reply.code(404))
    },
  }
]