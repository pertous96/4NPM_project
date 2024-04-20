// src/typeActions/typeActions.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
 
import { CreateTypeActionDto } from 'src/type-actions/create-typeaction.dto';
import { UpdateTypeActionDto } from 'src/type-actions/update-typeaction.dto';
import { TypeActionsService } from './type-actions.service';
 
@Controller('typeActions')
@UseGuards(AuthGuard('jwt')) // Ceci sécurise toutes les routes dans TypeActionsController
export class TypeActionsController {
  constructor(private readonly typeActionsService: TypeActionsService) {}
 
  @Post()
  create(@Body() createTypeActionDto: CreateTypeActionDto) {
    return this.typeActionsService.create(createTypeActionDto);
  }
 
  @Get()
  findAll() {
    return this.typeActionsService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeActionsService.findOne(+id);
  }
 
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTypeActionDto: UpdateTypeActionDto) {
    return this.typeActionsService.update(+id, updateTypeActionDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeActionsService.remove(+id);
  }
}