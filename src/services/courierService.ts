import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
const prismaService = new PrismaClient();
export class CourierService {
  async getAll(next: NextFunction) {
    try {
      const results = await prismaService.courierService.findMany({
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
    try {
      const {
        name,
        description,
        address,
        phone,
        mobileOne,
        mobileTwo,
        email,
        courierType,
      } = req.body;
      const results = await prismaService.courierService.create({
        data: {
          name,
          description,
          address,
          phone,
          mobileOne,
          mobileTwo,
          email,
          courierType,
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
        name,
        description,
        address,
        phone,
        mobileOne,
        mobileTwo,
        email,
        courierType,
        activeStatus,
      } = req.body;
      const results = await prismaService.courierService.update({
        where: {
          id: req.params.id,
        },
        data: {
          name,
          description,
          address,
          phone,
          mobileOne,
          mobileTwo,
          email,
          courierType,
          activeStatus,
        },
      });

      return results;
    } catch (error) {
      next(error);
    }
  }
  async deleteCourier(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        description,
        address,
        phone,
        mobileOne,
        mobileTwo,
        email,
        courierType,
        activeStatus,
      } = req.body;
      const results = await prismaService.courierService.delete({
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
