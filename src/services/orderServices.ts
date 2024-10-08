import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
const prismaService = new PrismaClient();
export class OrderServices {
  async getAll(next: NextFunction) {
    try {
      return await prismaService.orderParent.findMany();
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        orderNo,
        orderDate,
        deliveryDate,
        orderType,
        orderBy,
        shipType,
        paymentType,
        shippingAddress,
        phoneNumber,
        postalCode,
        orderStatus,
        orderChild
      } = req.body;

      const order = await prismaService.orderParent.create({
        data: {
          orderNo,
          orderDate,
          deliveryDate,
          orderType,
          orderBy,
          shipType,
          paymentType,
          shippingAddress,
          phoneNumber,
          postalCode,
          orderStatus,
          orderChild
        },
      });
      return order;
    } catch (error) {}
  }
}
