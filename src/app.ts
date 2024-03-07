import express from "express";
import { userRoutes } from "./controllers/routes";

const app = express();

app.listen(process.env.PORT);

app.use("/", userRoutes);
