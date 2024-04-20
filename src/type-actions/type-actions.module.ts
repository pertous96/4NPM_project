import { Module } from '@nestjs/common';
import { TypeActionsService } from './type-actions.service';
import { TypeActionsController } from './type-actions.controller';

@Module({
  providers: [TypeActionsService],
  controllers: [TypeActionsController]
})
export class TypeActionsModule {}
