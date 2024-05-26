import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { DealController } from './deal.controller';
import { DealService } from './deal.service';
import { Deal } from './models/deal.model';
import { JwtStrategy } from 'src/strategy';

@Module({
  controllers: [DealController],
  providers: [DealService, JwtStrategy],
  imports: [SequelizeModule.forFeature([Deal])]
})
export class DealModule {}
