'use strict'
const Joi = require('@hapi/joi')
const internals = {
  transaction: Joi.object().keys({
    authorized_amount: Joi.number(),
    batch_id: Joi.string(),
    card_type: Joi.string(),
    cashback_amount: Joi.number(),
    created_at: Joi.date(),
    created_by: Joi.string().allow(null),
    debit_credit: Joi.string(),
    etag: Joi.string(),
    ext_trans_id: Joi.string(),
    id: Joi.string(),
    is_card_present: Joi.number(),
    local_time: Joi.string(),
    net_deposit: Joi.number(),
    pan: Joi.string(),
    payment_merchant_id: Joi.string(),
    source: Joi.string(),
    terminal_number: Joi.string(),
    trans_amount: Joi.number(),
    trans_date: Joi.date(),
    trans_id: Joi.string(),
    updated_at: Joi.date().allow(null),
    updated_by: Joi.string().allow(null)
  })
}
module.exports = {
  Joi,
  list: {
    validate: {
      query: Joi.object().keys({
        find: Joi.string(),
        page: Joi.number().default(1),
        limit: Joi.number().default(10).max(50)
      }),
    },
    response: Joi.object().keys({
      results: Joi.array().items(internals.transaction)
    })
  },
  get: {
    validate: {
      params: {
        id: Joi.string()
      },
    },
    response: Joi.object().keys({
      results: internals.transaction.allow(null)
    })
  }
}