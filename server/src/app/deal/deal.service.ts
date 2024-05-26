import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Deal } from './models/deal.model';

@Injectable()
export class DealService {
  constructor(@InjectModel(Deal) private dealRepository: typeof Deal) {}

  getAll(): Promise<Deal[]> {
    const deals = this.dealRepository.findAll();
    return deals;
  }
}
