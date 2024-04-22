import { Controller, Get } from '@nestjs/common';
import { DealService } from './deal.service';
import { IDeal } from './types/deal.interface';

@Controller('deal')
export class DealController {
  constructor(private dealService: DealService) {}

  @Get()
  getAll(): IDeal[] {
    return this.dealService.getAll();
  }
}
