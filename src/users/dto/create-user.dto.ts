import { OmitType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { User } from '../schema/user.schema';

export class CreateUserDto extends OmitType(User, ['role', 'sign_in_count']) {
  @IsString()
  confirmPassword?: string;
}
