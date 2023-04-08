import { OAuthField } from './../common/interface/oauth.interface';
import { AuthCallbackQuerry } from './../common/interface/auth-callback.interface';
import { HttpException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { GrantTypes } from 'src/common/enums/grand-types.enum';
import axios from 'axios';
// import { ConfigService } from '@nestjs/config';
// import { AccountsService } from 'src/accounts/accounts.service';
require('dotenv/config')
@Injectable()
export class AuthService {
  constructor(
    // private configService: ConfigService
  ) {}

  async performCallBack(query: AuthCallbackQuerry) {
    // const oauth: OAuthField =
    await this.getNewToken(query.code, query.referer) 
  }

  // onModuleInit() {
  //   console.log(this.configService.get('redirectUri'));
  // }

  async getNewToken(i: string, domain: string,  type: GrantTypes = GrantTypes.AuthCode) {
   try {
    const { data } = await axios.post(
      `https://${domain}/oauth2/access_token`,
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_url: process.env.REDIRECT_URI,
        grant_type: type,
        [type === GrantTypes.AuthCode ? 'code' : 'refresh_token']: i
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
    console.log(data);
   } catch (error) {
    console.log(error);
    // throw new HttpException('Error', 400, error)
   }
  }
}