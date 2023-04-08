import { Account } from "../entity/accounts.entity";
import { PartialType } from '@nestjs/swagger'


export class CreateAccountDto extends PartialType(Account) {
}