import express from "express";

import dotenv from "dotenv";
import olympicsRouter from "./routers/olympicsRouter.js";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/olympics", olympicsRouter);

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server start at port ${port}`);
});
