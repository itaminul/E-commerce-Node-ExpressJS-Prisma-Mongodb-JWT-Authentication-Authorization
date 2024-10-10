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
        orderChild, // Array of orderChild records
      } = req.body;
  
      const results = await prismaService.orderParent.update({
        where: {
          id: req.params.id, // Use the correct ID for the parent order
        },
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
            upsert: orderChild.map((child: {
              id?: string; // Optional for new children
              itemDescripton: string;
              itemQty: number;
              unitPrice: number;
              total: number;
              itemId: string;
            }) => {
              // Ensure we only use valid IDs in the where clause
              const whereClause = child.id ? { id: child.id } : undefined;
  
              return {
                where: whereClause, // Pass the where clause only if ID exists
                update: {
                  itemDescripton: child.itemDescripton,
                  itemQty: child.itemQty,
                  unitPrice: child.unitPrice,
                  total: child.total,
                },
                create: {
                  itemId: child.itemId,
                  itemDescripton: child.itemDescripton,
                  itemQty: child.itemQty,
                  unitPrice: child.unitPrice,
                  total: child.total,
                },
              };
            }).filter((item: { where: undefined; }) => item.where !== undefined), // Filter out items without a valid where clause
          },
        },
      });
  
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  }
  
  
}
