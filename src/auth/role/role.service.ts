import { Injectable } from "@nestjs/common";
import { Permission, User, UserRole } from "@prisma/client";
import { PrismaService } from "src/prisma-connection/primsa.service";

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async getAllRoles(): Promise<UserRole[]> {
    return this.prisma.userRole.findMany();
  }

  async getAllPermissions(): Promise<Permission[]> {
    return this.prisma.permission.findMany();
  }

  async getPermissionsForRole(roleId: string): Promise<Permission[]> {
    return this.prisma.userRole
      .findUnique({
        where: { id: roleId },
      })
      .permission();
  }

  async getRolesForUser(userId: string): Promise<UserRole[]> {
    const results = this.prisma.user
      .findUnique({
        where: { id: userId },
      })
      .UserRole();
    return results;
  }
}
