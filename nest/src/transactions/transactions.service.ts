import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionsRepository: Repository<Transaction>
  ) { }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionsRepository.find()
  }

  async findOne(id: string): Promise<Transaction> {
    return await this.transactionsRepository.findOne(id)
  }
}
