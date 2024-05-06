import { Test, TestingModule } from "@nestjs/testing";
import { CourierServiceService } from "./courier-service.service";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { PrismaService } from "../../prisma-connection/primsa.service";

const MockPrismaService = {
  invItemSetup: {
    create: jest.fn(), // Mock the create method
    update: jest.fn(),
  },
};
describe("CourierServiceService", () => {
  let service: CourierServiceService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CourierServiceService,
        {
          provide: PrismaService,
          useValue: MockPrismaService,
        },
        {
          provide: CACHE_MANAGER,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CourierServiceService>(CourierServiceService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
