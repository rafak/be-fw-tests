import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Batch } from '../batches/batch.entity';
import { Authorization } from '../authorizations/authorization.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DepositSummary } from './depositSummary.entity';

@Injectable()
export class ReportsService {

  constructor(
    @InjectRepository(Batch)
    private readonly batchesRepository: Repository<Batch>,
    @InjectRepository(Authorization)
    private readonly authorizationsRepository: Repository<Authorization>
  ) { }

  async totalsByBatch(): Promise<any> {
    return await this.batchesRepository
      .createQueryBuilder('batch')
      .leftJoinAndSelect('batch.transactions', "transactions")
      .select("SUM(batch.net_deposit)", 'Net Deposit')
      .addSelect("SUM(transactions.authorized_amount)", 'Total Authorized')
      .addSelect("SUM(transactions.trans_amount)", 'Transaction Total')
      .groupBy('batch.batch_id')
      .orderBy('batch.batch_id', 'ASC')
      .limit(10)
      .offset(10)
      .getRawMany()
  }

  async depositSummary(): Promise<DepositSummary[]> {
    return await this.batchesRepository
      .query(`select
      DATE_FORMAT(b.batch_date, '%Y-%m-%d') as "DAY",
      SUM(b.net_deposit) AS "THESUM"
      from payment_service_batches b
      group by "DAY" order by "DAY" ASC`)
  }

  async authorizationSummary(): Promise<any> {
    return await this.authorizationsRepository
      .createQueryBuilder('authorization')
      .select('authorization.payment_merchant_id','Merchant')
      .addSelect("DATE_FORMAT(authorization.auth_date, \"%Y-%m-%d\")",'DAY')
      .addSelect("SUM(authorization.auth_amount)","Auth Total")
      .groupBy('authorization.payment_merchant_id')
      .addGroupBy('DAY')
      .orderBy('Merchant','ASC')
      .addOrderBy('DAY','ASC')
      .getRawMany()
  }
}
