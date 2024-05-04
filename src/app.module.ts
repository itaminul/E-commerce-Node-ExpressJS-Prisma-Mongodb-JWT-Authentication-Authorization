import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CourierServiceModule } from "./setup/courier-service/courier-service.module";
import { PrismaService } from "./prisma-connection/primsa.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    CourierServiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
