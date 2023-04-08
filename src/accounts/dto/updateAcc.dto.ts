import { PartialType } from '@nestjs/swagger'
import { CreateAccountDto } from './createAcc.dto';
export class UpdateAccDto extends  PartialType(CreateAccountDto) {}


