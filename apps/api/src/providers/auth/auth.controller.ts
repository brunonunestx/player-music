import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto): Promise<LoginResponseDto> {
    const user = await this.auth.login(body);
    return { message: 'Login successfuly', ...user };
  }
}
