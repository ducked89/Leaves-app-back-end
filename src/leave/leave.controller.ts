import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { LeaveService } from './leave.service';

@UseGuards(JwtAuthGuard)
@Controller('leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  @Post()
  create(@Body() createLeaveDto: CreateLeaveDto) {
    return this.leaveService.create(createLeaveDto);
  }

  @Post('status')
  findByStatus(@Body('status') status: string) {
    return this.leaveService.findByStatus(status);
  }

  @Post('changeStatus/:id')
  changeStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.leaveService.changeStatus(id, status);
  }

  @Get()
  findAll() {
    return this.leaveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaveService.findById(id);
  }

  @Get('employee/:id')
  getByEmployee(@Param('id') id: string) {
    return this.leaveService.getByEmployee(id);
  }

  @Get('leave-type/:id')
  getByLeaveType(@Param('id') id: string) {
    return this.leaveService.getByLeaveType(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeaveDto: UpdateLeaveDto) {
    return this.leaveService.update(id, updateLeaveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaveService.remove(id);
  }
}
