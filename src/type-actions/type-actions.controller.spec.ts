import { Test, TestingModule } from '@nestjs/testing';
import { TypeActionsController } from './type-actions.controller';

describe('TypeActionsController', () => {
  let controller: TypeActionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeActionsController],
    }).compile();

    controller = module.get<TypeActionsController>(TypeActionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
