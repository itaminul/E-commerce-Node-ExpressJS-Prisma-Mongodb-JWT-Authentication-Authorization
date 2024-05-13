import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { CourierServiceService } from "./courier-service.service";
import { CreateCourierServiceDto } from "./dto/create-courier-service.dto";
import { UpdateCourierServiceDto } from "./dto/update-courier-service.dto";
import { AuthMiddleware } from "src/auth/auth.middleware";
import { AuthGuard } from "@nestjs/passport";

@Controller("courier-service")
export class CourierServiceController {
  constructor(private readonly courierService: CourierServiceService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAll() {
    try {
      const results = await this.courierService.getAll();
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Post()
  async create(@Body() dto: CreateCourierServiceDto) {
    try {
      const results = await this.courierService.create(dto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
  @Patch(":/id")
  async update(@Param("id") id: string, @Body() dto: UpdateCourierServiceDto) {
    try {
      const results = await this.courierService.update(id, dto);
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
