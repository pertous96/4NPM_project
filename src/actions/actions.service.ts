
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Action } from 'src/action.entity';
import { CreateActionDto } from 'src/actions/create-action.dto';
import { UpdateActionDto } from 'src/actions/update-action.dto';
 
@Injectable()
export class ActionsService {
  constructor(
    @InjectRepository(Action)
    private actionsRepository: Repository<Action>,
  ) {}
 
  async create(createActionDto: CreateActionDto): Promise<Action> {
    const action = this.actionsRepository.create(createActionDto);
    return this.actionsRepository.save(action);
  }
 
  async findAll(): Promise<Action[]> {
    return this.actionsRepository.find({ relations: ['user'] }); 
  }
 
  async findOne(id: number): Promise<Action> {
    return this.actionsRepository.findOneBy({ id });
  }
 
  async update(id: number, updateActionDto: UpdateActionDto): Promise<void> {
    await this.actionsRepository.update(id, updateActionDto);
  }
 
  async remove(id: number): Promise<void> {
    await this.actionsRepository.delete(id);
  }
}