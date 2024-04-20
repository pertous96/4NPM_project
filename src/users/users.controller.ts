// src/users/users.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/users/create-user.dto';
import { UpdateUserDto } from 'src/users/update-user.dto';
 
@Controller('users')
@UseGuards(AuthGuard('jwt')) // Applique AuthGuard à toutes les routes du contrôleur
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
 
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
 
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
 
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}