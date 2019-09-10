import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common'
import { AuthorizationsService } from './authorizations.service';
import { Authorization } from './authorization.entity'

@Controller('authorizations')
export class AuthorizationsController {

  constructor(private readonly authorizationsService: AuthorizationsService) { }

  @Get()
  async findAll(): Promise<Authorization[]> {
    return this.authorizationsService.findAll()
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseUUIDPipe()) id: string
  ): Promise<Authorization> {
    return this.authorizationsService.findOne(id)
  }
}