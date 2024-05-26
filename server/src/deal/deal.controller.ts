import { Controller, Get, UseGuards } from '@nestjs/common';

import { DealService } from './deal.service';
import { IDeal } from './types/deal.interface';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('deal')
export class DealController {
  constructor(private dealService: DealService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  getAll(): IDeal[] {
    return this.dealService.getAll();
  }
}
