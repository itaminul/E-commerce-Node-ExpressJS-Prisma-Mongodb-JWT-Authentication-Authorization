import { Module } from '@nestjs/common';
import { CourierServiceService } from './courier-service.service';
import { CourierServiceController } from './courier-service.controller';
import { PrismaService } from 'src/prisma-connection/primsa.service';

@Module({
  providers: [CourierServiceService, PrismaService],
  controllers: [CourierServiceController]
})
export class CourierServiceModule {}
