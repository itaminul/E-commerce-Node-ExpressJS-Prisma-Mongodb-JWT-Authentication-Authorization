import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { RoleService } from "./role/role.service";
import { Permission } from "@prisma/client";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly roleService: RoleService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userId = "1";
    const userRoles = await this.roleService.getRolesForUser(userId);
    const allPermissions: Permission[] = [];
    for (const role of userRoles) {
      const permissions = await this.roleService.getPermissionsForRole(role.id);
      allPermissions.push(...permissions);
    }
  }
}
