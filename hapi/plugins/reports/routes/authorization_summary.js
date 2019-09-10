'use strict'

const Boom = require('@hapi/boom')

const PER_PAGE = 10

module.exports = {
  method: 'GET',
  path: '/authorization_summary',
  handler: (request, h) => {
    const db = request.getDb()
    const S = request.getSequelize()
    return db.query(`
          select
            a.payment_merchant_id as "Merchant",
            DATE_FORMAT(a.auth_date,'%Y-%m-%d') as "DAY",
            sum(a.auth_amount) as "Auth Total"
          from
            payment_service_authorizations a
          group by
            a.payment_merchant_id,
            "DAY"
          order by
            "Merchant" asc,
            "DAY" asc
      `,{type: S.QueryTypes.SELECT})
    // return db.model('payment_service_batches')
    //   .find({
    //     where: JSON.parse(request.query.find || '{}'),
    //     limit: (parseInt(request.query.limit) || 50),
    //     offset: ((request.query.page || 1) - 1) * PER_PAGE,
    //     raw: true,
    //     include: 'payment_service_transactions'
    //   })
      .then(x => ({
        results: x
      }))
  },
  // options: {
  //   validate: schemas.list.validate,
  //   response: {
  //     schema: schemas.list.response
  //   }
  // },
}