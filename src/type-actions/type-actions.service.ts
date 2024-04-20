// src/typeActions/typeActions.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeAction } from 'src/typeaction.entity';
import { CreateTypeActionDto } from 'src/type-actions/create-typeaction.dto';
import { UpdateTypeActionDto } from 'src/type-actions/update-typeaction.dto';
 
@Injectable()
export class TypeActionsService {
  constructor(
    @InjectRepository(TypeAction)
    private typeActionsRepository: Repository<TypeAction>,
  ) {}
 
  async create(createTypeActionDto: CreateTypeActionDto): Promise<TypeAction> {
    const typeAction = this.typeActionsRepository.create(createTypeActionDto);
    return this.typeActionsRepository.save(typeAction);
  }
 
  async findAll(): Promise<TypeAction[]> {
    return this.typeActionsRepository.find();
  }
 
  async findOne(id: number): Promise<TypeAction> {
    return this.typeActionsRepository.findOneBy({ id });
  }
 
  async update(id: number, updateTypeActionDto: UpdateTypeActionDto): Promise<void> {
    await this.typeActionsRepository.update(id, updateTypeActionDto);
  }
 
  async remove(id: number): Promise<void> {
    await this.typeActionsRepository.delete(id);
  }
}