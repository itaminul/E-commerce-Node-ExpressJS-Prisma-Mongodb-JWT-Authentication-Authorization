import { Request, Response, NextFunction } from "express";
import { StoreSetupServie } from "../../services/storeSetupService";
const storeSetupService = new StoreSetupServie();
export class StoreSetupController {
  async getAll(res: Response, next: NextFunction) {
    try {
      const reslts = await storeSetupService.getAll(next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const reslts = await storeSetupService.create(req, res, next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const reslts = await storeSetupService.update(req, res, next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }

  async deleteStore(req: Request, res: Response, next: NextFunction) {
    try {
      const reslts = await storeSetupService.deleteStore(req, res, next);
      res.json({ success: true, reslts });
    } catch (error) {
      next(error);
    }
  }
}
