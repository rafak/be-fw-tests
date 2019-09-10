import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common'
import { BatchesService } from './batches.service';
import { Batch } from './batch.entity'

@Controller('Batches')
export class BatchesController {

  constructor(private readonly BatchesService: BatchesService) { }

  @Get()
  async findAll(): Promise<Batch[]> {
    return this.BatchesService.findAll()
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseUUIDPipe()) id: string
  ): Promise<Batch> {
    return this.BatchesService.findOne(id)
  }
}