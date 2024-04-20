import { Test, TestingModule } from '@nestjs/testing';
import { TypeActionsService } from './type-actions.service';

describe('TypeActionsService', () => {
  let service: TypeActionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeActionsService],
    }).compile();

    service = module.get<TypeActionsService>(TypeActionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
