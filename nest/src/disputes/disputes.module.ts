import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisputesService } from './disputes.service';
import { Dispute } from './dispute.entity';
import { DisputesController } from './disputes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dispute])],
  providers: [DisputesService],
  controllers: [DisputesController],
})
export class DisputesModule { }
