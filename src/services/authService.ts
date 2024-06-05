import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET } from "../config";
import generateToken from "../utils/generateToken";
const prismaService = new PrismaClient();

interface User {
  username: string;
  password: string;
  role: string; // Add role field
}

const users: User[] = [];
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
  async register(req: Request, res: Response, next: NextFunction) {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      username,
      password: hashedPassword,
      role,
    });

    const isUserAllReadyExist = await prismaService.user.findFirst({
      where: {
        username,
      },
    });

    if (isUserAllReadyExist) {
      res.json({
        success: true,
        message: "User Already Exist",
        isUserAllReadyExist,
      });
    }

    try {
      const user = await prismaService.user.create({
        data: {
          username,
          password: hashedPassword,
          role,
        },
      });
      res.status(201).json({ message: "User register successfully", user });
    } catch (error) {
      res.status(400).json({ error: "User already exists" });
    } finally {
      await prismaService.$disconnect;
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body;
    const user = await prismaService.user.findUnique({
      where: {
        username,
      },
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const token = generateToken(user.id, user.role);
    res.json({
      userId: user.id,
      userName: user.username,
      email: user.email,
      userRole: user.role,
      department: user.deptId,
      designation: user.desigId,
      organization: user.orgId,
      token,
    });
  }
}
