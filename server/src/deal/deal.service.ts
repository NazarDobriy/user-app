import { Injectable } from '@nestjs/common';
import { mockDeals } from './data/deal.mock';
import { IDeal } from './types/deal.interface';

@Injectable()
export class DealService {
  async getAll(): Promise<IDeal[]> {
    return Promise.resolve(mockDeals);
  }
}
