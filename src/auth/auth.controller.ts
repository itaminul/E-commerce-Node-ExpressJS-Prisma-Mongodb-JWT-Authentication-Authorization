import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma-connection/primsa.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly prismaService: PrismaService) {}

  @Post("/register")
  async create(@Body() body: { email: string; password: string }) {
    try {
      const results = await this.authService.register(
        body.email,
        body.password
      );
      return {
        success: true,
        status: HttpStatus.OK,
        results,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  @Post("login")
  async login(@Body() body: { email: string; password: string }) {
    try {
      const user = await this.prismaService.user.findFirst({
        where: {
            email: body.email,
            // password: body.password
        }
      })
      console.log("user user", user);
      if (!user) {
        throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
      }
      const token = await this.authService.login(user);
    // return { access_token: token };
   //   return this.authService.login(user);
      return {
        success: true,
        status: HttpStatus.OK,
        token,
      };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}
