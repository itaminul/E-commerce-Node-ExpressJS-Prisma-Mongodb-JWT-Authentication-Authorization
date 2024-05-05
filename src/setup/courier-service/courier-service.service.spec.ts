import { Test, TestingModule } from "@nestjs/testing";
import { CourierServiceService } from "./courier-service.service";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { PrismaService } from "../../prisma-connection/primsa.service";
import { CreateCourierServiceDto } from "./dto/create-courier-service.dto";

const MockPrismaService = {
  courierServiceSetup: {
    create: jest.fn(),
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

  it("create", async () => {
    const createCourierServiceDto = new CreateCourierServiceDto();
    const expectResult = {
      ...createCourierServiceDto,
    };
    jest
      .spyOn(MockPrismaService.courierServiceSetup, "create")
      .mockRejectedValue(expectResult);
    const result = await service.create(createCourierServiceDto);

    expect(result).toEqual(expectResult);
    expect(MockPrismaService.courierServiceSetup.create).toHaveBeenCalledWith({
      data: expect.objectContaining(expectResult),
    });
  });
  
  it("update", async () => {
  });
});
