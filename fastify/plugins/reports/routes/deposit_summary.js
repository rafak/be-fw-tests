'use strict'

module.exports = {
  method: 'GET',
  path: '/deposit_summary',
  handler: (request, h) => {
    const db = request.getDb()
    const S = request.getSequelize()
    return db.query(`
    select
      DATE_FORMAT(b.batch_date, '%Y-%m-%d') as "DAY",
      SUM(b.net_deposit) AS "SUM"
      from payment_service_batches b
      group by "DAY" order by "DAY" ASC
      `,{type: S.QueryTypes.SELECT})
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