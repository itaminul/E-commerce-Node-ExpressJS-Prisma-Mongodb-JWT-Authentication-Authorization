import { Test, TestingModule } from '@nestjs/testing';
import { CourierServiceService } from './courier-service.service';

describe('CourierServiceService', () => {
  let service: CourierServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourierServiceService],
    }).compile();

    service = module.get<CourierServiceService>(CourierServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
