import { PrismaClient } from "@prisma/client";

// Next js Hot Reload 때문에 이렇게 작성
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
