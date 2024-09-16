import { NextFunction, Request, Response } from "express";
import { SupplierService } from "../../services/supplierService";
import { validationResult } from "express-validator";
const supplierService = new SupplierService();
export class SupplierSetupController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await supplierService.getAll(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }

      const results = await supplierService.create(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array(),
        });
      }
      const results = await supplierService.update(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }

  async deleteSupplier(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await supplierService.deleteSupplier(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }
}
