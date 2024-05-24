import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { DealController } from './deal.controller';
import { DealService } from './deal.service';
import { Deal } from './deal.model';

@Module({
  controllers: [DealController],
  providers: [DealService],
  imports: [SequelizeModule.forFeature([Deal])]
})
export class DealModule {}
