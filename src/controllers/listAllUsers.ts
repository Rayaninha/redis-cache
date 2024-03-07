import { Request, Response } from "express";
import { PrismaUsersRepository } from "../database/prisma/prismaUsersRepository";
import { ListAllUsersService } from "../services/listAllUsers";

export async function listAllUsers(req: Request, res: Response) {
  try {
    const usersRepository = new PrismaUsersRepository();
    const service = new ListAllUsersService(usersRepository);

    const { users } = await service.execute();

    return res.json(users);
  } catch (error) {
    return res.json({
      error,
    });
  }
}
