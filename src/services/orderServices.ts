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
        orderChild,
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
          orderChild: {
            create: orderChild,
          },
        },
      });
      return order;
    } catch (error) {
      next(error);
    }
  }

   async  update(req: Request, res: Response, next: NextFunction) {
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
        orderChild,
      } = req.body;
  
      const orderId = req.params.id;
  
      const updatedOrder = await prismaService.orderParent.update({
        where: { id: orderId },
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
          orderChild: {
            deleteMany: {}, // This will remove all existing child records
            createMany: {
              data: orderChild.map((child: {
                itemDescripton: string;
                itemQty: number;
                unitPrice: number;
                total: number;
                itemId: string;
              }) => ({
                itemId: child.itemId,
                itemDescripton: child.itemDescripton,
                itemQty: child.itemQty,
                unitPrice: child.unitPrice,
                total: child.total,
              })),
            },
          },
        },
        include: {
          orderChild: true, // Include the updated child records in the response
        },
      });
  
      res.status(200).json(updatedOrder);
    } catch (error) {
      next(error);
    }
  }
}
