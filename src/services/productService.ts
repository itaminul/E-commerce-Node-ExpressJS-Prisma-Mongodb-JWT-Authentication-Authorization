import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
const prismaService = new PrismaClient();

export class ProductService {
  async getAll() {
    return await prismaService.products.findMany();
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        storeId,
        productName,
        productDescription,
        categoryId,
        subCategoryId,
        image,
        latestProduct,
        productShow,
        offer,
        specialDiscount,
        productSlNo,
        productPrice,
        currentPrice,
        maufacturerBy,
        manufactureDate,
        warenty,
      } = req.body;
      const products = await prismaService.products.create({
        data: {
          storeId,
          productName,
          productDescription,
          categoryId,
          subCategoryId,
          image,
          latestProduct,
          productShow,
          offer,
          specialDiscount,
          productSlNo,
          productPrice,
          currentPrice,
          maufacturerBy,
          manufactureDate,
          warenty,
        },
      });
      return products;
    } catch (error) {
      next(error);
    }
  }
}
