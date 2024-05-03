import { Module } from '@nestjs/common';
import { CourierServiceService } from './courier-service.service';
import { CourierServiceController } from './courier-service.controller';

@Module({
  providers: [CourierServiceService],
  controllers: [CourierServiceController]
})
export class CourierServiceModule {}
