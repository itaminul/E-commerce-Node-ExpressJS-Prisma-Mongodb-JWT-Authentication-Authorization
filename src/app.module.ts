import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CourierServiceModule } from "./setup/courier-service/courier-service.module";
import { PrismaService } from "./prisma-connection/primsa.service";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { redisStore } from "cache-manager-redis-yet";
import { RoleService } from './auth/role/role.service';
import { AuthMiddleware } from "./auth/auth.middleware";
import { CourierServiceController } from "./setup/courier-service/courier-service.controller";
import { CastModule } from './cast/cast.module';

@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => ({
        store: await redisStore({
          socket: {
            host: "localhost",
            port: 6379,
          },
        }),
      }),
    }),
    CourierServiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CastModule,
  ],
  controllers: [],
  providers: [PrismaService, RoleService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(CourierServiceController); // Specify the route(s) where you want to apply the middleware
  }
}
