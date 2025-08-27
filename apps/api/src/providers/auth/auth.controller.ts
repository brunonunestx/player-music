import { Controller, Get } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get('login')
  async login() {
    return { message: 'Login successful' };
  }
}
