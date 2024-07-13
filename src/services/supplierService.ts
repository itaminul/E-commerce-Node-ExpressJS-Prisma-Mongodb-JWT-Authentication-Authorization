import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
const prismaService = new PrismaClient();
export class SupplierService {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const results = await prismaService.supplier.findMany({
      where: {
        activeStatus: true,
      },
    });
    return results;
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

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        supplierName,
        supplierDescription,
        countryId,
        orgId,
        activeStatus,
      } = req.body;
      const ifExist = await prismaService.supplier.findFirst({
        where: {
          id: req.params.id,
        },
      });

      if (!ifExist) {
      }

      const results = await prismaService.supplier.update({
        where: {
          id: req.params.id,
        },
        data: {
          supplierName,
          supplierDescription,
          countryId,
          orgId,
          activeStatus,
        },
      });
      return results;
    } catch (error) {
      next(error);
    }
  }

  async deleteSupplier(req: Request, res: Response, next: NextFunction) {
    try {
      const ifExist = await prismaService.supplier.findFirst({
        where: {
          id: req.params.id,
        },
      });

      if (!ifExist) {
      }

      const results = await prismaService.supplier.delete({
        where: {
          id: req.params.id,
        },
      });
      return results;
    } catch (error) {
      next(error);
    }
  }
}
