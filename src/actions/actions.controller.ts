// src/actions/actions.controller.ts
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ActionsService } from './actions.service';
import { CreateActionDto } from './create-action.dto'; 
import { UpdateActionDto } from './update-action.dto'; 
 
@Controller('actions')
@UseGuards(AuthGuard('jwt')) 
export class ActionsController {
  constructor(private readonly actionsService: ActionsService) {}
 
  @Post()
  create(@Body() createActionDto: CreateActionDto) {
    return this.actionsService.create(createActionDto);
  }
 
  @Get()
  findAll() {
    return this.actionsService.findAll();
  }
 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actionsService.findOne(+id);
  }
 
  @Put(':id')
  update(@Param('id') id: string, @Body() updateActionDto: UpdateActionDto) {
    return this.actionsService.update(+id, updateActionDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actionsService.remove(+id);
  }
}