import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';
import { TransactionsController } from './transactions.controller';
import { Batch } from '../batches/batch.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction]), Batch],
  providers: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
