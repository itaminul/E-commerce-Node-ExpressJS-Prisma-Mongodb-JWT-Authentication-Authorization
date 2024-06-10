import { PrismaClient } from "@prisma/client";
const prismaService = new PrismaClient();

export class ProductService {
  async getAll() {
    return await prismaService.products.findMany();
  }

  async create() {
    try {
    } catch (error) {}
  }
}
