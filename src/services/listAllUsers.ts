import { User } from "@prisma/client";
import { UsersRepository } from "../database/usersRepository";
import redis from "../lib/cache";

interface ListAllUsersServiceResponse {
  users: User[];
}

export class ListAllUsersService {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<ListAllUsersServiceResponse> {
    const cacheKey = "users:listAll";
    let users: User[];

    const cachedUsers = await redis.get(cacheKey);
    console.time("find users");

    if (cachedUsers) {
      console.timeEnd("find users");
      users = await JSON.parse(cachedUsers);
    }

    users = await this.usersRepository.listAll();

    await redis.set(cacheKey, JSON.stringify(users));

    return { users };
  }
}
