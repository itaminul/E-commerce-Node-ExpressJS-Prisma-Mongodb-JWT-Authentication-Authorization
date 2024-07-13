import { NextFunction, Request, Response } from "express";
import { SupplierService } from "../../services/supplierService";
const supplierService = new SupplierService();
export class SupplierSetupController {
  async getAll() {
    return await supplierService.getAll();
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await supplierService.create(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await supplierService.update(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }
}
