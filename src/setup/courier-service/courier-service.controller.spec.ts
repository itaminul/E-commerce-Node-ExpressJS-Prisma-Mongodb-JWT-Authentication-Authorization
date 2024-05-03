import { Test, TestingModule } from '@nestjs/testing';
import { CourierServiceController } from './courier-service.controller';

describe('CourierServiceController', () => {
  let controller: CourierServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourierServiceController],
    }).compile();

    controller = module.get<CourierServiceController>(CourierServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
