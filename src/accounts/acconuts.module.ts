import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { AccountsController } from "./accounts.controller";
import { AccountsService } from "./accounts.service";
import { Account } from './entity/accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account])],
  providers: [AccountsService],
  controllers: [AccountsController],
  exports: [AccountsService]
})

export class AccountsModule {}