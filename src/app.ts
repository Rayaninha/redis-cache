import express from "express";
import { userRoutes } from "./controllers/routes";

const app = express();

app.listen(3333);

app.use("/", userRoutes);
