import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DepartmentController } from "./department.controller";
import { DepartmentService } from "./department.service";
import { Department, DepartmentSchema } from "./entities/department.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: DepartmentSchema },
    ]),
  ],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
