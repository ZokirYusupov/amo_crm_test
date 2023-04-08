import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/acconuts.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import dbConfig from './common/database/orm.config';
import { config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, load: [config]}),
    TypeOrmModule.forRoot({...dbConfig, autoLoadEntities: true}),
    AccountsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
