import { BaseSchema } from "./base-entity";

export interface IRepository<T extends BaseSchema> {
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  create(data: Partial<T>): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}
