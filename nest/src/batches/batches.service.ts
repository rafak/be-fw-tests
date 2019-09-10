import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Batch } from './batch.entity';

@Injectable()
export class BatchesService {
  constructor(
    @InjectRepository(Batch)
    private readonly batchRepository: Repository<Batch>,
  ) { }

  async findAll(): Promise<Batch[]> {
    // return Promise.resolve(null)
    return await this.batchRepository.find({ relations: ["transactions"], take:1 })
  }

  async findOne(id: string): Promise<Batch> {
    // return Promise.resolve(null)
    return await this.batchRepository.findOne(id, { relations: ["transactions"] })
  }
}