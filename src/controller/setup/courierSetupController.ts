import { NextFunction, Request, Response } from "express";
import { CourierSetupService } from "../../services/courierSetupService";
const courierSetupService = new CourierSetupService();
export class CourierSetupController {
  async getAll(res: Response, next: NextFunction) {
    try {
      const reslts = await courierSetupService.getAll(res, next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const reslts = await courierSetupService.create(req, res, next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const reslts = await courierSetupService.update(req, res, next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }

  async deleteCourier(req: Request, res: Response, next: NextFunction) {
    try {
      const reslts = await courierSetupService.deleteCourier(req, res, next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }
}
