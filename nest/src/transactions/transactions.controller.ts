import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Transaction } from './transaction.entity';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @Get()
  async findAll(): Promise<Transaction[]> {
    return await this.transactionsService.findAll()
  }

  @Get(':id')
  async findOne(
    @Param('id',new ParseUUIDPipe()) id:string
    ): Promise<Transaction> {
    return await this.transactionsService.findOne(id)
  }
}
