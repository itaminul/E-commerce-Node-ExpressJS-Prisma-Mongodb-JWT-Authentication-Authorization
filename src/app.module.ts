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
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthService } from "./auth/auth.service";
import { UsersService } from "./users/users.service";
import { JwtService } from "@nestjs/jwt";

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
    AuthModule,
    UsersModule
  ],
  controllers: [],
  providers: [PrismaService, RoleService, AuthService, UsersService, JwtService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(CourierServiceController); // Specify the route(s) where you want to apply the middleware
  }
}
