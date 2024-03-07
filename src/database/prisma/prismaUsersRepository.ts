import { PrismaClient } from "@prisma/client";
import { UsersRepository } from "../usersRepository";

const prisma = new PrismaClient();

export class PrismaUsersRepository implements UsersRepository {
  async listAll() {
    const result = await prisma.user.findMany();

    return result;
  }
}
