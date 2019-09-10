'use strict'

const authSchema = require('../schemas/authorization.schema.json')
const PER_PAGE = 10

const e404 = new Error('item not found')
e404.statusCode = 404

module.exports = [{
    method: 'GET',
    path: '/authorizations',
    schema: {
      response: {
        '200': {
          type: 'object',
          properties: {
            results: {
              type: 'array',
              items: authSchema
            }
          }
        }
      }
    },
    handler: async (request, reply) => {
      const db = request.getDb()
      const res = await db
        .model('payment_service_authorizations')
        .findAll({
          where: JSON.parse(request.query.find),
          limit: +request.query.limit,
          offset: (request.query.page - 1) * PER_PAGE,
          raw: true
        })
        .then(x => ({
          results: x
        }))

      return res
    }
  },
  {
    method: 'GET',
    path: '/authorizations/:id',
    schema: {
      params: {
        id: {
          type: "string"
        }
      },
      response: {
        '200': {
          type: 'object',
          properties: {
            results: authSchema
          }
        }
      }
    },
    handler: async (request, reply) => {
      const db = request.getDb()
      const res = await db
        .model('payment_service_authorizations')
        .findByPk(request.params.id)
        .then(x => x ? ({
          results: x
        }) : reply.send(e404))
      return res
    }
  }
]