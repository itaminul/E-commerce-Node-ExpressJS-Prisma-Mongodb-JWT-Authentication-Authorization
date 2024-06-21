import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
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

  async create(req: Request, res: Response, next: NextFunction) {
    const { udId, storeName, storeDescription, storeLocation, remarks } =
      req.body;
    try {
      const data = await prismaService.store.create({
        data: {
          udId,
          storeName,
          storeDescription,
          storeLocation,
          remarks,
        },
      });
      return data;
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const {
      udId,
      storeName,
      storeDescription,
      storeLocation,
      remarks,
      activeStatus,
    } = req.body;
    try {
      const data = await prismaService.store.update({
        where: {
          id: req.params.id,
        },
        data: {
          udId,
          storeName,
          storeDescription,
          storeLocation,
          remarks,
          activeStatus,
        },
      });
      return data;
    } catch (error) {
      next(error);
    }
  }

  async deleteStore(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await prismaService.store.delete({
        where: {
          id: req.params.id,
        },
      });
      return products;
    } catch (error) {
      next(error);
    }
  }
}
