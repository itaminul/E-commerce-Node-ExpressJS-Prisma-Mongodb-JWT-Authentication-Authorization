import { Injectable } from '@nestjs/common';
import { Role, Permission, User  } from '@prisma/client';
import { PrismaService } from 'src/prisma-connection/primsa.service';

@Injectable()
export class RoleService {
    constructor(private prisma: PrismaService) {}

    async getAllRoles(): Promise<Role[]> {
        return this.prisma.role.findMany();
      }
    
      async getAllPermissions(): Promise<Permission[]> {
        return this.prisma.permission.findMany();
      }
    
      async getPermissionsForRole(roleId: string) {
         this.prisma.role.findUnique({
          where: { id: roleId },
        });
      }
    
      async getRolesForUser(userId: string) {
         this.prisma.user.findUnique({
          where: { id: userId },
        });
      }
}
