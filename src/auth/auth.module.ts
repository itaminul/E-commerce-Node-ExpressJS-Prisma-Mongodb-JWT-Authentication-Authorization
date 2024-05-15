import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/users.service";
import { UsersModule } from "src/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma-connection/primsa.service";
import { AuthController } from './auth.controller';
import { JwtStrategyLocal } from "./jwt.strategy";

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: "30d" },
    }),
    AuthModule,
  ],
  providers: [PrismaService, UsersService, AuthService, LocalStrategy, JwtService, JwtStrategyLocal],
  controllers: [AuthController],
})
export class AuthModule {}
