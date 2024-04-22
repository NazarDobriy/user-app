import { Injectable } from '@nestjs/common';
import { mockDeals } from './data/deal.mock';
import { IDeal } from './types/deal.interface';

@Injectable()
export class DealService {
  getAll(): IDeal[] {
    return mockDeals;
  }
}
