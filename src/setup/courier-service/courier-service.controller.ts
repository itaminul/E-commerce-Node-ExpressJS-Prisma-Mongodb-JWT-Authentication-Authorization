import { Body, Controller, HttpStatus } from "@nestjs/common";
import { CourierServiceService } from "./courier-service.service";
import { CreateCourierServiceDto } from "./dto/create-courier-service.dto";

@Controller("courier-service")
export class CourierServiceController {
  constructor(private readonly courierService: CourierServiceService) {}
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
}
