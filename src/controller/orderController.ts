import { NextFunction, Request, Response } from "express";
import { OrderServices } from "../services/orderServices";
import { validationResult } from "express-validator";

const orderService = new OrderServices();
export class OrderController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const results = await orderService.getAll(req, res, next);
    res.json({ success: true, results });
  }
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: true,
          errors: errors.array(),
        });
      }

      const results = await orderService.create(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const orderId = req.params.id;
      await orderService.checkId(orderId, req, res, next);

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: true,
          errors: errors.array(),
        });
      }

      const results = await orderService.update(req, res, next);
      res.json({ success: true, results });
    } catch (error) {
      next(error);
    }
  }
}
