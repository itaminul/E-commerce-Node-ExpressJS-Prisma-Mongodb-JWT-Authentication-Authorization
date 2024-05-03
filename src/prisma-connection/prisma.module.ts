import { Module } from "@nestjs/common";
import { PrismaService } from "./primsa.service";

@Module({
  providers: [PrismaService],
})
export class DatabaseModule {}
