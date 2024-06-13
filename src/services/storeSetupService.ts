import { PrismaClient } from "@prisma/client";
import { NextFunction } from "express";
const prismaService = new PrismaClient();

export class StoreSetupServie {
  async getAll(next: NextFunction) {
    try {
      const results = await prismaService.store.findMany({
        where: {
          activeStatus: true,
        },
      });
      return results;
    } catch (error) {
      next(error);
    }
  }
}
