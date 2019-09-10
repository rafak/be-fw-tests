'use strict'
const Joi = require('@hapi/joi')
const internals = {
  authorization: Joi.object().keys({
    approval_code: Joi.string(),
    auth_amount: Joi.number(),
    auth_date: Joi.date(),
    auth_id: Joi.string(),
    auth_reject_reason: Joi.string(),
    card_type: Joi.string(),
    cashback_amount: Joi.number(),
    created_at: Joi.date().allow(null),
    created_by: Joi.string().allow(null),
    debit_credit: Joi.string(),
    etag: Joi.string(),
    id: Joi.string(),
    is_card_present: Joi.number(),
    is_reversal: Joi.number(),
    is_success: Joi.number(),
    local_date: Joi.date(),
    local_time: Joi.string(),
    pan: Joi.string(),
    payment_merchant_id: Joi.string(),
    reversal_reason: Joi.string().allow(null),
    source: Joi.string(),
    terminal_number: Joi.string(),
    updated_at: Joi.date().allow(null),
    updated_by: Joi.string().allow(null)
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
      results:Joi.array().items(internals.authorization)
    })
  },
  get: {
    validate:{
      params: {
        id: Joi.string()
      },
    },
    response: Joi.object().keys({
      results:internals.authorization.allow(null)
    })
  }
}