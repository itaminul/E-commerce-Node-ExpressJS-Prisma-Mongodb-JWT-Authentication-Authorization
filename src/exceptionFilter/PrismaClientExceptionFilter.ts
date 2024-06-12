import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

function prismaClientExceptionFilter(err: any, req: Request, res: Response, next: NextFunction) {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        res.status(409).json({
          error: "A unique constraint failed",
          details: err.meta,
        });
        break;
      default:
        res.status(500).json({
          error: "An unknown error occurred",
          details: err.meta,
        });
    }
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    res.status(500).json({
      error: "An unknown error occurred",
      details: err.message,
    });
  } else if (err instanceof Prisma.PrismaClientRustPanicError) {
    res.status(500).json({
      error: "A Rust panic occurred in Prisma Client",
    });
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    res.status(500).json({
      error: "An error occurred while initializing Prisma Client",
    });
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    res.status(400).json({
      error: "Validation error",
      details: err.message,
    });
  } else {
    next(err);
  }
}

export default prismaClientExceptionFilter;
