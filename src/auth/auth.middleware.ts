// auth.middleware.ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { RoleService } from "./role/role.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly roleService: RoleService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const userId : { id: string; }[]  = [
      {
         id: "663894bd8898fca00bff889c"
      }
    ]; // Assuming you have already implemented user authentication
    const userRoles = await this.roleService.getRolesForUser(userId);

    // Fetch permissions for each role assigned to the user
    const allPermissions: string[] = [];
    for (const role of userRoles) {
      const permissions = await this.roleService.getPermissionsForRole(role.id);
      permissions.forEach((permission) => allPermissions.push(permission.name));
    }

    // Implement your authorization logic using fetched permissions
    // For example, you can check if the user has a specific permission to access a resource
    if (allPermissions.includes("read_resource")) {
      next();
    } else {
      res.status(403).json({ message: "Forbidden" });
    }
  }
}
