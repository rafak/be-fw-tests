import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService:ReportsService) {}

  @Get('totals_by_batch')
  async totalsByBatch() {
    return this.reportsService.totalsByBatch()
  }

  @Get('deposit_summary')
  async depositSummary() {
    return this.reportsService.depositSummary()
      .then(r=>r.map(x=>x.SUM))
  }

  @Get('authorization_summary')
  async authorizationSummary() {
    return this.reportsService.authorizationSummary()
  }
}
