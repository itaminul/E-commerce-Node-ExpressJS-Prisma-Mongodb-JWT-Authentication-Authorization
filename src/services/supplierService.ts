import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
const prismaService = new PrismaClient();
export class SupplierService {
  async getAll() {
    return await prismaService.supplier.findMany({
      where: {
        activeStatus: true,
      },
    });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { supplierName, supplierDescription, countryId, orgId } = req.body;
      const results = await prismaService.supplier.create({
        data: {
          supplierName,
          supplierDescription,
          countryId,
          orgId,
        },
      });
      return results;
    } catch (error) {
      next(error);
    }
  }
}
