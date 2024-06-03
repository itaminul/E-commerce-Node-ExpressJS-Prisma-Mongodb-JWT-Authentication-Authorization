import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET } from '../config'
const prismaService = new PrismaClient();
export class AuthService {
  async getAll() {
    try {
      return "get all";
    } catch (error) {
      console.log("error", error);
    } finally {
      await prismaService.$disconnect;
    }
  }
  async register(req: Request, res: Response) {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = await prismaService.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      res.status(201).json({ message: "User register successfully", user });
    } catch (error) {
      res.status(400).json({ error: "User already exists" });
    } finally {
      await prismaService.$disconnect;
    }
  }
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  
    const token = jwt.sign({ username: user.id }, JWT_ACCESS_SECRET, { expiresIn: '1h' });
  
    res.json({ token });

    }
  
}
