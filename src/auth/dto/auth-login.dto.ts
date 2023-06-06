import { IsNumberString, IsString } from 'class-validator';

export class AuthLoginDto {
  @IsNumberString()
  username: string;

  @IsString()
  password: string;
}
