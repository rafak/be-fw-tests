'use strict'
const Joi = require('@hapi/joi')
const internals = {
  dispute: Joi.object().keys({
    auth_code: Joi.string(),
    card_type: Joi.string(),
    case_number: Joi.string(),
    case_status: Joi.string(),
    case_type: Joi.string(),
    created_at: Joi.date().allow(null),
    created_by: Joi.string().allow(null),
    debit_credit: Joi.string(),
    dispute_amount: Joi.number(),
    dispute_id: Joi.string(),
    etag: Joi.string(),
    family_id: Joi.string(),
    id: Joi.string(),
    loaded_date: Joi.date(),
    merchant_amount: Joi.number(),
    pan: Joi.string(),
    payment_merchant_id: Joi.string(),
    posted_date: Joi.date(),
    reason_code: Joi.string(),
    reason_description: Joi.string(),
    resolution: Joi.string(),
    resolved_date: Joi.date(),
    second_request_date: Joi.date(),
    source: Joi.string(),
    status_message: Joi.string(),
    transaction_date: Joi.date(),
    transaction_id: Joi.string(),
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
      results: Joi.array().items(internals.dispute)
    })
  },
  get: {
    validate: {
      params: {
        id: Joi.string()
      },
    },
    response: Joi.object().keys({
      results: internals.dispute.allow(null)
    })
  }
}