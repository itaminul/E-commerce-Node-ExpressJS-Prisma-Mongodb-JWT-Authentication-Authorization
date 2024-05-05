import { Body, Inject, Injectable, Param } from "@nestjs/common";
import { PrismaService } from "../../prisma-connection/primsa.service";
import { Cache } from "@nestjs/cache-manager";
import { CreateCourierServiceDto } from "./dto/create-courier-service.dto";
import { UpdateCourierServiceDto } from "./dto/update-courier-service.dto";
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
    try {
      const {
        courierType,
        name,
        description,
        mobileOne,
        mobileTwo,
        phone,
        email,
        address,
      } = dto;
      if (this.prismaService && this.prismaService.courierService) {
        let results = await this.prismaService.courierService.create({
          data: {
            courierType,
            name,
            description,
            mobileOne,
            mobileTwo,
            phone,
            email,
            address,
          },
        });

        return results;
      }
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  }

  async update(@Param("id") id: string, @Body() dto: UpdateCourierServiceDto) {
    const {
      courierType,
      name,
      description,
      mobileOne,
      mobileTwo,
      phone,
      email,
      address,
      activeStatus,
    } = dto;
    let results = await this.prismaService.courierService.update({
      where: {
        id: id,
      },
      data: {
        courierType,
        name,
        description,
        mobileOne,
        mobileTwo,
        phone,
        email,
        address,
        activeStatus,
      },
    });

    return results;
  }
}
