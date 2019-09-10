import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Authorization } from './authorization.entity';

@Injectable()
export class AuthorizationsService {
  constructor(
    @InjectRepository(Authorization)
    private readonly authorizationRepository: Repository<Authorization>,
  ) { }

  async findAll(): Promise<Authorization[]> {
    return await this.authorizationRepository.find()
  }

  async findOne(id: string): Promise<Authorization> {
    return await this.authorizationRepository.findOne(id)
  }
}