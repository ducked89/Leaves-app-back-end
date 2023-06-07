import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { BaseSchema } from 'src/utils/base-entity';
import { Role } from './role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends BaseSchema {
  @Prop({ type: String, required: true, index: true, unique: true })
  @IsString()
  @IsEmail()
  email: string;

  @Prop({ type: String, required: true, index: true, unique: true })
  @IsString()
  username: string;

  @Prop({ required: true })
  @IsString()
  password: string;

  @Prop({ enum: Role, required: true, default: Role.USER })
  @IsString()
  role: Role;

  @Prop({ default: 0 })
  @IsNumber()
  sign_in_count: number;

  @Prop({ required: false, default: 0 })
  @IsBoolean()
  deleted?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
