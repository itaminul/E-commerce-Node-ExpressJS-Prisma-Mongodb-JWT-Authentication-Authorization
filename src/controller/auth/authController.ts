import { NextFunction, Request, Response } from "express";
import { AuthService } from "../../services/authService";
import { UserLogin } from "./userLoginType";
const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await authService.register(req, res, next);
      return results;
    } catch (error) {
      // res.status(500).json({ error: 'Internal Server Error' });
      res.json({ message: error });
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const results = await authService.login(req, res, next);
      return results;
    } catch (error) {
      // res.status(500).json({ error: 'Internal Server Error' });
      res.json({ message: error });
    }
  }
  async check(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("result");
    } catch (error) {
      res.json({ message: error });
    }
  }
}
