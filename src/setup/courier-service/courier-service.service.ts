import { Body, Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "../../prisma-connection/primsa.service";
import { Cache } from "@nestjs/cache-manager";
import { CreateCourierServiceDto } from "./dto/create-courier-service.dto";
@Injectable()
export class CourierServiceService {
  constructor(
    @Inject("CACHE_MANAGER") private cacheMangaer: Cache,
    private readonly prismaService: PrismaService
  ) {}
  async getAll() {
    let data = await this.prismaService.courierService.findMany();
    if (data && data.length > 0) {
      await this.cacheMangaer.set("data", data);
      return await this.cacheMangaer.get("data");
    } else {
      throw new Error("No data found or data are undefined");
    }
  }
  async create(@Body() dto: CreateCourierServiceDto) {
    const {
      courierType,
      name,
      description,
      mobileOne,
      mobileTwo,
      phone,
      email,
      address
    } = dto;
    let results = await this.prismaService.courierService.create({
      data: {
        courierType,
        name,
        description,
        mobileOne,
        mobileTwo,
        phone,
        email,
        address
      },
    });
  }
}
