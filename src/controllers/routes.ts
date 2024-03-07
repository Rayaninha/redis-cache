import { Router } from "express";
import { listAllUsers } from "./listAllUsers";

export const userRoutes = Router();

userRoutes.route("/list-all").get(listAllUsers);
