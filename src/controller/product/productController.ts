import { NextFunction, Request, Response } from "express";
import { ProductService } from "../../services/productService";
import { ValidationError, validationResult } from "express-validator";
import { isValidationError } from "../../utils/typeGuards";
const productService = new ProductService();
interface ExtractedErrors {
  [key: string]: string;
}

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
}
