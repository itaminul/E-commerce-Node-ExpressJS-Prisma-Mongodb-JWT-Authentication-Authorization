import { NextFunction, Request, Response } from "express";
import { ProductService } from "../../services/productService";
const productService = new ProductService();
export class ProductController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await productService.getAll();
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }
}
