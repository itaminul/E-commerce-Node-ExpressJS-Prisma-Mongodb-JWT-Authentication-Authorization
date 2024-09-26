import { NextFunction, Request, Response } from "express";
import { OrderServices } from "../services/orderServices";

const orderService = new OrderServices();
export class OrderController {
  async create(req: Request, res: Response, next: NextFunction) {
    return await orderService.create(req, res, next);
  }
}
