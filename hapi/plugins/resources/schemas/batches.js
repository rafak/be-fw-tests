'use strict'
const Joi = require('@hapi/joi')
const internals = {
  batch: Joi.object().keys({
    batch_date: Joi.date(),
    batch_id: Joi.string(),
    created_at: Joi.date().allow(null),
    created_by: Joi.string().allow(null),
    etag: Joi.string(),
    id: Joi.string(),
    net_deposit: Joi.number(),
    payment_merchant_id: Joi.string(),
    source: Joi.string(),
    terminal_number: Joi.string(),
    updated_at: Joi.date().allow(null),
    updated_by: Joi.string().allow(null),
    payment_service_transactions: Joi.array().items(Joi.any().optional())
  })
}
module.exports = {
  Joi,
  list: {
    validate:{
      query: Joi.object().keys({
        find:Joi.string(),
        page: Joi.number().default(1),
        limit: Joi.number().default(10).max(50)
      }),
    },
    response: Joi.object().keys({
      results:Joi.array().items(internals.batch)
    })
  },
  get: {
    validate:{
      params: {
        id: Joi.string()
      },
    },
    response: Joi.object().keys({
      results:internals.batch.allow(null)
    })
  }
}