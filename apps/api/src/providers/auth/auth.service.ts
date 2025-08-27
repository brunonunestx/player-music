import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(username: string, password: string): Promise<any> {
    return { userId: 1, username: 'testuser' };
  }
}
