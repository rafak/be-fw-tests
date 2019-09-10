import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorizationsModule } from './authorizations/authorizations.module';
import { BatchesModule } from './batches/batches.module';
import { Connection } from 'typeorm';
import { join } from 'path';
import { TransactionsModule } from './transactions/transactions.module';
import { DisputesController } from './disputes/disputes.controller';
import { DisputesModule } from './disputes/disputes.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "",
    "database": "test",
    "entities": [join(__dirname, '**/**.entity{.ts,.js}')],
    "synchronize": false,
    "logging": true
  }),
  AuthorizationsModule,
  BatchesModule,
  TransactionsModule,
  DisputesModule,
  ReportsModule
],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
