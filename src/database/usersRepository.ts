import { User } from "@prisma/client";

export interface UsersRepository {
  listAll(): Promise<User[]>;
}
