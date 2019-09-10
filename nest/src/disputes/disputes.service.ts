import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dispute } from './dispute.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DisputesService {
  constructor(
    @InjectRepository(Dispute)
    private readonly disputeRepository: Repository<Dispute>
  ) { }

  async findAll(): Promise<Dispute[]> {
    return this.disputeRepository.find()
  }

  async findOne(id: string): Promise<Dispute> {
    return this.disputeRepository.findOne(id)
  }
}
