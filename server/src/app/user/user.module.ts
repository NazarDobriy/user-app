import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './models/user.model';
import { UserService } from './user.service';
import { TokenModule } from 'src/app/token/token.module';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User]), TokenModule],
  exports: [UserService]
})
export class UserModule {}
