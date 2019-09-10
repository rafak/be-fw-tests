'use strict'

const Boom = require('@hapi/boom')

const PER_PAGE = 10

module.exports = {
  method: 'GET',
  path: '/totals_by_batch',
  handler: (request, h) => {
    const db = request.getDb()
    const S = request.getSequelize()
    return db.query(`
        select
          b.batch_id as "batch_id",
          sum(b.net_deposit) as "Net Deposit",
          sum(t.authorized_amount) as "Total Authorized",
          sum(t.trans_amount) as "Transaction Total"
        from
          payment_service_batches b
        left join payment_service_transactions t on
          (b.batch_id = t.batch_id)
        group by
          b.batch_id
        order by
          "batch_id" asc
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