import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationsService } from './authorizations.service';
import { AuthorizationsController } from './authorizations.controller'
import { Authorization } from './authorization.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Authorization])],
  providers: [AuthorizationsService],
  controllers: [AuthorizationsController],
})
export class AuthorizationsModule { }