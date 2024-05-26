import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';

import { UserModule } from './user/user.module';
import { DealModule } from './deal/deal.module';
import { Deal } from './deal/deal.model';
import { User } from './user/user.model';
import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';
import configurations from './configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres',
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        username: configService.get('db_username'),
        password: configService.get('db_password'),
        database: configService.get('db_name'),
        models: [User, Deal],
        autoLoadModels: true
      })
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),
    UserModule,
    DealModule,
    TokenModule,
    AuthModule
  ]
})
export class AppModule {}
