// src/roles/roles.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesService } from './roles.service';
import { Role } from 'src/role.entity';
import { CreateRoleDto } from './create-role.dto';
import { UpdateRoleDto } from './update-role.dto'; // Assurez-vous d'avoir un DTO pour la mise à jour
 
@Controller('roles')
@UseGuards(AuthGuard('jwt')) // Applique AuthGuard à toutes les routes dans RolesController
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}
 
  @Post()
  create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }
 
  @Get()
  findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Role> {
    return this.rolesService.findOne(+id);
  }
 
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto): Promise<void> {
    return this.rolesService.update(+id, updateRoleDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.rolesService.remove(+id);
  }
}