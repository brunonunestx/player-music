import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'developer.bruno@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Developer' })
  @IsString()
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({ example: 'a37e0635-9483-4a97-84c3-563f77e9d69e' })
  userId: string;

  @ApiProperty({ example: 'developer.bruno@example.com' })
  email: string;

  @ApiProperty({ example: 'Login successful' })
  message?: string;
}
