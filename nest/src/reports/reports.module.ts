import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch } from '../batches/batch.entity';
import { Transaction } from '../transactions/transaction.entity';
import { Authorization } from '../authorizations/authorization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Batch]),
    TypeOrmModule.forFeature([Transaction]),
    TypeOrmModule.forFeature([Authorization]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule { }
