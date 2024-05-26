import { Controller, Get, UseGuards } from '@nestjs/common';

import { DealService } from './deal.service';
import { JwtAuthGuard } from 'src/guards/jwt-guard';
import { Deal } from './deal.model';

@Controller('deal')
export class DealController {
  constructor(private dealService: DealService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  getAll(): Promise<Deal[]> {
    return this.dealService.getAll();
  }
}
