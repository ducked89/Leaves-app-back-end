import { OmitType } from '@nestjs/mapped-types';
import { Role } from '../entities/role.schema';

export class CreateRoleDto extends OmitType(Role, ['createdAt', 'updatedAt']) {}
