import { NextFunction, Request, Response } from "express";
import { ProductService } from "../../services/productService";
import { validationResult } from "express-validator";
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
  async create(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    try {
      const results = await productService.create(req, res, next);
      res.json({ message: results });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    try {
      const results = await productService.update(req, res, next);
      res.json({ message: results });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await productService.create(req, res, next);
      res.json({ message: results });
    } catch (error) {
      next(error);
    }
  }
}
