import express from "express";
import UserController from "./controllers/user";

const app = express();

app.listen(3333);

app.get("/", (req, res) =>
  res.send({
    ok: 200,
  })
);

app.get("/users", UserController.find);
