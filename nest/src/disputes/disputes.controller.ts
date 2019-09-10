import { Controller, Param, ParseUUIDPipe, Get } from '@nestjs/common';
import { DisputesService } from './disputes.service';
import { Dispute } from './dispute.entity';

@Controller('disputes')
export class DisputesController {

  constructor(private readonly disputesService: DisputesService) { }

  @Get()
  async findAll(): Promise<Dispute[]> {
    return await this.disputesService.findAll()
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseUUIDPipe()) id: string
  ): Promise<Dispute> {
    return await this.disputesService.findOne(id)
  }
}
