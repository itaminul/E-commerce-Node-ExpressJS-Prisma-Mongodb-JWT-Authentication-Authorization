import { PrismaClient, User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET } from '../config'
const prismaService = new PrismaClient();

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
    const { username,password, roleId } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({
      username, password: hashedPassword, roleId,
      id: "",
      email: null,
      phoneNumber: null,
      mobileNumber: null,
      emailAddress: null,
      deptId: null,
      desigId: null,
      orgId: null,
      companyId: null,
      activeStatus: false,
      createdDate: null,
      createdTime: null,
      createdBy: null,
      createdAt: null,
      updatedDate: null,
      updatedTime: null,
      updatedAt: null,
      twoFA: false,
      isPhoneVerified: false
    });
    try {
      const user = await prismaService.user.create({
        data: {
          username,
          password: hashedPassword,
          roleId
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
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    const token = jwt.sign({ username: user.id }, JWT_ACCESS_SECRET, { expiresIn: '1h' });
  
    res.json({ token });

    }
  
}
