// src/roles/roles.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './create-role.dto'; // Assurez-vous d'ajuster le chemin d'importation
import { Role } from 'src/role.entity';
 
@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}
 
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const role = new Role();
    role.name = createRoleDto.name;
    // Assignez d'autres propriétés si nécessaire
    return this.rolesRepository.save(role);
  }
 
  async findAll(): Promise<Role[]> {
    return this.rolesRepository.find();
  }
 
  async findOne(id: number): Promise<Role> {
    return this.rolesRepository.findOneBy({ id });
  }
 
  async update(id: number, role: Partial<Role>): Promise<void> {
    await this.rolesRepository.update(id, role);
  }
 
  async remove(id: number): Promise<void> {
    await this.rolesRepository.delete(id);
  }
}