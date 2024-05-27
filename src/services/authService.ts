import { PrismaClient } from "@prisma/client";

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
  async create() {
    try {
      return "create";
    } catch (error) {
      console.log("error", error);
    } finally {
      await prismaService.$disconnect;
    }
  }
  async update() {
    try {
      return "update";
    } catch (error) {
      console.log("error", error);
    } finally {
      await prismaService.$disconnect;
    }
  }
}
