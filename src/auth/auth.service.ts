import {
  HttpException,
  HttpStatus,
  Injectable,
  NotAcceptableException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { PrismaService } from "src/prisma-connection/primsa.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { compare } from "bcrypt";
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prismaService.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log("user", user);
    const passwordValid = await bcrypt.compare(pass, user.password);

    if (!user) {
      throw new NotAcceptableException("Cound not find the user");
    }
    if (user && passwordValid) {
      return {
        // userId: user.id,
        userName: user.email,
        // userEmail: user.emailAddress,
        // userMobile: user.mobileNumber,
        // userRoleId: user.roleId,
        //userOrgId: user.orgId
      };
    }

    return null;
  }

  async login(user: any): Promise<string> {
    const checkUserExists = await this.prismaService.user.findUnique({
      where: {
        email: user.email
      },
    });
    if (!checkUserExists) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
    const checkPassword = await compare(
      user.password,
      checkUserExists.password
    );

    delete checkUserExists.password;
    if (checkPassword) {
      const accessToken = this.generateJWT({
        sub: checkUserExists.id,
        username: checkUserExists.email,
        emailAddress: checkUserExists.emailAddress,
        mobileNumber: checkUserExists.mobileNumber,
        deptId: checkUserExists.deptId,
        desigId: checkUserExists.desigId,
        roleId: checkUserExists.roleId,
        orgId: checkUserExists.orgId,
      });

      return accessToken;
    } else {
      throw new HttpException(
        "User or password not match",
        HttpStatus.UNAUTHORIZED
      );
    }
  }

  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: this.configService.get("JWT_SECRET"),
      expiresIn: this.configService.get("expired"),
    });
  }
}
