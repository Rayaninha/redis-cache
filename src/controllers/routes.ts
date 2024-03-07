import { Router } from "express";
import { listAllUsers } from "./listAllUsers";

export const userRoutes = Router();

userRoutes.use("/list-all", listAllUsers);
