import { Module } from '@nestjs/common';
import { DealController } from './deal.controller';
import { DealService } from './deal.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deal } from './deal.model';

@Module({
  controllers: [DealController],
  providers: [DealService],
  imports: [SequelizeModule.forFeature([Deal])]
})
export class DealModule {}
