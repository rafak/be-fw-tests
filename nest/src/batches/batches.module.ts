import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BatchesService } from './batches.service';
import { BatchesController } from './batches.controller'
import { Batch } from './batch.entity';
import { Transaction } from '../transactions/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Batch]), Transaction],
  providers: [BatchesService],
  controllers: [BatchesController],
})
export class BatchesModule { }