import { AuthCallbackQuerry } from './../common/interface/auth-callback.interface';
import { All, Controller, Query } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @All('callback')
  async callBack(@Query() query: AuthCallbackQuerry) {
    // console.log(query);
    await this.authService.performCallBack(query)
  }
}