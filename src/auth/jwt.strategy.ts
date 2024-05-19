import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private authService: AuthService,
    private configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get("JWT_SECRET"),
    });
  }

  async validate(payload: any) {
    //console.log("pay", payload)
    return {
      id: payload.sub,
      username: payload.username,
      emailAddress: payload.emailAddress,
      mobileNumber: payload.mobileNumber,
      deptId: payload.deptId,
      desigId: payload.desigId,
      roleId: payload.roleId,
      orgId: payload.orgId,
    };
  }
}
