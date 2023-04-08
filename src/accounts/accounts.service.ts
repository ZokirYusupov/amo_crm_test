import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "./entity/accounts.entity";
import { Repository } from 'typeorm'
import { CreateAccountDto } from "./dto/createAcc.dto";
import { UpdateAccDto } from "./dto/updateAcc.dto";

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepo: Repository<Account>
  ) {}

  // async onModuleInit() {
  // const account = this.accountRepo.create({
  //     amoId: 123,
  //     domain: 'test.amocrm.ru',
  //     oauth: {
  //       accessToken: 'sdkjdd',
  //       refreshToken: 'fdkjjk',
  //       expire: 12
  //     }
  //   })

  //   await this.accountRepo.save(account)
  //   await console.log(await this.accountRepo.find())
  // }

    async findByAmoId(amoId: number): Promise<Account> {
     return this.accountRepo.findOne( {where: { amoId }} )
    }

    async create(createAccountDto: Partial<CreateAccountDto>){
      return this.accountRepo.save(createAccountDto)
    }

    async update(id: number, updateAccountDto: UpdateAccDto ) {
      return this.accountRepo.save({...updateAccountDto, id})
    }
}