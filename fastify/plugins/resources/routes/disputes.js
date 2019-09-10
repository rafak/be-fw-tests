'use strict'

const PER_PAGE = 10

module.exports = [{
    method: 'GET',
    path: '/disputes',
    handler: (request, reply) => {
      const db = request.getDb()
      return db.model('payment_service_disputes')
        .findAll({
          where: JSON.parse(request.query.find),
          limit: +request.query.limit,
          offset: (request.query.page - 1) * PER_PAGE,
          raw: true
        })
        .then(x => ({
          results: x
        }))
    },
  },
  {
    method: 'GET',
    path: '/disputes/:id',
    handler: (request, reply) => {
      const db = request.getDb()
      return db.model('payment_service_disputes')
        .findByPk(request.params.id, {
          raw: true
        })
        .then(x => x ? ({
          results: x
        }) : reply.code(404))
    },
  }
]