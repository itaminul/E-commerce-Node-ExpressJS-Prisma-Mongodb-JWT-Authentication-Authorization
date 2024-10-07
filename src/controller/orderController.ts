import { NextFunction, Request, Response } from "express";
import { OrderServices } from "../services/orderServices";

const orderService = new OrderServices();
export class OrderController {
  async create(req: Request, res: Response, next: NextFunction) {
    const results = await orderService.create(req, res, next);
    res.json({ success: true, results });
  }

  async update(req: Request, res: Response, next: NextFunction) {
   try {
    const results = await orderService.update(req, res, next);
    res.json({ success: true, results });
   } catch (error) {
    next(error);
   }
  }
}
