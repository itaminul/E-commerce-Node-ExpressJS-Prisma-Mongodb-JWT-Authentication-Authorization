import { Module } from '@nestjs/common';
import { CourierServiceService } from './courier-service.service';
import { CourierServiceController } from './courier-service.controller';
import { PrismaService } from 'src/prisma-connection/primsa.service';
import { RoleService } from 'src/auth/role/role.service';

@Module({
  providers: [CourierServiceService, PrismaService, RoleService],
  controllers: [CourierServiceController]
})
export class CourierServiceModule {}
