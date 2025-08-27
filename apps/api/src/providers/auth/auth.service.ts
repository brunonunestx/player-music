import { Injectable } from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { hashPassword } from '../../../utils/hashPassword';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AuthService {
  constructor(private database: DatabaseService) {}
  async login(loginData: LoginDto): Promise<LoginResponseDto> {
    const user = await this.database.user.findUnique({
      where: {
        email: loginData.email,
        password: await hashPassword(loginData.password),
      },
    });
    return { userId: user.id, email: user.email };
  }
}
