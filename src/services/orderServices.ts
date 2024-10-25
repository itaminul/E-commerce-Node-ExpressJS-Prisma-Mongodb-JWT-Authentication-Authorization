import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextFunction, Request, Response } from "express";
const prismaService = new PrismaClient();
export class OrderServices {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      return await prismaService.orderParent.findMany({
        select: {
          id: true,
          orderChild: {
            select: {
              id: true,
              itemId: true,
              itemDescripton: true,
              itemQty: true,
              orderId: true,
              products: {
                select: {
                  productName: true,
                  productDescription: true,
                  productPrice: true,
                },
              },
            },
          },
        },
      });
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
          orderStatus: 1,
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

  async update(req: Request, res: Response, next: NextFunction) {
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
            deleteMany: {},
            createMany: {
              data: orderChild.map(
                (child: {
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
                })
              ),
            },
          },
        },
        include: {
          orderChild: true,
        },
      });

      res.status(200).json(updatedOrder);
    } catch (error) {
      next(error);
    }
  }

  async checkId(
    orderId: string,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orderIdCheck = await prismaService.orderParent.findUnique({
        where: {
          id: orderId,
        },
      });

      if (!orderIdCheck) {
        res.json(`This order ID is invalid!`);
      }
    } catch (error) {
      next(error);
    }
  }
}
